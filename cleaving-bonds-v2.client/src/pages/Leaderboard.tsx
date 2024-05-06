import { Stack } from 'react-bootstrap'
import useSWR from 'swr'
import TeamScore from '@/components/TeamScore'
import { fetcher } from '@/components/fetcher'

export default function Leaderboard() {
  const { data: bronzeTeams } = useSWR('/api/Leaderboard/bronze', fetcher)
  const { data: silverTeams } = useSWR('/api/Leaderboard/silver', fetcher)
  const { data: goldTeams } = useSWR('/api/Leaderboard/gold', fetcher)

  console.log(bronzeTeams)

  return (
    <>
      <h1>Leaderboard</h1>
      <div className="row">
        <div className="col">
          <h1>Bronze</h1>
          <Stack gap={3}>
            {bronzeTeams?.map((team, index) => (
              <TeamScore
                key={team.name}
                name={team.name}
                bronzeScore={team.bronzeScore}
                silverScore={team.silverScore}
                goldScore={team.goldScore}
                totalScore={team.totalScore}
                placement={index + 1}
              />
            ))}
          </Stack>
        </div>
        <div className="col">
          <h1>Silver</h1>
          <Stack gap={3}>
            {silverTeams?.map((team, index) => (
              <TeamScore
                key={team.name}
                name={team.name}
                bronzeScore={team.bronzeScore}
                silverScore={team.silverScore}
                goldScore={team.goldScore}
                totalScore={team.totalScore}
                placement={index + 1}
              />
            ))}
          </Stack>
        </div>
        <div className="col">
          <h1>Gold</h1>
          <Stack gap={3}>
            {goldTeams?.map((team, index) => (
              <TeamScore
                key={team.name}
                name={team.name}
                bronzeScore={team.bronzeScore}
                silverScore={team.silverScore}
                goldScore={team.goldScore}
                totalScore={team.totalScore}
                placement={index + 1}
              />
            ))}
          </Stack>
        </div>
      </div>
    </>
  )
}
