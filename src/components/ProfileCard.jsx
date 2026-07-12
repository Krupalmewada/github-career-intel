export default function ProfileCard({user}){
 return(
    <>
    <img src={user.avatar_url} alt={user.name} />
    <div>{user.name}</div>
    <div>{user.bio}</div>
    <div>{user.location}</div>
    <div>{user.public_repos}</div>
    <div>{user.followers}</div>
    <a href={user.html_url} target="_blank">View GitHub Profile</a>
    </>
 )
}