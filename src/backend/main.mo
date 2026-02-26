import Iter "mo:core/Iter";
import Array "mo:core/Array";
import Map "mo:core/Map";
import Order "mo:core/Order";
import List "mo:core/List";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";
import Principal "mo:core/Principal";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  type Lead = {
    id : Nat;
    name : Text;
    email : Text;
    company : Text;
    phone : Text;
    message : Text;
    timestamp : Int;
    source : Text;
  };

  type Subscriber = {
    email : Text;
    timestamp : Int;
    status : SubscriberStatus;
  };

  type SubscriberStatus = {
    #active;
    #unsubscribed;
  };

  type BlogPost = {
    id : Nat;
    title : Text;
    summary : Text;
    content : Text;
    author : Text;
    category : Text;
    date : Int;
    imageUrl : Text;
    tags : [Text];
  };

  type Testimonial = {
    id : Nat;
    clientName : Text;
    company : Text;
    role : Text;
    quote : Text;
    rating : Nat;
    avatarUrl : Text;
  };

  type DemoRequest = {
    id : Nat;
    name : Text;
    email : Text;
    company : Text;
    phone : Text;
    preferredDate : Int;
    message : Text;
    timestamp : Int;
    status : DemoRequestStatus;
  };

  type DemoRequestStatus = {
    #pending;
    #scheduled;
    #completed;
  };

  public type UserProfile = {
    name : Text;
    email : Text;
    company : Text;
  };

  module Lead {
    public func compare(lead1 : Lead, lead2 : Lead) : Order.Order {
      compareByTimestamp(lead1, lead2);
    };
    public func compareByTimestamp(lead1 : Lead, lead2 : Lead) : Order.Order {
      Int.compare(lead1.timestamp, lead2.timestamp);
    };
  };

  module BlogPost {
    public func compare(blogPost1 : BlogPost, blogPost2 : BlogPost) : Order.Order {
      compareByDate(blogPost1, blogPost2);
    };
    public func compareByDate(blogPost1 : BlogPost, blogPost2 : BlogPost) : Order.Order {
      Int.compare(blogPost1.date, blogPost2.date);
    };
  };

  module Testimonial {
    public func compare(testimonial1 : Testimonial, testimonial2 : Testimonial) : Order.Order {
      Text.compare(testimonial1.clientName, testimonial2.clientName);
    };
    public func compareByRating(testimonial1 : Testimonial, testimonial2 : Testimonial) : Order.Order {
      Nat.compare(testimonial1.rating, testimonial2.rating);
    };
  };

  module DemoRequest {
    public func compare(demoRequest1 : DemoRequest, demoRequest2 : DemoRequest) : Order.Order {
      Int.compare(demoRequest1.timestamp, demoRequest2.timestamp);
    };
  };

  // Persistent State
  let leads = Map.empty<Nat, Lead>();
  let subscribers = Map.empty<Text, Subscriber>();
  let blogPosts = Map.empty<Nat, BlogPost>();
  let testimonials = Map.empty<Nat, Testimonial>();
  let demoRequests = Map.empty<Nat, DemoRequest>();
  let userProfiles = Map.empty<Principal, UserProfile>();

  var nextLeadId = 1;
  var nextBlogPostId = 1;
  var nextTestimonialId = 1;
  var nextDemoRequestId = 1;

  // Authorization System
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // User Profile Management
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Leads
  public query ({ caller }) func getLeads() : async [Lead] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view leads.");
    };
    leads.values().toArray();
  };

  public shared ({ caller }) func addLead(name : Text, email : Text, company : Text, phone : Text, message : Text, source : Text) : async Nat {
    let newLead : Lead = {
      id = nextLeadId;
      name;
      email;
      company;
      phone;
      message;
      timestamp = Time.now();
      source;
    };

    leads.add(nextLeadId, newLead);
    nextLeadId += 1;
    newLead.id;
  };

  // Newsletter Subscriptions
  public shared ({ caller }) func subscribe(email : Text) : async () {
    let subscriber : Subscriber = {
      email;
      timestamp = Time.now();
      status = #active;
    };

    subscribers.add(email, subscriber);
  };

  public query ({ caller }) func getSubscribers() : async [Subscriber] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view subscribers.");
    };
    subscribers.values().toArray();
  };

  public shared ({ caller }) func unsubscribe(email : Text) : async () {
    switch (subscribers.get(email)) {
      case (null) { Runtime.trap("Subscriber not found") };
      case (?subscriber) {
        let updatedSubscriber : Subscriber = {
          email = subscriber.email;
          timestamp = subscriber.timestamp;
          status = #unsubscribed;
        };
        subscribers.add(email, updatedSubscriber);
      };
    };
  };

  // Blog Posts
  public query ({ caller }) func getBlogPosts() : async [BlogPost] {
    blogPosts.values().toArray();
  };

  public query ({ caller }) func getBlogPost(id : Nat) : async ?BlogPost {
    blogPosts.get(id);
  };

  public shared ({ caller }) func createBlogPost(title : Text, summary : Text, content : Text, author : Text, category : Text, imageUrl : Text, tags : [Text]) : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can create blog posts.");
    };

    let newBlogPost : BlogPost = {
      id = nextBlogPostId;
      title;
      summary;
      content;
      author;
      category;
      date = Time.now();
      imageUrl;
      tags;
    };

    blogPosts.add(nextBlogPostId, newBlogPost);
    nextBlogPostId += 1;
    newBlogPost.id;
  };

  public shared ({ caller }) func updateBlogPost(id : Nat, title : Text, summary : Text, content : Text, author : Text, category : Text, imageUrl : Text, tags : [Text]) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can update blog posts.");
    };

    switch (blogPosts.get(id)) {
      case (null) { Runtime.trap("Blog post not found") };
      case (?_) {
        let updatedBlogPost : BlogPost = {
          id;
          title;
          summary;
          content;
          author;
          category;
          date = Time.now();
          imageUrl;
          tags;
        };
        blogPosts.add(id, updatedBlogPost);
      };
    };
  };

  public shared ({ caller }) func deleteBlogPost(id : Nat) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can delete blog posts.");
    };

    if (not blogPosts.containsKey(id)) {
      Runtime.trap("Blog post not found");
    };
    blogPosts.remove(id);
  };

  // Testimonials
  public query ({ caller }) func getTestimonials() : async [Testimonial] {
    testimonials.values().toArray();
  };

  public shared ({ caller }) func addTestimonial(clientName : Text, company : Text, role : Text, quote : Text, rating : Nat, avatarUrl : Text) : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can add testimonials.");
    };

    let newTestimonial : Testimonial = {
      id = nextTestimonialId;
      clientName;
      company;
      role;
      quote;
      rating;
      avatarUrl;
    };

    testimonials.add(nextTestimonialId, newTestimonial);
    nextTestimonialId += 1;
    newTestimonial.id;
  };

  // Demo Requests
  public shared ({ caller }) func submitDemoRequest(name : Text, email : Text, company : Text, phone : Text, preferredDate : Int, message : Text) : async Nat {
    let newDemoRequest : DemoRequest = {
      id = nextDemoRequestId;
      name;
      email;
      company;
      phone;
      preferredDate;
      message;
      timestamp = Time.now();
      status = #pending;
    };

    demoRequests.add(nextDemoRequestId, newDemoRequest);
    nextDemoRequestId += 1;
    newDemoRequest.id;
  };

  public query ({ caller }) func getDemoRequests() : async [DemoRequest] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view demo requests.");
    };
    demoRequests.values().toArray();
  };

  public shared ({ caller }) func updateDemoRequestStatus(id : Nat, status : DemoRequestStatus) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can update demo request status.");
    };

    switch (demoRequests.get(id)) {
      case (null) { Runtime.trap("Demo request not found") };
      case (?demoRequest) {
        let updatedDemoRequest : DemoRequest = {
          id = demoRequest.id;
          name = demoRequest.name;
          email = demoRequest.email;
          company = demoRequest.company;
          phone = demoRequest.phone;
          preferredDate = demoRequest.preferredDate;
          message = demoRequest.message;
          timestamp = demoRequest.timestamp;
          status;
        };
        demoRequests.add(id, updatedDemoRequest);
      };
    };
  };
};
