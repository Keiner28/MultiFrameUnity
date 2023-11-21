import Switch from '@mui/material/Switch'

interface NavBarProps {
  enable: boolean
  setEnable: (enable: boolean) => void
}

function NavBar({ enable, setEnable }: NavBarProps) {
  return (
    <nav className="header">
      <h1>Mouse Follower</h1>
      <div>
        <label>{enable ? 'On' : 'Off'}</label>
        <Switch
          style={{ color: '#fff' }}
          checked={enable}
          onChange={(e) => setEnable(e.target.checked)}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </div>
    </nav>
  )
}

export default NavBar
