import { Character, Team } from '../index';

describe('Character', () => {
    test('test class Character', () => {
        const hero = new Character('Maxim');
        expect(hero.name).toBe('Maxim');
    })
})

describe('Team', () => {
    test('test class Team function add', () => {
        const hero = new Character ('Sergey');
        const team = new Team();
        team.add(hero);
        expect(team.members).toContain(hero);
    });

    test('checking class Team function add for error', () => {
        expect(() => {
            const hero = new Character ('Sergey');
            const team = new Team();
            team.add(hero);
            team.add(hero);
        }).toThrow(new Error('character ear exists'));
      });

      test('test class Team function addAll', () => {
        const ser = new Character ('Sergey');
        const anna = new Character('Anna');
        const boris = new Character('Boris');
        const keit = new Character('Keit');
        const team = new Team();
        team.add(ser);
        team.addAll(ser, anna, boris, keit);
        expect(team.members).toContain(ser);
        expect(team.members).toContain(anna);
        expect(team.members).toContain(keit);
        expect(team.members).toContain(boris);
        expect(team.members.size).toBe(4);
    });
  
    test('testing the toArray function for Team', () => {
        const ser = new Character ('Sergey');
        const anna = new Character('Anna');
        const boris = new Character('Boris');
        const keit = new Character('Keit');
        const team = new Team();
        team.addAll(ser, anna, boris, keit);
        const result = team.toArray();
        expect(result).toEqual(expect.arrayContaining([ser, anna, boris, keit]));
        expect(result.length).toBe(4);
    });

});