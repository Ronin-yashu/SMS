const page = async ({params}) => {
    const { username } = await params;
  return (
    <div>
        User Page for {username}
    </div>
  )
}

export default page