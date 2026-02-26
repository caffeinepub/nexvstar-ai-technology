import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { TrendingUp, Users, DollarSign, Target, Brain, ArrowUp, AlertCircle } from "lucide-react";

// Mock data
const revenueData = [
  { month: "Aug", actual: 28, forecast: 30 },
  { month: "Sep", actual: 34, forecast: 35 },
  { month: "Oct", actual: 38, forecast: 40 },
  { month: "Nov", actual: 42, forecast: 43 },
  { month: "Dec", actual: 45, forecast: 47 },
  { month: "Jan", actual: 45, forecast: 52 },
];

const leadSourceData = [
  { name: "Website Forms", value: 38, color: "#1F3A93" },
  { name: "LinkedIn", value: 28, color: "#6C63FF" },
  { name: "Email", value: 20, color: "#0EA5E9" },
  { name: "Referrals", value: 14, color: "#10B981" },
];

const monthlyRevenueBar = [
  { month: "Aug", revenue: 28, target: 32 },
  { month: "Sep", revenue: 34, target: 36 },
  { month: "Oct", revenue: 38, target: 40 },
  { month: "Nov", revenue: 42, target: 44 },
  { month: "Dec", revenue: 45, target: 46 },
  { month: "Jan (F)", revenue: 52, target: 50 },
];

const mockLeads = [
  { id: "L001", name: "Arjun Technologies", contact: "Ravi Arjun", email: "ravi@arjuntech.in", score: 87, status: "Hot", value: "₹8.5L", source: "LinkedIn" },
  { id: "L002", name: "Precision Mfg Ltd", contact: "Suresh Iyer", email: "suresh@precisionmfg.com", score: 74, status: "Hot", value: "₹15L", source: "Website" },
  { id: "L003", name: "CloudSync Solutions", contact: "Meena Patel", email: "meena@cloudsync.io", score: 61, status: "Warm", value: "₹4.2L", source: "Email" },
  { id: "L004", name: "Delta Retail Group", contact: "Vikram Shah", email: "vikram@deltaretail.com", score: 55, status: "Warm", value: "₹6.8L", source: "Referral" },
  { id: "L005", name: "NextGen Finance", contact: "Anita Rao", email: "anita@nextgenfinance.in", score: 43, status: "Warm", value: "₹12L", source: "LinkedIn" },
  { id: "L006", name: "Kalyan Logistics", contact: "Ramesh Das", email: "ramesh@kalyanlog.com", score: 28, status: "Cold", value: "₹2.1L", source: "Website" },
  { id: "L007", name: "Stellar IT Services", contact: "Priya Joshi", email: "priya@stellarit.com", score: 91, status: "Hot", value: "₹22L", source: "LinkedIn" },
  { id: "L008", name: "Omega Healthcare", contact: "Dr. Amit Nair", email: "amit@omegahc.in", score: 67, status: "Warm", value: "₹9.5L", source: "Email" },
];

const insights = [
  {
    type: "opportunity",
    icon: TrendingUp,
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-200",
    title: "High-Opportunity Segment Alert",
    description: "Manufacturing sector leads have 68% higher close rates this week. Increase follow-up frequency for 12 pending Manufacturing leads.",
    action: "Review Leads",
    priority: "High",
  },
  {
    type: "insight",
    icon: Brain,
    color: "text-[#6C63FF]",
    bg: "bg-purple-50",
    border: "border-purple-200",
    title: "Pipeline Value Up 23%",
    description: "Your total pipeline value increased to ₹1.2Cr this week, driven by 3 new enterprise prospects from LinkedIn campaigns.",
    action: "View Pipeline",
    priority: "Info",
  },
  {
    type: "warning",
    icon: AlertCircle,
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-200",
    title: "8 Leads Require Immediate Follow-Up",
    description: "8 hot leads (score >75%) haven't been contacted in 3+ days. Response rate drops 40% after 72 hours of inactivity.",
    action: "Follow Up Now",
    priority: "Urgent",
  },
  {
    type: "optimization",
    icon: Target,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
    title: "Email Subject Line Optimization",
    description: "AI analysis shows subject lines with company name personalization get 34% higher open rates. Update your templates for better engagement.",
    action: "Update Templates",
    priority: "Medium",
  },
];

