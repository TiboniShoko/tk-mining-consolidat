import { EnvelopeSimple, Phone, MapPin } from '@phosphor-icons/react'
import { Separator } from '@/components/ui/separator'
import { TKLogo } from '@/components/TKLogo'

export function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <TKLogo size={48} />
              <div>
                <div className="font-bold text-lg">TK Mining</div>
                <div className="text-accent text-sm">Consolidation</div>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              A leading Zimbabwean mining conglomerate founded and led by visionary entrepreneur Anderson Tsikira.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">Operations</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">Community Impact</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">Investment Opportunities</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">Contact Information</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <EnvelopeSimple size={20} className="text-primary mt-0.5 flex-shrink-0" />
                <a 
                  href="mailto:anderson@tsikiramining.com" 
                  className="text-gray-300 hover:text-primary transition-colors break-all"
                >
                  anderson@tsikiramining.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-primary mt-0.5 flex-shrink-0" />
                <a 
                  href="tel:+263772614674" 
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  +263 772 614 674
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  Mberengwa District, Midlands Province, Zimbabwe
                </span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-white/10 mb-6" />

        <div className="text-center text-sm text-gray-400">
          <p>© 2025 TK Mining Consolidation | A Legacy of Growth & Excellence</p>
        </div>
      </div>
    </footer>
  )
}
