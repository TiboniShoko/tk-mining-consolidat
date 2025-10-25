import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function AboutPage() {
  const timeline = [
    {
      year: '2010',
      title: 'Foundation',
      description: 'Established retail and initial mining operations in Mberengwa',
    },
    {
      year: '2022',
      title: 'Milling Plant',
      description: 'Commissioned state-of-the-art milling plant for ore processing',
    },
    {
      year: '2024',
      title: 'Cyanidation Expansion',
      description: 'Added advanced cyanidation tanks for gold extraction optimization',
    },
    {
      year: '2025',
      title: 'Diversification',
      description: 'Expanded into agriculture and real estate development',
    },
  ]

  return (
    <div className="pt-20">
      <section className="bg-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              About TK Mining Consolidation
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              A legacy of entrepreneurship, innovation, and community development 
              built over 15 years in Zimbabwe's mining heartland
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
              <div>
                <Badge className="mb-4 bg-primary text-white">Founder & CEO</Badge>
                <h2 className="text-4xl font-bold mb-4 text-secondary">
                  Anderson Tsikira
                </h2>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Visionary Entrepreneur & Community Builder from Mberengwa, Midlands Province
                </p>
                <div className="h-1 w-24 bg-primary rounded mb-6"></div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Anderson Tsikira's journey began with a vision to transform Mberengwa's mining 
                  potential into sustainable prosperity for the region. With extensive background 
                  in security and corporate management, he founded TK Mining Consolidation in 2010, 
                  establishing the foundation for what would become one of the region's most 
                  comprehensive mining operations.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Beyond business success, Anderson is deeply committed to community development, 
                  having invested over $400,000 in education infrastructure through the Great Dyke 
                  School initiative and creating 358 direct employment opportunities across the 
                  company's operations.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-2 border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-secondary">Core Values</h3>
                    <ul className="space-y-3">
                      {[
                        'Sustainable resource extraction',
                        'Community-first development',
                        'Transparent partnership models',
                        'Innovation in mining technology',
                        'Environmental stewardship',
                      ].map((value, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{value}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-secondary">Leadership Background</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• Security & Corporate Management Expert</li>
                      <li>• 15+ Years Mining Industry Experience</li>
                      <li>• Community Development Advocate</li>
                      <li>• Strategic Business Diversification Leader</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 text-secondary">Business Journey</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  From retail foundations to comprehensive mining consolidation — a timeline of growth and innovation
                </p>
              </div>

              <div className="relative">
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-transparent transform -translate-x-1/2"></div>

                <div className="space-y-12">
                  {timeline.map((item, index) => (
                    <div 
                      key={item.year}
                      className={`relative grid md:grid-cols-2 gap-8 items-center ${
                        index % 2 === 0 ? '' : 'md:flex-row-reverse'
                      }`}
                    >
                      <div className={index % 2 === 0 ? 'md:text-right' : 'md:col-start-2'}>
                        <Card className="border-2 border-primary/20 hover:border-primary transition-all hover:shadow-xl">
                          <CardContent className="p-6">
                            <div className="text-3xl font-bold text-primary mb-2">
                              {item.year}
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-secondary">
                              {item.title}
                            </h3>
                            <p className="text-muted-foreground">
                              {item.description}
                            </p>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                        <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">
              A Vision for the Future
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              TK Mining Consolidation continues to expand its footprint across multiple sectors, 
              maintaining its commitment to sustainable growth, community empowerment, and 
              operational excellence. With strategic diversification into agriculture and real estate, 
              the company is positioned to drive regional development for decades to come.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                { number: '15', label: 'Years of Excellence' },
                { number: '$6.35M', label: 'Active Projects' },
                { number: '358', label: 'Jobs Created' },
              ].map((stat, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
