export async function postLetest(context) {

    const response = await fetch('https://basic-blog.teamrabbil.com/api/post-newest');
    const data = await response.json();
    return data
}