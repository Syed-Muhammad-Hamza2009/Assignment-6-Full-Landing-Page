export default function AchievementDiv({Achievement, achievementName} : {Achievement:string, achievementName:string}) {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
            <h2 className="font-roboto font-bold text-3xl">{Achievement}</h2>
            <p>{achievementName}</p>
    </div>
  )
}
