import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table'
import { EnvelopeSimple, TrendUp, Clock, CurrencyDollar } from '@phosphor-icons/react'

export function InvestmentPage() {
  const projects = [
    {
      name: 'Mberengwa Gold Expansion',
      mineral: 'Gold',
      investment: '$1,200,000',
      equity: '50%',
      payback: '18 months',
      status: 'Active',
    },
    {
      name: 'Antimony Processing Plant',
      mineral: 'Antimony',
      investment: '$850,000',
      equity: '50%',
      payback: '24 months',
      status: 'Active',
    },
    {
      name: 'Mataga Chrome Operations',
      mineral: 'Chrome',
      investment: '$950,000',
      equity: '50%',
      payback: '20 months',
      status: 'Active',
    },
    {
      name: 'Lead Extraction Facility',
      mineral: 'Lead',
      investment: '$650,000',
      equity: '50%',
      payback: '22 months',
      status: 'Active',
    },
    {
      name: 'Gold Claims Development',
      mineral: 'Gold',
      investment: '$780,000',
      equity: '50%',
      payback: '16 months',
      status: 'Planning',
    },
    {
      name: 'Milling Capacity Upgrade',
      mineral: 'Multi-mineral',
      investment: '$560,000',
      equity: '50%',
      payback: '12 months',
      status: 'Active',
    },
    {
      name: 'Cyanidation Expansion',
      mineral: 'Gold',
      investment: '$480,000',
      equity: '50%',
      payback: '15 months',
      status: 'Planning',
    },
    {
      name: 'Exploration Program',
      mineral: 'Multi-mineral',
      investment: '$420,000',
      equity: '50%',
      payback: '30 months',
      status: 'Planning',
    },
    {
      name: 'Infrastructure Development',
      mineral: 'Support',
      investment: '$460,000',
      equity: '50%',
      payback: '24 months',
      status: 'Active',
    },
  ]

  const totalInvestment = projects.reduce((sum, project) => {
    const amount = parseFloat(project.investment.replace(/[$,]/g, ''))
    return sum + amount
  }, 0)

  const benefits = [
    {
      icon: TrendUp,
      title: 'Proven Track Record',
      description: '15 years of successful mining operations with consistent growth and profitability',
    },
    {
      icon: CurrencyDollar,
      title: 'Fair Equity Terms',
      description: '50% equity offering across all projects with transparent partnership agreements',
    },
    {
      icon: Clock,
      title: 'Fast Payback Period',
      description: '12-30 month payback timelines with clear milestone-based returns',
    },
  ]

  return (
    <div className="pt-20">
      <section className="bg-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Investment Opportunities
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Partner with Zimbabwe's leading mining consolidation for sustainable returns and shared success
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="border-2 border-primary/50 bg-gradient-to-br from-primary/5 to-transparent">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">9</div>
                  <div className="text-lg font-semibold text-secondary mb-1">Active Projects</div>
                  <div className="text-sm text-muted-foreground">Available for partnership</div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/50 bg-gradient-to-br from-primary/5 to-transparent">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    ${(totalInvestment / 1000000).toFixed(2)}M
                  </div>
                  <div className="text-lg font-semibold text-secondary mb-1">Total Investment</div>
                  <div className="text-sm text-muted-foreground">Across all opportunities</div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/50 bg-gradient-to-br from-primary/5 to-transparent">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50%</div>
                  <div className="text-lg font-semibold text-secondary mb-1">Equity Offer</div>
                  <div className="text-sm text-muted-foreground">Fair partnership terms</div>
                </CardContent>
              </Card>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-secondary text-center">Why Invest with TK Mining?</h2>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-xl">
                      <CardContent className="p-6">
                        <div className="w-14 h-14 rounded-lg gold-gradient flex items-center justify-center mb-4">
                          <Icon size={28} className="text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-secondary">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {benefit.description}
                        </p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            <Card className="border-2 border-primary/20 mb-8">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
                <CardTitle className="text-2xl">Investment Portfolio</CardTitle>
                <p className="text-muted-foreground">
                  Comprehensive overview of all available partnership opportunities
                </p>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-bold">Project Name</TableHead>
                        <TableHead className="font-bold">Mineral</TableHead>
                        <TableHead className="font-bold">Investment</TableHead>
                        <TableHead className="font-bold">Equity Offer</TableHead>
                        <TableHead className="font-bold">Payback Period</TableHead>
                        <TableHead className="font-bold">Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {projects.map((project, index) => (
                        <TableRow key={index} className="hover:bg-muted/50">
                          <TableCell className="font-medium">{project.name}</TableCell>
                          <TableCell>
                            <Badge variant="outline" className="border-primary text-primary">
                              {project.mineral}
                            </Badge>
                          </TableCell>
                          <TableCell className="font-semibold text-primary">
                            {project.investment}
                          </TableCell>
                          <TableCell>{project.equity}</TableCell>
                          <TableCell>{project.payback}</TableCell>
                          <TableCell>
                            <Badge 
                              className={
                                project.status === 'Active' 
                                  ? 'bg-green-600 text-white' 
                                  : 'bg-blue-600 text-white'
                              }
                            >
                              {project.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="block lg:hidden p-4 space-y-4">
                  {projects.map((project, index) => (
                    <Card key={index} className="border-2">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-bold text-lg">{project.name}</h3>
                          <Badge 
                            className={
                              project.status === 'Active' 
                                ? 'bg-green-600 text-white' 
                                : 'bg-blue-600 text-white'
                            }
                          >
                            {project.status}
                          </Badge>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Mineral:</span>
                            <Badge variant="outline" className="border-primary text-primary">
                              {project.mineral}
                            </Badge>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Investment:</span>
                            <span className="font-semibold text-primary">{project.investment}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Equity Offer:</span>
                            <span className="font-semibold">{project.equity}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Payback:</span>
                            <span className="font-semibold">{project.payback}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Partner with Us?</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Join TK Mining Consolidation's success story. Contact us today to discuss partnership 
              opportunities and receive detailed project proposals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                onClick={() => window.location.href = 'mailto:andersontsikira@gmail.com'}
              >
                <EnvelopeSimple size={20} className="mr-2" />
                Contact for Partnerships
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-secondary"
                onClick={() => window.location.href = 'tel:+263772614674'}
              >
                Call +263 772 614 674
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
