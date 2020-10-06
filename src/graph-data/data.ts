import {
  IConcept as Concept,
  ConceptConnection,
  ConceptLayer,
  ConceptState,
} from '../concept-exercise-graph/concept-types'

export const data: {
  concepts: Concept[]
  layout: ConceptLayer[]
  connections: ConceptConnection[]
} & {
  exercises: {
    slug: string
    uuid: string
    concepts: string[]
    prerequisites: string[]
  }[]
} = {
  concepts: [
    {
      index: 0,
      web_url: 'basics-url',
      slug: 'basics',
      status: ConceptState.Completed,
    },
    {
      index: 1,
      web_url: 'basics-url',
      slug: 'booleans',
      status: ConceptState.Unlocked,
    },
    {
      index: 2,
      web_url: 'basics-url',
      slug: 'floating-point-numbers',
      status: ConceptState.Completed,
    },
    {
      index: 3,
      web_url: 'basics-url',
      slug: 'integers',
      status: ConceptState.Completed,
    },
    {
      index: 4,
      web_url: 'basics-url',
      slug: 'bit-manipulation',
      status: ConceptState.Unlocked,
    },
    {
      index: 5,
      web_url: 'basics-url',
      slug: 'closures',
      status: ConceptState.Unlocked,
    },
    {
      index: 6,
      web_url: 'basics-url',
      slug: 'anonymous-functions',
      status: ConceptState.Unlocked,
    },
    {
      index: 7,
      web_url: 'basics-url',
      slug: 'conditionals',
      status: ConceptState.Locked,
    },
    {
      index: 8,
      web_url: 'basics-url',
      slug: 'atoms',
      status: ConceptState.Locked,
    },
    {
      index: 9,
      web_url: 'basics-url',
      slug: 'string-literals',
      status: ConceptState.Locked,
    },
    {
      index: 10,
      web_url: 'basics-url',
      slug: 'lists',
      status: ConceptState.Locked,
    },
    {
      index: 11,
      web_url: 'basics-url',
      slug: 'default-arguments',
      status: ConceptState.Locked,
    },
    {
      index: 12,
      web_url: 'basics-url',
      slug: 'guards',
      status: ConceptState.Locked,
    },
    {
      index: 13,
      web_url: 'basics-url',
      slug: 'multiple-clause-functions',
      status: ConceptState.Locked,
    },
    {
      index: 14,
      web_url: 'basics-url',
      slug: 'pattern-matching',
      status: ConceptState.Locked,
    },
    {
      index: 15,
      web_url: 'basics-url',
      slug: 'tuples',
      status: ConceptState.Locked,
    },
    {
      index: 16,
      web_url: 'basics-url',
      slug: 'strings',
      status: ConceptState.Locked,
    },
    {
      index: 17,
      web_url: 'basics-url',
      slug: 'maps',
      status: ConceptState.Locked,
    },
    {
      index: 18,
      web_url: 'basics-url',
      slug: 'module-attributes-as-constants',
      status: ConceptState.Locked,
    },
    {
      index: 19,
      web_url: 'basics-url',
      slug: 'recursion',
      status: ConceptState.Locked,
    },
    {
      index: 20,
      web_url: 'basics-url',
      slug: 'nil',
      status: ConceptState.Locked,
    },
    {
      index: 21,
      web_url: 'basics-url',
      slug: 'if-conditional',
      status: ConceptState.Locked,
    },
    {
      index: 22,
      web_url: 'basics-url',
      slug: 'charlists',
      status: ConceptState.Locked,
    },
    {
      index: 23,
      web_url: 'basics-url',
      slug: 'case',
      status: ConceptState.Locked,
    },
    {
      index: 24,
      web_url: 'basics-url',
      slug: 'pids',
      status: ConceptState.Locked,
    },
    {
      index: 25,
      web_url: 'basics-url',
      slug: 'processes',
      status: ConceptState.Locked,
    },
    {
      index: 26,
      web_url: 'basics-url',
      slug: 'regular-expressions',
      status: ConceptState.Locked,
    },
    {
      index: 27,
      web_url: 'basics-url',
      slug: 'access-behaviour',
      status: ConceptState.Locked,
    },
    {
      index: 28,
      web_url: 'basics-url',
      slug: 'tail-call-recursion',
      status: ConceptState.Locked,
    },
    {
      index: 29,
      web_url: 'basics-url',
      slug: 'bitstrings',
      status: ConceptState.Locked,
    },
    {
      index: 30,
      web_url: 'basics-url',
      slug: 'enum',
      status: ConceptState.Locked,
    },
    {
      index: 31,
      web_url: 'basics-url',
      slug: 'structs',
      status: ConceptState.Locked,
    },
    {
      index: 32,
      web_url: 'basics-url',
      slug: 'static-access-operator',
      status: ConceptState.Locked,
    },
    {
      index: 33,
      web_url: 'basics-url',
      slug: 'keyword-lists',
      status: ConceptState.Locked,
    },
    {
      index: 34,
      web_url: 'basics-url',
      slug: 'binaries',
      status: ConceptState.Locked,
    },
    {
      index: 35,
      web_url: 'basics-url',
      slug: 'try-rescue',
      status: ConceptState.Locked,
    },
    {
      index: 36,
      web_url: 'basics-url',
      slug: 'errors',
      status: ConceptState.Locked,
    },
    {
      index: 37,
      web_url: 'basics-url',
      slug: 'streams',
      status: ConceptState.Locked,
    },
    {
      index: 38,
      web_url: 'basics-url',
      slug: 'pipe-operator',
      status: ConceptState.Locked,
    },
    {
      index: 39,
      web_url: 'basics-url',
      slug: 'ranges',
      status: ConceptState.Locked,
    },
    {
      index: 40,
      web_url: 'basics-url',
      slug: 'agent',
      status: ConceptState.Locked,
    },
    {
      index: 41,
      web_url: 'basics-url',
      slug: 'list-comprehensions',
      status: ConceptState.Locked,
    },
    {
      index: 42,
      web_url: 'basics-url',
      slug: 'exceptions',
      status: ConceptState.Locked,
    },
    {
      index: 43,
      web_url: 'basics-url',
      slug: 'try-rescue-else-after',
      status: ConceptState.Locked,
    },
  ],
  exercises: [
    {
      slug: 'basics',
      uuid: 'c2W9c6092-9d44-4f21-8138-b873384fd90b',
      concepts: ['basics'],
      prerequisites: [],
    },
    {
      slug: 'booleans',
      uuid: '5e743355-1ef3-4b5d-b59d-03bbc9697e6c',
      concepts: ['booleans'],
      prerequisites: ['basics'],
    },
    {
      slug: 'numbers',
      uuid: 'fee79e03-1496-476f-964f-e60632cb13dc',
      concepts: ['integers', 'floating-point-numbers'],
      prerequisites: ['basics'],
    },
    {
      slug: 'anonymous-functions',
      uuid: '1e3ceb20-715c-4157-9192-13284217affc',
      concepts: ['anonymous-functions', 'closures', 'bit-manipulation'],
      prerequisites: ['basics'],
    },
    {
      slug: 'conditionals',
      uuid: 'b26a2f11-d80a-42b9-881a-3575a83ad211',
      concepts: ['conditionals', 'atoms'],
      prerequisites: ['booleans'],
    },
    {
      slug: 'lists',
      uuid: '3c53b340-680e-45c1-8979-3d79b441a65e',
      concepts: ['lists', 'string-literals'],
      prerequisites: ['booleans'],
    },
    {
      slug: 'multiple-clause-functions',
      uuid: 'ad01ae6c-bdcf-4512-b55b-c552e2b2e41d',
      concepts: ['multiple-clause-functions', 'guards', 'default-arguments'],
      prerequisites: ['conditionals', 'string-literals'],
    },
    {
      slug: 'tuples',
      uuid: 'f729493d-2249-4c10-9c77-da907d10aae1',
      concepts: ['tuples', 'pattern-matching'],
      prerequisites: [
        'atoms',
        'floating-point-numbers',
        'multiple-clause-functions',
      ],
    },
    {
      slug: 'strings',
      uuid: '335df1cf-6aba-4ab6-b5c3-b4305ade09a4',
      concepts: ['strings'],
      prerequisites: ['lists', 'pattern-matching'],
    },
    {
      slug: 'maps',
      uuid: 'e7f3ba2b-a380-45d3-a48d-7ef3dc318a31',
      concepts: ['module-attributes-as-constants', 'maps'],
      prerequisites: [
        'lists',
        'tuples',
        'anonymous-functions',
        'default-arguments',
      ],
    },
    {
      slug: 'recursion',
      uuid: 'e17088c8-c40f-4d4c-b5dd-d32f62b8087b',
      concepts: ['recursion'],
      prerequisites: [
        'lists',
        'pattern-matching',
        'multiple-clause-functions',
        'guards',
      ],
    },
    {
      slug: 'nil',
      uuid: 'b6ae6cb4-f908-436f-916c-fa847e4a82fb',
      concepts: ['nil', 'if-conditional'],
      prerequisites: ['strings', 'booleans'],
    },
    {
      slug: 'charlists',
      uuid: '45f3a08f-fe0f-4e3e-b325-47bad3c74ea4',
      concepts: ['charlists', 'case'],
      prerequisites: ['lists', 'recursion', 'pattern-matching', 'guards'],
    },
    {
      slug: 'processes',
      uuid: 'bec0b00f-816e-443a-af94-14ab4125e505',
      concepts: ['processes', 'pids'],
      prerequisites: ['atoms', 'recursion', 'pattern-matching', 'tuples'],
    },
    {
      slug: 'regular-expressions',
      uuid: '57198686-71c9-4f38-973a-a111435560e7',
      concepts: ['regular-expressions'],
      prerequisites: ['strings'],
    },
    {
      slug: 'access-behaviour',
      uuid: 'ba03df1d-20e4-4527-a8a7-afc97a834975',
      concepts: ['access-behaviour'],
      prerequisites: ['maps', 'strings', 'recursion', 'nil'],
    },
    {
      slug: 'bitstrings',
      uuid: '994c8760-8a58-4ef3-8a28-a0f9182f4d9f',
      concepts: ['bitstrings', 'tail-call-recursion'],
      prerequisites: ['charlists', 'recursion', 'pattern-matching'],
    },
    {
      slug: 'enum',
      uuid: 'be4ef2d1-2851-425d-9780-0326fbcb9845',
      concepts: ['enum'],
      prerequisites: [
        'lists',
        'maps',
        'atoms',
        'tuples',
        'nil',
        'anonymous-functions',
      ],
    },
    {
      slug: 'structs',
      uuid: 'd8d25b93-d918-421e-bb57-cbdaf428d9e2',
      concepts: ['structs', 'static-access-operator'],
      prerequisites: [
        'maps',
        'multiple-clause-functions',
        'pattern-matching',
        'strings',
        'nil',
        'default-arguments',
      ],
    },
    {
      slug: 'keyword-lists',
      uuid: '921a03be-662a-4aea-b8fc-a87d199b1528',
      concepts: ['keyword-lists'],
      prerequisites: [
        'lists',
        'tuples',
        'atoms',
        'if-conditional',
        'default-arguments',
      ],
    },
    {
      slug: 'binary-matching',
      uuid: '1653d476-5354-4d99-a990-1db418a7281c',
      concepts: ['binaries'],
      prerequisites: [
        'strings',
        'pattern-matching',
        'if-conditional',
        'bitstrings',
      ],
    },
    {
      slug: 'errors',
      uuid: 'f660a2e1-bb50-4626-8d3f-6cd7c44fa8db',
      concepts: ['errors', 'try-rescue'],
      prerequisites: ['anonymous-functions', 'pattern-matching', 'structs'],
    },
    {
      slug: 'streams',
      uuid: '3e2f8bc6-20b4-4e8f-a658-9c270342208e',
      concepts: ['streams', 'pipe-operator', 'ranges'],
      prerequisites: ['enum', 'tuples', 'if-conditional'],
    },
    {
      slug: 'agent',
      uuid: '1d6be9ec-5b5c-4c81-9bfa-2e3fc78c978f',
      concepts: ['agent'],
      prerequisites: ['processes', 'maps', 'structs'],
    },
    {
      slug: 'list-comprehensions',
      uuid: 'f8208858-901e-4e5a-9f34-689bf8ad156c',
      concepts: ['list-comprehensions'],
      prerequisites: ['enum', 'lists', 'maps', 'keyword-lists', 'tuples'],
    },
    {
      slug: 'exceptions',
      uuid: '9f698b46-fe8d-4641-a928-bcebfd9678df',
      concepts: ['exceptions'],
      prerequisites: ['access-behaviour', 'errors'],
    },
    {
      slug: 'try-rescue-else-after',
      uuid: '68a8f721-5db4-4b31-95c8-fa6c38f64327',
      concepts: ['try-rescue-else-after'],
      prerequisites: ['io', 'try-rescue'],
    },
  ],
  layout: [
    ['basics'],
    [
      'booleans',
      'integers',
      'floating-point-numbers',
      'anonymous-functions',
      'closures',
      'bit-manipulation',
    ],
    ['conditionals', 'atoms', 'lists', 'string-literals'],
    ['multiple-clause-functions', 'guards', 'default-arguments'],
    ['tuples', 'pattern-matching'],
    ['strings', 'maps', 'module-attributes-as-constants', 'recursion'],
    [
      'nil',
      'if-conditional',
      'charlists',
      'case',
      'processes',
      'pids',
      'regular-expressions',
    ],
    [
      'access-behaviour',
      'bitstrings',
      'tail-call-recursion',
      'enum',
      'structs',
      'static-access-operator',
      'keyword-lists',
    ],
    [
      'binaries',
      'errors',
      'try-rescue',
      'streams',
      'pipe-operator',
      'ranges',
      'agent',
      'list-comprehensions',
    ],
    ['exceptions', 'try-rescue-else-after'],
  ],
  connections: [
    {
      from: 'basics',
      to: 'booleans',
    },
    {
      from: 'basics',
      to: 'integers',
    },
    {
      from: 'basics',
      to: 'floating-point-numbers',
    },
    {
      from: 'basics',
      to: 'anonymous-functions',
    },
    {
      from: 'basics',
      to: 'closures',
    },
    {
      from: 'basics',
      to: 'bit-manipulation',
    },

    {
      from: 'booleans',
      to: 'conditionals',
    },
    {
      from: 'booleans',
      to: 'atoms',
    },

    {
      from: 'booleans',
      to: 'lists',
    },
    {
      from: 'booleans',
      to: 'string-literals',
    },

    {
      from: 'conditionals',
      to: 'multiple-clause-functions',
    },

    {
      from: 'conditionals',
      to: 'guards',
    },
    {
      from: 'conditionals',
      to: 'default-arguments',
    },

    {
      from: 'lists',
      to: 'multiple-clause-functions',
    },
    {
      from: 'multiple-clause-functions',
      to: 'tuples',
    },
    {
      from: 'tuples',
      to: 'strings',
    },
    {
      from: 'tuples',
      to: 'recursion',
    },
    {
      from: 'tuples',
      to: 'maps',
    },
    {
      from: 'strings',
      to: 'nil',
    },
    {
      from: 'strings',
      to: 'regular-expressions',
    },
    {
      from: 'recursion',
      to: 'charlists',
    },
    {
      from: 'recursion',
      to: 'processes',
    },
    {
      from: 'nil',
      to: 'access-behaviour',
    },
    {
      from: 'charlists',
      to: 'bitstrings',
    },
    {
      from: 'nil',
      to: 'enum',
    },
    {
      from: 'nil',
      to: 'structs',
    },
    {
      from: 'nil',
      to: 'keyword-lists',
    },
    {
      from: 'bitstrings',
      to: 'binary-matching',
    },
    {
      from: 'structs',
      to: 'errors',
    },
    {
      from: 'enum',
      to: 'streams',
    },
    {
      from: 'structs',
      to: 'agent',
    },
    {
      from: 'enum',
      to: 'list-comprehensions',
    },
    {
      from: 'keyword-lists',
      to: 'list-comprehensions',
    },
    {
      from: 'errors',
      to: 'exceptions',
    },
    {
      from: 'errors',
      to: 'try-rescue-else-after',
    },
  ],
}
