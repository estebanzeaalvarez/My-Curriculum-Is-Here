import React, { useState } from 'react';
import { Shield, Code, Terminal, User, Briefcase, Award, ChevronRight, Github, Mail, Linkedin, ExternalLink } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About Me', icon: <User size={18} /> },
    { id: 'skills', label: 'Skills', icon: <Terminal size={18} /> },
    { id: 'certs', label: 'Certificates', icon: <Award size={18} /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase size={18} /> },
    { id: 'projects', label: 'Projects', icon: <Code size={18} /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return (  
          <div className="space-y-6 animate-fadeIn">
            <h2 className="text-2xl font-bold text-emerald-400 border-b border-gray-700 pb-2">Perfil Profesional</h2>
            <p className="text-gray-300 leading-relaxed">
              Soy un profesional en transición hacia el área de Tecnología, combinando una sólida experiencia previa en 
              <span className="text-emerald-400 font-semibold"> Customer Success </span> 
              con una formación rigurosa en <span className="text-cyan-400 font-semibold">Ciberseguridad y Desarrollo de Software (Full Stack)</span>.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Mi background en servicio al cliente me ha dotado de habilidades excepcionales para la resolución de problemas, 
              gestión de crisis y comunicación efectiva. Ahora, aplico esta mentalidad analítica para proteger infraestructuras 
              como Analista de Ciberseguridad y para construir soluciones robustas como Desarrollador Front y Backend.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <a 
                href="https://github.com/estebanzeaalvarez" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded border border-gray-600 transition-colors"
              >
                <Github size={18} /> GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/esteban-zea-alvarez" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded border border-gray-600 transition-colors"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
              <a 
                href="https://wa.me/573135320094" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-2 rounded transition-colors font-medium"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.001 5.45-4.435 9.884-9.886 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.122.551 4.19 1.597 6.01L0 24l6.135-1.61a11.782 11.782 0 005.91 1.594h.005c6.632 0 12.045-5.414 12.045-12.05 0-3.212-1.252-6.234-3.522-8.505z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        );
      case 'skills':
        return (
          <div className="space-y-6 animate-fadeIn">
            <h2 className="text-2xl font-bold text-emerald-400 border-b border-gray-700 pb-2">Technical Skills</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Ciberseguridad */}
              <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                <div className="flex items-center gap-2 mb-4 text-cyan-400">
                  <Shield size={24} />
                  <h3 className="text-xl font-semibold">Cybersecurity (SOC)</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2"><ChevronRight size={14} className="text-emerald-500"/> Monitoreo y Gestión SIEM (Wazuh, Splunk)</li>
                  <li className="flex items-center gap-2"><ChevronRight size={14} className="text-emerald-500"/> Análisis de Red (Wireshark, Suricata)</li>
                  <li className="flex items-center gap-2"><ChevronRight size={14} className="text-emerald-500"/> Respuesta a Incidentes (NIST 800-61)</li>
                  <li className="flex items-center gap-2"><ChevronRight size={14} className="text-emerald-500"/> Inteligencia de Amenazas e IoCs</li>
                  <li className="flex items-center gap-2"><ChevronRight size={14} className="text-emerald-500"/> Frameworks: MITRE ATT&CK, Cyber Kill Chain</li>
                </ul>
              </div>

              {/* Desarrollo Backend */}
              <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                <div className="flex items-center gap-2 mb-4 text-emerald-400">
                  <Terminal size={24} />
                  <h3 className="text-xl font-semibold">Backend</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2"><ChevronRight size={14} className="text-emerald-500"/> Python</li>
                  <li className="flex items-center gap-2"><ChevronRight size={14} className="text-emerald-500"/> Django Framework</li>
                  <li className="flex items-center gap-2"><ChevronRight size={14} className="text-emerald-500"/> Bases de Datos Relacionales</li>
                  <li className="flex items-center gap-2"><ChevronRight size={14} className="text-emerald-500"/> SQL</li>
                  <li className="flex items-center gap-2"><ChevronRight size={14} className="text-emerald-500"/> Git & GitHub</li>
                </ul>
              </div>

              {/* Desarrollo Frontend */}
              <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                <div className="flex items-center gap-2 mb-4 text-purple-400">
                  <Code size={24} />
                  <h3 className="text-xl font-semibold">Frontend</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2"><ChevronRight size={14} className="text-emerald-500"/> React.js</li>
                  <li className="flex items-center gap-2"><ChevronRight size={14} className="text-emerald-500"/> JavaScript (ES6+)</li>
                  <li className="flex items-center gap-2"><ChevronRight size={14} className="text-emerald-500"/> HTML5 & CSS3</li>
                  <li className="flex items-center gap-2"><ChevronRight size={14} className="text-emerald-500"/> Diseño Responsivo</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 'certs':
        return (
          <div className="space-y-6 animate-fadeIn">
            <h2 className="text-2xl font-bold text-emerald-400 border-b border-gray-700 pb-2">Educación y Certificaciones</h2>
            
            <div className="space-y-4">
              <div className="bg-gray-800 p-5 rounded-lg border-l-4 border-cyan-500">
                <h3 className="text-lg font-bold text-white">Acelerador en Ciberseguridad</h3>
                <p className="text-cyan-400 text-sm">NODO Universidad EAFIT</p>
                <p className="text-gray-400 mt-2 text-sm">
                  Formación intensiva en operaciones SOC, gestión de logs (SIEM), correlación de eventos, 
                  respuesta a incidentes (IR) y tácticas de defensa.
                </p>
              </div>

              <div className="bg-gray-800 p-5 rounded-lg border-l-4 border-emerald-500 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-full">
                  <h3 className="text-lg font-bold text-white">Desarrollo de Software y Tecnologías</h3>
                </div>
                <div className="flex flex-col gap-1 text-sm text-gray-300">
                  <span className="font-semibold text-emerald-300">• Backend con Django</span>
                  <span className="text-xs text-gray-500">Expedición: ene. 2024</span>
                </div>
                <div className="flex flex-col gap-1 text-sm text-gray-300">
                  <span className="font-semibold text-emerald-300">• React.js</span>
                  <span className="text-xs text-gray-500">Expedición: ene. 2024</span>
                </div>
                <div className="flex flex-col gap-1 text-sm text-gray-300">
                  <span className="font-semibold text-emerald-300">• Bases de Datos y SQL</span>
                  <span className="text-xs text-gray-500">Expedición: mar. 2024</span>
                </div>
                <div className="flex flex-col gap-1 text-sm text-gray-300">
                  <span className="font-semibold text-emerald-300">• Python y Programación Frontend</span>
                  <span className="text-xs text-gray-500">Expedición: 2023 - 2024</span>
                </div>
                <div className="flex flex-col gap-1 text-sm text-gray-300">
                  <span className="font-semibold text-emerald-300">• Git y GitHub</span>
                  <span className="text-xs text-gray-500">Expedición: ene. 2024</span>
                </div>
              </div>
            </div>
          </div>
        );
      case 'experience':
        return (
          <div className="space-y-6 animate-fadeIn">
            <h2 className="text-2xl font-bold text-emerald-400 border-b border-gray-700 pb-2">Experiencia Previa Transversal</h2>
            
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-purple-500 rounded-l-lg"></div>
              <h3 className="text-lg font-bold text-white">Especialista en Customer Success</h3>
              <p className="text-purple-400 text-sm mb-3">Transición hacia Ciberseguridad y Desarrollo</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <ChevronRight size={16} className="text-purple-500 mt-1 flex-shrink-0"/> 
                  <span><strong>Resolución de Problemas Críticos:</strong> Gestión y escalamiento de incidentes de clientes, traduciendo problemas técnicos a soluciones funcionales (habilidad clave para el Nivel 1 de SOC).</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight size={16} className="text-purple-500 mt-1 flex-shrink-0"/> 
                  <span><strong>Comunicación Efectiva:</strong> Documentación detallada de casos y reportes ejecutivos para diferentes stakeholders.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight size={16} className="text-purple-500 mt-1 flex-shrink-0"/> 
                  <span><strong>Adaptabilidad:</strong> Capacidad comprobada para aprender nuevos flujos de trabajo rápidamente, lo que facilitó mi inmersión en programación y seguridad ofensiva/defensiva.</span>
                </li>
              </ul>
            </div>
          </div>
        );
      case 'projects':
        return (
          <div className="space-y-6 animate-fadeIn">
            <h2 className="text-2xl font-bold text-emerald-400 border-b border-gray-700 pb-2">Proyectos Destacados</h2>
            <p className="text-gray-400 italic text-sm mb-4">
              [Nota: Esta sección se actualizará con los repositorios de GitHub en el siguiente paso]
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card de proyecto de ejemplo 1 */}
              <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 hover:border-emerald-500 transition-colors group">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">App de Gestión (Frontend)</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  Aplicación desarrollada en React simulando un dashboard interactivo. Implementación de estado y componentes reutilizables.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-900 text-xs text-emerald-400 rounded">React</span>
                  <span className="px-2 py-1 bg-gray-900 text-xs text-blue-400 rounded">CSS</span>
                </div>
                <button className="flex items-center gap-1 text-sm text-gray-300 hover:text-white">
                  <ExternalLink size={14} /> Ver Repositorio
                </button>
              </div>

              {/* Card de proyecto de ejemplo 2 */}
              <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 hover:border-cyan-500 transition-colors group">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">API Segura (Backend)</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  Desarrollo de una API RESTful utilizando Django y Python con integración de base de datos SQL y prácticas de seguridad básicas.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-900 text-xs text-emerald-400 rounded">Django</span>
                  <span className="px-2 py-1 bg-gray-900 text-xs text-yellow-400 rounded">Python</span>
                  <span className="px-2 py-1 bg-gray-900 text-xs text-blue-400 rounded">SQL</span>
                </div>
                <button className="flex items-center gap-1 text-sm text-gray-300 hover:text-white">
                  <ExternalLink size={14} /> Ver Repositorio
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans p-4 md:p-8">
      <div className="max-w-5xl mx-auto bg-gray-950 rounded-xl shadow-2xl overflow-hidden border border-gray-800">
        
        {/* Cabecera / Hero */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 border-b border-gray-800 flex flex-col md:flex-row items-center gap-6">
          <div className="w-32 h-32 rounded-full border-4 border-emerald-500 bg-gray-800 flex items-center justify-center flex-shrink-0 overflow-hidden">
            <img 
              src="/myAvatar.png" 
              alt="Esteban Zea Avatar" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-extrabold text-white mb-2 tracking-tight">Esteban Zea</h1>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-3">
              <span className="bg-cyan-900/50 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium border border-cyan-800/50">
                Analista de Ciberseguridad
              </span>
              <span className="text-gray-500">|</span>
              <span className="bg-emerald-900/50 text-emerald-400 px-3 py-1 rounded-full text-sm font-medium border border-emerald-800/50">
                Full Stack Developer
              </span>
            </div>
            <p className="text-gray-400 max-w-xl text-sm">
              Traduciendo la experiencia en atención al cliente hacia la protección de infraestructuras críticas 
              y el desarrollo de aplicaciones web eficientes.
            </p>
          </div>
        </div>

        {/* Contenido Principal */}
        <div className="flex flex-col md:flex-row">
          
          {/* Navegación lateral */}
          <div className="w-full md:w-64 bg-gray-900 p-4 border-b md:border-b-0 md:border-r border-gray-800">
            <nav className="flex md:flex-col gap-2 overflow-x-auto pb-2 md:pb-0">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all whitespace-nowrap md:whitespace-normal
                    ${activeTab === tab.id 
                      ? 'bg-gray-800 text-emerald-400 border-l-4 border-emerald-500' 
                      : 'text-gray-400 hover:bg-gray-800 hover:text-white border-l-4 border-transparent'
                    }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Área de contenido */}
          <div className="flex-1 p-6 md:p-8 min-h-[400px]">
            {renderContent()}
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}} />
    </div>
  );
};

export default App;
