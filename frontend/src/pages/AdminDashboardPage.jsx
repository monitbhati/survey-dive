import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { toast } from 'sonner';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Users, Mail, BarChart3, Download, LogOut } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// ---------------------------------------------------------------------------
// Helpers & Animation Variants
// ---------------------------------------------------------------------------
const noiseTexture = (rgb, alpha) =>
  `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 ${rgb.r}  0 0 0 0 ${rgb.g}  0 0 0 0 ${rgb.b}  0 0 0 ${alpha} 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export const AdminDashboardPage = () => {
  const [stats, setStats] = useState({ total_users: 0, total_contacts: 0, new_contacts: 0 });
  const [users, setUsers] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      navigate('/admin/login');
      return;
    }
    loadData();
  }, [navigate]);

  const loadData = async () => {
    try {
      const [statsRes, usersRes, contactsRes] = await Promise.all([
        axios.get(`${API}/admin/stats`),
        axios.get(`${API}/admin/users`),
        axios.get(`${API}/admin/contacts`)
      ]);
      
      setStats(statsRes.data);
      setUsers(usersRes.data);
      setContacts(contactsRes.data);
    } catch (error) {
      console.error('Error loading data:', error);
      toast.error('Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    toast.success('Logged out successfully');
    navigate('/admin/login');
  };

  const exportUsers = () => {
    const csv = [
      ['ID', 'Name', 'Surname', 'Email', 'Age', 'Country', 'Profession', 'Gender'],
      ...users.map(u => [u.id, u.name, u.surname, u.email, u.age, u.country, u.profession, u.gender])
    ].map(row => row.join(',')).join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `users_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    toast.success('Users data exported successfully');
  };

  const exportContacts = () => {
    const csv = [
      ['ID', 'Name', 'Email', 'Company', 'Message', 'Date', 'Status'],
      ...contacts.map(c => [
        c.id, 
        c.name, 
        c.email, 
        c.company || 'N/A', 
        `"${c.message.replace(/"/g, '""')}"`, 
        new Date(c.created_at).toLocaleString(),
        c.status
      ])
    ].map(row => row.join(',')).join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `contacts_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    toast.success('Contact submissions exported successfully');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#26323A] flex items-center justify-center relative">
        <div className="text-center z-10">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#BF4A3B] mx-auto"></div>
          <p className="mt-4 text-[#A8ADB8] font-medium">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#26323A] relative">
      {/* Global Background Layer */}
      <div className="fixed inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/2129796/pexels-photo-2129796.png?auto=compress&cs=tinysrgb&w=1920"
          alt="Business Analytics"
          className="w-full h-full object-cover opacity-20"
          width={1920}
          height={1280}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `${noiseTexture({ r: 0.15, g: 0.19, b: 0.22 }, 0.5)}, linear-gradient(180deg, rgba(38,50,58,0.94) 0%, rgba(38,50,58,0.9) 50%, rgba(38,50,58,0.96) 100%)`,
            backgroundRepeat: 'repeat, no-repeat'
          }}
        ></div>
      </div>

      <div className="relative z-10">
        <Header />

        {/* Dashboard Header */}
        <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="container mx-auto max-w-7xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
            >
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
                <p className="text-lg text-[#A8ADB8]">Manage users and contact submissions</p>
              </div>
              <Button onClick={handleLogout} variant="outline" className="border border-[#3E4F59] bg-[#2E3D47] text-white hover:bg-[#3E4F59] hover:text-white transition-colors">
                <LogOut className="mr-2" size={18} />
                Logout
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Dashboard Content */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-transparent min-h-[60vh]">
          <div className="container mx-auto max-w-7xl">
            
            {/* Stats Cards */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-6 mb-10"
            >
              <motion.div variants={fadeInUp}>
                <Card className="bg-[#2E3D47] border border-[#3E4F59] hover:-translate-y-2 hover:border-[#DE7823] hover:shadow-[0_10px_40px_-15px_rgba(222,120,35,0.3)] transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-[#A8ADB8] mb-1">Total Users</p>
                        <p className="text-3xl font-bold text-white">{stats.total_users}</p>
                      </div>
                      <div className="w-14 h-14 bg-gradient-to-br from-[#DE7823] to-[#BF4A3B] rounded-xl flex items-center justify-center">
                        <Users className="text-white" size={26} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="bg-[#2E3D47] border border-[#3E4F59] hover:-translate-y-2 hover:border-[#BF4A3B] hover:shadow-[0_10px_40px_-15px_rgba(191,74,59,0.3)] transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-[#A8ADB8] mb-1">Total Contacts</p>
                        <p className="text-3xl font-bold text-white">{stats.total_contacts}</p>
                      </div>
                      <div className="w-14 h-14 bg-gradient-to-br from-[#BF4A3B] to-[#A8294B] rounded-xl flex items-center justify-center">
                        <Mail className="text-white" size={26} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="bg-[#2E3D47] border border-[#3E4F59] hover:-translate-y-2 hover:border-[#A31E52] hover:shadow-[0_10px_40px_-15px_rgba(163,30,82,0.3)] transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-[#A8ADB8] mb-1">New Submissions</p>
                        <p className="text-3xl font-bold text-white">{stats.new_contacts}</p>
                      </div>
                      <div className="w-14 h-14 bg-gradient-to-br from-[#A8294B] to-[#A31E52] rounded-xl flex items-center justify-center">
                        <BarChart3 className="text-white" size={26} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Data Tables */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <Tabs defaultValue="users" className="w-full">
                <TabsList className="mb-6 bg-[#2E3D47] border border-[#3E4F59] p-1 rounded-lg">
                  <TabsTrigger 
                    value="users" 
                    className="px-8 py-3 text-[#A8ADB8] data-[state=active]:bg-[#26323A] data-[state=active]:text-white data-[state=active]:shadow-md rounded-md transition-all"
                  >
                    <Users className="mr-2" size={18} />
                    Registered Users ({users.length})
                  </TabsTrigger>
                  <TabsTrigger 
                    value="contacts" 
                    className="px-8 py-3 text-[#A8ADB8] data-[state=active]:bg-[#26323A] data-[state=active]:text-white data-[state=active]:shadow-md rounded-md transition-all"
                  >
                    <Mail className="mr-2" size={18} />
                    Contact Submissions ({contacts.length})
                  </TabsTrigger>
                </TabsList>

                {/* Users Tab */}
                <TabsContent value="users">
                  <Card className="bg-[#2E3D47] border border-[#3E4F59] shadow-xl overflow-hidden">
                    <CardHeader className="border-b border-[#3E4F59] bg-[#2E3D47]/50 pb-6">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                          <CardTitle className="text-2xl text-white">Registered Users</CardTitle>
                          <CardDescription className="text-base text-[#A8ADB8]">All users who signed up on the platform</CardDescription>
                        </div>
                        <Button 
                          onClick={exportUsers} 
                          className="bg-gradient-to-r from-[#BF4A3B] to-[#A31E52] hover:from-[#A8294B] hover:to-[#A31E52] text-white border-0 shadow-lg"
                        >
                          <Download className="mr-2" size={18} />
                          Export CSV
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="bg-[#26323A]/50 border-b border-[#3E4F59]">
                              <th className="text-left py-4 px-6 font-semibold text-[#A8ADB8]">Name</th>
                              <th className="text-left py-4 px-6 font-semibold text-[#A8ADB8]">Email</th>
                              <th className="text-left py-4 px-6 font-semibold text-[#A8ADB8]">Age</th>
                              <th className="text-left py-4 px-6 font-semibold text-[#A8ADB8]">Country</th>
                              <th className="text-left py-4 px-6 font-semibold text-[#A8ADB8]">Profession</th>
                              <th className="text-left py-4 px-6 font-semibold text-[#A8ADB8]">Gender</th>
                            </tr>
                          </thead>
                          <tbody>
                            {users.map((user) => (
                              <tr key={user.id} className="border-b border-[#3E4F59]/50 hover:bg-[#26323A] transition-colors">
                                <td className="py-4 px-6 text-white font-medium">{user.name} {user.surname}</td>
                                <td className="py-4 px-6 text-[#A8ADB8]">{user.email}</td>
                                <td className="py-4 px-6 text-[#A8ADB8]">{user.age}</td>
                                <td className="py-4 px-6 text-[#A8ADB8]">{user.country}</td>
                                <td className="py-4 px-6 text-[#A8ADB8]">{user.profession}</td>
                                <td className="py-4 px-6 text-[#A8ADB8] capitalize">{user.gender}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        {users.length === 0 && (
                          <div className="text-center py-16 text-[#A8ADB8]">
                            No users registered yet
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Contacts Tab */}
                <TabsContent value="contacts">
                  <Card className="bg-[#2E3D47] border border-[#3E4F59] shadow-xl overflow-hidden">
                    <CardHeader className="border-b border-[#3E4F59] bg-[#2E3D47]/50 pb-6">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                          <CardTitle className="text-2xl text-white">Contact Submissions</CardTitle>
                          <CardDescription className="text-base text-[#A8ADB8]">Messages from the contact form</CardDescription>
                        </div>
                        <Button 
                          onClick={exportContacts} 
                          className="bg-gradient-to-r from-[#BF4A3B] to-[#A31E52] hover:from-[#A8294B] hover:to-[#A31E52] text-white border-0 shadow-lg"
                        >
                          <Download className="mr-2" size={18} />
                          Export CSV
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {contacts.map((contact) => (
                          <div key={contact.id} className="bg-[#26323A] border border-[#3E4F59] rounded-xl p-5 hover:border-[#BF4A3B] transition-colors duration-300">
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <h4 className="font-bold text-white text-lg">{contact.name}</h4>
                                <p className="text-sm text-[#BF4A3B] font-medium">{contact.email}</p>
                                {contact.company && (
                                  <p className="text-sm text-[#A8ADB8] mt-1">{contact.company}</p>
                                )}
                              </div>
                              <div className="text-right flex flex-col items-end gap-2">
                                <span className="inline-block px-3 py-1 bg-[#2E3D47] border border-[#DE7823]/30 text-[#DE7823] text-xs font-semibold tracking-wide rounded-full">
                                  {contact.status}
                                </span>
                                <p className="text-xs text-[#A8ADB8]">
                                  {new Date(contact.created_at).toLocaleDateString()}
                                </p>
                              </div>
                            </div>
                            <div className="bg-[#2E3D47] border border-[#3E4F59]/50 p-4 rounded-lg">
                              <p className="text-sm text-[#A8ADB8] leading-relaxed">{contact.message}</p>
                            </div>
                          </div>
                        ))}
                        {contacts.length === 0 && (
                          <div className="text-center py-12 text-[#A8ADB8]">
                            No contact submissions yet
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};