import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, HardHat, Users, TrendUp, Briefcase } from '@phosphor-icons/react'
import { TKLogo } from '@/components/TKLogo'
import type { PageType } from '@/App'

interface HomePageProps {
  onNavigate: (page: PageType) => void
}

export function HomePage({ onNavigate }: HomePageProps) {
  const highlights = [
    {
      icon: HardHat,
      title: 'Mining Operations',
      description: '15 claims across Mberengwa District specializing in gold, antimony, chrome, and lead',
    },
    {
      icon: Users,
      title: 'Community Impact',
      description: '358 direct jobs created with ongoing investments in education and infrastructure',
    },
    {
      icon: TrendUp,
      title: 'Growth Trajectory',
      description: '15 years of consistent expansion from retail to comprehensive mining consolidation',
    },
    {
      icon: Briefcase,
      title: 'Investment Ready',
      description: '$6.35M in projects with 50% equity opportunities and 12-30 month payback',
    },
  ]

  return (
    <div className="pt-20">
      <section className="hero-gradient relative min-h-[600px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 mining-texture opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-secondary/50"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center py-24">
          <div className="mx-auto mb-6 animate-in fade-in zoom-in duration-700 inline-block">
            <TKLogo size={96} />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight animate-in fade-in slide-in-from-bottom duration-700 delay-100">
            TK Mining Consolidation
          </h1>
          
          <div className="text-2xl md:text-3xl mb-3 text-primary font-semibold animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            Anderson Tsikira
          </div>
          
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            Visionary Entrepreneur & Community Builder
          </p>
          
          <div className="text-base md:text-lg mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom duration-700 delay-400">
            Leading Zimbabwe's mining future through sustainable operations, community development, 
            and strategic partnerships across Mberengwa District
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom duration-700 delay-500">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              onClick={() => {
                onNavigate('operations')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              Explore Our Operations
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-secondary shadow-xl hover:shadow-2xl transition-all"
              onClick={() => {
                onNavigate('investment')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              Investment Opportunities
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">
              Building Zimbabwe's Mining Future
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From humble beginnings in 2010 to a comprehensive mining conglomerate, 
              TK Mining Consolidation represents excellence, sustainability, and community-first values
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <Card 
                  key={index} 
                  className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl group"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-lg gold-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-secondary group-hover:text-primary transition-colors">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '15', label: 'Mining Claims', suffix: '' },
              { number: '154', label: 'Total Hectares', suffix: 'ha' },
              { number: '358', label: 'Employees', suffix: '' },
              { number: '67', label: 'Partnership Rate', suffix: '%' },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                  <span className="text-2xl">{stat.suffix}</span>
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover investment opportunities in Zimbabwe's thriving mining sector with proven leadership and sustainable practices
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            onClick={() => {
              onNavigate('investment')
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            View Investment Projects
            <ArrowRight size={20} className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  )
}
