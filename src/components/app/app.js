
/// import Chat from '../chat/chat'
/// import Field from '../field/field'


function superUsefulll () {

}

export default class App {
	constructor({
		el,
		data,
	}) {
		this.el = el;
	}

	render() {
		this.el.append(`
			<h1>Приложение запущено</h1>
		`);
	}
}