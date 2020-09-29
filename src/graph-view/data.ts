import { ExerciseLayersData, ExerciseState } from './exercise-types'

export const data: ExerciseLayersData = [
  [
    {
      index: 0,
      slug: 'basics',
      uuid: 'c29c6092-9d44-4f21-8138-b873384fd90b',
      concepts: ['basics'],
      prerequisites: [],
      status: ExerciseState.Locked,
    },
  ],
  [
    {
      index: 1,
      slug: 'booleans',
      uuid: '5e743355-1ef3-4b5d-b59d-03bbc9697e6c',
      concepts: ['booleans'],
      prerequisites: ['basics'],
      status: ExerciseState.Locked,
    },
    {
      index: 2,
      slug: 'numbers',
      uuid: 'fee79e03-1496-476f-964f-e60632cb13dc',
      concepts: ['integers', 'floating-point-numbers'],
      prerequisites: ['basics'],
      status: ExerciseState.Locked,
    },
    {
      index: 6,
      slug: 'anonymous-functions',
      uuid: '1e3ceb20-715c-4157-9192-13284217affc',
      concepts: ['anonymous-functions', 'closures', 'bit-manipulation'],
      prerequisites: ['basics'],
      status: ExerciseState.Locked,
    },
  ],
  [
    {
      index: 3,
      slug: 'conditionals',
      uuid: 'b26a2f11-d80a-42b9-881a-3575a83ad211',
      concepts: ['conditionals', 'atoms'],
      prerequisites: ['booleans'],
      status: ExerciseState.Locked,
    },
    {
      index: 4,
      slug: 'lists',
      uuid: '3c53b340-680e-45c1-8979-3d79b441a65e',
      concepts: ['lists', 'string-literals'],
      prerequisites: ['booleans'],
      status: ExerciseState.Locked,
    },
  ],
  [
    {
      index: 5,
      slug: 'multiple-clause-functions',
      uuid: 'ad01ae6c-bdcf-4512-b55b-c552e2b2e41d',
      concepts: ['multiple-clause-functions', 'guards', 'default-arguments'],
      prerequisites: ['conditionals', 'string-literals'],
      status: ExerciseState.Locked,
    },
  ],
  [
    {
      index: 7,
      slug: 'tuples',
      uuid: 'f729493d-2249-4c10-9c77-da907d10aae1',
      concepts: ['tuples', 'pattern-matching'],
      prerequisites: [
        'atoms',
        'floating-point-numbers',
        'multiple-clause-functions',
      ],
      status: ExerciseState.Locked,
    },
  ],
  [
    {
      index: 8,
      slug: 'strings',
      uuid: '335df1cf-6aba-4ab6-b5c3-b4305ade09a4',
      concepts: ['strings'],
      prerequisites: ['lists', 'pattern-matching'],
      status: ExerciseState.Locked,
    },
    {
      index: 10,
      slug: 'maps',
      uuid: 'e7f3ba2b-a380-45d3-a48d-7ef3dc318a31',
      concepts: ['module-attributes-as-constants', 'maps'],
      prerequisites: [
        'lists',
        'tuples',
        'anonymous-functions',
        'default-arguments',
      ],
      status: ExerciseState.Locked,
    },
    {
      index: 11,
      slug: 'recursion',
      uuid: 'e17088c8-c40f-4d4c-b5dd-d32f62b8087b',
      concepts: ['recursion'],
      prerequisites: [
        'lists',
        'pattern-matching',
        'multiple-clause-functions',
        'guards',
      ],
      status: ExerciseState.Locked,
    },
  ],
  [
    {
      index: 9,
      slug: 'nil',
      uuid: 'b6ae6cb4-f908-436f-916c-fa847e4a82fb',
      concepts: ['nil', 'if-conditional'],
      prerequisites: ['strings', 'booleans'],
      status: ExerciseState.Locked,
    },
    {
      index: 12,
      slug: 'charlists',
      uuid: '45f3a08f-fe0f-4e3e-b325-47bad3c74ea4',
      concepts: ['charlists', 'case'],
      prerequisites: ['lists', 'recursion', 'pattern-matching', 'guards'],
      status: ExerciseState.Locked,
    },
    {
      index: 22,
      slug: 'processes',
      uuid: 'bec0b00f-816e-443a-af94-14ab4125e505',
      concepts: ['processes', 'pids'],
      prerequisites: ['atoms', 'recursion', 'pattern-matching', 'tuples'],
      status: ExerciseState.Locked,
    },
    {
      index: 25,
      slug: 'regular-expressions',
      uuid: '57198686-71c9-4f38-973a-a111435560e7',
      concepts: ['regular-expressions'],
      prerequisites: ['strings'],
      status: ExerciseState.Locked,
    },
  ],
  [
    {
      index: 13,
      slug: 'access-behaviour',
      uuid: 'ba03df1d-20e4-4527-a8a7-afc97a834975',
      concepts: ['access-behaviour'],
      prerequisites: ['maps', 'strings', 'recursion', 'nil'],
      status: ExerciseState.Locked,
    },
    {
      index: 15,
      slug: 'bitstrings',
      uuid: '994c8760-8a58-4ef3-8a28-a0f9182f4d9f',
      concepts: ['bitstrings', 'tail-call-recursion'],
      prerequisites: ['charlists', 'recursion', 'pattern-matching'],
      status: ExerciseState.Locked,
    },
    {
      index: 16,
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
      status: ExerciseState.Locked,
    },
    {
      index: 18,
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
      status: ExerciseState.Locked,
    },
    {
      index: 20,
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
      status: ExerciseState.Locked,
    },
  ],
  [
    {
      index: 14,
      slug: 'binary-matching',
      uuid: '1653d476-5354-4d99-a990-1db418a7281c',
      concepts: ['binaries'],
      prerequisites: [
        'strings',
        'pattern-matching',
        'if-conditional',
        'bitstrings',
      ],
      status: ExerciseState.Locked,
    },
    {
      index: 17,
      slug: 'errors',
      uuid: 'f660a2e1-bb50-4626-8d3f-6cd7c44fa8db',
      concepts: ['errors', 'try-rescue'],
      prerequisites: ['anonymous-functions', 'pattern-matching', 'structs'],
      status: ExerciseState.Locked,
    },
    {
      index: 23,
      slug: 'streams',
      uuid: '3e2f8bc6-20b4-4e8f-a658-9c270342208e',
      concepts: ['streams', 'pipe-operator', 'ranges'],
      prerequisites: ['enum', 'tuples', 'if-conditional'],
      status: ExerciseState.Locked,
    },
    {
      index: 24,
      slug: 'agent',
      uuid: '1d6be9ec-5b5c-4c81-9bfa-2e3fc78c978f',
      concepts: ['agent'],
      prerequisites: ['processes', 'maps', 'structs'],
      status: ExerciseState.Locked,
    },
    {
      index: 26,
      slug: 'list-comprehensions',
      uuid: 'f8208858-901e-4e5a-9f34-689bf8ad156c',
      concepts: ['list-comprehensions'],
      prerequisites: ['enum', 'lists', 'maps', 'keyword-lists', 'tuples'],
      status: ExerciseState.Locked,
    },
  ],
  [
    {
      index: 19,
      slug: 'exceptions',
      uuid: '9f698b46-fe8d-4641-a928-bcebfd9678df',
      concepts: ['exceptions'],
      prerequisites: ['access-behaviour', 'errors'],
      status: ExerciseState.Locked,
    },
    {
      index: 21,
      slug: 'try-rescue-else-after',
      uuid: '68a8f721-5db4-4b31-95c8-fa6c38f64327',
      concepts: ['try-rescue-else-after'],
      prerequisites: ['io', 'try-rescue'],
      status: ExerciseState.Locked,
    },
  ],
]
