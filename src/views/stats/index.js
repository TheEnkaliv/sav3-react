import Box from '@material-ui/core/Box'
import TopBar from 'src/components/top-bar'
import useTranslation from 'src/translations/use-translation'
import IconButton from '@material-ui/core/IconButton'
import Divider from '@material-ui/core/Divider'
import {useHistory} from 'react-router-dom'
import ArrowBack from '@material-ui/icons/ArrowBack'
import Typography from '@material-ui/core/Typography'
import usePeersStats from 'src/hooks/use-peers-stats'
import Peer from './components/peer'
import CircularProgress from '@material-ui/core/CircularProgress'

/**
 * @returns {JSX.Element}
 */
function Stats () {
  const t = useTranslation()
  const history = useHistory()

  const peers = usePeersStats()
  console.log('Stats', {peers})

  return (
    <div>
      <TopBar>
        <Box pr={1}>
          <IconButton onClick={() => history.goBack()}>
            <ArrowBack />
          </IconButton>
        </Box>
        <Typography noWrap variant='h6'>
          {t['Connected peers stats']()}
        </Typography>
      </TopBar>
      <Feed peers={peers} />
    </div>
  )
}

/**
 * @param {object} props
 * @param {string} props.peers
 * @returns {JSX.Element}
 */
function Feed ({peers} = {}) {
  const t = useTranslation()
  if (!peers.length) {
    return (
      <Box width='100%' py={4} display='flex' justifyContent='center' alignItems='center'>
        <CircularProgress size={24} />
        <Box p={0.5} />
        <Typography variant='body1'>{t['Connecting to peers']() + '...'}</Typography>
      </Box>
    )
  }

  const peerComponents = []

  for (const peer of peers) {
    peerComponents.push(<Peer peer={peer} key={peer.peerCid + peer.port} />)
    peerComponents.push(<Divider key={peer.peerCid + peer.port + 'feed divider'} />)
  }

  return <div>{peerComponents}</div>
}

export default Stats
