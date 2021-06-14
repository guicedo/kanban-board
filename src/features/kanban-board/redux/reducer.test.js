import actions from './actions';

import reducer from './reducer';

describe('kanbanBoard reducer', () => {
  it('CREATE_CARD', () => {
    const initialState = {
      cards: [],
      lastCardId: 0,
    };
    const card = {
      title: "title test",
      listId: 1,
    };
    const res = reducer(initialState, actions.createCard(card));
    expect(res.lastCardId).toEqual(1);
    expect(res.cards[0].id).toEqual(1);
    expect(res.cards[0].title).toEqual("title test");
    expect(res.cards[0].listId).toEqual(1);
  });

  it('CREATE_LIST', () => {
    const initialState = {
      lists: [{
        title: "📝  To Do",
        backgroundColor: "#5CC4FF",
        id: 1,
      },
      {
        title: "💻  In Progress",
        backgroundColor: "#945AD1",
        id: 2,
      },
      {
        title: "🚀  Done",
        backgroundColor: "#59D090",
        id: 3,
      }],
      lastListId: 3
    };
    const list = {
      title: "list test",
      backgroundColor: "#FFF",
    };
    const res = reducer(initialState, actions.createList(list));
    expect(res.lastListId).toEqual(4);
    expect(res.lists[3].id).toEqual(4);
    expect(res.lists[3].title).toEqual("list test");
    expect(res.lists[3].backgroundColor).toEqual("#FFF");
  });

  it('CREATE_TAG', () => {
    const initialState = {
      tags: [],
      lastTagId: 0
    };
    const tag = {
      backgroundColor: "#FFF",
      value: "tag test",
      cardsId: [0,1,2],
    };

    const res = reducer(initialState, actions.createTag(tag));
    expect(res.lastTagId).toEqual(1);
    expect(res.tags[0].id).toEqual(1);
    expect(res.tags[0].value).toEqual("tag test");
    expect(res.tags[0].backgroundColor).toEqual("#FFF");
    expect(res.tags[0].cardsId).toEqual([0,1,2]);
  });

  it('UPDATE_CARD', () => {
    const initialState = {
      cards: [{
        title: "title test",
        listId: 1,
        id: 1,
      }],
    };
    const card = {
      title: "new title test",
      listId: 2,
      id: 1,
    };

    const res = reducer(initialState, actions.updateCard(card));
    expect(res.cards.length).toEqual(1);
    expect(res.cards[0].title).toEqual("new title test");
    expect(res.cards[0].listId).toEqual(2);
  });

  it('UPDATE_LIST', () => {
    const initialState = {
      lists: [{
        title: "📝  To Do",
        backgroundColor: "#5CC4FF",
        id: 1,
      },
      {
        title: "💻  In Progress",
        backgroundColor: "#945AD1",
        id: 2,
      },
      {
        title: "🚀  Done",
        backgroundColor: "#59D090",
        id: 3,
      },
      {
        title: "new list test",
        backgroundColor: "#FFF",
        id: 4,
      }],
    };
    const list = {
      title: "new list test",
      backgroundColor: "purple",
      id: 4,
    };

    const res = reducer(initialState, actions.updateList(list));
    expect(res.lists.length).toEqual(4);
    expect(res.lists[0].title).toEqual("📝  To Do");
    expect(res.lists[0].id).toEqual(1);
    expect(res.lists[0].backgroundColor).toEqual("#5CC4FF");
    expect(res.lists[3].title).toEqual("new list test");
    expect(res.lists[3].id).toEqual(4);
    expect(res.lists[3].backgroundColor).toEqual("purple");
  });

  it('UPDATE_TAG - ADD A NEW CARD', () => {
    const initialState = {
      tags: [{
        backgroundColor: "#FFF",
        value: "tag test",
        cardsId: [0,1,2],
        id: 0,
      }],
    };
    const tag = {
      backgroundColor: "#FFF",
      value: "tag test",
      cardsId: [3],
      tagId: 0,
    };

    const res = reducer(initialState, actions.updateTag(tag));
    expect(res.tags[0].cardsId.length).toEqual(4);
  });

  it('UPDATE_TAG - REMOVE FROM A CARD', () => {
    const initialState = {
      tags: [{
        backgroundColor: "#FFF",
        value: "tag test",
        cardsId: [0,1,2],
        id: 0,
      }],
    };
    const tag = {
      backgroundColor: "#FFF",
      value: "tag test",
      cardsId: 1,
      tagId: 0,
    };

    const res = reducer(initialState, actions.updateTag(tag));
    expect(res.tags[0].cardsId.length).toEqual(2);
  });

  it('DELETE_LIST', () => {
    const initialState = {
      lists: [{
        title: "📝  To Do",
        backgroundColor: "#5CC4FF",
        id: 1,
      },
      {
        title: "💻  In Progress",
        backgroundColor: "#945AD1",
        id: 2,
      },
      {
        title: "🚀  Done",
        backgroundColor: "#59D090",
        id: 3,
      }],
    };

    const res = reducer(initialState, actions.deleteList(1));
    expect(res.lists.length).toEqual(2);
  });

  it('DELETE_CARD', () => {
    const initialState = {
      cards: [{
        title: "title test",
        listId: 1,
        id: 1,
      }],
    };

    const res = reducer(initialState, actions.deleteCard(1));
    expect(res.cards.length).toEqual(0);
  });
});
