import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-800 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Dashboard Header */}
      <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
              <p className="text-lg text-gray-600">Manage users and contact submissions</p>
            </div>
            <Button onClick={handleLogout} variant="outline" className="border-2 border-slate-800 text-slate-800 hover:bg-slate-50">
              <LogOut className="mr-2" size={18} />
              Logout
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-2 border-gray-100">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Total Users</p>
                    <p className="text-3xl font-bold text-gray-900">{stats.total_users}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="text-blue-600" size={24} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Total Contacts</p>
                    <p className="text-3xl font-bold text-gray-900">{stats.total_contacts}</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Mail className="text-green-600" size={24} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">New Submissions</p>
                    <p className="text-3xl font-bold text-gray-900">{stats.new_contacts}</p>
                  </div>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <BarChart3 className="text-orange-600" size={24} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Data Tables */}
          <Tabs defaultValue="users" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="users" className="px-8 py-3">
                <Users className="mr-2" size={18} />
                Registered Users ({users.length})
              </TabsTrigger>
              <TabsTrigger value="contacts" className="px-8 py-3">
                <Mail className="mr-2" size={18} />
                Contact Submissions ({contacts.length})
              </TabsTrigger>
            </TabsList>

            {/* Users Tab */}
            <TabsContent value="users">
              <Card className="border-2 border-gray-100">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="text-2xl">Registered Users</CardTitle>
                      <CardDescription className="text-base">All users who signed up on the platform</CardDescription>
                    </div>
                    <Button onClick={exportUsers} className="bg-slate-800 hover:bg-slate-900">
                      <Download className="mr-2" size={18} />
                      Export CSV
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Name</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Email</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Age</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Country</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Profession</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Gender</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user) => (
                          <tr key={user.id} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">{user.name} {user.surname}</td>
                            <td className="py-3 px-4">{user.email}</td>
                            <td className="py-3 px-4">{user.age}</td>
                            <td className="py-3 px-4">{user.country}</td>
                            <td className="py-3 px-4">{user.profession}</td>
                            <td className="py-3 px-4 capitalize">{user.gender}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {users.length === 0 && (
                      <div className="text-center py-12 text-gray-500">
                        No users registered yet
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Contacts Tab */}
            <TabsContent value="contacts">
              <Card className="border-2 border-gray-100">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="text-2xl">Contact Submissions</CardTitle>
                      <CardDescription className="text-base">Messages from the contact form</CardDescription>
                    </div>
                    <Button onClick={exportContacts} className="bg-slate-800 hover:bg-slate-900">
                      <Download className="mr-2" size={18} />
                      Export CSV
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {contacts.map((contact) => (
                      <div key={contact.id} className="border-2 border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-semibold text-gray-900">{contact.name}</h4>
                            <p className="text-sm text-gray-600">{contact.email}</p>
                            {contact.company && (
                              <p className="text-sm text-gray-500">{contact.company}</p>
                            )}
                          </div>
                          <div className="text-right">
                            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                              {contact.status}
                            </span>
                            <p className="text-xs text-gray-500 mt-1">
                              {new Date(contact.created_at).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded">
                          <p className="text-sm text-gray-700">{contact.message}</p>
                        </div>
                      </div>
                    ))}
                    {contacts.length === 0 && (
                      <div className="text-center py-12 text-gray-500">
                        No contact submissions yet
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};