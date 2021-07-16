import ExperienceItem from "./ExperienceItem";

const ExperienceList = (props) => {
  return (
    <div>
      <ExperienceItem
        date={props.items[0].date}
        post={props.items[0].post}
        name={props.items[0].name}
        dec={props.items[0].dec}
      />
       <ExperienceItem
        date={props.items[1].date}
        post={props.items[1].post}
        name={props.items[1].name}
        dec={props.items[1].dec}
      />
       <ExperienceItem
        date={props.items[2].date}
        post={props.items[2].post}
        name={props.items[2].name}
        dec={props.items[2].dec}
      />          
    </div>
  )
}

export default ExperienceList
