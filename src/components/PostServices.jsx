import '../styles/PostServices.css';
import postalServicesData from '../data/postalServicesData'

function PostServices() {

  const PostService = ((props) => {
    return (
      <div className='post-service'>
        <img src={props.logo} className='post-logo' alt='' />
        <p>{props.name}</p>
      </div>
    )
  })

  return (
    <div className='post-services'>
      <div className='container'>
        <div className='inner-post-services'>
          {postalServicesData.map((postalService) => (
            <PostService
              key={postalService.id}
              name={postalService.name}
              logo='../assets/novaposhta-logo.png'
            />
          ))}
          postal services that can be tracked
        </div>
      </div>
    </div>
  );
}

export default PostServices;