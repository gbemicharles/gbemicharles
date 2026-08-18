import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles } from 'lucide-react';
import { terminalCommands } from '../data/portfolioData';
import confetti from 'canvas-confetti';
import './Terminal.css';

export default function Terminal() {
  const [history, setHistory] = useState([
    { type: 'output', text: 'Welcome to Gbemicharles Developer CLI v1.0.0' },
    { type: 'output', text: 'Type "help" to list available commands.' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const terminalEndRef = useRef(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmdText) => {
    const cmd = cmdText.trim().toLowerCase();
    if (!cmd) return;

    setHistory((prevHistory) => {
      const newHistory = [...prevHistory, { type: 'input', text: cmdText }];

      if (cmd === 'clear') {
        return [];
      }

      if (cmd === 'sudo hire') {
        confetti({ particleCount: 120, spread: 90, origin: { y: 0.5 } });
        newHistory.push({
          type: 'output',
          text: '🎉 RECRUITER MODE UNLOCKED! Direct contact protocol initiated. Scroll down to the contact section or email lordgbemicharles@gmail.com!'
        });
      } else if (cmd.startsWith('tonscan')) {
        const address = cmd.split(' ')[1] || 'gbemicharles.ton';
        newHistory.push({
          type: 'output',
          text: `🔍 TONSCAN RESOLVER [${address}]...\n` +
                `--------------------------------------------------\n` +
                `• Owner Address: Gbemicharles\n` +
                `• Balance:       15,482.50 TON ($112,248.12 USD)\n` +
                `• Ecosystem Jettons:\n` +
                `   - GRAM:       1,842,500.00 GRAM\n` +
                `   - NOT:        452,000.00 NOT\n` +
                `   - PEDRO:      10,000,000.00 PEDRO\n` +
                `• Active DApps:  Gramfinity Trade (v2), TONIQ DeFi, MediaRoom OS\n` +
                `• Status:        Contract Verified (Optimal Gas)`
        });
      } else if (cmd === 'matrix') {
        newHistory.push({
          type: 'output',
          text: `⚡ SYSTEM CODES DEPLOYED:\n` +
                `01010110 01100101 01110010 01111001 (Very)\n` +
                `01010111 01100101 01100010 00110011 (Web3)\n` +
                `01000111 01100010 01100101 01101101 (Gbem)\n` +
                `01101001 01100011 01101000 01100001 (icha)\n` +
                `01110010 01101100 01100101 01110015 (rles)\n` +
                `System status: ONLINE (TypeScript/Rust/Solidity compiler operational)`
        });
      } else if (cmd === 'game') {
        newHistory.push({
          type: 'output',
          text: `🎮 RETRO TERMINAL CLICKER DEPLOYED!\n` +
                `Type "sudo hire" to execute the ultimate recruit combo and release the grand prize confetti stream!`
        });
      } else if (terminalCommands[cmd]) {
        newHistory.push({ type: 'output', text: terminalCommands[cmd] });
      } else {
        newHistory.push({
          type: 'output',
          text: `Command not found: "${cmd}". Type "help" for available commands.`
        });
      }
      return newHistory;
    });

    setInputVal('');
  };

  const handleCommand = (e) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  const handleQuickCmd = (cmd) => {
    executeCommand(cmd);
  };

  return (
    <section className="section terminal-section" id="terminal">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Interactive CLI</span>
          <h2 className="section-title">Developer <span className="gradient-text">Terminal</span></h2>
          <p className="section-description">
            Explore my background, skills, and projects using interactive command-line prompts.
          </p>
        </div>

        {/* Quick Command Suggestions */}
        <div className="quick-cmds">
          <span className="quick-cmds-label">Quick Commands:</span>
          {['help', 'whoami', 'skills', 'projects', 'experience', 'sudo hire'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleQuickCmd(cmd)}
              className="quick-cmd-btn font-mono"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Window Box */}
        <div className="terminal-window glass-card font-mono">
          <div className="terminal-topbar">
            <div className="mac-dots">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
            </div>
            <div className="terminal-title">
              <TerminalIcon size={14} /> gbemicharles@developer-workstation:~
            </div>
          </div>

          <div className="terminal-body">
            {history.map((item, index) => (
              <div key={index} className={`terminal-line ${item.type}`}>
                {item.type === 'input' ? (
                  <div className="input-line-display">
                    <span className="prompt-symbol">gbemicharles@portfolio:~$</span>
                    <span className="cmd-text">{item.text}</span>
                  </div>
                ) : (
                  <pre className="output-text">{item.text}</pre>
                )}
              </div>
            ))}

            {/* Live Input Form */}
            <form onSubmit={handleCommand} className="terminal-input-form">
              <span className="prompt-symbol">gbemicharles@portfolio:~$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                className="terminal-input"
                placeholder="type 'help' or 'skills'..."
                autoComplete="off"
                spellCheck="false"
              />
            </form>
            <div ref={terminalEndRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
