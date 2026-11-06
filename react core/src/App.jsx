import React, { Component, useState } from 'react';
import DynamicDashboard from '../coursework/sitting_1/exercises/dynamic_dashboard.jsx';
import RevisionPanel from '../coursework/sitting_1/exercises/revision_1_1.jsx';
import DashboardShell from '../coursework/sitting_1/exercises/dashboard_shell.jsx';

// Robust Error Boundary so a broken exercise never crashes the entire lab
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.activeTab !== this.props.activeTab && this.state.hasError) {
      this.setState({ hasError: false, error: null });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '1.5rem',
          background: 'rgba(239, 68, 68, 0.1)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          borderRadius: '12px',
          color: '#fca5a5'
        }}>
          <h3 style={{ marginBottom: '0.5rem', color: '#ef4444' }}>⚠️ Rendering Error in Component</h3>
          <p style={{ fontFamily: 'monospace', fontSize: '0.9rem', whiteSpace: 'pre-wrap' }}>
            {this.state.error?.message || String(this.state.error)}
          </p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            style={{
              marginTop: '1rem',
              padding: '0.4rem 0.8rem',
              background: '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            Retry Render
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  const [activeTab, setActiveTab] = useState('topic_1_2');

  const tabInfo = {
    topic_1_2: {
      title: '🎯 Topic 1.2: Dynamic Dashboard (Props & Composition)',
      description: 'Editing coursework/sitting_1/exercises/dynamic_dashboard.jsx will update this screen instantly!'
    },
    revision_1_1: {
      title: '✅ Topic 1.1 Revision: Doctor Quick-Panel',
      description: 'Live output rendered from coursework/sitting_1/exercises/revision_1_1.jsx'
    },
    shell_1_1: {
      title: '📦 Topic 1.1: Original Static Shell',
      description: 'Live output rendered from coursework/sitting_1/exercises/dashboard_shell.jsx'
    }
  };

  const currentTab = tabInfo[activeTab] || tabInfo.topic_1_2;

  return (
    <div className="lab-container">
      {/* Top Navigation */}
      <header className="lab-navbar">
        <div className="lab-brand">
          <span className="lab-brand-logo">⚡ CureSlot Lab</span>
          <span className="lab-badge">Live Output Engine</span>
        </div>

        {/* View Switcher Tabs */}
        <div className="lab-topic-selector">
          <button
            type="button"
            className={`lab-tab-btn ${activeTab === 'topic_1_2' ? 'active' : ''}`}
            onClick={() => setActiveTab('topic_1_2')}
          >
            Topic 1.2: Props & Composition
          </button>
          <button
            type="button"
            className={`lab-tab-btn ${activeTab === 'revision_1_1' ? 'active' : ''}`}
            onClick={() => setActiveTab('revision_1_1')}
          >
            Topic 1.1: Doctor Panel
          </button>
          <button
            type="button"
            className={`lab-tab-btn ${activeTab === 'shell_1_1' ? 'active' : ''}`}
            onClick={() => setActiveTab('shell_1_1')}
          >
            Topic 1.1: Static Shell
          </button>
        </div>
      </header>

      {/* Main Workspace Canvas */}
      <main className="lab-main">
        <div className="lab-info-banner">
          <div>
            <h2><span>{currentTab.title}</span></h2>
            <p><span>{currentTab.description}</span></p>
          </div>
          <div className="lab-live-indicator">
            <span className="live-dot"></span>
            Vite HMR Active
          </div>
        </div>

        {/* The Live Render Canvas with Error Boundary */}
        <section className="preview-window">
          <div className="preview-window-header">
            <span>Live Component Render</span>
            <span>Localhost:5173</span>
          </div>

          <ErrorBoundary activeTab={activeTab}>
            <div key={activeTab}>
              {activeTab === 'topic_1_2' && <DynamicDashboard />}
              {activeTab === 'revision_1_1' && <RevisionPanel />}
              {activeTab === 'shell_1_1' && <DashboardShell />}
            </div>
          </ErrorBoundary>
        </section>
      </main>
    </div>
  );
}
