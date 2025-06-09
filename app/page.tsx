import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, Mail, MapPin, Github, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"

// 模拟文章数据
const posts = [
  {
    id: 1,
    title: "React 18 新特性深度解析",
    summary: "深入了解 React 18 带来的并发特性、自动批处理、Suspense 改进等重要更新，以及如何在项目中应用这些新特性。",
    publishDate: "2024-01-15",
    tags: ["React", "JavaScript", "前端开发"],
  },
  {
    id: 2,
    title: "Next.js App Router 完全指南",
    summary: "从传统的 Pages Router 迁移到 App Router，了解新的路由系统、布局组件、服务端组件等核心概念。",
    publishDate: "2024-01-10",
    tags: ["Next.js", "React", "全栈开发"],
  },
  {
    id: 3,
    title: "TypeScript 高级类型技巧",
    summary: "掌握 TypeScript 中的条件类型、映射类型、模板字面量类型等高级特性，提升代码的类型安全性。",
    publishDate: "2024-01-05",
    tags: ["TypeScript", "JavaScript", "类型系统"],
  },
  {
    id: 4,
    title: "现代 CSS 布局技术对比",
    summary: "比较 Flexbox、Grid、Container Queries 等现代 CSS 布局技术的优缺点和适用场景。",
    publishDate: "2023-12-28",
    tags: ["CSS", "布局", "前端开发"],
  },
]

export default function PersonalBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header - 站点标题和导航 */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <h1 className="text-xl font-bold text-gray-900">张开发的博客</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#home" className="text-gray-600 hover:text-gray-900 transition-colors">
                首页
              </Link>
              <Link href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                关于我
              </Link>
              <Link href="#posts" className="text-gray-600 hover:text-gray-900 transition-colors">
                文章
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                联系我
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-16">
        {/* About Section - 关于我部分 */}
        <section id="about" className="text-center space-y-6">
          <div className="flex flex-col items-center space-y-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="/placeholder.svg?height=96&width=96" alt="张开发" />
              <AvatarFallback className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                张开
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">你好，我是张开发</h2>
              <p className="text-lg text-gray-600 mb-4">全栈开发工程师 & 技术博主</p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>北京，中国</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Mail className="h-4 w-4" />
                  <span>zhang@example.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-700 leading-relaxed">
              我是一名热爱技术的全栈开发工程师，专注于现代 Web 开发技术。 拥有 5 年以上的开发经验，熟练掌握
              React、Next.js、TypeScript、Node.js 等技术栈。 喜欢分享技术心得，帮助更多开发者成长。
            </p>
          </div>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="sm">
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </Button>
            <Button variant="outline" size="sm">
              <Twitter className="h-4 w-4 mr-2" />
              Twitter
            </Button>
            <Button variant="outline" size="sm">
              <Linkedin className="h-4 w-4 mr-2" />
              LinkedIn
            </Button>
          </div>
        </section>

        {/* Post List - 文章列表 */}
        <section id="posts" className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">最新文章</h2>
            <p className="text-gray-600">分享我的技术心得和开发经验</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{post.publishDate}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl hover:text-blue-600 transition-colors">{post.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">{post.summary}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline">查看更多文章</Button>
          </div>
        </section>

        {/* Contact Form - 联系方式表单 */}
        <section id="contact" className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">联系我</h2>
            <p className="text-gray-600">有任何问题或合作意向，欢迎与我联系</p>
          </div>

          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>发送消息</CardTitle>
                <CardDescription>我会尽快回复您的消息</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">姓名</Label>
                  <Input id="name" placeholder="请输入您的姓名" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">邮箱</Label>
                  <Input id="email" type="email" placeholder="请输入您的邮箱地址" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">留言</Label>
                  <Textarea id="message" placeholder="请输入您想说的话..." className="min-h-[100px]" />
                </div>
                <Button className="w-full">发送消息</Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 张开发的博客. 保留所有权利.</p>
            <p className="text-sm mt-2">使用 Next.js 和 Tailwind CSS 构建</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
