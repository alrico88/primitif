[primitif](README.md) / Exports

# primitif

## Table of contents

### Functions

- [createCombination](modules.md#createcombination)
- [getRandomNumber](modules.md#getrandomnumber)

## Functions

### createCombination

▸ **createCombination**(`minValue`, `maxValue`, `combinationLength`): `number`[]

Creates a combination based on available numbers and a combination length

**`export`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `minValue` | `number` | The minimum possible number |
| `maxValue` | `number` | The maximum possible number |
| `combinationLength` | `number` | The amount of numbers needed for the combination |

#### Returns

`number`[]

The random combination

#### Defined in

[index.ts:30](https://github.com/alrico88/microbundle-boilerplate/blob/master/src/index.ts#L30)

___

### getRandomNumber

▸ **getRandomNumber**(`range`, `alreadySelected?`): `number`

Gets a random number between a min and a max
If a selected array is present, will prevent repeating choice

**`export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | [`number`, `number`] |
| `alreadySelected?` | `number`[] |

#### Returns

`number`

#### Defined in

[index.ts:10](https://github.com/alrico88/microbundle-boilerplate/blob/master/src/index.ts#L10)
