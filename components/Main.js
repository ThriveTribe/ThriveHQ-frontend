import useResource from '../hooks/useResource';
import CreateForm from '@/components/CreateForm';
import ReportTable from '@/components/ReportTable';

export default function Main(props) {
  const { resources, deleteResource } = useResource();

    return(
        <main className='py-6 bg-emerald-100'>
        <CreateForm locationCreateHandler={props.locationCreateHandler}/>
        <ReportTable stands={resources || []} deleteStand={deleteResource} />
      </main >
    )
}