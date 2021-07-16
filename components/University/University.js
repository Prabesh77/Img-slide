import UniversityItem from "./UniversityItem";

const University = (props) => {
  
  return (
       <div>
      <UniversityItem
        name={props.items[0].name}
        subject={props.items[0].subject}
        dec= {props.items[0].dec}
      />
       <UniversityItem
        name={props.items[1].name}
        subject={props.items[1].subject}
        dec= {props.items[1].dec}
      />
       <UniversityItem
        name={props.items[2].name}
        subject={props.items[2].subject}
        dec= {props.items[2].dec}
      />
       <UniversityItem
        name={props.items[3].name}
        subject={props.items[3].subject}
        dec= {props.items[3].dec}
      />
    </div>
  )
}

export default University
