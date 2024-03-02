
function revertText(Text) {
    const Response = Text.split('').reverse().join(''); 
    return Response;
}
export default class ServiceString {

    async revertText(Text) {
        const Output = revertText(Text);
        return Output;

    }


}
