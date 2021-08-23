import Model from '../Model.js';
import schema from '../../Schema/Wepn/StartWeaponConfig.json';

const ARG_MAP = Object.keys(schema.properties);
/**
 * This function is called within a \".wepn\" file, and defines the characteristics of a weapon, such as projectile graphics, muzzle velocity, maximum range, and rate of fire. Call StartWeaponConfig only once per \".wepn\" file.
 * 
 * StartWeaponConfig(<sWeaponName>, <sWeaponType>, <sWeaponFireType>, <sWeaponFireName>, <sActivation>, <fWeaponFireSpeed>, <fWeaponFireRange>, <fWeaponFireRadius>, <fWeaponFireLifetime>, <fWeaponFireMisc1>, <iWeaponFireAxis>, <iMaxEffectsSpawned>, <iUseVelocityPred>, <iCheckLineOfFire>, <fFireTime>, <fBurstFireTime>, <fBurstWaitTime>, <iShootAtSecondaries>, <iShootAtSurroundings>, <fMaxAzimuthSpeed>, <fMaxDeclinationSpeed>, <fSpeedMultiplierWhenPointingAtTarget>, <sWeaponShieldPenetration>, <iTrackTargetsOutsideRange>, <fWaitUntillCodeRedState>, <iInstantHitThreshold>)
 *
 * @example StartWeaponConfig("Gimble", "Bullet", "Improved_Plasma_Bomb", "Special Attack", 1200, 1800, 0, 0, 0, 0, 1, 1, 0, 2.1, 0, 0, 0, 0, 260, 40, 0.1, "Normal", 0, 0, 0)
 * 
 * @see http://hw2bsg.sourceforge.net/wiki.hw2.info/FunctionStartWeaponConfig.html
 */
class StartWeaponConfig extends Model {
    /**
     * Parse call to StartWeaponConfig.
     * 
     * @param {Obj} CallStatement AST from luaparse. 
     */
    constructor(CallStatement) {
        super(CallStatement);

        if (typeof CallStatement.type !== 'undefined' && 
            CallStatement.type === "CallStatement" && 
            typeof CallStatement.expression === 'object' &&
            typeof CallStatement.expression.base === 'object' &&
            CallStatement.expression.base.name === "StartWeaponConfig" &&
            typeof CallStatement.expression.arguments === 'object' &&
            Array.isArray(CallStatement.expression.arguments)
        ) {
            const mapped = CallStatement.expression.arguments.map((v, i) => {
                let ret = null;

                switch (v.type) {
                    case "Identifier":
                        ret = v.name;
                    break;

                    case "StringLiteral":
                        ret = v.raw;
                    break;

                    default:
                        ret = v.value
                    break;
                }

                return ret; 
            }).reduce((c, v, i) => {
                if (ARG_MAP[i]) {
                    c[ARG_MAP[i]] = v;
                }
                return c;
            }, {})

            Object.assign(this, mapped);
        } else {
            throw new Error("StartWeaponConfig: Not a CallStatement!");
        }
    }

    /**
     * Write the Lua Statement.
     */
    toLua() {
        const args = ARG_MAP.reduce((c, v) => {
            if (typeof this[v] !== 'undefined') {
                c.push(this[v]);
            }
            return c;
        }, []);

        return "StartWeaponConfig(" + args.join(',') + ")";
    }
}

export default StartWeaponConfig;
