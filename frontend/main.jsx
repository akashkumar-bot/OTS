import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  History,
  Accessibility,
  LockKeyhole,
  Monitor,
  Moon,
  Palette,
  Save,
  ShieldCheck,
  Sparkles,
  Sun,
  Target,
  Trophy,
  User,
  X,
  XCircle,
} from 'lucide-react'
import { appData as data, csrfToken as csrf } from './src/appData'
import { applyPreferences, readPreferences, savePreferences } from './src/preferences'
import {
  Feature,
  Field,
  Footer,
  Header,
  Logo,
  SettingsCard,
  Stat,
} from './src/components'

applyPreferences(readPreferences())

function Welcome() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow">
              <Sparkles size={15} /> A smarter way to practice
            </div>
            <h1>
              Turn knowledge into <em>confidence.</em>
            </h1>
            <p className="lead">
              Focused quizzes, instant feedback, and a clear view of your progress—all
              in one calm place.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href={data.urls.signup}>
                Start learning free <ArrowRight size={18} />
              </a>
              <a className="text-link" href={data.urls.login}>
                I have an account <ChevronRight size={17} />
              </a>
            </div>
            <div className="trust">
              <span>
                <CheckCircle2 /> No credit card
              </span>
              <span>
                <CheckCircle2 /> Instant results
              </span>
              <span>
                <CheckCircle2 /> Track progress
              </span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="blob blob-one" />
            <div className="blob blob-two" />
            <div className="quiz-card tilted">
              <div className="card-top">
                <span>Quick quiz</span>
                <span>3 of 5</span>
              </div>
              <div className="progress">
                <i style={{ width: '60%' }} />
              </div>
              <h3>Which planet is known as the Red Planet?</h3>
              <div className="fake-option">
                A <span>Venus</span>
              </div>
              <div className="fake-option active">
                B <span>Mars</span>
                <Check size={17} />
              </div>
              <div className="fake-option">
                C <span>Jupiter</span>
              </div>
            </div>
            <div className="score-bubble">
              <Trophy />
              <div>
                <b>Great work!</b>
                <span>4 / 5 correct</span>
              </div>
            </div>
          </div>
        </section>
        <section className="feature-section" id="features">
          <div className="section-heading">
            <span>EVERYTHING YOU NEED</span>
            <h2>Practice that actually moves you forward</h2>
          </div>
          <div className="feature-grid">
            <Feature
              icon={<Target />}
              title="Focused practice"
              text="Choose your challenge and build momentum one question at a time."
            />
            <Feature
              icon={<Award />}
              title="Instant feedback"
              text="See your score right away and know exactly where you stand."
            />
            <Feature
              icon={<BarChart3 />}
              title="Visible progress"
              text="Your complete test history makes improvement easy to spot."
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function AuthLayout({ mode }) {
  const signup = mode === 'signup'
  return (
    <div className="auth-page">
      <Header simple />
      <div className="auth-wrap">
        <section className="auth-art">
          <div>
            <span className="eyebrow light">
              <Sparkles size={15} /> YOUR NEXT CHAPTER
            </span>
            <h1>
              {signup ? (
                <>
                  A little practice.
                  <br />
                  <em>A lot of progress.</em>
                </>
              ) : (
                <>
                  Good to see
                  <br />
                  <em>you again.</em>
                </>
              )}
            </h1>
            <p>
              {signup
                ? 'Create your account and make every question count.'
                : 'Your progress is right where you left it.'}
            </p>
          </div>
          <blockquote>
            “Success is the sum of small efforts, repeated day in and day out.”
            <cite>— Robert Collier</cite>
          </blockquote>
        </section>
        <section className="auth-form-panel">
          <div className="form-box">
            <span className="mobile-logo">
              <Logo />
            </span>
            <h2>{signup ? 'Create your account' : 'Welcome back'}</h2>
            <p>
              {signup
                ? 'Start practicing in less than a minute.'
                : 'Enter your details to continue learning.'}
            </p>
            {data.loginError && (
              <div className="alert error">
                <XCircle size={18} />
                {data.loginError}
              </div>
            )}
            <form method="post" action={signup ? data.urls.register : data.urls.login}>
              <input type="hidden" name="csrfmiddlewaretoken" value={csrf} />
              {signup && (
                <Field
                  label="Full name"
                  name="name"
                  placeholder="e.g. Maya Sharma"
                  autoComplete="name"
                />
              )}
              <Field
                label="Username"
                name="username"
                placeholder="Choose a username"
                autoComplete="username"
              />
              <Field
                label="Password"
                name="password"
                placeholder="At least 6 characters"
                type="password"
                autoComplete={signup ? 'new-password' : 'current-password'}
              />
              <button className="primary-button submit" type="submit">
                {signup ? 'Create account' : 'Log in'} <ArrowRight size={18} />
              </button>
            </form>
            <p className="switch-auth">
              {signup ? 'Already have an account?' : 'New to Testing System?'}{' '}
              <a href={signup ? data.urls.login : data.urls.signup}>
                {signup ? 'Log in' : 'Create account'}
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

function Status() {
  const success = data.userStatus === 2
  const improper = data.userStatus === 3
  return (
    <>
      <Header />
      <main className="center-page">
        <div className="status-card">
          <span className={success ? 'status-icon success' : 'status-icon danger'}>
            {success ? <Check /> : <X />}
          </span>
          <h1>
            {success
              ? 'You’re all set!'
              : improper
                ? 'That request didn’t work'
                : 'Username already taken'}
          </h1>
          <p>
            {success
              ? 'Your Testing System account is ready. Log in to take your first quiz.'
              : improper
                ? 'Please return to sign up and try again.'
                : 'That username belongs to someone else. Try another one.'}
          </p>
          <a
            className="primary-button"
            href={success ? data.urls.login : data.urls.signup}
          >
            {success ? 'Continue to login' : 'Back to sign up'} <ArrowRight size={18} />
          </a>
        </div>
      </main>
    </>
  )
}

function Dashboard() {
  const firstName = data.name.split(' ')[0]
  const preferredSize = Number(readPreferences().quizSize)
  const choices = [
    { n: 1, label: 'Quick warm-up', time: '~1 min', icon: '01' },
    { n: 5, label: 'Focused practice', time: '~5 min', icon: '05' },
    { n: 10, label: 'Full challenge', time: '~10 min', icon: '10' },
    { n: 20, label: 'Deep dive', time: '~20 min', icon: '20' },
  ]
  return (
    <>
      <Header />
      <main className="dashboard container">
        <div className="welcome-row">
          <div>
            <span className="kicker">YOUR LEARNING SPACE</span>
            <h1>
              Good to see you, {firstName} <span>👋</span>
            </h1>
            <p>Pick a challenge and keep your streak moving.</p>
          </div>
          <div className="mini-stats">
            <div>
              <b>{data.attempts}</b>
              <span>Tests taken</span>
            </div>
            <div>
              <b>
                {data.average}
                <small>/10</small>
              </b>
              <span>Average score</span>
            </div>
          </div>
        </div>
        <section>
          <div className="section-title">
            <div>
              <h2>Choose your challenge</h2>
              <p>A little practice goes a long way.</p>
            </div>
            <a href={data.urls.history}>
              View history <ArrowRight size={16} />
            </a>
          </div>
          <div className="challenge-grid">
            {choices.map((c, i) => (
              <a
                className={
                  c.n === preferredSize ? 'challenge-card preferred' : 'challenge-card'
                }
                href={`${data.urls.test}?n=${c.n}`}
                key={c.n}
              >
                <div className={`number-tile shade-${i}`}>{c.icon}</div>
                <div>
                  <h3>
                    {c.label}
                    {c.n === preferredSize && (
                      <small className="preference-badge">Your default</small>
                    )}
                  </h3>
                  <p>
                    {c.n} {c.n === 1 ? 'question' : 'questions'} · {c.time}
                  </p>
                </div>
                <ArrowRight className="card-arrow" />
              </a>
            ))}
          </div>
        </section>
        <section className="tip">
          <span>
            <ShieldCheck />
          </span>
          <div>
            <b>Take your time</b>
            <p>
              There’s no timer. Read each question carefully and trust what you know.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function TestPage() {
  const questions = data.questions || []
  const [answers, setAnswers] = useState({})
  const [current, setCurrent] = useState(0)
  useEffect(() => window.scrollTo({ top: 0, behavior: 'smooth' }), [current])
  if (!questions.length)
    return (
      <>
        <Header />
        <main className="center-page">
          <div className="status-card">
            <BookOpen className="large-icon" />
            <h1>No questions yet</h1>
            <p>Add some questions in Django admin, then come back for a quiz.</p>
            <a className="primary-button" href={data.urls.home}>
              Back to dashboard
            </a>
          </div>
        </main>
      </>
    )
  const q = questions[current],
    picked = answers[q.qid]
  const select = (value) => setAnswers({ ...answers, [q.qid]: value })
  return (
    <div className="test-page">
      <header className="test-header">
        <Logo />
        <div>
          <span>
            {current + 1} of {questions.length}
          </span>
          <div className="test-progress">
            <i style={{ width: `${((current + 1) / questions.length) * 100}%` }} />
          </div>
        </div>
        <a href={data.urls.home} aria-label="Exit test">
          <X />
        </a>
      </header>
      <main className="test-main">
        <form method="post" action={data.urls.calculate}>
          <input type="hidden" name="csrfmiddlewaretoken" value={csrf} />
          {Object.entries(answers).map(([id, value]) => (
            <input key={id} type="hidden" name={`q${id}`} value={value} />
          ))}
          <div className="question-meta">
            <span>QUESTION {String(current + 1).padStart(2, '0')}</span>
            <span>
              <Clock3 size={16} /> Take your time
            </span>
          </div>
          <h1>{q.question}</h1>
          <div className="option-list">
            {q.options.map((o, i) => (
              <button
                className={picked === o.value ? 'option selected' : 'option'}
                type="button"
                onClick={() => select(o.value)}
                key={o.value}
              >
                <span>{String.fromCharCode(65 + i)}</span>
                <b>{o.label}</b>
                <i>{picked === o.value && <Check size={18} />}</i>
              </button>
            ))}
          </div>
          <div className="test-actions">
            <button
              type="button"
              className="back-button"
              disabled={current === 0}
              onClick={() => setCurrent(current - 1)}
            >
              <ArrowLeft /> Previous
            </button>
            {current < questions.length - 1 ? (
              <button
                type="button"
                className="primary-button"
                disabled={!picked}
                onClick={() => setCurrent(current + 1)}
              >
                Next question <ArrowRight />
              </button>
            ) : (
              <button className="primary-button" type="submit" disabled={!picked}>
                Finish quiz <Check />
              </button>
            )}
          </div>
        </form>
      </main>
      <p className="answered-count">
        {Object.keys(answers).length} of {questions.length} answered
      </p>
    </div>
  )
}

function ResultPage() {
  const r = data.result
  if (!r)
    return (
      <>
        <Header />
        <main className="center-page">
          <div className="status-card">
            <BookOpen className="large-icon" />
            <h1>No result yet</h1>
            <p>Complete a quiz to see your score here.</p>
            <a className="primary-button" href={data.urls.home}>
              Take a quiz
            </a>
          </div>
        </main>
      </>
    )
  const percent = r.attempt ? Math.round((r.right / r.attempt) * 100) : 0
  const message =
    percent >= 80
      ? 'Excellent work!'
      : percent >= 50
        ? 'Nice progress!'
        : 'Keep practicing!'
  return (
    <>
      <Header />
      <main className="result-page container">
        <section className="result-hero">
          <span className="result-trophy">
            <Trophy />
          </span>
          <span className="kicker">QUIZ COMPLETE</span>
          <h1>{message}</h1>
          <p>You completed the quiz. Every attempt is a step forward.</p>
          <div className="score-ring" style={{ '--score': `${percent * 3.6}deg` }}>
            <div>
              <b>{r.point}</b>
              <span>out of 10</span>
            </div>
          </div>
        </section>
        <section className="result-card">
          <h2>Your results</h2>
          <div className="result-grid">
            <Stat
              label="Correct"
              value={r.right}
              icon={<CheckCircle2 />}
              tone="green"
            />
            <Stat label="Incorrect" value={r.wrong} icon={<XCircle />} tone="red" />
            <Stat label="Answered" value={r.attempt} icon={<BookOpen />} tone="blue" />
          </div>
          <div className="result-actions">
            <a
              className="primary-button"
              href={`${data.urls.test}?n=${Math.max(r.attempt, 1)}`}
            >
              Try another quiz <ArrowRight />
            </a>
            <a className="outline-button" href={data.urls.history}>
              <History /> View history
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function HistoryPage() {
  return (
    <>
      <Header />
      <main className="history-page container">
        <div className="history-head">
          <div>
            <span className="kicker">YOUR PROGRESS</span>
            <h1>Test history</h1>
            <p>Every attempt tells a story. Here’s yours.</p>
          </div>
          <a className="primary-button" href={`${data.urls.test}?n=5`}>
            Take a new quiz <ArrowRight />
          </a>
        </div>
        <div className="history-summary">
          <div>
            <span>
              <History />
            </span>
            <p>
              Tests completed<b>{data.attempts}</b>
            </p>
          </div>
          <div>
            <span>
              <Trophy />
            </span>
            <p>
              Average score
              <b>
                {data.average}
                <small>/10</small>
              </b>
            </p>
          </div>
        </div>
        <section className="table-card">
          <div className="table-title">
            <h2>Recent attempts</h2>
            <span>{data.results.length} total</span>
          </div>
          {data.results.length ? (
            <div className="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Answered</th>
                    <th>Correct</th>
                    <th>Incorrect</th>
                    <th>Score</th>
                  </tr>
                </thead>
                <tbody>
                  {data.results.map((r) => (
                    <tr key={r.id}>
                      <td>
                        <b>{r.date}</b>
                        <small>{r.time}</small>
                      </td>
                      <td>{r.attempt}</td>
                      <td className="correct">{r.right}</td>
                      <td className="incorrect">{r.wrong}</td>
                      <td>
                        <strong className={r.point >= 7 ? 'score good' : 'score'}>
                          {r.point}
                        </strong>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="empty">
              <BookOpen />
              <h3>No attempts yet</h3>
              <p>Your completed quizzes will appear here.</p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  )
}

function SettingsPage() {
  const [preferences, setPreferences] = useState(readPreferences)
  const [saved, setSaved] = useState(false)
  const updatePreference = (key, value) => {
    const next = { ...preferences, [key]: value }
    setPreferences(next)
    savePreferences(next)
    setSaved(true)
    window.setTimeout(() => setSaved(false), 1800)
  }
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const sync = () => preferences.theme === 'system' && applyPreferences(preferences)
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [preferences])

  return (
    <>
      <Header />
      <main className="settings-page container">
        <div className="settings-heading">
          <span className="kicker">MAKE TESTING SYSTEM YOURS</span>
          <h1>Settings</h1>
          <p>Manage your account, learning defaults, and accessibility preferences.</p>
        </div>
        {data.message && (
          <div className={`settings-notice ${data.messageType}`} role="status">
            {data.messageType === 'success' ? <CheckCircle2 /> : <XCircle />}
            <span>{data.message}</span>
          </div>
        )}
        {saved && (
          <div className="preference-saved" role="status">
            <Check size={16} /> Preferences saved
          </div>
        )}
        <div className="settings-grid">
          <div className="settings-column">
            <SettingsCard
              icon={<User />}
              title="Profile"
              description="The name shown around your learning space."
            >
              <form method="post" action={data.urls.settings}>
                <input type="hidden" name="csrfmiddlewaretoken" value={csrf} />
                <input type="hidden" name="action" value="profile" />
                <Field
                  label="Display name"
                  name="name"
                  defaultValue={data.name}
                  maxLength="30"
                  autoComplete="name"
                />
                <label className="field">
                  <span>Username</span>
                  <input value={data.username} disabled />
                  <small>Usernames cannot be changed.</small>
                </label>
                <button className="primary-button settings-save" type="submit">
                  <Save size={17} /> Save profile
                </button>
              </form>
            </SettingsCard>
            <SettingsCard
              icon={<LockKeyhole />}
              title="Password"
              description="Use at least six characters and keep it private."
            >
              <form method="post" action={data.urls.settings}>
                <input type="hidden" name="csrfmiddlewaretoken" value={csrf} />
                <input type="hidden" name="action" value="password" />
                <Field
                  label="Current password"
                  name="current_password"
                  type="password"
                  autoComplete="current-password"
                />
                <div className="two-fields">
                  <Field
                    label="New password"
                    name="new_password"
                    type="password"
                    minLength="6"
                    autoComplete="new-password"
                  />
                  <Field
                    label="Confirm password"
                    name="confirm_password"
                    type="password"
                    minLength="6"
                    autoComplete="new-password"
                  />
                </div>
                <button className="primary-button settings-save" type="submit">
                  <LockKeyhole size={17} /> Change password
                </button>
              </form>
            </SettingsCard>
          </div>
          <div className="settings-column">
            <SettingsCard
              icon={<Palette />}
              title="Appearance"
              description="Choose how Testing System looks on this device."
            >
              <div className="choice-grid theme-choices">
                {[
                  ['light', 'Light', <Sun />],
                  ['dark', 'Dark', <Moon />],
                  ['system', 'System', <Monitor />],
                ].map(([value, label, icon]) => (
                  <button
                    type="button"
                    className={preferences.theme === value ? 'choice active' : 'choice'}
                    onClick={() => updatePreference('theme', value)}
                    key={value}
                  >
                    {icon}
                    <span>{label}</span>
                    {preferences.theme === value && <Check />}
                  </button>
                ))}
              </div>
            </SettingsCard>
            <SettingsCard
              icon={<BookOpen />}
              title="Quiz defaults"
              description="Set the quiz length highlighted on your dashboard."
            >
              <div className="choice-grid quiz-choices">
                {[1, 5, 10, 20].map((size) => (
                  <button
                    type="button"
                    className={
                      Number(preferences.quizSize) === size ? 'choice active' : 'choice'
                    }
                    onClick={() => updatePreference('quizSize', size)}
                    key={size}
                  >
                    <b>{size}</b>
                    <span>{size === 1 ? 'question' : 'questions'}</span>
                    {Number(preferences.quizSize) === size && <Check />}
                  </button>
                ))}
              </div>
            </SettingsCard>
            <SettingsCard
              icon={<Accessibility />}
              title="Accessibility"
              description="Reduce interface movement and animation."
            >
              <label className="toggle-row">
                <span>
                  <b>Reduced motion</b>
                  <small>Minimizes transitions and animated scrolling.</small>
                </span>
                <input
                  type="checkbox"
                  checked={preferences.reducedMotion}
                  onChange={(e) => updatePreference('reducedMotion', e.target.checked)}
                />
                <i aria-hidden="true" />
              </label>
            </SettingsCard>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    {
      welcome: <Welcome />,
      signup: <AuthLayout mode="signup" />,
      login: <AuthLayout mode="login" />,
      'registration-status': <Status />,
      home: <Dashboard />,
      test: <TestPage />,
      result: <ResultPage />,
      history: <HistoryPage />,
      settings: <SettingsPage />,
    }[data.page] || <Welcome />
  )
}

createRoot(document.getElementById('root')).render(<App />)
