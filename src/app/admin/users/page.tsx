import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Users, Calendar, ArrowUpRight } from "lucide-react"

interface User {
  _id: string
  email: string
  twitter?: string
  createdAt: string
}

async function getUsers() {
  try {
    // Use absolute URL path with origin
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ""}/api/waitlist`, {
      cache: "no-store",
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch users: ${response.status}`)
    }

    const data = await response.json()
    return data.users || []
  } catch (error) {
    console.error("Error fetching users:", error)
    return []
  }
}

export default async function UsersPage() {
  const users = await getUsers()

  return (
    <div className="min-h-screen bg-black/95 text-white">
      <div className="container mx-auto py-10 px-4 sm:px-6">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Waitlist Dashboard
          </h1>
          <p className="text-gray-400 mt-2">Monitor and manage your product waitlist users</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gray-900/60 border-0 shadow-[0_0_15px_rgba(168,85,247,0.15)] overflow-hidden">
            <CardHeader className="pb-2">
              <CardDescription className="text-white">Total Users</CardDescription>
              <CardTitle className="text-2xl flex items-center text-white">
                <Users className="mr-2 h-5 w-5 text-purple-500" />
                {users.length}
              </CardTitle>
            </CardHeader>
            <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-purple-700"></div>
          </Card>

          <Card className="bg-gray-900/60 border-0 shadow-[0_0_15px_rgba(168,85,247,0.15)] overflow-hidden">
            <CardHeader className="pb-2">
              <CardDescription className="text-gray-400">Twitter Connected</CardDescription>
              <CardTitle className="text-2xl flex items-center text-white">
                <ArrowUpRight className="mr-2 h-5 w-5 text-purple-500" />
                {users.filter((user: User) => user.twitter).length}
              </CardTitle>
            </CardHeader>
            <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-purple-700"></div>
          </Card>

          <Card className="bg-gray-900/60 border-0 shadow-[0_0_15px_rgba(168,85,247,0.15)] overflow-hidden">
            <CardHeader className="pb-2">
              <CardDescription className="text-gray-400">Last Joined</CardDescription>
              <CardTitle className="text-2xl flex items-center text-white">
                <Calendar className="mr-2 h-5 w-5 text-purple-500 " />
                {users.length > 0 ? new Date(users[users.length - 1].createdAt).toLocaleDateString() : "N/A"}
              </CardTitle>
            </CardHeader>
            <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-purple-700 "></div>
          </Card>
        </div>

        {/* Main Card */}
        <Card className="bg-gray-900/80 border-0 shadow-[0_0_30px_rgba(168,85,247,0.2)] backdrop-blur-sm">
          <CardHeader className="border-b border-gray-800 pb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle className="text-xl font-bold text-white">Waitlist Users</CardTitle>
                <CardDescription className="text-gray-400 mt-1">
                  A list of all users who have signed up for the waitlist.
                </CardDescription>
              </div>

              <div className="relative w-full md:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  placeholder="Search users..."
                  className="pl-9 bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-purple-500"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            {users.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
                <Users className="h-16 w-16 text-gray-700 mb-4" />
                <h3 className="text-xl font-medium text-gray-300">No users yet</h3>
                <p className="text-gray-500 mt-2 max-w-md">
                  Your waitlist is empty. When users sign up, they &apos;ll appear here.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-800 hover:bg-gray-800/30">
                      <TableHead className="text-gray-400 font-medium">Email</TableHead>
                      <TableHead className="text-gray-400 font-medium">Twitter</TableHead>
                      <TableHead className="text-gray-400 font-medium">Joined On</TableHead>
                      <TableHead className="text-gray-400 font-medium text-right">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user: User) => {
                      // Calculate how many days ago the user joined
                      const joinedDate = new Date(user.createdAt)
                      const today = new Date()
                      const diffTime = Math.abs(today.getTime() - joinedDate.getTime())
                      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

                      return (
                        <TableRow key={user._id} className="border-gray-800 transition-colors hover:bg-purple-900/10">
                          <TableCell className="font-medium text-white">{user.email}</TableCell>
                          <TableCell className="text-white" >
                            {user.twitter ? (
                              <div className="flex items-center">
                                <span className="text-purple-400">@{user.twitter}</span>
                              </div>
                            ) : (
                              <span className="text-gray-500">-</span>
                            )}
                          </TableCell>
                          <TableCell>
                            <div className="flex flex-col">
                              <span className="text-white">{joinedDate.toLocaleDateString()}</span>
                              <span className="text-xs text-gray-500">
                                {diffDays === 0 ? "Today" : `${diffDays} day${diffDays === 1 ? "" : "s"} ago`}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell className="text-right">
                            <Badge
                              className={`${
                                diffDays < 3
                                  ? "bg-purple-500/20 text-purple-400 hover:bg-purple-500/20"
                                  : "bg-gray-800 text-gray-400 hover:bg-gray-800"
                              }`}
                            >
                              {diffDays < 3 ? "New" : "Active"}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Pagination */}
        {users.length > 0 && (
          <div className="flex justify-between items-center mt-6 text-sm text-gray-400">
            <div>
              Showing <span className="text-white">{users.length}</span> users
            </div>
            <div className="flex space-x-1">
              <button className="px-3 py-1 rounded bg-gray-800 hover:bg-gray-700 transition-colors">Previous</button>
              <button className="px-3 py-1 rounded bg-purple-700 text-white hover:bg-purple-600 transition-colors">
                1
              </button>
              <button className="px-3 py-1 rounded bg-gray-800 hover:bg-gray-700 transition-colors">Next</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
