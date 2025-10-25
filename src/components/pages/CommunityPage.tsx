import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { GraduationCap, Buildings, Path, Users, Lightning, Heart } from '@phosphor-icons/react'

export function CommunityPage() {
  const initiatives = [
    {
      icon: GraduationCap,
      title: 'Great Dyke School Initiative',
      investment: '$400,000',
      description: 'Comprehensive investment in education infrastructure providing quality learning facilities for the Mberengwa community',
      impact: [
        'Modern classroom construction',
        'Educational resource provision',
        'Teacher support programs',
        'Scholarship opportunities',
      ],
    },
    {
      icon: Buildings,
      title: 'Tsikira Mall Complex',
      investment: 'Major Development',
      description: 'Commercial hub creating economic opportunities and modern retail infrastructure for the region',
      impact: [
        'Retail space development',
        'SME business opportunities',
        'Employment creation',
        'Community gathering space',
      ],
    },
    {
      icon: Path,
      title: 'Infrastructure Development',
      investment: 'Ongoing',
      description: 'Critical road improvements and power infrastructure enhancing connectivity and quality of life',
      impact: [
        'Road construction and repair',
        'Power line installation',
        'Transportation access',
        'Business logistics support',
      ],
    },
  ]

  const impactStats = [
    {
      icon: Users,
      number: '358',
      label: 'Direct Jobs Created',
      description: 'Full-time employment opportunities across all operations',
    },
    {
      icon: GraduationCap,
      number: '$400K',
      label: 'Education Investment',
      description: 'Committed to Great Dyke School infrastructure',
    },
    {
      icon: Lightning,
      number: '100%',
      label: 'Local Priority',
      description: 'Community members receive employment preference',
    },
    {
      icon: Heart,
      number: '15+',
      label: 'Years of Service',
      description: 'Sustained community engagement and development',
    },
  ]

  return (
    <div className="pt-20">
      <section className="bg-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Community & Infrastructure
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Building sustainable prosperity through education, infrastructure, and local empowerment
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-secondary">Our Community Commitment</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              TK Mining Consolidation recognizes that true success extends beyond operational excellence. 
              We are deeply invested in the long-term prosperity of Mberengwa District through strategic 
              initiatives in education, infrastructure, and economic development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {impactStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-xl">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full gold-gradient flex items-center justify-center">
                      <Icon size={32} className="text-white" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-base font-semibold text-secondary mb-2">
                      {stat.label}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.description}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {initiatives.map((initiative, index) => {
              const Icon = initiative.icon
              return (
                <Card 
                  key={index} 
                  className="border-2 border-primary/20 hover:border-primary transition-all hover:shadow-xl"
                >
                  <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-lg gold-gradient flex items-center justify-center flex-shrink-0">
                        <Icon size={32} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                          <CardTitle className="text-2xl">{initiative.title}</CardTitle>
                          <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                            {initiative.investment}
                          </div>
                        </div>
                        <p className="text-muted-foreground">{initiative.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-3 text-secondary">Key Impact Areas:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {initiative.impact.map((item, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-center gap-3 p-3 bg-muted rounded-lg"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                          <span className="text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Sustainable Community Development</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">Local Employment First</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We prioritize hiring from Mberengwa District, ensuring that economic benefits 
                    flow directly to local families. Our 358 employees represent a commitment to 
                    community prosperity.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Skills training programs</li>
                    <li>• Career advancement opportunities</li>
                    <li>• Competitive compensation packages</li>
                    <li>• Safe working conditions</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">Environmental Responsibility</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Sustainable mining practices ensure that we extract value while preserving 
                    the environment for future generations. Our operations follow strict 
                    environmental standards.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Land rehabilitation programs</li>
                    <li>• Water conservation measures</li>
                    <li>• Waste management systems</li>
                    <li>• Environmental monitoring</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center bg-white/10 rounded-lg p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Long-Term Vision</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our commitment to Mberengwa extends beyond mining operations. Through education, 
                infrastructure, and sustainable business practices, we are building a foundation 
                for generational prosperity and community resilience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
