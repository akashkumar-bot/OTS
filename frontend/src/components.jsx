import { useState } from 'react'
import { ArrowRight, Check, LogOut, Menu, Settings, X } from 'lucide-react'

import { appData } from './appData'

export function Logo() {
  return (
    <a className="logo" href={appData.urls.welcome}>
      <span className="logo-mark">
        <Check size={18} />
      </span>
      Testing System
    </a>
  )
}

export function Header({ simple = false }) {
  const [open, setOpen] = useState(false)
  const loggedIn = Boolean(appData.name)

  return (
    <header className="site-header">
      <Logo />
      {!simple && (
        <>
          <button
            className="menu-button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? <X /> : <Menu />}
          </button>
          <nav className={open ? 'nav open' : 'nav'}>
            {loggedIn ? (
              <>
                <a href={appData.urls.home}>Dashboard</a>
                <a href={appData.urls.history}>History</a>
                <a href={appData.urls.settings}>
                  <Settings size={16} /> Settings
                </a>
                <a className="outline-button" href={appData.urls.logout}>
                  <LogOut size={16} /> Log out
                </a>
              </>
            ) : (
              <>
                <a href="#features">Features</a>
                <a href={appData.urls.login}>Log in</a>
                <a className="primary-button small" href={appData.urls.signup}>
                  Get started <ArrowRight size={16} />
                </a>
              </>
            )}
          </nav>
        </>
      )}
    </header>
  )
}

export function Footer() {
  return (
    <footer>
      <Logo />
      <p>Learn. Practice. Grow.</p>
      <span>© 2026 Testing System</span>
    </footer>
  )
}

export function Field({ label, ...inputProps }) {
  return (
    <label className="field">
      <span>{label}</span>
      <input required {...inputProps} />
    </label>
  )
}

export function Feature({ icon, title, text }) {
  return (
    <article className="feature">
      <span className="feature-icon">{icon}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}

export function Stat({ label, value, icon, tone }) {
  return (
    <div className="stat">
      <span className={tone}>{icon}</span>
      <div>
        <b>{value}</b>
        <small>{label}</small>
      </div>
    </div>
  )
}

export function SettingsCard({ icon, title, description, children }) {
  return (
    <section className="settings-card">
      <div className="settings-card-head">
        <span>{icon}</span>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="settings-card-body">{children}</div>
    </section>
  )
}
