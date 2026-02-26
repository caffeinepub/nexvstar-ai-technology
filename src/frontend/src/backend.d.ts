import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Lead {
    id: bigint;
    source: string;
    name: string;
    email: string;
    company: string;
    message: string;
    timestamp: bigint;
    phone: string;
}
export interface Testimonial {
    id: bigint;
    clientName: string;
    role: string;
    quote: string;
    company: string;
    avatarUrl: string;
    rating: bigint;
}
export interface BlogPost {
    id: bigint;
    title: string;
    content: string;
    date: bigint;
    tags: Array<string>;
    author: string;
    summary: string;
    imageUrl: string;
    category: string;
}
export interface Subscriber {
    status: SubscriberStatus;
    email: string;
    timestamp: bigint;
}
export interface DemoRequest {
    id: bigint;
    status: DemoRequestStatus;
    name: string;
    email: string;
    company: string;
    message: string;
    preferredDate: bigint;
    timestamp: bigint;
    phone: string;
}
export interface UserProfile {
    name: string;
    email: string;
    company: string;
}
export enum DemoRequestStatus {
    scheduled = "scheduled",
    pending = "pending",
    completed = "completed"
}
export enum SubscriberStatus {
    active = "active",
    unsubscribed = "unsubscribed"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    addLead(name: string, email: string, company: string, phone: string, message: string, source: string): Promise<bigint>;
    addTestimonial(clientName: string, company: string, role: string, quote: string, rating: bigint, avatarUrl: string): Promise<bigint>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    createBlogPost(title: string, summary: string, content: string, author: string, category: string, imageUrl: string, tags: Array<string>): Promise<bigint>;
    deleteBlogPost(id: bigint): Promise<void>;
    getBlogPost(id: bigint): Promise<BlogPost | null>;
    getBlogPosts(): Promise<Array<BlogPost>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getDemoRequests(): Promise<Array<DemoRequest>>;
    getLeads(): Promise<Array<Lead>>;
    getSubscribers(): Promise<Array<Subscriber>>;
    getTestimonials(): Promise<Array<Testimonial>>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    submitDemoRequest(name: string, email: string, company: string, phone: string, preferredDate: bigint, message: string): Promise<bigint>;
    subscribe(email: string): Promise<void>;
    unsubscribe(email: string): Promise<void>;
    updateBlogPost(id: bigint, title: string, summary: string, content: string, author: string, category: string, imageUrl: string, tags: Array<string>): Promise<void>;
    updateDemoRequestStatus(id: bigint, status: DemoRequestStatus): Promise<void>;
}
