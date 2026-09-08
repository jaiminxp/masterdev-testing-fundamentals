import { describe, it, expect } from 'vitest';
import { Character } from './character.js';
import { Person } from './person.js';

const firstName = 'Ada';
const lastName = 'Walker';
const role = 'wizard';

describe('Character', () => {
  it('should create a character with a first name, last name, and role', () => {
    const character = new Character(firstName, lastName, role);

    expect(character).toEqual({
      firstName,
      lastName,
      role,
      level: 1,
      createdAt: expect.any(Date),
      lastModified: expect.any(Date),
      strength: expect.any(Number),
      dexterity: expect.any(Number),
      intelligence: expect.any(Number),
      wisdom: expect.any(Number),
      charisma: expect.any(Number),
      constitution: expect.any(Number),
      id: expect.stringContaining('person-'),
    });
  });

  it('should allow you to increase the level', () => {
    const character = new Character(firstName, lastName, role);

    character.levelUp();

    expect(character.level).toBe(2);
  });

  it('should update the last modified date when leveling up', () => {
    const character = new Character(firstName, lastName, role);
    const initialLastModified = character.lastModified;

    character.levelUp();

    expect(character.lastModified).not.toBe(initialLastModified);
  });
});
