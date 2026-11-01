import { Mail, MapPin, Phone, Send } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Liked what you saw? Feel free to reach out!
        </p>

        <div className="gap-12">
          <div className="space-y-8 w-fit mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-left">E-mail</h4>
                    <a
                      href="mailto:davigregnanim@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      davigregnanim@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-left">Phone</h4>
                    <a
                      href="tel:+5516997057176"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +55 (16) 99705-7176
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-left">Location</h4>
                    <span className="text-muted-foreground">
                      Indaiatuba, SP, Brazil
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <div className="flex space-x-4 w-fit mx-auto">
                <a
                  href="https://www.linkedin.com/in/davigregnanim/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-card border border-input text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-current"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>

                <a
                  href="https://instagram.com/davigregnanim/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-card border border-input text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-current"
                  >
                    <path d="M12 0C8.74 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.74 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.257 0 3.664-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.257-.014-3.664-.073-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.664.014 15.257 0 12 0zm0 5.838a6.162 6.162 0 1 1 0 12.324 6.162 6.162 0 0 1 0-12.324zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
