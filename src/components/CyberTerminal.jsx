import { useState, useRef, useEffect } from 'react';
import { Play, Activity } from 'lucide-react';

const CyberTerminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: 'TANAY-OS Security Kernel v4.19-arch // Initialized Threat Intel Lab & Adversarial AI Defense Engine',
    },
    {
      type: 'info',
      text: 'Type "help" or click one of the quick commands below to explore security operations.',
    },
  ]);
  const [isExecuting, setIsExecuting] = useState(false);
  const terminalEndRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    setHistory((prev) => [...prev, { type: 'user', text: `$ ${cmd}` }]);
    setIsExecuting(true);

    setTimeout(() => {
      let output = [];
      switch (trimmed) {
        case 'help':
          output = [
            { type: 'info', text: 'AVAILABLE COMMANDS:' },
            { type: 'text', text: '  whoami         - Print operative profile & education' },
            { type: 'text', text: '  skills         - List programming, tools & security stacks' },
            { type: 'text', text: '  garak-test     - Run simulated Adversarial LLM Prompt Injection test' },
            { type: 'text', text: '  recon-scan     - Execute autonomous Subfinder & Nuclei recon pipeline' },
            { type: 'text', text: '  patent-iot     - Inspect Silent Heart Attack Warning System specs' },
            { type: 'text', text: '  experience     - Display CREST leadership & corporate job simulations' },
            { type: 'text', text: '  contact        - Output verified communication endpoints' },
            { type: 'text', text: '  clear          - Clear terminal console' },
          ];
          break;

        case 'whoami':
          output = [
            { type: 'highlight', text: '>> IDENTITY: Tanay Tanishk (AI-Enhanced Ethical Hacker & Security Engineer)' },
            { type: 'text', text: '>> ACADEMICS: B.Tech CSE (Cybersecurity) @ Lovely Professional University (Expected 2029)' },
            { type: 'text', text: '>> STANDING: Top 1% of cohort globally | Research Assistant in AI Threat Lab' },
            { type: 'text', text: '>> COMPETITIVE: JEE Advanced qualified (83.89 percentile JEE Mains)' },
            { type: 'text', text: '>> TARGET: Seeking Summer 2027 Internship (SWE / Cyber / AI Defense)' },
          ];
          break;

        case 'skills':
          output = [
            { type: 'highlight', text: '[PROGRAMMING]: Python, SQL, HTML, CSS, JavaScript, C/C++, Rust, Bash Scripting' },
            { type: 'highlight', text: '[CYBER TOOLING]: Kali Linux, Nuclei, Subfinder, Burp Suite Pro, Metasploit, Nmap, Wireshark' },
            { type: 'highlight', text: '[AI & LLM SEC]: Adversarial ML, Prompt Injection, Garak Framework, OWASP LLM Top 10' },
            { type: 'highlight', text: '[OFFENSIVE SEC]: Red Teaming, Web Pen Testing, Network Security, Active Directory' },
            { type: 'highlight', text: '[CLOUD & DEVOPS]: AWS IAM, GCP, Kubernetes, CI/CD Security' },
          ];
          break;

        case 'garak-test':
          output = [
            { type: 'warning', text: '[*] Initializing Garak LLM Vulnerability Probe against Mock Target LLM...' },
            { type: 'text', text: '  > Injecting test probes: DAN v11.0, Tree-of-Thought Jailbreaks, System Prompt Leak...' },
            { type: 'text', text: '  > [OWASP LLM01 - Prompt Injection]: PASS (Mitigated with input guardrails)' },
            { type: 'text', text: '  > [OWASP LLM06 - Sensitive Info Disclosure]: PASS (0 Exfiltrated Tokens)' },
            { type: 'success', text: '[+] TEST COMPLETED: Target model robust against adversarial ML exfiltration attacks.' },
          ];
          break;

        case 'recon-scan':
          output = [
            { type: 'warning', text: '[*] Spawning Autonomous Bug Bounty Recon Engine (Bash + Subfinder + Nuclei)...' },
            { type: 'text', text: '  > subfinder -d target.scope -silent | dnsx -resp -silent' },
            { type: 'text', text: '  > nuclei -l live_hosts.txt -t cves/ -severity critical,high -silent' },
            { type: 'success', text: '[+] Pipeline Active: Continuous monitoring deployed across global scopes.' },
          ];
          break;

        case 'patent-iot':
          output = [
            { type: 'highlight', text: '>> PROJECT: Silent Heart Attack Warning System (Patent Pending)' },
            { type: 'text', text: '>> DOMAIN: IoT HealthTech Security / Hardware & Biometric Sensor Integration' },
            { type: 'text', text: '>> ARCHITECTURE: Multi-sensor array + real-time cloud data telemetry + edge alerts' },
            { type: 'success', text: '>> STATUS: Patent application filed & actively under development' },
          ];
          break;

        case 'experience':
          output = [
            { type: 'highlight', text: '1. CREST (Apr 2026 – Present) | Head of Marketing • Full-time Student Org' },
            { type: 'highlight', text: '2. Freelance Bug Bounty Hunter (2025 — Present) | Independent Penetration Tester' },
            { type: 'highlight', text: '3. Corporate Simulations (2026) | JPMorgan Chase, Mastercard & Deloitte Australia' },
          ];
          break;

        case 'contact':
          output = [
            { type: 'info', text: 'COMMUNICATION CHANNELS:' },
            { type: 'text', text: '  Email:    tkkrtanay00@gmail.com' },
            { type: 'text', text: '  Phone:    +91 83682-11098' },
            { type: 'text', text: '  LinkedIn: https://linkedin.com/in/tanay-tanishk' },
            { type: 'text', text: '  GitHub:   https://github.com/its-tanay003' },
            { type: 'text', text: '  Location: Gurugram, Haryana, India (Relocation: Global)' },
          ];
          break;

        case 'clear':
          setHistory([]);
          setIsExecuting(false);
          return;

        default:
          output = [
            { type: 'error', text: `Command not recognized: "${cmd}". Type "help" for a list of commands.` },
          ];
          break;
      }

      setHistory((prev) => [...prev, ...output]);
      setIsExecuting(false);
    }, 350);

    setInput('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(input);
  };

  return (
    <section id="terminal-section" className="section" style={{ paddingTop: '4rem', paddingBottom: '6rem' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="cyber-tag" style={{ marginBottom: '0.75rem' }}>
            <Activity size={14} /> LIVE THREAT INTEL & OPERATIONS
          </div>
          <h2 style={{ marginBottom: '0.5rem' }}>Interactive Security Terminal</h2>
          <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
            Simulate security audits, verify credentials, and query system diagnostics in real time.
          </p>
        </div>

        <div
          className="cyber-card"
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            background: 'rgba(3, 7, 18, 0.95)',
            border: '1px solid rgba(0, 240, 255, 0.3)',
            boxShadow: '0 0 40px rgba(0, 240, 255, 0.15), inset 0 0 20px rgba(0, 240, 255, 0.05)',
            padding: '1.5rem',
            borderRadius: '12px',
          }}
        >
          {/* Terminal Window Header */}
          <div className="terminal-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <div className="terminal-dots">
              <span className="terminal-dot dot-red" />
              <span className="terminal-dot dot-yellow" />
              <span className="terminal-dot dot-green" />
              <span style={{ marginLeft: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                tanay@ai-threat-lab: ~/security-ops
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-green)', fontSize: '0.75rem' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-green)', boxShadow: '0 0 8px var(--accent-green)' }} />
              SECURE_SESSION: AES_256
            </div>
          </div>

          {/* Terminal Logs Output */}
          <div
            style={{
              minHeight: '260px',
              maxHeight: '380px',
              overflowY: 'auto',
              padding: '1rem 0',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.88rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            {history.map((line, index) => {
              let color = 'var(--text-primary)';
              if (line.type === 'system') color = 'var(--accent-cyan)';
              if (line.type === 'user') color = '#38bdf8';
              if (line.type === 'info') color = 'var(--accent-amber)';
              if (line.type === 'highlight') color = 'var(--accent-purple)';
              if (line.type === 'success') color = 'var(--accent-green)';
              if (line.type === 'warning') color = '#fb923c';
              if (line.type === 'error') color = 'var(--accent-red)';

              return (
                <div key={index} style={{ color, wordBreak: 'break-word', lineHeight: '1.6' }}>
                  {line.text}
                </div>
              );
            })}
            <div ref={terminalEndRef} />
          </div>

          {/* Quick Command Action Badges */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              marginBottom: '1rem',
            }}
          >
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', alignSelf: 'center' }}>
              Quick Run:
            </span>
            {[
              { label: 'garak-test', desc: 'LLM Probe' },
              { label: 'recon-scan', desc: 'Bug Bounty' },
              { label: 'whoami', desc: 'Profile' },
              { label: 'skills', desc: 'Arsenal' },
              { label: 'patent-iot', desc: 'Patent Specs' },
              { label: 'clear', desc: 'Clear' },
            ].map((btn, bIdx) => (
              <button
                key={bIdx}
                type="button"
                onClick={() => handleCommand(btn.label)}
                disabled={isExecuting}
                style={{
                  background: 'rgba(0, 240, 255, 0.08)',
                  border: '1px solid rgba(0, 240, 255, 0.25)',
                  color: 'var(--accent-cyan)',
                  padding: '0.3rem 0.65rem',
                  borderRadius: '6px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 240, 255, 0.2)';
                  e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 240, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.25)';
                }}
              >
                $ {btn.label}
              </button>
            ))}
          </div>

          {/* Interactive Input Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ color: 'var(--accent-green)', fontFamily: 'var(--font-mono)', fontWeight: 'bold' }}>
              tanay@sec-ops:~$
            </span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="type 'help', 'garak-test', 'whoami'..."
              disabled={isExecuting}
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
              }}
            />
            <button
              type="submit"
              disabled={isExecuting || !input.trim()}
              style={{
                background: 'rgba(0, 240, 255, 0.15)',
                border: '1px solid var(--accent-cyan)',
                color: 'var(--accent-cyan)',
                padding: '0.4rem 0.8rem',
                borderRadius: '6px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                cursor: isExecuting ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
              }}
            >
              <Play size={12} /> EXEC
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CyberTerminal;
