import useResource from '../hooks/useResource';

export default function Main(props) {
  const { resources, deleteResource } = useResource();

    return(
        <main className='py-6 bg-zinc-900'>
        </main >
    )
}