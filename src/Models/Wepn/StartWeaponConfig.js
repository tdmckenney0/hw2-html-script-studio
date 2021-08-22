/**
 * 
 * @see http://hw2bsg.sourceforge.net/wiki.hw2.info/FunctionStartWeaponConfig.html

StartWeaponConfig(<sWeaponName>, <sWeaponType>, <sWeaponFireType>, <sWeaponFireName>, <sActivation>, <fWeaponFireSpeed>, <fWeaponFireRange>, <fWeaponFireRadius>, <fWeaponFireLifetime>, <fWeaponFireMisc1>, <iWeaponFireAxis>, <iMaxEffectsSpawned>, <iUseVelocityPred>, <iCheckLineOfFire>, <fFireTime>, <fBurstFireTime>, <fBurstWaitTime>, <iShootAtSecondaries>, <iShootAtSurroundings>, <fMaxAzimuthSpeed>, <fMaxDeclinationSpeed>, <fSpeedMultiplierWhenPointingAtTarget>, <sWeaponShieldPenetration>, <iTrackTargetsOutsideRange>, <fWaitUntillCodeRedState>, <iInstantHitThreshold>)

Description
This function is called within a ".wepn" file, and defines the characteristics of a weapon, such as projectile graphics, muzzle velocity, maximum range, and rate of fire. Call StartWeaponConfig only once per ".wepn" file.

Example
StartWeaponConfig(NewWeaponType, "Gimble", "Bullet", "Improved_Plasma_Bomb", "Special Attack", 1200, 1800, 0, 0, 0, 0, 1, 1, 0, 2.1, 0, 0, 0, 0, 260, 40, 0.1, "Normal", 0, 0, 0)

Arguments

    <sWeaponName>: Reference to the weapon. Generally, this will be NewWeaponType.
    <sWeaponType>: How the weapon tracks targets. Possible values are "Gimble", "AnimatedTurret", or "Fixed". "Gimble" indicates the weapon is not in a turret but can aim at targets within a certain cone. "AnimatedTurret" indicates that the weapon is mounted in a visible, moving turret. "Fixed" indicates the weapon can only fire in a fixed (unchanging) direction, such as the ion cannon on the Ion Cannon Frigate.
    <sWeaponFireType>: Type of projectile, possible values are "InstantHit", "Bullet", "Mine", "Missile", or "SphereBurst". "InstantHit" is generally used with beam weapons, and causes the weapon's damage or other effects to take place immediately upon firing. "Bullet" indicates an unguided projectile. "Mine" indicates the projectile is dropped where the ship is located, and waits to detonate when an enemy ship moves nearby. "Missile" indicates a guided projectile. "SphereBurst" indicates an area of effect weapon. "SphereBurst" weapons require two ".wepn" files to be defined. The first ".wepn" file defines how the weapon is fired, while the second ".wepn" file defines the effects of a hit or miss. See "hgn_smallemp.wepn" and "hgn_smallempburst.wepn" for an example.
    <sWeaponFireName>: The name of the weapon fire script (".wf" file) that specifies effects details.
    <sActivation>: Indicates the context in which the weapon is used. Possible values are "Normal", "Special Attack", "Normal Only", or "Dropped". "Normal" indicates the weapon is always used during any attack. "Special Attack" indicates the weapon is used only after being activated by research or by the special attack key, which is also active only after researching something. "Normal Only" indicates the weapon is used only if a special attack is not researched. "Dropped" indicates that the weapon fires only when the Deploy Mines key is used. This is used with mines, only.
    <fWeaponFireSpeed>: The velocity of the projectile. For "Missile" weapons, this is the initial velocity. For "InstantHit" and "SphereBurst" weapons, set this to 0.
    <fWeaponFireRange>: Maximum range at which the weapon may fire. Note that this does not indicate the maximum range of the projectile.
    <fWeaponFireRadius>: Only used for "SphereBurst". This determines the radius of the blast, within which all specified ships are affected by the weapon.
    <fWeaponFireLifetime>: Duration of the projectile, in seconds. Used for beam weapons, only.
    <fWeaponFireMisc1>: For beam weapons, this is the anticipation time. The time after the firing sequence starts until the beam appears.
    <iWeaponFireAxis>: For missiles only. The direction of ejection for the missile. Possible values: 0 (Forward), 1 (Left), and 2 (Up).
    <iMaxEffectsSpawned>: Maximum number of hit effects to spawn over the life-time of the weapon. If <fWeaponFireLifetime> is 0, then 1 effect will be spawned.
    <iUseVelocityPred>: If enabled, the weapon will lead the target. Otherwise, it fires directly at the target.
    <iCheckLineOfFire>: If enabled, the weapon checks for friendlies in the way before firing.
    <fFireTime>: Delay between shots, in seconds.
    <fBurstFireTime>: Duration of a burst, in seconds. Divide this value by <iFireTime> to determine how many shots are fired per burst.
    <fBurstWaitTime>: Delay between bursts, in seconds.
    <iShootAtSecondaries>: If enabled, when the weapon cannot shoot the main target, it will try to shoot secondary targets. (Band Box/Drag Attackhttp://forums.relicnews.com/showthread.php?p=247193&highlight=ShootAtSecondaries#post247193)
    <iShootAtSurroundings>: If enabled, when the weapon cannot shoot any of the given targets, it will scan for nearby enemies (SLOW!).
    <fMaxAzimuthSpeed>: Horizontal tracking speed of the weapon.
    <fMaxDeclinationSpeed>: Vertical tracking speed of the weapon.
    <fSpeedMultiplierWhenPointingAtTarget>: When the weapon is over the target ship, its speed is modified by this. Use a value smaller than 1 to make beams sweep slowly over the target.
    <sWeaponShieldPenetration>: Possible values are "Normal", "Enhanced", or "Bypass". This argument has no obvious effect. The chance that a weapon penetrates a defense field is set by the setPenetration function.
    <iTrackTargetsOutsideRange>: If enabled, the weapon tracks targets outside of its range.
    <fWaitUntillCodeRedState>: Animation hookup. With this set, the weapon cannot fire untill the Code Red Animation finishes. (See the Vaygr Missile Frigate.)
    <iInstantHitThreshold>: If the target has less than this health, the beam will go through the target ship.
 */
