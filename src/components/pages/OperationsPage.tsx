import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { HardHat, Users, MapPin, ChartBar } from '@phosphor-icons/react'

export function OperationsPage() {
  const stats = [
    { icon: MapPin, number: '15', label: 'Total Claims', sublabel: '12 registered + 3 pending' },
    { icon: ChartBar, number: '154', label: 'Total Area', sublabel: 'Hectares' },
    { icon: Users, number: '358', label: 'Total Staff', sublabel: 'Across all sites' },
    { icon: HardHat, number: '67%', label: 'Partnership Rate', sublabel: 'Collaborative model' },
  ]

  const operations = [
    {
      hub: 'Mberengwa Turn-Off',
      claims: 8,
      area: '87 ha',
      staff: 198,
      minerals: ['Gold', 'Antimony'],
      partnerships: '70%',
      description: 'Primary operational hub with advanced processing facilities and established partnerships',
      highlights: [
        'State-of-the-art milling plant',
        'Cyanidation processing tanks',
        'Multiple active gold claims',
        'Antimony extraction operations',
      ],
    },
    {
      hub: 'Mataga Area',
      claims: 7,
      area: '67 ha',
      staff: 160,
      minerals: ['Chrome', 'Lead', 'Gold'],
      partnerships: '64%',
      description: 'Diversified operations focused on chrome and lead extraction with gold exploration',
      highlights: [
        'Chrome ore processing',
        'Lead extraction facilities',
        'Gold exploration programs',
        'Community employment initiatives',
      ],
    },
  ]

  return (
    <div className="pt-20">
      <section className="bg-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Mining Operations
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Two strategic operational hubs delivering excellence in mineral extraction 
              across Mberengwa District
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-xl">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full gold-gradient flex items-center justify-center">
                      <Icon size={32} className="text-white" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-lg font-semibold text-secondary mb-1">
                      {stat.label}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.sublabel}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-secondary">Operational Hubs</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Strategic locations with comprehensive infrastructure and proven mineral resources
              </p>
            </div>

            <Tabs defaultValue="mberengwa" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="mberengwa">Mberengwa Turn-Off</TabsTrigger>
                <TabsTrigger value="mataga">Mataga Area</TabsTrigger>
              </TabsList>

              {operations.map((op, index) => (
                <TabsContent 
                  key={index} 
                  value={index === 0 ? 'mberengwa' : 'mataga'}
                  className="animate-in fade-in slide-in-from-bottom duration-500"
                >
                  <Card className="border-2 border-primary/20">
                    <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
                      <div className="flex items-start justify-between flex-wrap gap-4">
                        <div>
                          <CardTitle className="text-3xl mb-2">{op.hub}</CardTitle>
                          <p className="text-muted-foreground">{op.description}</p>
                        </div>
                        <Badge className="bg-primary text-white">
                          {op.partnerships} Partnership Rate
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div>
                          <h3 className="text-xl font-bold mb-4 text-secondary">Key Statistics</h3>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                              <span className="text-muted-foreground">Total Claims</span>
                              <span className="font-bold text-primary text-lg">{op.claims}</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                              <span className="text-muted-foreground">Total Area</span>
                              <span className="font-bold text-primary text-lg">{op.area}</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                              <span className="text-muted-foreground">Workforce</span>
                              <span className="font-bold text-primary text-lg">{op.staff}</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl font-bold mb-4 text-secondary">Minerals Extracted</h3>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {op.minerals.map((mineral, idx) => (
                              <Badge 
                                key={idx} 
                                variant="outline" 
                                className="border-primary text-primary text-base px-4 py-2"
                              >
                                {mineral}
                              </Badge>
                            ))}
                          </div>

                          <h3 className="text-xl font-bold mb-4 text-secondary">Operational Highlights</h3>
                          <ul className="space-y-2">
                            {op.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                <span className="text-muted-foreground">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Partnership Model
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              TK Mining operates on a collaborative partnership model with a 67% partnership rate 
              across all operations. We believe in sharing success with claim owners and local 
              communities, creating sustainable value for all stakeholders.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Transparent Terms', description: 'Clear agreements and fair revenue sharing' },
                { title: 'Local Empowerment', description: 'Priority employment for community members' },
                { title: 'Sustainable Practices', description: 'Environmental and social responsibility' },
              ].map((item, index) => (
                <Card key={index} className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-3 text-primary">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
