import ReportTable from "./ReportTable.js"
import CreateForm from "./CreateForm.js"

function Main(props) {
  return (
      <>
        <CreateForm onSubmit={props.onSubmit} stores={props.stores}/>
        <ReportTable stores={props.stores}/>
      </>
  )
}

export default Main