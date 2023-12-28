export async function makeAsyncData() {
    console.log(useRoute().path);
    useState('firstRouter').value = useRoute().path;

    //Imagine code below is an inside composable
    await new Promise<void>((resolve) => resolve());

    console.log(useRoute().path);
    useState('lastRoute').value = useRoute().path;
}
