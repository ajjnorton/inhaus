import { tassign } from 'tassign';
import { FETCH_SOURCE_DATA, ADD_PERSON, ADD_LISTINGS, FETCH_PERSONS, REMOVE_PERSON } from './actions';

// todo : integrate with th person data service

const photoURL = [
    { id: 1, url: 'gavin.png' },
    { id: 2, url: 'jack.png' },
    { id: 3, url: 'nelson.png' },
    { id: 4, url: 'richard.png' },
    { id: 5, url: 'dinesh.png' },
    { id: 6, url: 'erlich.png' },
    { id: 7, url: 'gilfoyle.png' },
    { id: 8, url: 'donald.png' },
];

export interface IAppState {
    listingsx: any[];
    persons: any[];
    questions: any[];
    roles: any[];
    sites: any[];
}

export const INITIAL_STATE: IAppState = {
    listingsx: [],
    persons: [],
    questions: [],
    roles: [],
    sites: []

};

export function rootReducer(state: IAppState, action): IAppState {


    switch (action.type) {
        // add questions
        
        case ADD_LISTINGS:
            const newListings = action.sourceData;
            console.log(action);
            return tassign(state, { listingsx: state.listingsx.concat(newListings) });
        // get the init data
        /*
        case FETCH_SOURCE_DATA:

            const newSourcePerson = action.sourceData.person;
            const newQuestions = action.sourceData.questions;
            return tassign(state, {
                sourcePerson: state.sourcePerson.concat(newSourcePerson),
                questions: state.questions.concat(newQuestions)
            });
            */
        // add a terget person
        //add comment
        case ADD_PERSON:
            const newPerson = {
                id: action.id,
                first_name: action.first_name,
                last_name: action.last_name,
                email: action.email,
                role: action.role,
                parent: action.parent,
                sites: action.sites,
                roleName: action.roleName,
                photoURL: action.photoURL,
                fullName: action.fullName,
                siteName: action.siteName

            };
            return tassign(state, { persons: state.persons.concat(newPerson) });
        // remove a target person
        case REMOVE_PERSON:
            return tassign(state, {
                persons: state.persons.filter(p => p.id !== action.id)
            });
        // fet all persons
        /*
        case FETCH_PERSONS:
            const newPersons = action.persons;
            const newRoles = action.roles;
            const newSites = action.sites;


            newPersons.forEach(person => {
                person.fullName = person.first_name + ' ' + person.last_name;
                person.photoURL = photoURL[person.id - 1].url;
                person.roleName = newRoles[person.role - 1].name;
                person.siteName = newSites[person.sites - 1].name;
            });

            return tassign(state, {
                persons: state.persons.concat(newPersons)
            });
            */
           case FETCH_PERSONS:
            //console.log(action);
            const newPersons = action.people;
            return tassign(state, {
                persons: state.persons.concat(newPersons)
            });
    }
    return state;
}