const ARG_MAP = [
    "sWeaponName",
    "sWeaponType",
    "sWeaponFireType",
    "sWeaponFireName",
    "sActivation",
    "fWeaponFireSpeed",
    "fWeaponFireRange",
    "fWeaponFireRadius",
    "fWeaponFireLifetime",
    "fWeaponFireMisc1",
    "iWeaponFireAxis",
    "iMaxEffectsSpawned",
    "iUseVelocityPred",
    "iCheckLineOfFire",
    "fFireTime",
    "fBurstFireTime",
    "fBurstWaitTime",
    "iShootAtSecondaries",
    "iShootAtSurroundings",
    "fMaxAzimuthSpeed",
    "fMaxDeclinationSpeed",
    "fSpeedMultiplierWhenPointingAtTarget",
    "sWeaponShieldPenetration",
    "iTrackTargetsOutsideRange",
    "fWaitUntillCodeRedState",
    "iInstantHitThreshold"
];

class StartWeaponConfig {
    /**
     * Parse call to StartWeaponConfig.
     * 
     * @param {Obj} CallStatement AST from luaparse. 
     */
    constructor(CallStatement) {
        if (typeof CallStatement.type !== 'undefined' && 
            CallStatement.type == "CallStatement" && 
            typeof CallStatement.expression === 'object' &&
            typeof CallStatement.expression.base === 'object' &&
            CallStatement.expression.base.name == "StartWeaponConfig" &&
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
}

export default StartWeaponConfig;