const kpis = [
  { label: "Total Leads", value: "1,247", change: "+12%", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Conversion Rate", value: "34%", change: "+5%", icon: Target, color: "text-purple-600", bg: "bg-purple-50" },
  { label: "Monthly Revenue", value: "₹45L", change: "+8%", icon: DollarSign, color: "text-emerald-600", bg: "bg-emerald-50" },
  { label: "Pipeline Value", value: "₹1.2Cr", change: "+23%", icon: TrendingUp, color: "text-orange-600", bg: "bg-orange-50" },
];

const statusColors: Record<string, string> = {
  Hot: "bg-red-100 text-red-700 border-red-200",
  Warm: "bg-orange-100 text-orange-700 border-orange-200",
  Cold: "bg-blue-100 text-blue-700 border-blue-200",
};

const CHART_COLORS = ["#1F3A93", "#6C63FF", "#0EA5E9", "#10B981"];

export default function DashboardPreviewPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1F3A93] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-white/10 text-white border-white/20 mb-4">Dashboard Preview</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white mb-4">
            Your AI Revenue{" "}
            <span className="bg-gradient-to-r from-[#4f8ef7] to-[#a855f7] bg-clip-text text-transparent">
              Command Center
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A live demo of what your NexVstar dashboard looks like. Real-time KPIs, forecasts, and AI insights.
          </p>
        </div>
      </section>

      {/* Demo Banner */}
      <div className="bg-amber-50 border-y border-amber-200 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-sm text-amber-800">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span className="font-medium">This is a live demo preview — your actual data will appear here after setup.</span>
        </div>
      </div>

      {/* Dashboard */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6 bg-white border border-gray-200 p-1 rounded-xl">
              <TabsTrigger value="overview" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#1F3A93] data-[state=active]:to-[#6C63FF] data-[state=active]:text-white rounded-lg">
                Overview
              </TabsTrigger>
              <TabsTrigger value="leads" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#1F3A93] data-[state=active]:to-[#6C63FF] data-[state=active]:text-white rounded-lg">
                Leads
              </TabsTrigger>
              <TabsTrigger value="revenue" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#1F3A93] data-[state=active]:to-[#6C63FF] data-[state=active]:text-white rounded-lg">
                Revenue
              </TabsTrigger>
              <TabsTrigger value="insights" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#1F3A93] data-[state=active]:to-[#6C63FF] data-[state=active]:text-white rounded-lg">
                AI Insights
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              {/* KPI Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {kpis.map((kpi) => {
                  const Icon = kpi.icon;
                  return (
                    <Card key={kpi.label} className="border-gray-200 hover:shadow-md transition-shadow">
                      <CardContent className="p-5">
                        <div className="flex items-center justify-between mb-3">
                          <p className="text-sm text-gray-500 font-medium">{kpi.label}</p>
                          <div className={`w-9 h-9 rounded-lg ${kpi.bg} flex items-center justify-center`}>
                            <Icon className={`w-4.5 h-4.5 ${kpi.color}`} />
                          </div>
                        </div>
                        <p className="text-2xl font-bold font-heading text-[#0A1628]">{kpi.value}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <ArrowUp className="w-3 h-3 text-green-600" />
                          <span className="text-xs text-green-600 font-medium">{kpi.change} this month</span>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Charts row */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Revenue Trend */}
                <Card className="lg:col-span-2 border-gray-200">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-semibold text-[#0A1628]">Revenue Trend (Last 6 Months)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={220}>
                      <AreaChart data={revenueData} margin={{ top: 5, right: 5, bottom: 0, left: -20 }}>
                        <defs>
                          <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#1F3A93" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#1F3A93" stopOpacity={0} />
                          </linearGradient>
                          <linearGradient id="colorForecast" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#6C63FF" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#6C63FF" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                        <YAxis tick={{ fontSize: 12 }} />
                        <Tooltip formatter={(v) => [`₹${v}L`, ""]} />
                        <Legend />
                        <Area type="monotone" dataKey="actual" name="Actual (₹L)" stroke="#1F3A93" fill="url(#colorActual)" strokeWidth={2} />
                        <Area type="monotone" dataKey="forecast" name="Forecast (₹L)" stroke="#6C63FF" fill="url(#colorForecast)" strokeWidth={2} strokeDasharray="5 5" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Lead Sources */}
                <Card className="border-gray-200">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-semibold text-[#0A1628]">Lead Sources</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={160}>
                      <PieChart>
                        <Pie data={leadSourceData} cx="50%" cy="50%" innerRadius={45} outerRadius={70} paddingAngle={3} dataKey="value">
                          {leadSourceData.map((entry) => (
                            <Cell key={entry.name} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(v) => [`${v}%`, ""]} />
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="space-y-1.5 mt-2">
                      {leadSourceData.map((source) => (
                        <div key={source.name} className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full" style={{ background: source.color }} />
                            <span className="text-gray-600">{source.name}</span>
                          </div>
                          <span className="font-medium text-[#0A1628]">{source.value}%</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Leads Tab */}
            <TabsContent value="leads">
              <Card className="border-gray-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base font-semibold text-[#0A1628]">Lead Pipeline</CardTitle>
                    <Badge className="bg-[#EEF2FF] text-[#1F3A93] border-[#1F3A93]/20">{mockLeads.length} leads</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-gray-50">
                          <TableHead className="text-xs font-semibold text-gray-500">COMPANY</TableHead>
                          <TableHead className="text-xs font-semibold text-gray-500">CONTACT</TableHead>
                          <TableHead className="text-xs font-semibold text-gray-500">AI SCORE</TableHead>
                          <TableHead className="text-xs font-semibold text-gray-500">STATUS</TableHead>
                          <TableHead className="text-xs font-semibold text-gray-500">DEAL VALUE</TableHead>
                          <TableHead className="text-xs font-semibold text-gray-500">SOURCE</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {mockLeads.map((lead) => (
                          <TableRow key={lead.id} className="hover:bg-gray-50 transition-colors">
                            <TableCell className="font-medium text-[#0A1628] text-sm">{lead.name}</TableCell>
                            <TableCell className="text-sm">
                              <div>{lead.contact}</div>
                              <div className="text-gray-400 text-xs">{lead.email}</div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <div className="flex-1 bg-gray-200 rounded-full h-1.5 w-16">
                                  <div
                                    className="h-1.5 rounded-full"
                                    style={{
                                      width: `${lead.score}%`,
                                      background: lead.score >= 75 ? "#1F3A93" : lead.score >= 50 ? "#6C63FF" : "#94a3b8",
                                    }}
                                  />
                                </div>
                                <span className="text-sm font-medium text-[#0A1628]">{lead.score}%</span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge className={`text-xs ${statusColors[lead.status]}`}>
                                {lead.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="font-semibold text-[#1F3A93] text-sm">{lead.value}</TableCell>
                            <TableCell className="text-gray-500 text-sm">{lead.source}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Revenue Tab */}
            <TabsContent value="revenue" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-base font-semibold text-[#0A1628]">Monthly Revenue vs Target (₹L)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={250}>
                      <BarChart data={monthlyRevenueBar} margin={{ top: 5, right: 5, bottom: 0, left: -20 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                        <YAxis tick={{ fontSize: 12 }} />
                        <Tooltip formatter={(v) => [`₹${v}L`, ""]} />
                        <Legend />
                        <Bar dataKey="revenue" name="Actual Revenue" fill="#1F3A93" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="target" name="Target" fill="#6C63FF" radius={[4, 4, 0, 0]} opacity={0.6} />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-base font-semibold text-[#0A1628]">Forecast vs Actual Trend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={250}>
                      <LineChart data={revenueData} margin={{ top: 5, right: 5, bottom: 0, left: -20 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                        <YAxis tick={{ fontSize: 12 }} />
                        <Tooltip formatter={(v) => [`₹${v}L`, ""]} />
                        <Legend />
                        <Line type="monotone" dataKey="actual" name="Actual (₹L)" stroke="#1F3A93" strokeWidth={2.5} dot={{ fill: "#1F3A93" }} />
                        <Line type="monotone" dataKey="forecast" name="Forecast (₹L)" stroke="#6C63FF" strokeWidth={2.5} strokeDasharray="6 3" dot={{ fill: "#6C63FF" }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              {/* Revenue summary cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "This Month", value: "₹45L", delta: "+8% vs last month" },
                  { label: "This Quarter", value: "₹1.32Cr", delta: "+15% vs last quarter" },
                  { label: "Annual Run Rate", value: "₹5.4Cr", delta: "Projected" },
                  { label: "Next Month Forecast", value: "₹52L", delta: "AI prediction" },
                ].map((item) => (
                  <Card key={item.label} className="border-gray-200">
                    <CardContent className="p-4 text-center">
                      <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                      <p className="text-xl font-bold font-heading text-[#1F3A93]">{item.value}</p>
                      <p className="text-xs text-green-600 mt-1">{item.delta}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Insights Tab */}
            <TabsContent value="insights">
              <div className="space-y-4">
                {insights.map((insight) => {
                  const Icon = insight.icon;
                  return (
                    <div
                      key={insight.title}
                      className={`rounded-2xl border ${insight.border} ${insight.bg} p-5 flex items-start gap-4`}
                    >
                      <div className={`w-10 h-10 rounded-xl bg-white border ${insight.border} flex items-center justify-center shrink-0`}>
                        <Icon className={`w-5 h-5 ${insight.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className="font-semibold text-[#0A1628] text-sm">{insight.title}</h3>
                          <Badge className={`text-xs shrink-0 ${
                            insight.priority === "Urgent" ? "bg-red-100 text-red-700 border-red-200" :
                            insight.priority === "High" ? "bg-orange-100 text-orange-700 border-orange-200" :
                            insight.priority === "Medium" ? "bg-blue-100 text-blue-700 border-blue-200" :
                            "bg-gray-100 text-gray-700 border-gray-200"
                          }`}>
                            {insight.priority}
                          </Badge>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{insight.description}</p>
                      </div>
                    </div>
                  );
                })}

                {/* Chart */}
                <Card className="border-gray-200 mt-6">
                  <CardHeader>
                    <CardTitle className="text-base font-semibold text-[#0A1628]">Lead Score Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={200}>
                      <BarChart
                        data={[
                          { range: "0-20", count: 42, color: CHART_COLORS[2] },
                          { range: "21-40", count: 78, color: CHART_COLORS[3] },
                          { range: "41-60", count: 156, color: CHART_COLORS[1] },
                          { range: "61-80", count: 234, color: CHART_COLORS[0] },
                          { range: "81-100", count: 189, color: "#1F3A93" },
                        ]}
                        margin={{ top: 5, right: 5, bottom: 0, left: -20 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="range" tick={{ fontSize: 12 }} />
                        <YAxis tick={{ fontSize: 12 }} />
                        <Tooltip />
                        <Bar dataKey="count" name="Leads" fill="#1F3A93" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
