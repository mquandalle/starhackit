import Checkit from 'checkit';

export default class {

    constructor( payload ) {
        this.payload = payload;
    }

    execute() {
        let rules = new Checkit( {
            username: [ 'required', 'alphaDash', 'minLength:3', 'maxLength:64'],
            password: [ 'required', 'alphaDash', 'minLength:6', 'maxLength:64' ],
            email: [ 'required', 'email', 'minLength:6', 'maxLength:64' ]
        } );

        return rules.run( this.payload );
    }
}
