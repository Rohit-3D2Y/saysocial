"use client"

import { useState, useEffect } from "react"
import { X, ExternalLink, Calendar, Users, TrendingUp, ArrowLeft, Globe, Award, Target, Lightbulb } from "lucide-react"

const caseStudies = [
  {
    id: 1,
    title: "E-commerce Revolution",
    category: "Web Development",
    image: "/modern-ecommerce-website.png",
    shortDesc: "Transformed online shopping experience",
    client: "TechMart Inc.",
    duration: "6 months",
    team: "8 members",
    results: "300% increase in conversions",
    challenge:
      "The client's existing e-commerce platform was outdated, resulting in high bounce rates and poor user experience. Mobile responsiveness was lacking, and the checkout process was cumbersome. The platform couldn't handle peak traffic during sales events, leading to lost revenue and frustrated customers.",
    solution:
      "We redesigned the entire user journey, implemented a mobile-first approach, and integrated advanced analytics. The new platform features AI-powered recommendations, one-click checkout, real-time inventory management, and a robust infrastructure that can handle 10x the previous traffic load.",
    detailedProcess: [
      {
        phase: "Discovery & Research",
        description:
          "Conducted comprehensive user research, analyzed competitor platforms, and identified key pain points in the existing system.",
        duration: "2 weeks",
      },
      {
        phase: "Design & Prototyping",
        description:
          "Created wireframes, user journey maps, and interactive prototypes. Conducted A/B testing on key conversion elements.",
        duration: "4 weeks",
      },
      {
        phase: "Development & Integration",
        description:
          "Built the platform using modern technologies, integrated payment systems, and implemented advanced search functionality.",
        duration: "16 weeks",
      },
      {
        phase: "Testing & Launch",
        description:
          "Comprehensive testing across devices, performance optimization, and gradual rollout with monitoring.",
        duration: "4 weeks",
      },
    ],
    impact: [
      "300% increase in conversion rates",
      "65% reduction in cart abandonment",
      "150% boost in mobile sales",
      "40% improvement in page load speed",
      "500% increase in peak traffic handling",
      "90% reduction in checkout time",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS", "Redis", "Elasticsearch"],
    testimonial: {
      text: "The transformation was beyond our expectations. Our revenue tripled within the first quarter after launch.",
      author: "Sarah Johnson",
      position: "CEO, TechMart Inc.",
    },
    metrics: {
      revenue: "+300%",
      users: "2.5M+",
      satisfaction: "4.8/5",
      performance: "99.9%",
    },
    color: "from-blue-500 to-purple-600",
  },
  {
    id: 2,
    title: "FinTech Mobile App",
    category: "Mobile Development",
    image: "/fintech-mobile-app.png",
    shortDesc: "Revolutionizing personal finance",
    client: "MoneyWise Solutions",
    duration: "8 months",
    team: "12 members",
    results: "1M+ downloads in 3 months",
    challenge:
      "Creating a secure, user-friendly mobile banking application that could compete with established financial institutions while ensuring regulatory compliance and building user trust. The app needed to handle complex financial data while maintaining simplicity for everyday users.",
    solution:
      "Developed a comprehensive mobile app with biometric authentication, real-time transaction monitoring, AI-powered budgeting tools, and seamless integration with multiple banks and financial services. Implemented advanced security measures and intuitive UX design.",
    detailedProcess: [
      {
        phase: "Compliance & Security Planning",
        description:
          "Worked with legal teams to ensure regulatory compliance, designed security architecture, and established data protection protocols.",
        duration: "3 weeks",
      },
      {
        phase: "UX Research & Design",
        description:
          "Conducted user interviews with banking customers, created personas, and designed intuitive interfaces for complex financial operations.",
        duration: "6 weeks",
      },
      {
        phase: "Core Development",
        description:
          "Built the app with React Native, implemented biometric authentication, real-time notifications, and banking integrations.",
        duration: "20 weeks",
      },
      {
        phase: "Security Testing & Launch",
        description:
          "Extensive security audits, penetration testing, beta testing with select users, and phased market launch.",
        duration: "3 weeks",
      },
    ],
    impact: [
      "1M+ downloads in first quarter",
      "4.8/5 app store rating",
      "85% user retention rate",
      "50% reduction in customer support tickets",
      "200% increase in digital transactions",
      "95% user satisfaction with security features",
    ],
    technologies: ["React Native", "Python", "PostgreSQL", "Firebase", "Plaid API", "TensorFlow", "AWS"],
    testimonial: {
      text: "This app has revolutionized how our customers interact with their finances. The user adoption exceeded all projections.",
      author: "Michael Chen",
      position: "CTO, MoneyWise Solutions",
    },
    metrics: {
      downloads: "1M+",
      rating: "4.8/5",
      retention: "85%",
      transactions: "$50M+",
    },
    color: "from-green-500 to-teal-600",
  },
  {
    id: 3,
    title: "Healthcare Platform",
    category: "Healthcare Tech",
    image: "/healthcare-digital-platform.png",
    shortDesc: "Connecting patients and doctors",
    client: "MedConnect Global",
    duration: "10 months",
    team: "15 members",
    results: "500K+ consultations facilitated",
    challenge:
      "Building a HIPAA-compliant telemedicine platform that could handle high-volume video consultations while maintaining data security and providing seamless user experience for both patients and healthcare providers. The platform needed to integrate with existing hospital systems.",
    solution:
      "Created a comprehensive healthcare ecosystem with video consultations, electronic health records, appointment scheduling, prescription management, and AI-powered symptom assessment tools. Implemented end-to-end encryption and compliance monitoring.",
    detailedProcess: [
      {
        phase: "Compliance & Architecture",
        description:
          "Established HIPAA compliance framework, designed secure architecture, and planned integration with existing healthcare systems.",
        duration: "4 weeks",
      },
      {
        phase: "Core Platform Development",
        description:
          "Built video consultation system, patient portal, doctor dashboard, and electronic health records management.",
        duration: "24 weeks",
      },
      {
        phase: "AI Integration & Testing",
        description:
          "Implemented AI symptom checker, automated scheduling, and conducted extensive testing with healthcare professionals.",
        duration: "8 weeks",
      },
      {
        phase: "Deployment & Training",
        description:
          "Deployed to healthcare facilities, conducted staff training, and provided ongoing support during initial rollout.",
        duration: "4 weeks",
      },
    ],
    impact: [
      "500K+ consultations completed",
      "95% patient satisfaction rate",
      "60% reduction in no-shows",
      "40% increase in provider efficiency",
      "80% reduction in administrative overhead",
      "99.99% uptime during peak usage",
    ],
    technologies: ["Vue.js", "Django", "WebRTC", "Redis", "Docker", "TensorFlow", "PostgreSQL"],
    testimonial: {
      text: "This platform has transformed how we deliver healthcare. Our patients love the convenience and our doctors are more efficient than ever.",
      author: "Dr. Emily Rodriguez",
      position: "Chief Medical Officer, MedConnect Global",
    },
    metrics: {
      consultations: "500K+",
      satisfaction: "95%",
      efficiency: "+40%",
      uptime: "99.99%",
    },
    color: "from-red-500 to-pink-600",
  },
  {
    id: 4,
    title: "EdTech Learning Platform",
    category: "Education Technology",
    image: "/online-learning-platform.png",
    shortDesc: "Transforming online education",
    client: "EduFuture Academy",
    duration: "7 months",
    team: "10 members",
    results: "200K+ active learners",
    challenge:
      "Developing an engaging online learning platform that could deliver personalized education experiences while supporting various content types and maintaining high performance across different devices. The platform needed to support live classes, recorded content, and interactive assessments.",
    solution:
      "Built an adaptive learning platform with AI-powered content recommendations, interactive assessments, progress tracking, and collaborative tools for both students and educators. Implemented real-time video streaming and advanced analytics.",
    detailedProcess: [
      {
        phase: "Educational Research",
        description:
          "Collaborated with educators to understand learning patterns, researched best practices in online education, and defined learning objectives.",
        duration: "3 weeks",
      },
      {
        phase: "Platform Architecture",
        description:
          "Designed scalable architecture to handle video streaming, real-time interactions, and large amounts of educational content.",
        duration: "4 weeks",
      },
      {
        phase: "Core Development",
        description:
          "Built learning management system, video streaming capabilities, assessment tools, and student/teacher dashboards.",
        duration: "20 weeks",
      },
      {
        phase: "AI Integration & Launch",
        description:
          "Implemented personalized learning algorithms, conducted pilot programs with select schools, and launched to broader market.",
        duration: "1 weeks",
      },
    ],
    impact: [
      "200K+ active monthly users",
      "90% course completion rate",
      "75% improvement in learning outcomes",
      "45% increase in student engagement",
      "300% growth in content library",
      "85% teacher satisfaction rate",
    ],
    technologies: ["Angular", "Spring Boot", "MySQL", "WebSocket", "TensorFlow", "AWS", "Redis"],
    testimonial: {
      text: "Our students are more engaged than ever. The personalized learning approach has significantly improved academic outcomes.",
      author: "Prof. David Kim",
      position: "Academic Director, EduFuture Academy",
    },
    metrics: {
      users: "200K+",
      completion: "90%",
      engagement: "+45%",
      outcomes: "+75%",
    },
    color: "from-yellow-500 to-orange-600",
  },
]

const CaseStudy = () => {
  const [selectedCase, setSelectedCase] = useState(null)
  const [isClient, setIsClient] = useState(false)

  // Handle client-side mounting
  useEffect(() => {
    setIsClient(true)

    // Check URL for case study ID on mount
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search)
      const caseId = urlParams.get("case")
      if (caseId) {
        const foundCase = caseStudies.find((c) => c.id === Number.parseInt(caseId))
        if (foundCase) {
          setSelectedCase(foundCase)
        }
      }
    }
  }, [])

  // Update URL when case study is selected
  const handleCaseSelect = (caseStudy) => {
    setSelectedCase(caseStudy)
    if (typeof window !== "undefined") {
      const url = new URL(window.location)
      url.searchParams.set("case", caseStudy.id.toString())
      window.history.pushState({}, "", url)
      // Scroll to top when case study opens
      window.scrollTo(0, 0)
    }
  }

  // Handle back navigation
  const handleBack = () => {
    setSelectedCase(null)
    if (typeof window !== "undefined") {
      const url = new URL(window.location)
      url.searchParams.delete("case")
      window.history.pushState({}, "", url)
      // Scroll to top when going back to grid
      window.scrollTo(0, 0)
    }
  }

  // Handle browser back button
  useEffect(() => {
    if (!isClient) return

    const handlePopState = () => {
      const urlParams = new URLSearchParams(window.location.search)
      const caseId = urlParams.get("case")
      if (caseId) {
        const foundCase = caseStudies.find((c) => c.id === Number.parseInt(caseId))
        setSelectedCase(foundCase || null)
      } else {
        setSelectedCase(null)
      }
      // Scroll to top on browser navigation
      window.scrollTo(0, 0)
    }

    window.addEventListener("popstate", handlePopState)
    return () => window.removeEventListener("popstate", handlePopState)
  }, [isClient])

  // Don't render until client-side
  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Main Case Studies Grid */}
      {!selectedCase && (
        <div className="min-h-screen  py-10 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-semibold brico tracking-tighter text-[#101b36] mb-6">
                Case{" "}
                <span className="">
                  Studies
                </span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Discover how we've transformed businesses across industries with innovative solutions and cutting-edge
                technology
              </p>
            </div>

            {/* Case Studies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((caseStudy) => (
                <div
                  key={caseStudy.id}
                  onClick={() => handleCaseSelect(caseStudy)}
                  className="cursor-pointer group hover:-translate-y-2 hover:scale-105 transition-all duration-300"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-[#101b36]  transition-all duration-300">
                    {/* Image */}
                    <div className="relative h-96 overflow-hidden">
                      <img
                        src={caseStudy.image || "/placeholder.svg"}
                        alt={caseStudy.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-sm rounded-full">
                          {caseStudy.category}
                        </span>
                      </div>
                    </div>

                   
                  </div>
                  <div className="flex justify-between">
                    <div><h1>write</h1></div>
                    <div><h1>write</h1></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Full Page Case Study Detail */}
      {selectedCase && (
        <div className="min-h-screen">
          {/* Header - Sticky */}
          <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 z-10">
            <div className="max-w-7xl mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <button
                  onClick={handleBack}
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back to Case Studies
                </button>
                <button onClick={handleBack} className="p-2 hover:bg-gray-800 rounded-full transition-colors">
                  <X className="w-6 h-6 text-gray-400" />
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-7xl mx-auto px-6 py-12">
            {/* Hero Section */}
            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm border border-blue-600/30 mb-4 inline-block">
                    {selectedCase.category}
                  </span>
                  <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{selectedCase.title}</h1>
                  <p className="text-xl text-gray-300 mb-8">{selectedCase.shortDesc}</p>

                  {/* Client Info */}
                  <div className="flex items-center space-x-6 text-gray-400 mb-8">
                    <div className="flex items-center">
                      <Globe className="w-5 h-5 mr-2" />
                      <span>{selectedCase.client}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span>{selectedCase.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-5 h-5 mr-2" />
                      <span>{selectedCase.team}</span>
                    </div>
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.entries(selectedCase.metrics).map(([key, value]) => (
                      <div key={key} className="bg-gray-800 p-4 rounded-xl text-center">
                        <div className="text-2xl font-bold text-white mb-1">{value}</div>
                        <div className="text-sm text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <img
                    src={selectedCase.image || "/placeholder.svg"}
                    alt={selectedCase.title}
                    className="w-full h-96 object-cover rounded-2xl"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${selectedCase.color} opacity-20 rounded-2xl`} />
                </div>
              </div>
            </div>

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <div className="flex items-center mb-6">
                  <Target className="w-6 h-6 text-red-400 mr-3" />
                  <h2 className="text-3xl font-bold text-white">The Challenge</h2>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">{selectedCase.challenge}</p>
              </div>

              <div>
                <div className="flex items-center mb-6">
                  <Lightbulb className="w-6 h-6 text-yellow-400 mr-3" />
                  <h2 className="text-3xl font-bold text-white">Our Solution</h2>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">{selectedCase.solution}</p>
              </div>
            </div>

            {/* Process Timeline */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Development Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {selectedCase.detailedProcess.map((phase, index) => (
                  <div key={index} className="bg-gray-800 p-6 rounded-xl relative">
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{phase.phase}</h3>
                    <p className="text-gray-300 mb-4">{phase.description}</p>
                    <div className="text-blue-400 font-semibold">{phase.duration}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact & Results */}
            <div className="mb-16">
              <div className="flex items-center justify-center mb-8">
                <Award className="w-6 h-6 text-green-400 mr-3" />
                <h2 className="text-3xl font-bold text-white">Impact & Results</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedCase.impact.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-green-600/20 to-blue-600/20 p-6 rounded-xl border border-green-600/30"
                  >
                    <div className="flex items-center text-green-400 mb-2">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      <span className="font-semibold">Result</span>
                    </div>
                    <p className="text-white text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Technologies Used</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {selectedCase.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-6 py-3 bg-gray-800 text-white rounded-full text-lg border border-gray-700 hover:border-blue-600 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-12 rounded-2xl border border-blue-600/20 text-center mb-16">
              <blockquote className="text-2xl text-white mb-6 italic">"{selectedCase.testimonial.text}"</blockquote>
              <div className="text-blue-400 font-semibold text-lg">{selectedCase.testimonial.author}</div>
              <div className="text-gray-400">{selectedCase.testimonial.position}</div>
            </div>

            {/* Extra spacing */}
            <div className="h-32"></div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CaseStudy
