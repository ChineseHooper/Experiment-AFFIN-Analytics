var $jscomp = $jscomp || {}; $jscomp.scope = {}; $jscomp.ASSUME_ES5 = !1; $jscomp.ASSUME_NO_NATIVE_MAP = !1; $jscomp.ASSUME_NO_NATIVE_SET = !1; $jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (h, c, n) { h != Array.prototype && h != Object.prototype && (h[c] = n.value) }; $jscomp.getGlobal = function (h) { return "undefined" != typeof window && window === h ? h : "undefined" != typeof global && null != global ? global : h }; $jscomp.global = $jscomp.getGlobal(this); $jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function () { $jscomp.initSymbol = function () { }; $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol) }; $jscomp.Symbol = function () { var h = 0; return function (c) { return $jscomp.SYMBOL_PREFIX + (c || "") + h++ } }();
$jscomp.initSymbolIterator = function () { $jscomp.initSymbol(); var h = $jscomp.global.Symbol.iterator; h || (h = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator")); "function" != typeof Array.prototype[h] && $jscomp.defineProperty(Array.prototype, h, { configurable: !0, writable: !0, value: function () { return $jscomp.arrayIterator(this) } }); $jscomp.initSymbolIterator = function () { } }; $jscomp.arrayIterator = function (h) { var c = 0; return $jscomp.iteratorPrototype(function () { return c < h.length ? { done: !1, value: h[c++] } : { done: !0 } }) };
$jscomp.iteratorPrototype = function (h) { $jscomp.initSymbolIterator(); h = { next: h }; h[$jscomp.global.Symbol.iterator] = function () { return this }; return h };
!function (h) { if ("object" == typeof exports && "undefined" != typeof module) module.exports = h(); else { var c; "undefined" != typeof window ? c = window : "undefined" != typeof global ? c = global : "undefined" != typeof self && (c = self); c.CANNON = h() } }(function () {
    return function a(c, n, v) {
        function t(q, e) {
            if (!n[q]) {
                if (!c[q]) { var r = "function" == typeof require && require; if (!e && r) return r(q, !0); if (b) return b(q, !0); throw Error("Cannot find module '" + q + "'"); } r = n[q] = { exports: {} }; c[q][0].call(r.exports, function (a) {
                    var e = c[q][1][a]; return t(e ?
                        e : a)
                }, r, r.exports, a, c, n, v)
            } return n[q].exports
        } for (var b = "function" == typeof require && require, y = 0; y < v.length; y++)t(v[y]); return t
    }({
        1: [function (c, n, v) {
        n.exports = {
            name: "cannon", version: "0.6.2", description: "A lightweight 3D physics engine written in JavaScript.", homepage: "https://github.com/schteppe/cannon.js", author: "Stefan Hedman <schteppe@gmail.com> (http://steffe.se)", keywords: ["cannon.js", "cannon", "physics", "engine", "3d"], main: "./build/cannon.js", engines: { node: "*" }, repository: { type: "git", url: "https://github.com/schteppe/cannon.js.git" },
            bugs: { url: "https://github.com/schteppe/cannon.js/issues" }, licenses: [{ type: "MIT" }], devDependencies: { jshint: "latest", "uglify-js": "latest", nodeunit: "^0.9.0", grunt: "~0.4.0", "grunt-contrib-jshint": "~0.1.1", "grunt-contrib-nodeunit": "^0.4.1", "grunt-contrib-concat": "~0.1.3", "grunt-contrib-uglify": "^0.5.1", "grunt-browserify": "^2.1.4", "grunt-contrib-yuidoc": "^0.5.2", browserify: "*" }, dependencies: {}
        }
        }, {}], 2: [function (c, n, v) {
        n.exports = {
            version: c("../package.json").version, AABB: c("./collision/AABB"), ArrayCollisionMatrix: c("./collision/ArrayCollisionMatrix"),
            Body: c("./objects/Body"), Box: c("./shapes/Box"), Broadphase: c("./collision/Broadphase"), Constraint: c("./constraints/Constraint"), ContactEquation: c("./equations/ContactEquation"), Narrowphase: c("./world/Narrowphase"), ConeTwistConstraint: c("./constraints/ConeTwistConstraint"), ContactMaterial: c("./material/ContactMaterial"), ConvexPolyhedron: c("./shapes/ConvexPolyhedron"), Cylinder: c("./shapes/Cylinder"), DistanceConstraint: c("./constraints/DistanceConstraint"), Equation: c("./equations/Equation"), EventTarget: c("./utils/EventTarget"),
            FrictionEquation: c("./equations/FrictionEquation"), GSSolver: c("./solver/GSSolver"), GridBroadphase: c("./collision/GridBroadphase"), Heightfield: c("./shapes/Heightfield"), HingeConstraint: c("./constraints/HingeConstraint"), LockConstraint: c("./constraints/LockConstraint"), Mat3: c("./math/Mat3"), Material: c("./material/Material"), NaiveBroadphase: c("./collision/NaiveBroadphase"), ObjectCollisionMatrix: c("./collision/ObjectCollisionMatrix"), Pool: c("./utils/Pool"), Particle: c("./shapes/Particle"), Plane: c("./shapes/Plane"),
            PointToPointConstraint: c("./constraints/PointToPointConstraint"), Quaternion: c("./math/Quaternion"), Ray: c("./collision/Ray"), RaycastVehicle: c("./objects/RaycastVehicle"), RaycastResult: c("./collision/RaycastResult"), RigidVehicle: c("./objects/RigidVehicle"), RotationalEquation: c("./equations/RotationalEquation"), RotationalMotorEquation: c("./equations/RotationalMotorEquation"), SAPBroadphase: c("./collision/SAPBroadphase"), SPHSystem: c("./objects/SPHSystem"), Shape: c("./shapes/Shape"), Solver: c("./solver/Solver"),
            Sphere: c("./shapes/Sphere"), SplitSolver: c("./solver/SplitSolver"), Spring: c("./objects/Spring"), Trimesh: c("./shapes/Trimesh"), Vec3: c("./math/Vec3"), Vec3Pool: c("./utils/Vec3Pool"), World: c("./world/World")
        }
        }, {
            "../package.json": 1, "./collision/AABB": 3, "./collision/ArrayCollisionMatrix": 4, "./collision/Broadphase": 5, "./collision/GridBroadphase": 6, "./collision/NaiveBroadphase": 7, "./collision/ObjectCollisionMatrix": 8, "./collision/Ray": 9, "./collision/RaycastResult": 10, "./collision/SAPBroadphase": 11, "./constraints/ConeTwistConstraint": 12,
            "./constraints/Constraint": 13, "./constraints/DistanceConstraint": 14, "./constraints/HingeConstraint": 15, "./constraints/LockConstraint": 16, "./constraints/PointToPointConstraint": 17, "./equations/ContactEquation": 19, "./equations/Equation": 20, "./equations/FrictionEquation": 21, "./equations/RotationalEquation": 22, "./equations/RotationalMotorEquation": 23, "./material/ContactMaterial": 24, "./material/Material": 25, "./math/Mat3": 27, "./math/Quaternion": 28, "./math/Vec3": 30, "./objects/Body": 31, "./objects/RaycastVehicle": 32,
            "./objects/RigidVehicle": 33, "./objects/SPHSystem": 34, "./objects/Spring": 35, "./shapes/Box": 37, "./shapes/ConvexPolyhedron": 38, "./shapes/Cylinder": 39, "./shapes/Heightfield": 40, "./shapes/Particle": 41, "./shapes/Plane": 42, "./shapes/Shape": 43, "./shapes/Sphere": 44, "./shapes/Trimesh": 45, "./solver/GSSolver": 46, "./solver/Solver": 47, "./solver/SplitSolver": 48, "./utils/EventTarget": 49, "./utils/Pool": 51, "./utils/Vec3Pool": 54, "./world/Narrowphase": 55, "./world/World": 56
        }], 3: [function (c, n, v) {
            function a(a) {
                a = a || {};
                this.lowerBound = new t; a.lowerBound && this.lowerBound.copy(a.lowerBound); this.upperBound = new t; a.upperBound && this.upperBound.copy(a.upperBound)
            } var t = c("../math/Vec3"); c("../utils/Utils"); n.exports = a; var b = new t; a.prototype.setFromPoints = function (a, e, r, k) {
                var m = this.lowerBound, u = this.upperBound; m.copy(a[0]); r && r.vmult(m, m); u.copy(m); for (var f = 1; f < a.length; f++) {
                    var d = a[f]; r && (r.vmult(d, b), d = b); d.x > u.x && (u.x = d.x); d.x < m.x && (m.x = d.x); d.y > u.y && (u.y = d.y); d.y < m.y && (m.y = d.y); d.z > u.z && (u.z = d.z); d.z < m.z && (m.z =
                        d.z)
                } e && (e.vadd(m, m), e.vadd(u, u)); k && (m.x -= k, m.y -= k, m.z -= k, u.x += k, u.y += k, u.z += k); return this
            }; a.prototype.copy = function (a) { this.lowerBound.copy(a.lowerBound); this.upperBound.copy(a.upperBound); return this }; a.prototype.clone = function () { return (new a).copy(this) }; a.prototype.extend = function (a) {
                var e = a.lowerBound.x; this.lowerBound.x > e && (this.lowerBound.x = e); e = a.upperBound.x; this.upperBound.x < e && (this.upperBound.x = e); e = a.lowerBound.y; this.lowerBound.y > e && (this.lowerBound.y = e); e = a.upperBound.y; this.upperBound.y <
                    e && (this.upperBound.y = e); e = a.lowerBound.z; this.lowerBound.z > e && (this.lowerBound.z = e); e = a.upperBound.z; this.upperBound.z < e && (this.upperBound.z = e)
            }; a.prototype.overlaps = function (a) { var e = this.lowerBound, b = this.upperBound, k = a.lowerBound; a = a.upperBound; return (k.x <= b.x && b.x <= a.x || e.x <= a.x && a.x <= b.x) && (k.y <= b.y && b.y <= a.y || e.y <= a.y && a.y <= b.y) && (k.z <= b.z && b.z <= a.z || e.z <= a.z && a.z <= b.z) }; a.prototype.contains = function (a) {
                var e = this.lowerBound, b = this.upperBound, k = a.lowerBound; a = a.upperBound; return e.x <= k.x &&
                    b.x >= a.x && e.y <= k.y && b.y >= a.y && e.z <= k.z && b.z >= a.z
            }; a.prototype.getCorners = function (a, e, b, k, m, u, f, d) { var w = this.lowerBound, z = this.upperBound; a.copy(w); e.set(z.x, w.y, w.z); b.set(z.x, z.y, w.z); k.set(w.x, z.y, z.z); m.set(z.x, w.y, w.z); u.set(w.x, z.y, w.z); f.set(w.x, w.y, z.z); d.copy(z) }; var y = [new t, new t, new t, new t, new t, new t, new t, new t]; a.prototype.toLocalFrame = function (a, e) { this.getCorners(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7]); for (var b = 0; 8 !== b; b++) { var k = y[b]; a.pointToLocal(k, k) } return e.setFromPoints(y) };
            a.prototype.toWorldFrame = function (a, e) { this.getCorners(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7]); for (var b = 0; 8 !== b; b++) { var k = y[b]; a.pointToWorld(k, k) } return e.setFromPoints(y) }
        }, { "../math/Vec3": 30, "../utils/Utils": 53 }], 4: [function (c, n, v) {
            function a() { this.matrix = [] } n.exports = a; a.prototype.get = function (a, b) { a = a.index; b = b.index; if (b > a) { var c = b; b = a; a = c } return this.matrix[(a * (a + 1) >> 1) + b - 1] }; a.prototype.set = function (a, b, c) { a = a.index; b = b.index; if (b > a) { var q = b; b = a; a = q } this.matrix[(a * (a + 1) >> 1) + b - 1] = c ? 1 : 0 };
            a.prototype.reset = function () { for (var a = 0, b = this.matrix.length; a !== b; a++)this.matrix[a] = 0 }; a.prototype.setNumObjects = function (a) { this.matrix.length = a * (a - 1) >> 1 }
        }, {}], 5: [function (c, n, v) {
            function a() { this.world = null; this.useBoundingBoxes = !1; this.dirty = !0 } var t = c("../objects/Body"); v = c("../math/Vec3"); var b = c("../math/Quaternion"); c("../shapes/Shape"); c("../shapes/Plane"); n.exports = a; a.prototype.collisionPairs = function (a, b, d) { throw Error("collisionPairs not implemented for this BroadPhase class!"); }; var y =
                t.STATIC | t.KINEMATIC; a.prototype.needBroadphaseCollision = function (a, b) { return 0 !== (a.collisionFilterGroup & b.collisionFilterMask) && 0 !== (b.collisionFilterGroup & a.collisionFilterMask) && (0 === (a.type & y) && a.sleepState !== t.SLEEPING || 0 === (b.type & y) && b.sleepState !== t.SLEEPING) ? !0 : !1 }; a.prototype.intersectionTest = function (a, b, d, e) { this.useBoundingBoxes ? this.doBoundingBoxBroadphase(a, b, d, e) : this.doBoundingSphereBroadphase(a, b, d, e) }; var q = new v; new v; new b; new v; a.prototype.doBoundingSphereBroadphase = function (a,
                    b, d, e) { b.position.vsub(a.position, q); var f = Math.pow(a.boundingRadius + b.boundingRadius, 2); q.norm2() < f && (d.push(a), e.push(b)) }; a.prototype.doBoundingBoxBroadphase = function (a, b, d, e) { a.aabbNeedsUpdate && a.computeAABB(); b.aabbNeedsUpdate && b.computeAABB(); a.aabb.overlaps(b.aabb) && (d.push(a), e.push(b)) }; var e = { keys: [] }, r = [], k = []; a.prototype.makePairsUnique = function (a, b) {
                        for (var d = a.length, f = 0; f !== d; f++)r[f] = a[f], k[f] = b[f]; a.length = 0; for (f = b.length = 0; f !== d; f++) {
                            var m = r[f].id, g = k[f].id; m = m < g ? m + "," + g : g + "," +
                                m; e[m] = f; e.keys.push(m)
                        } for (f = 0; f !== e.keys.length; f++)m = e.keys.pop(), d = e[m], a.push(r[d]), b.push(k[d]), delete e[m]
                    }; a.prototype.setWorld = function (a) { }; var m = new v; a.boundingSphereCheck = function (a, b) { a.position.vsub(b.position, m); return Math.pow(a.shape.boundingSphereRadius + b.shape.boundingSphereRadius, 2) > m.norm2() }; a.prototype.aabbQuery = function (a, b, d) { console.warn(".aabbQuery is not implemented in this Broadphase subclass."); return [] }
        }, {
            "../math/Quaternion": 28, "../math/Vec3": 30, "../objects/Body": 31,
            "../shapes/Plane": 42, "../shapes/Shape": 43
        }], 6: [function (c, n, v) {
            function a(a, r, k, m, u) { t.apply(this); this.nx = k || 10; this.ny = m || 10; this.nz = u || 10; this.aabbMin = a || new b(100, 100, 100); this.aabbMax = r || new b(-100, -100, -100); a = this.nx * this.ny * this.nz; if (0 >= a) throw "GridBroadphase: Each dimension's n must be >0"; this.bins = []; this.binLengths = []; this.bins.length = a; this.binLengths.length = a; for (r = 0; r < a; r++)this.bins[r] = [], this.binLengths[r] = 0 } n.exports = a; var t = c("./Broadphase"), b = c("../math/Vec3"), y = c("../shapes/Shape");
            a.prototype = new t; a.prototype.constructor = a; var q = new b; new b; a.prototype.collisionPairs = function (a, b, k) {
                function e(a, d, b, p, e, f, k) { a = (a - J) * P | 0; d = (d - G) * B | 0; b = (b - E) * L | 0; p = W((p - J) * P); e = W((e - G) * B); f = W((f - E) * L); 0 > a ? a = 0 : a >= w && (a = w - 1); 0 > d ? d = 0 : d >= z && (d = z - 1); 0 > b ? b = 0 : b >= g && (b = g - 1); 0 > p ? p = 0 : p >= w && (p = w - 1); 0 > e ? e = 0 : e >= z && (e = z - 1); 0 > f ? f = 0 : f >= g && (f = g - 1); a *= r; d *= c; b *= 1; p *= r; e *= c; for (f *= 1; a <= p; a += r)for (var m = d; m <= e; m += c)for (var x = b; x <= f; x += 1) { var u = a + m + x; U[u][ma[u]++] = k } } var u = a.numObjects(); a = a.bodies; var f = this.aabbMax,
                    d = this.aabbMin, w = this.nx, z = this.ny, g = this.nz, r = z * g, c = g, t = f.x, n = f.y, v = f.z, J = d.x, G = d.y, E = d.z, P = w / (t - J), B = z / (n - G), L = g / (v - E); t = (t - J) / w; var I = (n - G) / z; v = (v - E) / g; var T = .5 * Math.sqrt(t * t + I * I + v * v); n = y.types; var ba = n.SPHERE, ja = n.PLANE, U = this.bins, ma = this.binLengths; n = this.bins.length; for (d = 0; d !== n; d++)ma[d] = 0; var W = Math.ceil; d = Math.min; f = Math.max; for (d = 0; d !== u; d++) {
                        f = a[d]; var V = f.shape; switch (V.type) {
                            case ba: var aa = f.position.x, da = f.position.y, ua = f.position.z; V = V.radius; e(aa - V, da - V, ua - V, aa + V, da + V, ua + V, f); break;
                            case ja: V.worldNormalNeedsUpdate && V.computeWorldNormal(f.quaternion); ua = V.worldNormal; V = G + .5 * I - f.position.y; var ka = E + .5 * v - f.position.z, ea = q; ea.set(J + .5 * t - f.position.x, V, ka); for (var za = aa = 0; aa !== w; aa++ , za += r, ea.y = V, ea.x += t)for (var na = da = 0; da !== z; da++ , na += c, ea.z = ka, ea.y += I)for (var va = 0, ra = 0; va !== g; va++ , ra += 1, ea.z += v)if (ea.dot(ua) < T) { var xa = za + na + ra; U[xa][ma[xa]++] = f } break; default: f.aabbNeedsUpdate && f.computeAABB(), e(f.aabb.lowerBound.x, f.aabb.lowerBound.y, f.aabb.lowerBound.z, f.aabb.upperBound.x, f.aabb.upperBound.y,
                                f.aabb.upperBound.z, f)
                        }
                    } for (d = 0; d !== n; d++)if (u = ma[d], 1 < u) for (a = U[d], aa = 0; aa !== u; aa++)for (f = a[aa], da = 0; da !== aa; da++)t = a[da], this.needBroadphaseCollision(f, t) && this.intersectionTest(f, t, b, k); this.makePairsUnique(b, k)
            }
        }, { "../math/Vec3": 30, "../shapes/Shape": 43, "./Broadphase": 5 }], 7: [function (c, n, v) {
            function a() { t.apply(this) } n.exports = a; var t = c("./Broadphase"); c = c("./AABB"); a.prototype = new t; a.prototype.constructor = a; a.prototype.collisionPairs = function (a, c, q) {
                a = a.bodies; var b = a.length, r, k; for (r = 0; r !==
                    b; r++)for (k = 0; k !== r; k++) { var m = a[r]; var u = a[k]; this.needBroadphaseCollision(m, u) && this.intersectionTest(m, u, c, q) }
            }; new c; a.prototype.aabbQuery = function (a, c, q) { q = q || []; for (var b = 0; b < a.bodies.length; b++) { var r = a.bodies[b]; r.aabbNeedsUpdate && r.computeAABB(); r.aabb.overlaps(c) && q.push(r) } return q }
        }, { "./AABB": 3, "./Broadphase": 5 }], 8: [function (c, n, v) {
            function a() { this.matrix = {} } n.exports = a; a.prototype.get = function (a, b) { a = a.id; b = b.id; if (b > a) { var c = b; b = a; a = c } return a + "-" + b in this.matrix }; a.prototype.set =
                function (a, b, c) { a = a.id; b = b.id; if (b > a) { var q = b; b = a; a = q } c ? this.matrix[a + "-" + b] = !0 : delete this.matrix[a + "-" + b] }; a.prototype.reset = function () { this.matrix = {} }; a.prototype.setNumObjects = function (a) { }
        }, {}], 9: [function (c, n, v) {
            function a(d, e) { this.from = d ? d.clone() : new b; this.to = e ? e.clone() : new b; this._direction = new b; this.precision = 1E-4; this.checkCollisionResponse = !0; this.skipBackfaces = !1; this.collisionFilterGroup = this.collisionFilterMask = -1; this.mode = a.ANY; this.result = new q; this.hasHit = !1; this.callback = function (a) { } }
            function t(a, d, b, e) { e.vsub(d, ba); b.vsub(d, k); a.vsub(d, m); a = ba.dot(ba); d = ba.dot(k); b = ba.dot(m); e = k.dot(k); var f = k.dot(m), g, w; return 0 <= (g = e * b - d * f) && 0 <= (w = a * f - d * b) && g + w < a * e - d * d } n.exports = a; var b = c("../math/Vec3"); n = c("../math/Quaternion"); var y = c("../math/Transform"); c("../shapes/ConvexPolyhedron"); c("../shapes/Box"); var q = c("../collision/RaycastResult"); v = c("../shapes/Shape"); c = c("../collision/AABB"); a.prototype.constructor = a; a.CLOSEST = 1; a.ANY = 2; a.ALL = 4; var e = new c, r = []; a.prototype.intersectWorld =
                function (d, b) {
                this.mode = b.mode || a.ANY; this.result = b.result || new q; this.skipBackfaces = !!b.skipBackfaces; this.collisionFilterMask = "undefined" !== typeof b.collisionFilterMask ? b.collisionFilterMask : -1; this.collisionFilterGroup = "undefined" !== typeof b.collisionFilterGroup ? b.collisionFilterGroup : -1; b.from && this.from.copy(b.from); b.to && this.to.copy(b.to); this.callback = b.callback || function () { }; this.hasHit = !1; this.result.reset(); this._updateDirection(); this.getAABB(e); r.length = 0; d.broadphase.aabbQuery(d, e, r);
                    this.intersectBodies(r); return this.hasHit
                }; var k = new b, m = new b; a.pointInTriangle = t; var u = new b, f = new n; a.prototype.intersectBody = function (a, d) {
                    d && (this.result = d, this._updateDirection()); var b = this.checkCollisionResponse; if ((!b || a.collisionResponse) && 0 !== (this.collisionFilterGroup & a.collisionFilterMask) && 0 !== (a.collisionFilterGroup & this.collisionFilterMask)) for (var e = 0, k = a.shapes.length; e < k; e++) {
                        var m = a.shapes[e]; if (!b || m.collisionResponse) if (a.quaternion.mult(a.shapeOrientations[e], f), a.quaternion.vmult(a.shapeOffsets[e],
                            u), u.vadd(a.position, u), this.intersectShape(m, f, u, a), this.result._shouldStop) break
                    }
                }; a.prototype.intersectBodies = function (a, d) { d && (this.result = d, this._updateDirection()); for (var b = 0, e = a.length; !this.result._shouldStop && b < e; b++)this.intersectBody(a[b]) }; a.prototype._updateDirection = function () { this.to.vsub(this.from, this._direction); this._direction.normalize() }; a.prototype.intersectShape = function (a, d, b, e) {
                    var f = this.from, k = this._direction; b.vsub(f, ba); var m = ba.dot(k); k.mult(m, ja); ja.vadd(f, ja); b.distanceTo(ja) >
                        a.boundingSphereRadius || (f = this[a.type]) && f.call(this, a, d, b, e)
                }; new b; new b; var d = new b, w = new b, z = new b, g = new b; new b; new q; a.prototype.intersectBox = function (a, d, b, e) { return this.intersectConvex(a.convexPolyhedronRepresentation, d, b, e) }; a.prototype[v.types.BOX] = a.prototype.intersectBox; a.prototype.intersectPlane = function (a, d, e, f) {
                    var k = this.from, m = this.to, g = this._direction, w = new b(0, 0, 1); d.vmult(w, w); var z = new b; k.vsub(e, z); d = z.dot(w); m.vsub(e, z); z = z.dot(w); if (!(0 < d * z || k.distanceTo(m) < d || (z = w.dot(g),
                        Math.abs(z) < this.precision))) { var u = new b; m = new b; d = new b; k.vsub(e, u); e = -w.dot(u) / z; g.scale(e, m); k.vadd(m, d); this.reportIntersection(w, d, a, f, -1) }
                }; a.prototype[v.types.PLANE] = a.prototype.intersectPlane; a.prototype.getAABB = function (a) { var d = this.to, b = this.from; a.lowerBound.x = Math.min(d.x, b.x); a.lowerBound.y = Math.min(d.y, b.y); a.lowerBound.z = Math.min(d.z, b.z); a.upperBound.x = Math.max(d.x, b.x); a.upperBound.y = Math.max(d.y, b.y); a.upperBound.z = Math.max(d.z, b.z) }; var C = { faceList: [0] }; a.prototype.intersectHeightfield =
                    function (d, e, f, k) {
                        var m = new b, g = new a(this.from, this.to); y.pointToLocalFrame(f, e, g.from, g.from); y.pointToLocalFrame(f, e, g.to, g.to); var w = [], z = null, u = null, r = null, c = null, q = d.getIndexOfPosition(g.from.x, g.from.y, w, !1); q && (z = w[0], u = w[1], r = w[0], c = w[1]); if (q = d.getIndexOfPosition(g.to.x, g.to.y, w, !1)) { if (null === z || w[0] < z) z = w[0]; if (null === r || w[0] > r) r = w[0]; if (null === u || w[1] < u) u = w[1]; if (null === c || w[1] > c) c = w[1] } if (null !== z) for (d.getRectMinMax(z, u, r, c, []), g = z; g <= r; g++)for (w = u; w <= c; w++) {
                            if (this.result._shouldStop) return;
                            d.getConvexTrianglePillar(g, w, !1); y.pointToWorldFrame(f, e, d.pillarOffset, m); this.intersectConvex(d.pillarConvex, e, m, k, C); if (this.result._shouldStop) return; d.getConvexTrianglePillar(g, w, !0); y.pointToWorldFrame(f, e, d.pillarOffset, m); this.intersectConvex(d.pillarConvex, e, m, k, C)
                        }
                    }; a.prototype[v.types.HEIGHTFIELD] = a.prototype.intersectHeightfield; var Q = new b, S = new b; a.prototype.intersectSphere = function (a, d, b, e) {
                        d = this.from; var f = this.to, k = Math.pow(f.x - d.x, 2) + Math.pow(f.y - d.y, 2) + Math.pow(f.z - d.z, 2), m = 2 *
                            ((f.x - d.x) * (d.x - b.x) + (f.y - d.y) * (d.y - b.y) + (f.z - d.z) * (d.z - b.z)), g = Math.pow(m, 2) - 4 * k * (Math.pow(d.x - b.x, 2) + Math.pow(d.y - b.y, 2) + Math.pow(d.z - b.z, 2) - Math.pow(a.radius, 2)); if (!(0 > g)) if (0 === g) d.lerp(f, g, Q), Q.vsub(b, S), S.normalize(), this.reportIntersection(S, Q, a, e, -1); else {
                                var w = (-m - Math.sqrt(g)) / (2 * k); k = (-m + Math.sqrt(g)) / (2 * k); 0 <= w && 1 >= w && (d.lerp(f, w, Q), Q.vsub(b, S), S.normalize(), this.reportIntersection(S, Q, a, e, -1)); !this.result._shouldStop && 0 <= k && 1 >= k && (d.lerp(f, k, Q), Q.vsub(b, S), S.normalize(), this.reportIntersection(S,
                                    Q, a, e, -1))
                            }
                    }; a.prototype[v.types.SPHERE] = a.prototype.intersectSphere; var R = new b; new b; new b; var O = new b; a.prototype.intersectConvex = function (a, b, e, f, k) {
                        k = k && k.faceList || null; for (var m = a.faces, u = a.vertices, r = a.faceNormals, c = this._direction, q = this.from, y = q.distanceTo(this.to), n = k ? k.length : m.length, C = this.result, B = 0; !C._shouldStop && B < n; B++) {
                            var Q = k ? k[B] : B, E = m[Q], v = r[Q], p = b, x = e; O.copy(u[E[0]]); p.vmult(O, O); O.vadd(x, O); O.vsub(q, O); p.vmult(v, R); v = c.dot(R); if (!(Math.abs(v) < this.precision || (v = R.dot(O) / v,
                                0 > v))) for (c.mult(v, d), d.vadd(q, d), w.copy(u[E[0]]), p.vmult(w, w), x.vadd(w, w), v = 1; !C._shouldStop && v < E.length - 1; v++) { z.copy(u[E[v]]); g.copy(u[E[v + 1]]); p.vmult(z, z); p.vmult(g, g); x.vadd(z, z); x.vadd(g, g); var D = d.distanceTo(q); !t(d, w, z, g) && !t(d, z, w, g) || D > y || this.reportIntersection(R, d, a, f, Q) }
                        }
                    }; a.prototype[v.types.CONVEXPOLYHEDRON] = a.prototype.intersectConvex; var J = new b, G = new b, E = new b, P = new b, B = new b, L = new b; new c; var I = [], T = new y; a.prototype.intersectTrimesh = function (a, b, e, f, k) {
                        k = a.indices; var m = this.from,
                            u = this.to, r = this._direction; T.position.copy(e); T.quaternion.copy(b); y.vectorToLocalFrame(e, b, r, G); y.pointToLocalFrame(e, b, m, E); y.pointToLocalFrame(e, b, u, P); m = E.distanceSquared(P); a.tree.rayQuery(this, T, I); u = 0; for (r = I.length; !this.result._shouldStop && u !== r; u++) {
                                var c = I[u]; a.getNormal(c, J); a.getVertex(k[3 * c], w); w.vsub(E, O); var q = G.dot(J); q = J.dot(O) / q; 0 > q || (G.scale(q, d), d.vadd(E, d), a.getVertex(k[3 * c + 1], z), a.getVertex(k[3 * c + 2], g), q = d.distanceSquared(E), !t(d, z, w, g) && !t(d, w, z, g) || q > m || (y.vectorToWorldFrame(b,
                                    J, B), y.pointToWorldFrame(e, b, d, L), this.reportIntersection(B, L, a, f, c)))
                            } I.length = 0
                    }; a.prototype[v.types.TRIMESH] = a.prototype.intersectTrimesh; a.prototype.reportIntersection = function (d, b, e, f, k) {
                        var m = this.from, g = this.to, w = m.distanceTo(b), z = this.result; if (!(this.skipBackfaces && 0 < d.dot(this._direction))) switch (z.hitFaceIndex = "undefined" !== typeof k ? k : -1, this.mode) {
                            case a.ALL: this.hasHit = !0; z.set(m, g, d, b, e, f, w); z.hasHit = !0; this.callback(z); break; case a.CLOSEST: if (w < z.distance || !z.hasHit) this.hasHit = !0,
                                z.hasHit = !0, z.set(m, g, d, b, e, f, w); break; case a.ANY: this.hasHit = !0, z.hasHit = !0, z.set(m, g, d, b, e, f, w), z._shouldStop = !0
                        }
                    }; var ba = new b, ja = new b
        }, { "../collision/AABB": 3, "../collision/RaycastResult": 10, "../math/Quaternion": 28, "../math/Transform": 29, "../math/Vec3": 30, "../shapes/Box": 37, "../shapes/ConvexPolyhedron": 38, "../shapes/Shape": 43 }], 10: [function (c, n, v) {
            function a() {
            this.rayFromWorld = new t; this.rayToWorld = new t; this.hitNormalWorld = new t; this.hitPointWorld = new t; this.hasHit = !1; this.body = this.shape = null;
                this.distance = this.hitFaceIndex = -1; this._shouldStop = !1
            } var t = c("../math/Vec3"); n.exports = a; a.prototype.reset = function () { this.rayFromWorld.setZero(); this.rayToWorld.setZero(); this.hitNormalWorld.setZero(); this.hitPointWorld.setZero(); this.hasHit = !1; this.body = this.shape = null; this.distance = this.hitFaceIndex = -1; this._shouldStop = !1 }; a.prototype.abort = function () { this._shouldStop = !0 }; a.prototype.set = function (a, c, q, e, r, k, m) {
                this.rayFromWorld.copy(a); this.rayToWorld.copy(c); this.hitNormalWorld.copy(q); this.hitPointWorld.copy(e);
                this.shape = r; this.body = k; this.distance = m
            }
        }, { "../math/Vec3": 30 }], 11: [function (c, n, v) {
            function a(a) { t.apply(this); this.axisList = []; this.world = null; this.axisIndex = 0; var b = this.axisList; this._addBodyHandler = function (a) { b.push(a.body) }; this._removeBodyHandler = function (a) { a = b.indexOf(a.body); -1 !== a && b.splice(a, 1) }; a && this.setWorld(a) } c("../shapes/Shape"); var t = c("../collision/Broadphase"); n.exports = a; a.prototype = new t; a.prototype.setWorld = function (a) {
                for (var b = this.axisList.length = 0; b < a.bodies.length; b++)this.axisList.push(a.bodies[b]);
                a.removeEventListener("addBody", this._addBodyHandler); a.removeEventListener("removeBody", this._removeBodyHandler); a.addEventListener("addBody", this._addBodyHandler); a.addEventListener("removeBody", this._removeBodyHandler); this.world = a; this.dirty = !0
            }; a.insertionSortX = function (a) { for (var b = 1, c = a.length; b < c; b++) { for (var e = a[b], r = b - 1; 0 <= r && !(a[r].aabb.lowerBound.x <= e.aabb.lowerBound.x); r--)a[r + 1] = a[r]; a[r + 1] = e } return a }; a.insertionSortY = function (a) {
                for (var b = 1, c = a.length; b < c; b++) {
                    for (var e = a[b], r = b - 1; 0 <=
                        r && !(a[r].aabb.lowerBound.y <= e.aabb.lowerBound.y); r--)a[r + 1] = a[r]; a[r + 1] = e
                } return a
            }; a.insertionSortZ = function (a) { for (var b = 1, c = a.length; b < c; b++) { for (var e = a[b], r = b - 1; 0 <= r && !(a[r].aabb.lowerBound.z <= e.aabb.lowerBound.z); r--)a[r + 1] = a[r]; a[r + 1] = e } return a }; a.prototype.collisionPairs = function (b, c, q) {
                b = this.axisList; var e = b.length, r = this.axisIndex, k, m; this.dirty && (this.sortList(), this.dirty = !1); for (k = 0; k !== e; k++) {
                    var u = b[k]; for (m = k + 1; m < e; m++) {
                        var f = b[m]; if (this.needBroadphaseCollision(u, f)) {
                            if (!a.checkBounds(u,
                                f, r)) break; this.intersectionTest(u, f, c, q)
                        }
                    }
                }
            }; a.prototype.sortList = function () { for (var b = this.axisList, c = this.axisIndex, q = b.length, e = 0; e !== q; e++) { var r = b[e]; r.aabbNeedsUpdate && r.computeAABB() } 0 === c ? a.insertionSortX(b) : 1 === c ? a.insertionSortY(b) : 2 === c && a.insertionSortZ(b) }; a.checkBounds = function (a, c, q) { if (0 === q) { var b = a.position.x; var r = c.position.x } else 1 === q ? (b = a.position.y, r = c.position.y) : 2 === q && (b = a.position.z, r = c.position.z); return r - c.boundingRadius < b + a.boundingRadius }; a.prototype.autoDetectAxis =
                function () { for (var a = 0, c = 0, q = 0, e = 0, r = 0, k = 0, m = this.axisList, u = m.length, f = 1 / u, d = 0; d !== u; d++) { var w = m[d], z = w.position.x; a += z; c += z * z; z = w.position.y; q += z; e += z * z; w = w.position.z; r += w; k += w * w } a = c - a * a * f; q = e - q * q * f; r = k - r * r * f; this.axisIndex = a > q ? a > r ? 0 : 2 : q > r ? 1 : 2 }; a.prototype.aabbQuery = function (a, c, q) { q = q || []; this.dirty && (this.sortList(), this.dirty = !1); a = this.axisList; for (var b = 0; b < a.length; b++) { var r = a[b]; r.aabbNeedsUpdate && r.computeAABB(); r.aabb.overlaps(c) && q.push(r) } return q }
        }, { "../collision/Broadphase": 5, "../shapes/Shape": 43 }],
        12: [function (c, n, v) {
            function a(a, r, k) {
                k = k || {}; var e = "undefined" !== typeof k.maxForce ? k.maxForce : 1E6, u = k.pivotA ? k.pivotA.clone() : new q, f = k.pivotB ? k.pivotB.clone() : new q; this.axisA = k.axisA ? k.axisA.clone() : new q; this.axisB = k.axisB ? k.axisB.clone() : new q; t.call(this, a, u, r, f, e); this.collideConnected = !!k.collideConnected; this.angle = "undefined" !== typeof k.angle ? k.angle : 0; u = this.coneEquation = new b(a, r, k); a = this.twistEquation = new y(a, r, k); this.twistAngle = "undefined" !== typeof k.twistAngle ? k.twistAngle : 0; u.maxForce =
                    0; u.minForce = -e; a.maxForce = 0; a.minForce = -e; this.equations.push(u, a)
            } n.exports = a; c("./Constraint"); var t = c("./PointToPointConstraint"), b = c("../equations/ConeEquation"), y = c("../equations/RotationalEquation"); c("../equations/ContactEquation"); var q = c("../math/Vec3"); a.prototype = new t; a.constructor = a; new q; new q; a.prototype.update = function () {
                var a = this.bodyA, b = this.bodyB, k = this.coneEquation, m = this.twistEquation; t.prototype.update.call(this); a.vectorToWorldFrame(this.axisA, k.axisA); b.vectorToWorldFrame(this.axisB,
                    k.axisB); this.axisA.tangents(m.axisA, m.axisA); a.vectorToWorldFrame(m.axisA, m.axisA); this.axisB.tangents(m.axisB, m.axisB); b.vectorToWorldFrame(m.axisB, m.axisB); k.angle = this.angle; m.maxAngle = this.twistAngle
            }
        }, { "../equations/ConeEquation": 18, "../equations/ContactEquation": 19, "../equations/RotationalEquation": 22, "../math/Vec3": 30, "./Constraint": 13, "./PointToPointConstraint": 17 }], 13: [function (c, n, v) {
            function a(b, c, q) {
                q = t.defaults(q, { collideConnected: !0, wakeUpBodies: !0 }); this.equations = []; this.bodyA = b;
                this.bodyB = c; this.id = a.idCounter++; this.collideConnected = q.collideConnected; q.wakeUpBodies && (b && b.wakeUp(), c && c.wakeUp())
            } n.exports = a; var t = c("../utils/Utils"); a.prototype.update = function () { throw Error("method update() not implmemented in this Constraint subclass!"); }; a.prototype.enable = function () { for (var a = this.equations, c = 0; c < a.length; c++)a[c].enabled = !0 }; a.prototype.disable = function () { for (var a = this.equations, c = 0; c < a.length; c++)a[c].enabled = !1 }; a.idCounter = 0
        }, { "../utils/Utils": 53 }], 14: [function (c,
            n, v) { function a(a, c, e, r) { t.call(this, a, c); "undefined" === typeof e && (e = a.position.distanceTo(c.position)); "undefined" === typeof r && (r = 1E6); this.distance = e; a = this.distanceEquation = new b(a, c); this.equations.push(a); a.minForce = -r; a.maxForce = r } n.exports = a; var t = c("./Constraint"), b = c("../equations/ContactEquation"); a.prototype = new t; a.prototype.update = function () { var a = this.distanceEquation, b = .5 * this.distance, e = a.ni; this.bodyB.position.vsub(this.bodyA.position, e); e.normalize(); e.mult(b, a.ri); e.mult(-b, a.rj) } },
        { "../equations/ContactEquation": 19, "./Constraint": 13 }], 15: [function (c, n, v) {
            function a(a, e, u) {
                u = u || {}; var f = "undefined" !== typeof u.maxForce ? u.maxForce : 1E6, d = u.pivotA ? u.pivotA.clone() : new q, k = u.pivotB ? u.pivotB.clone() : new q; t.call(this, a, d, e, k, f); (this.axisA = u.axisA ? u.axisA.clone() : new q(1, 0, 0)).normalize(); (this.axisB = u.axisB ? u.axisB.clone() : new q(1, 0, 0)).normalize(); d = this.rotationalEquation1 = new b(a, e, u); u = this.rotationalEquation2 = new b(a, e, u); a = this.motorEquation = new y(a, e, f); a.enabled = !1; this.equations.push(d,
                    u, a)
            } n.exports = a; c("./Constraint"); var t = c("./PointToPointConstraint"), b = c("../equations/RotationalEquation"), y = c("../equations/RotationalMotorEquation"); c("../equations/ContactEquation"); var q = c("../math/Vec3"); a.prototype = new t; a.constructor = a; a.prototype.enableMotor = function () { this.motorEquation.enabled = !0 }; a.prototype.disableMotor = function () { this.motorEquation.enabled = !1 }; a.prototype.setMotorSpeed = function (a) { this.motorEquation.targetVelocity = a }; a.prototype.setMotorMaxForce = function (a) {
                this.motorEquation.maxForce =
                a; this.motorEquation.minForce = -a
            }; var e = new q, r = new q; a.prototype.update = function () { var a = this.bodyA, b = this.bodyB, u = this.motorEquation, f = this.rotationalEquation1, d = this.rotationalEquation2, w = this.axisA, z = this.axisB; t.prototype.update.call(this); a.quaternion.vmult(w, e); b.quaternion.vmult(z, r); e.tangents(f.axisA, d.axisA); f.axisB.copy(r); d.axisB.copy(r); this.motorEquation.enabled && (a.quaternion.vmult(this.axisA, u.axisA), b.quaternion.vmult(this.axisB, u.axisB)) }
        }, {
            "../equations/ContactEquation": 19, "../equations/RotationalEquation": 22,
            "../equations/RotationalMotorEquation": 23, "../math/Vec3": 30, "./Constraint": 13, "./PointToPointConstraint": 17
        }], 16: [function (c, n, v) {
            function a(a, e, r) { r = r || {}; var k = "undefined" !== typeof r.maxForce ? r.maxForce : 1E6, m = new y, u = new y, f = new y; a.position.vadd(e.position, f); f.scale(.5, f); e.pointToLocalFrame(f, u); a.pointToLocalFrame(f, m); t.call(this, a, m, e, u, k); k = this.rotationalEquation1 = new b(a, e, r); m = this.rotationalEquation2 = new b(a, e, r); a = this.rotationalEquation3 = new b(a, e, r); this.equations.push(k, m, a) } n.exports =
                a; c("./Constraint"); var t = c("./PointToPointConstraint"), b = c("../equations/RotationalEquation"); c("../equations/RotationalMotorEquation"); c("../equations/ContactEquation"); var y = c("../math/Vec3"); a.prototype = new t; a.constructor = a; new y; new y; a.prototype.update = function () {
                    var a = this.bodyA, b = this.bodyB, r = this.rotationalEquation1, k = this.rotationalEquation2, m = this.rotationalEquation3; t.prototype.update.call(this); a.vectorToWorldFrame(y.UNIT_X, r.axisA); b.vectorToWorldFrame(y.UNIT_Y, r.axisB); a.vectorToWorldFrame(y.UNIT_Y,
                        k.axisA); b.vectorToWorldFrame(y.UNIT_Z, k.axisB); a.vectorToWorldFrame(y.UNIT_Z, m.axisA); b.vectorToWorldFrame(y.UNIT_X, m.axisB)
                }
        }, { "../equations/ContactEquation": 19, "../equations/RotationalEquation": 22, "../equations/RotationalMotorEquation": 23, "../math/Vec3": 30, "./Constraint": 13, "./PointToPointConstraint": 17 }], 17: [function (c, n, v) {
            function a(a, e, r, k, m) {
                t.call(this, a, r); m = "undefined" !== typeof m ? m : 1E6; this.pivotA = e ? e.clone() : new y; this.pivotB = k ? k.clone() : new y; e = this.equationX = new b(a, r); k = this.equationY =
                    new b(a, r); a = this.equationZ = new b(a, r); this.equations.push(e, k, a); e.minForce = k.minForce = a.minForce = -m; e.maxForce = k.maxForce = a.maxForce = m; e.ni.set(1, 0, 0); k.ni.set(0, 1, 0); a.ni.set(0, 0, 1)
            } n.exports = a; var t = c("./Constraint"), b = c("../equations/ContactEquation"), y = c("../math/Vec3"); a.prototype = new t; a.prototype.update = function () {
                var a = this.bodyB, b = this.equationX, r = this.equationY, k = this.equationZ; this.bodyA.quaternion.vmult(this.pivotA, b.ri); a.quaternion.vmult(this.pivotB, b.rj); r.ri.copy(b.ri); r.rj.copy(b.rj);
                k.ri.copy(b.ri); k.rj.copy(b.rj)
            }
        }, { "../equations/ContactEquation": 19, "../math/Vec3": 30, "./Constraint": 13 }], 18: [function (c, n, v) {
            function a(a, r, k) { k = k || {}; var e = "undefined" !== typeof k.maxForce ? k.maxForce : 1E6; b.call(this, a, r, -e, e); this.axisA = k.axisA ? k.axisA.clone() : new t(1, 0, 0); this.axisB = k.axisB ? k.axisB.clone() : new t(0, 1, 0); this.angle = "undefined" !== typeof k.angle ? k.angle : 0 } n.exports = a; var t = c("../math/Vec3"); c("../math/Mat3"); var b = c("./Equation"); a.prototype = new b; a.prototype.constructor = a; var y = new t,
                q = new t; a.prototype.computeB = function (a) { var b = this.a, e = this.b, m = this.axisA, u = this.axisB, f = this.jacobianElementA, d = this.jacobianElementB; m.cross(u, y); u.cross(m, q); f.rotational.copy(q); d.rotational.copy(y); m = Math.cos(this.angle) - m.dot(u); u = this.computeGW(); f = this.computeGiMf(); return -m * b - u * e - a * f }
        }, { "../math/Mat3": 27, "../math/Vec3": 30, "./Equation": 20 }], 19: [function (c, n, v) {
            function a(a, e, f) { t.call(this, a, e, 0, "undefined" !== typeof f ? f : 1E6); this.restitution = 0; this.ri = new b; this.rj = new b; this.ni = new b } n.exports =
                a; var t = c("./Equation"), b = c("../math/Vec3"); c("../math/Mat3"); a.prototype = new t; a.prototype.constructor = a; var y = new b, q = new b, e = new b; a.prototype.computeB = function (a) {
                    var d = this.a, b = this.b, f = this.bi, k = this.bj, m = this.ri, u = this.rj, c = f.velocity, r = f.angularVelocity, n = k.velocity, t = k.angularVelocity, E = this.jacobianElementA, v = this.jacobianElementB, B = this.ni; m.cross(B, y); u.cross(B, q); B.negate(E.spatial); y.negate(E.rotational); v.spatial.copy(B); v.rotational.copy(q); e.copy(k.position); e.vadd(u, e); e.vsub(f.position,
                        e); e.vsub(m, e); f = B.dot(e); k = this.restitution + 1; c = k * n.dot(B) - k * c.dot(B) + t.dot(q) - r.dot(y); r = this.computeGiMf(); return -f * d - c * b - a * r
                }; var r = new b, k = new b, m = new b, u = new b, f = new b; a.prototype.getImpactVelocityAlongNormal = function () { this.bi.position.vadd(this.ri, m); this.bj.position.vadd(this.rj, u); this.bi.getVelocityAtWorldPoint(m, r); this.bj.getVelocityAtWorldPoint(u, k); r.vsub(k, f); return this.ni.dot(f) }
        }, { "../math/Mat3": 27, "../math/Vec3": 30, "./Equation": 20 }], 20: [function (c, n, v) {
            function a(b, e, d, k) {
            this.id =
                a.id++; this.minForce = "undefined" === typeof d ? -1E6 : d; this.maxForce = "undefined" === typeof k ? 1E6 : k; this.bi = b; this.bj = e; this.eps = this.b = this.a = 0; this.jacobianElementA = new t; this.jacobianElementB = new t; this.enabled = !0; this.setSpookParams(1E7, 4, 1 / 60)
            } n.exports = a; var t = c("../math/JacobianElement"); c = c("../math/Vec3"); a.prototype.constructor = a; a.id = 0; a.prototype.setSpookParams = function (a, b, d) { this.a = 4 / (d * (1 + 4 * b)); this.b = 4 * b / (1 + 4 * b); this.eps = 4 / (d * d * a * (1 + 4 * b)) }; a.prototype.computeB = function (a, b, d) {
                var e = this.computeGW(),
                f = this.computeGq(), k = this.computeGiMf(); return -f * a - e * b - k * d
            }; a.prototype.computeGq = function () { var a = this.jacobianElementB, b = this.bj.position; return this.jacobianElementA.spatial.dot(this.bi.position) + a.spatial.dot(b) }; var b = new c; a.prototype.computeGW = function () { var a = this.jacobianElementB, e = this.bi, d = this.bj, k = d.velocity; d = d.angularVelocity || b; return this.jacobianElementA.multiplyVectors(e.velocity, e.angularVelocity || b) + a.multiplyVectors(k, d) }; a.prototype.computeGWlambda = function () {
                var a = this.jacobianElementB,
                e = this.bi, d = this.bj, k = d.vlambda; d = d.wlambda || b; return this.jacobianElementA.multiplyVectors(e.vlambda, e.wlambda || b) + a.multiplyVectors(k, d)
            }; var y = new c, q = new c, e = new c, r = new c; a.prototype.computeGiMf = function () {
                var a = this.jacobianElementA, b = this.jacobianElementB, d = this.bi, k = this.bj, m = d.force, g = d.torque, c = k.force, n = k.torque, t = d.invMassSolve, v = k.invMassSolve; d.invInertiaWorldSolve ? d.invInertiaWorldSolve.vmult(g, e) : e.set(0, 0, 0); k.invInertiaWorldSolve ? k.invInertiaWorldSolve.vmult(n, r) : r.set(0, 0, 0); m.mult(t,
                    y); c.mult(v, q); return a.multiplyVectors(y, e) + b.multiplyVectors(q, r)
            }; var k = new c; a.prototype.computeGiMGt = function () { var a = this.jacobianElementA, b = this.jacobianElementB, d = this.bi, e = this.bj, m = d.invInertiaWorldSolve, g = e.invInertiaWorldSolve; d = d.invMassSolve + e.invMassSolve; m && (m.vmult(a.rotational, k), d += k.dot(a.rotational)); g && (g.vmult(b.rotational, k), d += k.dot(b.rotational)); return d }; var m = new c; new c; new c; new c; new c; new c; a.prototype.addToWlambda = function (a) {
                var b = this.jacobianElementA, d = this.jacobianElementB,
                e = this.bi, k = this.bj; b.spatial.mult(e.invMassSolve * a, m); e.vlambda.vadd(m, e.vlambda); d.spatial.mult(k.invMassSolve * a, m); k.vlambda.vadd(m, k.vlambda); e.invInertiaWorldSolve && (e.invInertiaWorldSolve.vmult(b.rotational, m), m.mult(a, m), e.wlambda.vadd(m, e.wlambda)); k.invInertiaWorldSolve && (k.invInertiaWorldSolve.vmult(d.rotational, m), m.mult(a, m), k.wlambda.vadd(m, k.wlambda))
            }; a.prototype.computeC = function () { return this.computeGiMGt() + this.eps }
        }, { "../math/JacobianElement": 26, "../math/Vec3": 30 }], 21: [function (c,
            n, v) {
                function a(a, c, k) { t.call(this, a, c, -k, k); this.ri = new b; this.rj = new b; this.t = new b } n.exports = a; var t = c("./Equation"), b = c("../math/Vec3"); c("../math/Mat3"); a.prototype = new t; a.prototype.constructor = a; var y = new b, q = new b; a.prototype.computeB = function (a) {
                    var b = this.b, e = this.rj, m = this.t; this.ri.cross(m, y); e.cross(m, q); e = this.jacobianElementA; var c = this.jacobianElementB; m.negate(e.spatial); y.negate(e.rotational); c.spatial.copy(m); c.rotational.copy(q); m = this.computeGW(); e = this.computeGiMf(); return -m *
                        b - a * e
                }
        }, { "../math/Mat3": 27, "../math/Vec3": 30, "./Equation": 20 }], 22: [function (c, n, v) {
            function a(a, c, k) { k = k || {}; var e = "undefined" !== typeof k.maxForce ? k.maxForce : 1E6; b.call(this, a, c, -e, e); this.axisA = k.axisA ? k.axisA.clone() : new t(1, 0, 0); this.axisB = k.axisB ? k.axisB.clone() : new t(0, 1, 0); this.maxAngle = Math.PI / 2 } n.exports = a; var t = c("../math/Vec3"); c("../math/Mat3"); var b = c("./Equation"); a.prototype = new b; a.prototype.constructor = a; var y = new t, q = new t; a.prototype.computeB = function (a) {
                var b = this.a, e = this.b, m =
                    this.axisA, c = this.axisB, f = this.jacobianElementA, d = this.jacobianElementB; m.cross(c, y); c.cross(m, q); f.rotational.copy(q); d.rotational.copy(y); m = Math.cos(this.maxAngle) - m.dot(c); c = this.computeGW(); f = this.computeGiMf(); return -m * b - c * e - a * f
            }
        }, { "../math/Mat3": 27, "../math/Vec3": 30, "./Equation": 20 }], 23: [function (c, n, v) {
            function a(a, c, e) { e = "undefined" !== typeof e ? e : 1E6; b.call(this, a, c, -e, e); this.axisA = new t; this.axisB = new t; this.targetVelocity = 0 } n.exports = a; var t = c("../math/Vec3"); c("../math/Mat3"); var b = c("./Equation");
            a.prototype = new b; a.prototype.constructor = a; a.prototype.computeB = function (a) { var b = this.b, e = this.axisB, c = this.jacobianElementB; this.jacobianElementA.rotational.copy(this.axisA); e.negate(c.rotational); e = this.computeGW() - this.targetVelocity; c = this.computeGiMf(); return -e * b - a * c }
        }, { "../math/Mat3": 27, "../math/Vec3": 30, "./Equation": 20 }], 24: [function (c, n, v) {
            function a(b, c, q) {
                q = t.defaults(q, { friction: .3, restitution: .3, contactEquationStiffness: 1E7, contactEquationRelaxation: 3, frictionEquationStiffness: 1E7, frictionEquationRelaxation: 3 });
                this.id = a.idCounter++; this.materials = [b, c]; this.friction = q.friction; this.restitution = q.restitution; this.contactEquationStiffness = q.contactEquationStiffness; this.contactEquationRelaxation = q.contactEquationRelaxation; this.frictionEquationStiffness = q.frictionEquationStiffness; this.frictionEquationRelaxation = q.frictionEquationRelaxation
            } var t = c("../utils/Utils"); n.exports = a; a.idCounter = 0
        }, { "../utils/Utils": 53 }], 25: [function (c, n, v) {
            function a(c) {
                var b = ""; c = c || {}; "string" === typeof c ? (b = c, c = {}) : "object" ===
                    typeof c && (b = ""); this.name = b; this.id = a.idCounter++; this.friction = "undefined" !== typeof c.friction ? c.friction : -1; this.restitution = "undefined" !== typeof c.restitution ? c.restitution : -1
            } n.exports = a; a.idCounter = 0
        }, {}], 26: [function (c, n, v) { function a() { this.spatial = new t; this.rotational = new t } n.exports = a; var t = c("./Vec3"); a.prototype.multiplyElement = function (a) { return a.spatial.dot(this.spatial) + a.rotational.dot(this.rotational) }; a.prototype.multiplyVectors = function (a, c) { return a.dot(this.spatial) + c.dot(this.rotational) } },
        { "./Vec3": 30 }], 27: [function (c, n, v) {
            function a(a) { this.elements = a ? a : [0, 0, 0, 0, 0, 0, 0, 0, 0] } n.exports = a; var t = c("./Vec3"); a.prototype.identity = function () { var a = this.elements; a[0] = 1; a[1] = 0; a[2] = 0; a[3] = 0; a[4] = 1; a[5] = 0; a[6] = 0; a[7] = 0; a[8] = 1 }; a.prototype.setZero = function () { var a = this.elements; a[0] = 0; a[1] = 0; a[2] = 0; a[3] = 0; a[4] = 0; a[5] = 0; a[6] = 0; a[7] = 0; a[8] = 0 }; a.prototype.setTrace = function (a) { var b = this.elements; b[0] = a.x; b[4] = a.y; b[8] = a.z }; a.prototype.getTrace = function (a) {
                a = a || new t; var b = this.elements; a.x = b[0];
                a.y = b[4]; a.z = b[8]
            }; a.prototype.vmult = function (a, c) { c = c || new t; var b = this.elements, e = a.x, r = a.y, k = a.z; c.x = b[0] * e + b[1] * r + b[2] * k; c.y = b[3] * e + b[4] * r + b[5] * k; c.z = b[6] * e + b[7] * r + b[8] * k; return c }; a.prototype.smult = function (a) { for (var b = 0; b < this.elements.length; b++)this.elements[b] *= a }; a.prototype.mmult = function (b, c) { for (var q = c || new a, e = 0; 3 > e; e++)for (var r = 0; 3 > r; r++) { for (var k = 0, m = 0; 3 > m; m++)k += b.elements[e + 3 * m] * this.elements[m + 3 * r]; q.elements[e + 3 * r] = k } return q }; a.prototype.scale = function (b, c) {
                c = c || new a; for (var q =
                    this.elements, e = c.elements, r = 0; 3 !== r; r++)e[3 * r] = b.x * q[3 * r], e[3 * r + 1] = b.y * q[3 * r + 1], e[3 * r + 2] = b.z * q[3 * r + 2]; return c
            }; a.prototype.solve = function (a, c) {
                c = c || new t; for (var b = [], e = 0; 12 > e; e++)b.push(0); var r; for (e = 0; 3 > e; e++)for (r = 0; 3 > r; r++)b[e + 4 * r] = this.elements[e + 3 * r]; b[3] = a.x; b[7] = a.y; b[11] = a.z; var k = 3, m = k; do {
                    e = m - k; if (0 === b[e + 4 * e]) for (r = e + 1; r < m; r++)if (0 !== b[e + 4 * r]) { var u = 4; do { var f = 4 - u; b[f + 4 * e] += b[f + 4 * r] } while (--u); break } if (0 !== b[e + 4 * e]) for (r = e + 1; r < m; r++) {
                        var d = b[e + 4 * r] / b[e + 4 * e]; u = 4; do f = 4 - u, b[f + 4 * r] = f <=
                            e ? 0 : b[f + 4 * r] - b[f + 4 * e] * d; while (--u)
                    }
                } while (--k); c.z = b[11] / b[10]; c.y = (b[7] - b[6] * c.z) / b[5]; c.x = (b[3] - b[2] * c.z - b[1] * c.y) / b[0]; if (isNaN(c.x) || isNaN(c.y) || isNaN(c.z) || Infinity === c.x || Infinity === c.y || Infinity === c.z) throw "Could not solve equation! Got x=[" + c.toString() + "], b=[" + a.toString() + "], A=[" + this.toString() + "]"; return c
            }; a.prototype.e = function (a, c, q) { if (void 0 === q) return this.elements[c + 3 * a]; this.elements[c + 3 * a] = q }; a.prototype.copy = function (a) {
                for (var b = 0; b < a.elements.length; b++)this.elements[b] =
                    a.elements[b]; return this
            }; a.prototype.toString = function () { for (var a = "", c = 0; 9 > c; c++)a += this.elements[c] + ","; return a }; a.prototype.reverse = function (b) {
                b = b || new a; for (var c = [], q = 0; 18 > q; q++)c.push(0); var e; for (q = 0; 3 > q; q++)for (e = 0; 3 > e; e++)c[q + 6 * e] = this.elements[q + 3 * e]; c[3] = 1; c[9] = 0; c[15] = 0; c[4] = 0; c[10] = 1; c[16] = 0; c[5] = 0; c[11] = 0; c[17] = 1; var r = 3, k = r; do {
                    q = k - r; if (0 === c[q + 6 * q]) for (e = q + 1; e < k; e++)if (0 !== c[q + 6 * e]) { var m = 6; do { var u = 6 - m; c[u + 6 * q] += c[u + 6 * e] } while (--m); break } if (0 !== c[q + 6 * q]) for (e = q + 1; e < k; e++) {
                        var f =
                            c[q + 6 * e] / c[q + 6 * q]; m = 6; do u = 6 - m, c[u + 6 * e] = u <= q ? 0 : c[u + 6 * e] - c[u + 6 * q] * f; while (--m)
                    }
                } while (--r); q = 2; do { e = q - 1; do { f = c[q + 6 * e] / c[q + 6 * q]; m = 6; do u = 6 - m, c[u + 6 * e] -= c[u + 6 * q] * f; while (--m) } while (e--) } while (--q); q = 2; do { f = 1 / c[q + 6 * q]; m = 6; do u = 6 - m, c[u + 6 * q] *= f; while (--m) } while (q--); q = 2; do { e = 2; do { u = c[3 + e + 6 * q]; if (isNaN(u) || Infinity === u) throw "Could not reverse! A=[" + this.toString() + "]"; b.e(q, e, u) } while (e--) } while (q--); return b
            }; a.prototype.setRotationFromQuaternion = function (a) {
                var b = a.x, c = a.y, e = a.z, r = a.w, k = b + b, m = c + c, u = e + e;
                a = b * k; var f = b * m; b *= u; var d = c * m; c *= u; e *= u; k *= r; m *= r; r *= u; u = this.elements; u[0] = 1 - (d + e); u[1] = f - r; u[2] = b + m; u[3] = f + r; u[4] = 1 - (a + e); u[5] = c - k; u[6] = b - m; u[7] = c + k; u[8] = 1 - (a + d); return this
            }; a.prototype.transpose = function (b) { b = b || new a; for (var c = b.elements, q = this.elements, e = 0; 3 !== e; e++)for (var r = 0; 3 !== r; r++)c[3 * e + r] = q[3 * r + e]; return b }
        }, { "./Vec3": 30 }], 28: [function (c, n, v) {
            function a(a, b, e, f) { this.x = void 0 !== a ? a : 0; this.y = void 0 !== b ? b : 0; this.z = void 0 !== e ? e : 0; this.w = void 0 !== f ? f : 1 } n.exports = a; var t = c("./Vec3"); a.prototype.set =
                function (a, b, e, f) { this.x = a; this.y = b; this.z = e; this.w = f }; a.prototype.toString = function () { return this.x + "," + this.y + "," + this.z + "," + this.w }; a.prototype.toArray = function () { return [this.x, this.y, this.z, this.w] }; a.prototype.setFromAxisAngle = function (a, b) { var e = Math.sin(.5 * b); this.x = a.x * e; this.y = a.y * e; this.z = a.z * e; this.w = Math.cos(.5 * b) }; a.prototype.toAxisAngle = function (a) {
                    a = a || new t; this.normalize(); var b = 2 * Math.acos(this.w), e = Math.sqrt(1 - this.w * this.w); .001 > e ? (a.x = this.x, a.y = this.y, a.z = this.z) : (a.x = this.x /
                        e, a.y = this.y / e, a.z = this.z / e); return [a, b]
                }; var b = new t, y = new t; a.prototype.setFromVectors = function (a, e) { if (a.isAntiparallelTo(e)) a.tangents(b, y), this.setFromAxisAngle(b, Math.PI); else { var k = a.cross(e); this.x = k.x; this.y = k.y; this.z = k.z; this.w = Math.sqrt(Math.pow(a.norm(), 2) * Math.pow(e.norm(), 2)) + a.dot(e); this.normalize() } }; var q = new t, e = new t, r = new t; a.prototype.mult = function (b, c) {
                    c = c || new a; var k = this.w; q.set(this.x, this.y, this.z); e.set(b.x, b.y, b.z); c.w = k * b.w - q.dot(e); q.cross(e, r); c.x = k * e.x + b.w * q.x + r.x;
                    c.y = k * e.y + b.w * q.y + r.y; c.z = k * e.z + b.w * q.z + r.z; return c
                }; a.prototype.inverse = function (b) { var e = this.x, c = this.y, f = this.z, d = this.w; b = b || new a; this.conjugate(b); e = 1 / (e * e + c * c + f * f + d * d); b.x *= e; b.y *= e; b.z *= e; b.w *= e; return b }; a.prototype.conjugate = function (b) { b = b || new a; b.x = -this.x; b.y = -this.y; b.z = -this.z; b.w = this.w; return b }; a.prototype.normalize = function () {
                    var a = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w); 0 === a ? this.w = this.z = this.y = this.x = 0 : (a = 1 / a, this.x *= a, this.y *= a, this.z *= a, this.w *=
                        a)
                }; a.prototype.normalizeFast = function () { var a = (3 - (this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)) / 2; 0 === a ? this.w = this.z = this.y = this.x = 0 : (this.x *= a, this.y *= a, this.z *= a, this.w *= a) }; a.prototype.vmult = function (a, b) { b = b || new t; var e = a.x, f = a.y, d = a.z, c = this.x, k = this.y, g = this.z, m = this.w, r = m * e + k * d - g * f, q = m * f + g * e - c * d, n = m * d + c * f - k * e; e = -c * e - k * f - g * d; b.x = r * m + e * -c + q * -g - n * -k; b.y = q * m + e * -k + n * -c - r * -g; b.z = n * m + e * -g + r * -k - q * -c; return b }; a.prototype.copy = function (a) { this.x = a.x; this.y = a.y; this.z = a.z; this.w = a.w; return this };
            a.prototype.toEuler = function (a, b) { b = b || "YZX"; var e = this.x, f = this.y, d = this.z, c = this.w; switch (b) { case "YZX": var k = e * f + d * c; if (.499 < k) { var g = 2 * Math.atan2(e, c); var m = Math.PI / 2; var r = 0 } -.499 > k && (g = -2 * Math.atan2(e, c), m = -Math.PI / 2, r = 0); isNaN(g) && (r = d * d, g = Math.atan2(2 * f * c - 2 * e * d, 1 - 2 * f * f - 2 * r), m = Math.asin(2 * k), r = Math.atan2(2 * e * c - 2 * f * d, 1 - 2 * e * e - 2 * r)); break; default: throw Error("Euler order " + b + " not supported yet."); }a.y = g; a.z = m; a.x = r }; a.prototype.setFromEuler = function (a, b, e, f) {
                f = f || "XYZ"; var d = Math.cos(a / 2), c =
                    Math.cos(b / 2), k = Math.cos(e / 2); a = Math.sin(a / 2); b = Math.sin(b / 2); e = Math.sin(e / 2); "XYZ" === f ? (this.x = a * c * k + d * b * e, this.y = d * b * k - a * c * e, this.z = d * c * e + a * b * k, this.w = d * c * k - a * b * e) : "YXZ" === f ? (this.x = a * c * k + d * b * e, this.y = d * b * k - a * c * e, this.z = d * c * e - a * b * k, this.w = d * c * k + a * b * e) : "ZXY" === f ? (this.x = a * c * k - d * b * e, this.y = d * b * k + a * c * e, this.z = d * c * e + a * b * k, this.w = d * c * k - a * b * e) : "ZYX" === f ? (this.x = a * c * k - d * b * e, this.y = d * b * k + a * c * e, this.z = d * c * e - a * b * k, this.w = d * c * k + a * b * e) : "YZX" === f ? (this.x = a * c * k + d * b * e, this.y = d * b * k + a * c * e, this.z = d * c * e - a * b * k, this.w =
                        d * c * k - a * b * e) : "XZY" === f && (this.x = a * c * k - d * b * e, this.y = d * b * k - a * c * e, this.z = d * c * e + a * b * k, this.w = d * c * k + a * b * e); return this
            }; a.prototype.clone = function () { return new a(this.x, this.y, this.z, this.w) }
        }, { "./Vec3": 30 }], 29: [function (c, n, v) {
            function a(a) { a = a || {}; this.position = new t; a.position && this.position.copy(a.position); this.quaternion = new b; a.quaternion && this.quaternion.copy(a.quaternion) } var t = c("./Vec3"), b = c("./Quaternion"); n.exports = a; var y = new b; a.pointToLocalFrame = function (a, b, c, k) {
                k = k || new t; c.vsub(a, k);
                b.conjugate(y); y.vmult(k, k); return k
            }; a.prototype.pointToLocal = function (b, e) { return a.pointToLocalFrame(this.position, this.quaternion, b, e) }; a.pointToWorldFrame = function (a, b, c, k) { k = k || new t; b.vmult(c, k); k.vadd(a, k); return k }; a.prototype.pointToWorld = function (b, e) { return a.pointToWorldFrame(this.position, this.quaternion, b, e) }; a.prototype.vectorToWorldFrame = function (a, b) { b = b || new t; this.quaternion.vmult(a, b); return b }; a.vectorToWorldFrame = function (a, b, c) { a.vmult(b, c); return c }; a.vectorToLocalFrame = function (a,
                b, c, k) { k = k || new t; b.w *= -1; b.vmult(c, k); b.w *= -1; return k }
        }, { "./Quaternion": 28, "./Vec3": 30 }], 30: [function (c, n, v) {
            function a(a, b, c) { this.x = a || 0; this.y = b || 0; this.z = c || 0 } n.exports = a; var t = c("./Mat3"); a.ZERO = new a(0, 0, 0); a.UNIT_X = new a(1, 0, 0); a.UNIT_Y = new a(0, 1, 0); a.UNIT_Z = new a(0, 0, 1); a.prototype.cross = function (b, c) { var e = b.x, m = b.y, r = b.z, f = this.x, d = this.y, w = this.z; c = c || new a; c.x = d * r - w * m; c.y = w * e - f * r; c.z = f * m - d * e; return c }; a.prototype.set = function (a, b, c) { this.x = a; this.y = b; this.z = c; return this }; a.prototype.setZero =
                function () { this.x = this.y = this.z = 0 }; a.prototype.vadd = function (b, c) { if (c) c.x = b.x + this.x, c.y = b.y + this.y, c.z = b.z + this.z; else return new a(this.x + b.x, this.y + b.y, this.z + b.z) }; a.prototype.vsub = function (b, c) { if (c) c.x = this.x - b.x, c.y = this.y - b.y, c.z = this.z - b.z; else return new a(this.x - b.x, this.y - b.y, this.z - b.z) }; a.prototype.crossmat = function () { return new t([0, -this.z, this.y, this.z, 0, -this.x, -this.y, this.x, 0]) }; a.prototype.normalize = function () {
                    var a = this.x, b = this.y, c = this.z; a = Math.sqrt(a * a + b * b + c * c); 0 < a ? (b = 1 /
                        a, this.x *= b, this.y *= b, this.z *= b) : this.z = this.y = this.x = 0; return a
                }; a.prototype.unit = function (b) { b = b || new a; var e = this.x, c = this.y, m = this.z, u = Math.sqrt(e * e + c * c + m * m); 0 < u ? (u = 1 / u, b.x = e * u, b.y = c * u, b.z = m * u) : (b.x = 1, b.y = 0, b.z = 0); return b }; a.prototype.norm = function () { var a = this.x, b = this.y, c = this.z; return Math.sqrt(a * a + b * b + c * c) }; a.prototype.length = a.prototype.norm; a.prototype.norm2 = function () { return this.dot(this) }; a.prototype.lengthSquared = a.prototype.norm2; a.prototype.distanceTo = function (a) {
                    var b = this.x, e = this.y,
                    c = this.z, u = a.x, f = a.y; a = a.z; return Math.sqrt((u - b) * (u - b) + (f - e) * (f - e) + (a - c) * (a - c))
                }; a.prototype.distanceSquared = function (a) { var b = this.x, e = this.y, c = this.z, u = a.x, f = a.y; a = a.z; return (u - b) * (u - b) + (f - e) * (f - e) + (a - c) * (a - c) }; a.prototype.mult = function (b, c) { c = c || new a; var e = this.y, m = this.z; c.x = b * this.x; c.y = b * e; c.z = b * m; return c }; a.prototype.scale = a.prototype.mult; a.prototype.dot = function (a) { return this.x * a.x + this.y * a.y + this.z * a.z }; a.prototype.isZero = function () { return 0 === this.x && 0 === this.y && 0 === this.z }; a.prototype.negate =
                    function (b) { b = b || new a; b.x = -this.x; b.y = -this.y; b.z = -this.z; return b }; var b = new a, y = new a; a.prototype.tangents = function (a, c) { var e = this.norm(); 0 < e ? (e = 1 / e, b.set(this.x * e, this.y * e, this.z * e), .9 > Math.abs(b.x) ? y.set(1, 0, 0) : y.set(0, 1, 0), b.cross(y, a), b.cross(a, c)) : (a.set(1, 0, 0), c.set(0, 1, 0)) }; a.prototype.toString = function () { return this.x + "," + this.y + "," + this.z }; a.prototype.toArray = function () { return [this.x, this.y, this.z] }; a.prototype.copy = function (a) { this.x = a.x; this.y = a.y; this.z = a.z; return this }; a.prototype.lerp =
                        function (a, b, c) { var e = this.x, k = this.y, f = this.z; c.x = e + (a.x - e) * b; c.y = k + (a.y - k) * b; c.z = f + (a.z - f) * b }; a.prototype.almostEquals = function (a, b) { void 0 === b && (b = 1E-6); return Math.abs(this.x - a.x) > b || Math.abs(this.y - a.y) > b || Math.abs(this.z - a.z) > b ? !1 : !0 }; a.prototype.almostZero = function (a) { void 0 === a && (a = 1E-6); return Math.abs(this.x) > a || Math.abs(this.y) > a || Math.abs(this.z) > a ? !1 : !0 }; var q = new a; a.prototype.isAntiparallelTo = function (a, b) { this.negate(q); return q.almostEquals(a, b) }; a.prototype.clone = function () {
                            return new a(this.x,
                                this.y, this.z)
                        }
        }, { "./Mat3": 27 }], 31: [function (c, n, v) {
            function a(d) {
                d = d || {}; t.apply(this); this.id = a.idCounter++; this.postStep = this.preStep = this.world = null; this.vlambda = new b; this.collisionFilterGroup = "number" === typeof d.collisionFilterGroup ? d.collisionFilterGroup : 1; this.collisionFilterMask = "number" === typeof d.collisionFilterMask ? d.collisionFilterMask : 1; this.collisionResponse = !0; this.position = new b; d.position && this.position.copy(d.position); this.previousPosition = new b; this.initPosition = new b; this.velocity =
                    new b; d.velocity && this.velocity.copy(d.velocity); this.initVelocity = new b; this.force = new b; var c = "number" === typeof d.mass ? d.mass : 0; this.mass = c; this.invMass = 0 < c ? 1 / c : 0; this.material = d.material || null; this.linearDamping = "number" === typeof d.linearDamping ? d.linearDamping : .01; this.type = 0 >= c ? a.STATIC : a.DYNAMIC; typeof d.type === typeof a.STATIC && (this.type = d.type); this.allowSleep = "undefined" !== typeof d.allowSleep ? d.allowSleep : !0; this.sleepState = 0; this.sleepSpeedLimit = "undefined" !== typeof d.sleepSpeedLimit ? d.sleepSpeedLimit :
                        .1; this.sleepTimeLimit = "undefined" !== typeof d.sleepTimeLimit ? d.sleepTimeLimit : 1; this.timeLastSleepy = 0; this._wakeUpAfterNarrowphase = !1; this.torque = new b; this.quaternion = new q; d.quaternion && this.quaternion.copy(d.quaternion); this.initQuaternion = new q; this.angularVelocity = new b; d.angularVelocity && this.angularVelocity.copy(d.angularVelocity); this.initAngularVelocity = new b; this.interpolatedPosition = new b; this.interpolatedQuaternion = new q; this.shapes = []; this.shapeOffsets = []; this.shapeOrientations = []; this.inertia =
                            new b; this.invInertia = new b; this.invInertiaWorld = new y; this.invMassSolve = 0; this.invInertiaSolve = new b; this.invInertiaWorldSolve = new y; this.fixedRotation = "undefined" !== typeof d.fixedRotation ? d.fixedRotation : !1; this.angularDamping = "undefined" !== typeof d.angularDamping ? d.angularDamping : .01; this.aabb = new e; this.aabbNeedsUpdate = !0; this.wlambda = new b; d.shape && this.addShape(d.shape); this.updateMassProperties()
            } n.exports = a; var t = c("../utils/EventTarget"); c("../shapes/Shape"); var b = c("../math/Vec3"), y = c("../math/Mat3"),
                q = c("../math/Quaternion"); c("../material/Material"); var e = c("../collision/AABB"), r = c("../shapes/Box"); a.prototype = new t; a.prototype.constructor = a; a.DYNAMIC = 1; a.STATIC = 2; a.KINEMATIC = 4; a.AWAKE = 0; a.SLEEPY = 1; a.SLEEPING = 2; a.idCounter = 0; a.prototype.wakeUp = function () { var b = this.sleepState; this.sleepState = 0; b === a.SLEEPING && this.dispatchEvent({ type: "wakeup" }) }; a.prototype.sleep = function () { this.sleepState = a.SLEEPING; this.velocity.set(0, 0, 0); this.angularVelocity.set(0, 0, 0) }; a.sleepyEvent = { type: "sleepy" }; a.sleepEvent =
                    { type: "sleep" }; a.prototype.sleepTick = function (b) { if (this.allowSleep) { var d = this.sleepState, c = this.velocity.norm2() + this.angularVelocity.norm2(), e = Math.pow(this.sleepSpeedLimit, 2); d === a.AWAKE && c < e ? (this.sleepState = a.SLEEPY, this.timeLastSleepy = b, this.dispatchEvent(a.sleepyEvent)) : d === a.SLEEPY && c > e ? this.wakeUp() : d === a.SLEEPY && b - this.timeLastSleepy > this.sleepTimeLimit && (this.sleep(), this.dispatchEvent(a.sleepEvent)) } }; a.prototype.updateSolveMassProperties = function () {
                    this.sleepState === a.SLEEPING || this.type ===
                        a.KINEMATIC ? (this.invMassSolve = 0, this.invInertiaSolve.setZero(), this.invInertiaWorldSolve.setZero()) : (this.invMassSolve = this.invMass, this.invInertiaSolve.copy(this.invInertia), this.invInertiaWorldSolve.copy(this.invInertiaWorld))
                    }; a.prototype.pointToLocalFrame = function (a, d) { d = d || new b; a.vsub(this.position, d); this.quaternion.conjugate().vmult(d, d); return d }; a.prototype.vectorToLocalFrame = function (a, d) { d = d || new b; this.quaternion.conjugate().vmult(a, d); return d }; a.prototype.pointToWorldFrame = function (a,
                        d) { d = d || new b; this.quaternion.vmult(a, d); d.vadd(this.position, d); return d }; a.prototype.vectorToWorldFrame = function (a, d) { d = d || new b; this.quaternion.vmult(a, d); return d }; var k = new b, m = new q; a.prototype.addShape = function (a, d, c) { var e = new b, f = new q; d && e.copy(d); c && f.copy(c); this.shapes.push(a); this.shapeOffsets.push(e); this.shapeOrientations.push(f); this.updateMassProperties(); this.updateBoundingRadius(); this.aabbNeedsUpdate = !0; return this }; a.prototype.updateBoundingRadius = function () {
                            for (var a = this.shapes,
                                d = this.shapeOffsets, b = a.length, c = 0, e = 0; e !== b; e++) { var f = a[e]; f.updateBoundingSphereRadius(); var g = d[e].norm(); f = f.boundingSphereRadius; g + f > c && (c = g + f) } this.boundingRadius = c
                        }; var u = new e; a.prototype.computeAABB = function () {
                            for (var a = this.shapes, d = this.shapeOffsets, b = this.shapeOrientations, c = a.length, e = this.quaternion, f = this.aabb, g = 0; g !== c; g++) { var w = a[g]; b[g].mult(e, m); m.vmult(d[g], k); k.vadd(this.position, k); w.calculateWorldAABB(k, m, u.lowerBound, u.upperBound); 0 === g ? f.copy(u) : f.extend(u) } this.aabbNeedsUpdate =
                                !1
                        }; var f = new y, d = new y; new y; a.prototype.updateInertiaWorld = function (a) { var b = this.invInertia; if (b.x !== b.y || b.y !== b.z || a) f.setRotationFromQuaternion(this.quaternion), f.transpose(d), f.scale(b, f), f.mmult(d, this.invInertiaWorld) }; var w = new b, z = new b; a.prototype.applyForce = function (d, b) { this.type === a.DYNAMIC && (b.vsub(this.position, w), w.cross(d, z), this.force.vadd(d, this.force), this.torque.vadd(z, this.torque)) }; var g = new b, C = new b; a.prototype.applyLocalForce = function (d, b) {
                        this.type === a.DYNAMIC && (this.vectorToWorldFrame(d,
                            g), this.pointToWorldFrame(b, C), this.applyForce(g, C))
                        }; var Q = new b, S = new b, R = new b; a.prototype.applyImpulse = function (d, b) { this.type === a.DYNAMIC && (b.vsub(this.position, Q), S.copy(d), S.mult(this.invMass, S), this.velocity.vadd(S, this.velocity), Q.cross(d, R), this.invInertiaWorld.vmult(R, R), this.angularVelocity.vadd(R, this.angularVelocity)) }; var O = new b, J = new b; a.prototype.applyLocalImpulse = function (d, b) { this.type === a.DYNAMIC && (this.vectorToWorldFrame(d, O), this.pointToWorldFrame(b, J), this.applyImpulse(O, J)) };
            var G = new b; a.prototype.updateMassProperties = function () { this.invMass = 0 < this.mass ? 1 / this.mass : 0; var a = this.inertia, d = this.fixedRotation; this.computeAABB(); G.set((this.aabb.upperBound.x - this.aabb.lowerBound.x) / 2, (this.aabb.upperBound.y - this.aabb.lowerBound.y) / 2, (this.aabb.upperBound.z - this.aabb.lowerBound.z) / 2); r.calculateInertia(G, this.mass, a); this.invInertia.set(0 < a.x && !d ? 1 / a.x : 0, 0 < a.y && !d ? 1 / a.y : 0, 0 < a.z && !d ? 1 / a.z : 0); this.updateInertiaWorld(!0) }; a.prototype.getVelocityAtWorldPoint = function (a, d) {
                var c =
                    new b; a.vsub(this.position, c); this.angularVelocity.cross(c, d); this.velocity.vadd(d, d); return d
            }
        }, { "../collision/AABB": 3, "../material/Material": 25, "../math/Mat3": 27, "../math/Quaternion": 28, "../math/Vec3": 30, "../shapes/Box": 37, "../shapes/Shape": 43, "../utils/EventTarget": 49 }], 32: [function (c, n, v) {
            function a(a) {
            this.chassisBody = a.chassisBody; this.wheelInfos = []; this.sliding = !1; this.world = null; this.indexRightAxis = "undefined" !== typeof a.indexRightAxis ? a.indexRightAxis : 1; this.indexForwardAxis = "undefined" !==
                typeof a.indexForwardAxis ? a.indexForwardAxis : 0; this.indexUpAxis = "undefined" !== typeof a.indexUpAxis ? a.indexUpAxis : 2
            } function t(a, d, b) { var c = S, e = R, f = O, g = J; d.vsub(a.position, c); c.cross(b, e); a.invInertiaWorld.vmult(e, g); g.cross(c, f); return a.invMass + b.dot(f) } c("./Body"); var b = c("../math/Vec3"), y = c("../math/Quaternion"); c("../collision/RaycastResult"); v = c("../collision/Ray"); var q = c("../objects/WheelInfo"); n.exports = a; new b; new b; new b; var e = new b, r = new b, k = new b; new v; a.prototype.addWheel = function (a) {
                a =
                a || {}; a = new q(a); var d = this.wheelInfos.length; this.wheelInfos.push(a); return d
            }; a.prototype.setSteeringValue = function (a, d) { this.wheelInfos[d].steering = a }; new b; a.prototype.applyEngineForce = function (a, d) { this.wheelInfos[d].engineForce = a }; a.prototype.setBrake = function (a, d) { this.wheelInfos[d].brake = a }; a.prototype.addToWorld = function (a) { a.add(this.chassisBody); var d = this; this.preStepCallback = function () { d.updateVehicle(a.dt) }; a.addEventListener("preStep", this.preStepCallback); this.world = a }; a.prototype.getVehicleAxisWorld =
                function (a, d) { d.set(0 === a ? 1 : 0, 1 === a ? 1 : 0, 2 === a ? 1 : 0); this.chassisBody.vectorToWorldFrame(d, d) }; a.prototype.updateVehicle = function (a) {
                    for (var d = this.wheelInfos, c = d.length, e = this.chassisBody, f = 0; f < c; f++)this.updateWheelTransform(f); this.currentVehicleSpeedKmHour = 3.6 * e.velocity.norm(); f = new b; this.getVehicleAxisWorld(this.indexForwardAxis, f); 0 > f.dot(e.velocity) && (this.currentVehicleSpeedKmHour *= -1); for (f = 0; f < c; f++)this.castRay(d[f]); this.updateSuspension(a); var g = new b, k = new b; for (f = 0; f < c; f++) {
                        var m = d[f],
                        w = m.suspensionForce; w > m.maxSuspensionForce && (w = m.maxSuspensionForce); m.raycastResult.hitNormalWorld.scale(w * a, g); m.raycastResult.hitPointWorld.vsub(e.position, k); e.applyImpulse(g, m.raycastResult.hitPointWorld)
                    } this.updateFriction(a); g = new b; k = new b; w = new b; for (f = 0; f < c; f++) {
                        m = d[f]; e.getVelocityAtWorldPoint(m.chassisConnectionPointWorld, w); var z = 1; switch (this.indexUpAxis) { case 1: z = -1 }if (m.isInContact) {
                            this.getVehicleAxisWorld(this.indexForwardAxis, k); var r = k.dot(m.raycastResult.hitNormalWorld); m.raycastResult.hitNormalWorld.scale(r,
                                g); k.vsub(g, k); r = k.dot(w); m.deltaRotation = z * r * a / m.radius
                        } !m.sliding && m.isInContact || 0 === m.engineForce || !m.useCustomSlidingRotationalSpeed || (m.deltaRotation = (0 < m.engineForce ? 1 : -1) * m.customSlidingRotationalSpeed * a); Math.abs(m.brake) > Math.abs(m.engineForce) && (m.deltaRotation = 0); m.rotation += m.deltaRotation; m.deltaRotation *= .99
                    }
                }; a.prototype.updateSuspension = function (a) {
                    a = this.chassisBody.mass; for (var d = this.wheelInfos, b = d.length, c = 0; c < b; c++) {
                        var e = d[c]; if (e.isInContact) {
                            var f = e.suspensionStiffness * (e.suspensionRestLength -
                                e.suspensionLength) * e.clippedInvContactDotSuspension; var g = e.suspensionRelativeVelocity; f -= (0 > g ? e.dampingCompression : e.dampingRelaxation) * g; e.suspensionForce = f * a; 0 > e.suspensionForce && (e.suspensionForce = 0)
                        } else e.suspensionForce = 0
                    }
                }; a.prototype.removeFromWorld = function (a) { a.remove(this.chassisBody); a.removeEventListener("preStep", this.preStepCallback); this.world = null }; var m = new b, u = new b; a.prototype.castRay = function (a) {
                    this.updateWheelTransformWorld(a); var d = this.chassisBody, c = -1; a.directionWorld.scale(a.suspensionRestLength +
                        a.radius, m); var e = a.chassisConnectionPointWorld; e.vadd(m, u); var f = a.raycastResult; f.reset(); var g = d.collisionResponse; d.collisionResponse = !1; this.world.rayTest(e, u, f); d.collisionResponse = g; e = f.body; a.raycastResult.groundObject = 0; e ? (c = f.distance, a.raycastResult.hitNormalWorld = f.hitNormalWorld, a.isInContact = !0, a.suspensionLength = f.distance - a.radius, f = a.suspensionRestLength - a.maxSuspensionTravel, e = a.suspensionRestLength + a.maxSuspensionTravel, a.suspensionLength < f && (a.suspensionLength = f), a.suspensionLength >
                            e && (a.suspensionLength = e, a.raycastResult.reset()), f = a.raycastResult.hitNormalWorld.dot(a.directionWorld), e = new b, d.getVelocityAtWorldPoint(a.raycastResult.hitPointWorld, e), d = a.raycastResult.hitNormalWorld.dot(e), -.1 <= f ? (a.suspensionRelativeVelocity = 0, a.clippedInvContactDotSuspension = 10) : (f = -1 / f, a.suspensionRelativeVelocity = d * f, a.clippedInvContactDotSuspension = f)) : (a.suspensionLength = a.suspensionRestLength + 0 * a.maxSuspensionTravel, a.suspensionRelativeVelocity = 0, a.directionWorld.scale(-1, a.raycastResult.hitNormalWorld),
                                a.clippedInvContactDotSuspension = 1); return c
                }; a.prototype.updateWheelTransformWorld = function (a) { a.isInContact = !1; var d = this.chassisBody; d.pointToWorldFrame(a.chassisConnectionPointLocal, a.chassisConnectionPointWorld); d.vectorToWorldFrame(a.directionLocal, a.directionWorld); d.vectorToWorldFrame(a.axleLocal, a.axleWorld) }; a.prototype.updateWheelTransform = function (a) {
                    a = this.wheelInfos[a]; this.updateWheelTransformWorld(a); a.directionLocal.scale(-1, e); r.copy(a.axleLocal); e.cross(r, k); k.normalize(); r.normalize();
                    var d = a.steering, b = new y; b.setFromAxisAngle(e, d); d = new y; d.setFromAxisAngle(r, a.rotation); var c = a.worldTransform.quaternion; this.chassisBody.quaternion.mult(b, c); c.mult(d, c); c.normalize(); b = a.worldTransform.position; b.copy(a.directionWorld); b.scale(a.suspensionLength, b); b.vadd(a.chassisConnectionPointWorld, b)
                }; var f = [new b(1, 0, 0), new b(0, 1, 0), new b(0, 0, 1)]; a.prototype.getWheelTransformWorld = function (a) { return this.wheelInfos[a].worldTransform }; var d = new b, w = [], z = []; a.prototype.updateFriction = function (a) {
                    for (var c =
                        this.wheelInfos, e = c.length, m = this.chassisBody, k = 0, r = 0; r < e; r++) { var u = c[r], n = u.raycastResult.body; n && k++; u.sideImpulse = 0; u.forwardImpulse = 0; z[r] || (z[r] = new b); w[r] || (w[r] = new b) } for (r = 0; r < e; r++)if (u = c[r], n = u.raycastResult.body) {
                            var q = w[r]; this.getWheelTransformWorld(r).vectorToWorldFrame(f[this.indexRightAxis], q); k = u.raycastResult.hitNormalWorld; var y = q.dot(k); k.scale(y, d); q.vsub(d, q); q.normalize(); k.cross(q, z[r]); z[r].normalize(); k = u; y = m; var v = u.raycastResult.hitPointWorld, O = u.raycastResult.hitPointWorld;
                            if (1.1 < q.norm2()) n = 0; else { var S = G, B = E, J = P; y.getVelocityAtWorldPoint(v, S); n.getVelocityAtWorldPoint(O, B); S.vsub(B, J); n = -.2 * q.dot(J) * (1 / (y.invMass + n.invMass)) } k.sideImpulse = n; u.sideImpulse *= 1
                        } this.sliding = !1; for (r = 0; r < e; r++) {
                            u = c[r]; n = u.raycastResult.body; y = 0; u.slipInfo = 1; if (n) {
                                k = u.brake ? u.brake : 0; S = m; v = n; O = u.raycastResult.hitPointWorld; q = z[r]; y = k; B = O; J = g; var R = C, na = Q; S.getVelocityAtWorldPoint(B, J); v.getVelocityAtWorldPoint(B, R); J.vsub(R, na); B = q.dot(na); S = t(S, O, q); v = t(v, O, q); v = 1 / (S + v) * -B; y < v && (v = y);
                                v < -y && (v = -y); y = v; y += u.engineForce * a; k /= y; u.slipInfo *= k
                            } u.forwardImpulse = 0; u.skidInfo = 1; n && (u.skidInfo = 1, n = u.suspensionForce * a * u.frictionSlip, k = n * n, u.forwardImpulse = y, y = .5 * u.forwardImpulse, v = 1 * u.sideImpulse, y = y * y + v * v, u.sliding = !1, y > k && (this.sliding = !0, u.sliding = !0, k = n / Math.sqrt(y), u.skidInfo *= k))
                        } if (this.sliding) for (r = 0; r < e; r++)u = c[r], 0 !== u.sideImpulse && 1 > u.skidInfo && (u.forwardImpulse *= u.skidInfo, u.sideImpulse *= u.skidInfo); for (r = 0; r < e; r++)u = c[r], a = new b, a.copy(u.raycastResult.hitPointWorld), 0 !== u.forwardImpulse &&
                            (n = new b, z[r].scale(u.forwardImpulse, n), m.applyImpulse(n, a)), 0 !== u.sideImpulse && (n = u.raycastResult.body, k = new b, k.copy(u.raycastResult.hitPointWorld), y = new b, w[r].scale(u.sideImpulse, y), m.pointToLocalFrame(a, a), a["xyz"[this.indexUpAxis]] *= u.rollInfluence, m.pointToWorldFrame(a, a), m.applyImpulse(y, a), y.scale(-1, y), n.applyImpulse(y, k))
                }; var g = new b, C = new b, Q = new b, S = new b, R = new b, O = new b, J = new b, G = new b, E = new b, P = new b
        }, {
            "../collision/Ray": 9, "../collision/RaycastResult": 10, "../math/Quaternion": 28, "../math/Vec3": 30,
            "../objects/WheelInfo": 36, "./Body": 31
        }], 33: [function (c, n, v) {
            function a(a) { this.wheelBodies = []; this.coordinateSystem = "undefined" === typeof a.coordinateSystem ? new q(1, 2, 3) : a.coordinateSystem.clone(); this.chassisBody = a.chassisBody; this.chassisBody || (a = new y(new q(5, 2, .5)), this.chassisBody = new t(1, a)); this.constraints = []; this.wheelAxes = []; this.wheelForces = [] } var t = c("./Body"), b = c("../shapes/Sphere"), y = c("../shapes/Box"), q = c("../math/Vec3"), e = c("../constraints/HingeConstraint"); n.exports = a; a.prototype.addWheel =
                function (a) { a = a || {}; var c = a.body; c || (c = new t(1, new b(1.2))); this.wheelBodies.push(c); this.wheelForces.push(0); new q; var f = "undefined" !== typeof a.position ? a.position.clone() : new q, d = new q; this.chassisBody.pointToWorldFrame(f, d); c.position.set(d.x, d.y, d.z); a = "undefined" !== typeof a.axis ? a.axis.clone() : new q(0, 1, 0); this.wheelAxes.push(a); c = new e(this.chassisBody, c, { pivotA: f, axisA: a, pivotB: q.ZERO, axisB: a, collideConnected: !1 }); this.constraints.push(c); return this.wheelBodies.length - 1 }; a.prototype.setSteeringValue =
                    function (a, b) { var c = this.wheelAxes[b], d = Math.cos(a), e = Math.sin(a), k = c.x; c = c.y; this.constraints[b].axisA.set(d * k - e * c, e * k + d * c, 0) }; a.prototype.setMotorSpeed = function (a, b) { var c = this.constraints[b]; c.enableMotor(); c.motorTargetVelocity = a }; a.prototype.disableMotor = function (a) { this.constraints[a].disableMotor() }; var r = new q; a.prototype.setWheelForce = function (a, b) { this.wheelForces[b] = a }; a.prototype.applyWheelForce = function (a, b) {
                        var c = this.wheelBodies[b], d = c.torque; this.wheelAxes[b].scale(a, r); c.vectorToWorldFrame(r,
                            r); d.vadd(r, d)
                    }; a.prototype.addToWorld = function (a) { for (var b = this.constraints, c = this.wheelBodies.concat([this.chassisBody]), d = 0; d < c.length; d++)a.add(c[d]); for (d = 0; d < b.length; d++)a.addConstraint(b[d]); a.addEventListener("preStep", this._update.bind(this)) }; a.prototype._update = function () { for (var a = this.wheelForces, b = 0; b < a.length; b++)this.applyWheelForce(a[b], b) }; a.prototype.removeFromWorld = function (a) {
                        for (var b = this.constraints, c = this.wheelBodies.concat([this.chassisBody]), d = 0; d < c.length; d++)a.remove(c[d]);
                        for (d = 0; d < b.length; d++)a.removeConstraint(b[d])
                    }; var k = new q; a.prototype.getWheelSpeed = function (a) { var b = this.wheelBodies[a].angularVelocity; this.chassisBody.vectorToWorldFrame(this.wheelAxes[a], k); return b.dot(k) }
        }, { "../constraints/HingeConstraint": 15, "../math/Vec3": 30, "../shapes/Box": 37, "../shapes/Sphere": 44, "./Body": 31 }], 34: [function (c, n, v) {
            function a() {
            this.particles = []; this.speedOfSound = this.smoothingRadius = this.density = 1; this.viscosity = .01; this.eps = 1E-6; this.pressures = []; this.densities = []; this.neighbors =
                []
            } n.exports = a; c("../shapes/Shape"); n = c("../math/Vec3"); c("../math/Quaternion"); c("../shapes/Particle"); c("../objects/Body"); c("../material/Material"); a.prototype.add = function (a) { this.particles.push(a); this.neighbors.length < this.particles.length && this.neighbors.push([]) }; a.prototype.remove = function (a) { a = this.particles.indexOf(a); -1 !== a && (this.particles.splice(a, 1), this.neighbors.length > this.particles.length && this.neighbors.pop()) }; var t = new n; a.prototype.getNeighbors = function (a, b) {
                for (var c = this.particles.length,
                    d = a.id, e = this.smoothingRadius * this.smoothingRadius, k = 0; k !== c; k++) { var g = this.particles[k]; g.position.vsub(a.position, t); d !== g.id && t.norm2() < e && b.push(g) }
            }; var b = new n, y = new n, q = new n, e = new n, r = new n, k = new n; a.prototype.update = function () {
                for (var a = this.particles.length, c = this.speedOfSound, f = this.eps, d = 0; d !== a; d++) {
                    var w = this.particles[d], z = this.neighbors[d]; z.length = 0; this.getNeighbors(w, z); z.push(this.particles[d]); for (var g = z.length, n = 0, t = 0; t !== g; t++) {
                        w.position.vsub(z[t].position, b); var v = b.norm();
                        v = this.w(v); n += z[t].mass * v
                    } this.densities[d] = n; this.pressures[d] = c * c * (this.densities[d] - this.density)
                } for (d = 0; d !== a; d++) {
                    c = this.particles[d]; y.set(0, 0, 0); q.set(0, 0, 0); z = this.neighbors[d]; g = z.length; for (t = 0; t !== g; t++)n = z[t], c.position.vsub(n.position, r), v = r.norm(), w = -n.mass * (this.pressures[d] / (this.densities[d] * this.densities[d] + f) + this.pressures[t] / (this.densities[t] * this.densities[t] + f)), this.gradw(r, e), e.mult(w, e), y.vadd(e, y), n.velocity.vsub(c.velocity, k), k.mult(1 / (1E-4 + this.densities[d] * this.densities[t]) *
                        this.viscosity * n.mass, k), w = this.nablaw(v), k.mult(w, k), q.vadd(k, q); q.mult(c.mass, q); y.mult(c.mass, y); c.force.vadd(q, c.force); c.force.vadd(y, c.force)
                }
            }; a.prototype.w = function (a) { var b = this.smoothingRadius; return 315 / (64 * Math.PI * Math.pow(b, 9)) * Math.pow(b * b - a * a, 3) }; a.prototype.gradw = function (a, b) { var c = a.norm(), d = this.smoothingRadius; a.mult(945 / (32 * Math.PI * Math.pow(d, 9)) * Math.pow(d * d - c * c, 2), b) }; a.prototype.nablaw = function (a) {
                var b = this.smoothingRadius; return 945 / (32 * Math.PI * Math.pow(b, 9)) * (b * b - a * a) * (7 *
                    a * a - 3 * b * b)
            }
        }, { "../material/Material": 25, "../math/Quaternion": 28, "../math/Vec3": 30, "../objects/Body": 31, "../shapes/Particle": 41, "../shapes/Shape": 43 }], 35: [function (c, n, v) {
            function a(a, d, b) {
                b = b || {}; this.restLength = "number" === typeof b.restLength ? b.restLength : 1; this.stiffness = b.stiffness || 100; this.damping = b.damping || 1; this.bodyA = a; this.bodyB = d; this.localAnchorA = new t; this.localAnchorB = new t; b.localAnchorA && this.localAnchorA.copy(b.localAnchorA); b.localAnchorB && this.localAnchorB.copy(b.localAnchorB); b.worldAnchorA &&
                    this.setWorldAnchorA(b.worldAnchorA); b.worldAnchorB && this.setWorldAnchorB(b.worldAnchorB)
            } var t = c("../math/Vec3"); n.exports = a; a.prototype.setWorldAnchorA = function (a) { this.bodyA.pointToLocalFrame(a, this.localAnchorA) }; a.prototype.setWorldAnchorB = function (a) { this.bodyB.pointToLocalFrame(a, this.localAnchorB) }; a.prototype.getWorldAnchorA = function (a) { this.bodyA.pointToWorldFrame(this.localAnchorA, a) }; a.prototype.getWorldAnchorB = function (a) { this.bodyB.pointToWorldFrame(this.localAnchorB, a) }; var b = new t,
                y = new t, q = new t, e = new t, r = new t, k = new t, m = new t, u = new t, f = new t, d = new t, w = new t; a.prototype.applyForce = function () {
                    var a = this.stiffness, c = this.damping, n = this.restLength, t = this.bodyA, v = this.bodyB; this.getWorldAnchorA(r); this.getWorldAnchorB(k); r.vsub(t.position, m); k.vsub(v.position, u); k.vsub(r, b); var R = b.norm(); y.copy(b); y.normalize(); v.velocity.vsub(t.velocity, q); v.angularVelocity.cross(u, w); q.vadd(w, q); t.angularVelocity.cross(m, w); q.vsub(w, q); y.mult(-a * (R - n) - c * q.dot(y), e); t.force.vsub(e, t.force);
                    v.force.vadd(e, v.force); m.cross(e, f); u.cross(e, d); t.torque.vsub(f, t.torque); v.torque.vadd(d, v.torque)
                }
        }, { "../math/Vec3": 30 }], 36: [function (c, n, v) {
            function a(a) {
                a = q.defaults(a, {
                    chassisConnectionPointLocal: new t, chassisConnectionPointWorld: new t, directionLocal: new t, directionWorld: new t, axleLocal: new t, axleWorld: new t, suspensionRestLength: 1, suspensionMaxLength: 2, radius: 1, suspensionStiffness: 100, dampingCompression: 10, dampingRelaxation: 10, frictionSlip: 1E4, steering: 0, rotation: 0, deltaRotation: 0, rollInfluence: .01,
                    maxSuspensionForce: Number.MAX_VALUE, isFrontWheel: !0, clippedInvContactDotSuspension: 1, suspensionRelativeVelocity: 0, suspensionForce: 0, skidInfo: 0, suspensionLength: 0, maxSuspensionTravel: 1, useCustomSlidingRotationalSpeed: !1, customSlidingRotationalSpeed: -.1
                }); this.maxSuspensionTravel = a.maxSuspensionTravel; this.customSlidingRotationalSpeed = a.customSlidingRotationalSpeed; this.useCustomSlidingRotationalSpeed = a.useCustomSlidingRotationalSpeed; this.sliding = !1; this.chassisConnectionPointLocal = a.chassisConnectionPointLocal.clone();
                this.chassisConnectionPointWorld = a.chassisConnectionPointWorld.clone(); this.directionLocal = a.directionLocal.clone(); this.directionWorld = a.directionWorld.clone(); this.axleLocal = a.axleLocal.clone(); this.axleWorld = a.axleWorld.clone(); this.suspensionRestLength = a.suspensionRestLength; this.suspensionMaxLength = a.suspensionMaxLength; this.radius = a.radius; this.suspensionStiffness = a.suspensionStiffness; this.dampingCompression = a.dampingCompression; this.dampingRelaxation = a.dampingRelaxation; this.frictionSlip =
                    a.frictionSlip; this.deltaRotation = this.rotation = this.steering = 0; this.rollInfluence = a.rollInfluence; this.maxSuspensionForce = a.maxSuspensionForce; this.brake = this.engineForce = 0; this.isFrontWheel = a.isFrontWheel; this.clippedInvContactDotSuspension = 1; this.forwardImpulse = this.sideImpulse = this.suspensionLength = this.skidInfo = this.suspensionForce = this.suspensionRelativeVelocity = 0; this.raycastResult = new y; this.worldTransform = new b; this.isInContact = !1
            } var t = c("../math/Vec3"), b = c("../math/Transform"), y = c("../collision/RaycastResult"),
                q = c("../utils/Utils"); n.exports = a; var e = new t, r = new t; e = new t; a.prototype.updateWheel = function (a) {
                    var b = this.raycastResult; if (this.isInContact) { var c = b.hitNormalWorld.dot(b.directionWorld); b.hitPointWorld.vsub(a.position, r); a.getVelocityAtWorldPoint(r, e); a = b.hitNormalWorld.dot(e); -.1 <= c ? (this.suspensionRelativeVelocity = 0, this.clippedInvContactDotSuspension = 10) : (c = -1 / c, this.suspensionRelativeVelocity = a * c, this.clippedInvContactDotSuspension = c) } else b.suspensionLength = this.suspensionRestLength, this.suspensionRelativeVelocity =
                        0, b.directionWorld.scale(-1, b.hitNormalWorld), this.clippedInvContactDotSuspension = 1
                }
        }, { "../collision/RaycastResult": 10, "../math/Transform": 29, "../math/Vec3": 30, "../utils/Utils": 53 }], 37: [function (c, n, v) {
            function a(a) { t.call(this); this.type = t.types.BOX; this.halfExtents = a; this.convexPolyhedronRepresentation = null; this.updateConvexPolyhedronRepresentation(); this.updateBoundingSphereRadius() } n.exports = a; var t = c("./Shape"), b = c("../math/Vec3"), y = c("./ConvexPolyhedron"); a.prototype = new t; a.prototype.constructor =
                a; a.prototype.updateConvexPolyhedronRepresentation = function () { var a = this.halfExtents.x, c = this.halfExtents.y, e = this.halfExtents.z; a = [new b(-a, -c, -e), new b(a, -c, -e), new b(a, c, -e), new b(-a, c, -e), new b(-a, -c, e), new b(a, -c, e), new b(a, c, e), new b(-a, c, e)]; new b(0, 0, 1); new b(0, 1, 0); new b(1, 0, 0); this.convexPolyhedronRepresentation = a = new y(a, [[3, 2, 1, 0], [4, 5, 6, 7], [5, 4, 0, 1], [2, 3, 7, 6], [0, 4, 7, 3], [1, 2, 6, 5]]); a.material = this.material }; a.prototype.calculateLocalInertia = function (c, e) {
                    e = e || new b; a.calculateInertia(this.halfExtents,
                        c, e); return e
                }; a.calculateInertia = function (a, b, c) { c.x = 1 / 12 * b * (4 * a.y * a.y + 4 * a.z * a.z); c.y = 1 / 12 * b * (4 * a.x * a.x + 4 * a.z * a.z); c.z = 1 / 12 * b * (4 * a.y * a.y + 4 * a.x * a.x) }; a.prototype.getSideNormals = function (a, b) { var c = this.halfExtents; a[0].set(c.x, 0, 0); a[1].set(0, c.y, 0); a[2].set(0, 0, c.z); a[3].set(-c.x, 0, 0); a[4].set(0, -c.y, 0); a[5].set(0, 0, -c.z); if (void 0 !== b) for (c = 0; c !== a.length; c++)b.vmult(a[c], a[c]); return a }; a.prototype.volume = function () { return 8 * this.halfExtents.x * this.halfExtents.y * this.halfExtents.z }; a.prototype.updateBoundingSphereRadius =
                    function () { this.boundingSphereRadius = this.halfExtents.norm() }; var q = new b; new b; a.prototype.forEachWorldCorner = function (a, b, c) { var e = this.halfExtents; e = [[e.x, e.y, e.z], [-e.x, e.y, e.z], [-e.x, -e.y, e.z], [-e.x, -e.y, -e.z], [e.x, -e.y, -e.z], [e.x, e.y, -e.z], [-e.x, e.y, -e.z], [e.x, -e.y, e.z]]; for (var f = 0; f < e.length; f++)q.set(e[f][0], e[f][1], e[f][2]), b.vmult(q, q), a.vadd(q, q), c(q.x, q.y, q.z) }; var e = [new b, new b, new b, new b, new b, new b, new b, new b]; a.prototype.calculateWorldAABB = function (a, b, c, u) {
                        var f = this.halfExtents;
                        e[0].set(f.x, f.y, f.z); e[1].set(-f.x, f.y, f.z); e[2].set(-f.x, -f.y, f.z); e[3].set(-f.x, -f.y, -f.z); e[4].set(f.x, -f.y, -f.z); e[5].set(f.x, f.y, -f.z); e[6].set(-f.x, f.y, -f.z); e[7].set(f.x, -f.y, f.z); var d = e[0]; b.vmult(d, d); a.vadd(d, d); u.copy(d); c.copy(d); for (f = 1; 8 > f; f++) { d = e[f]; b.vmult(d, d); a.vadd(d, d); var k = d.x, m = d.y; d = d.z; k > u.x && (u.x = k); m > u.y && (u.y = m); d > u.z && (u.z = d); k < c.x && (c.x = k); m < c.y && (c.y = m); d < c.z && (c.z = d) }
                    }
        }, { "../math/Vec3": 30, "./ConvexPolyhedron": 38, "./Shape": 43 }], 38: [function (c, n, v) {
            function a(a, b,
                d) { t.call(this); this.type = t.types.CONVEXPOLYHEDRON; this.vertices = a || []; this.worldVertices = []; this.worldVerticesNeedsUpdate = !0; this.faces = b || []; this.faceNormals = []; this.computeNormals(); this.worldFaceNormalsNeedsUpdate = !0; this.worldFaceNormals = []; this.uniqueEdges = []; this.uniqueAxes = d ? d.slice() : null; this.computeEdges(); this.updateBoundingSphereRadius() } n.exports = a; var t = c("./Shape"), b = c("../math/Vec3"); c("../math/Quaternion"); var y = c("../math/Transform"); a.prototype = new t; a.prototype.constructor = a;
            var q = new b; a.prototype.computeEdges = function () { for (var a = this.faces, b = this.vertices, d = this.uniqueEdges, c = d.length = 0; c !== a.length; c++)for (var e = a[c], f = e.length, g = 0; g !== f; g++) { b[e[g]].vsub(b[e[(g + 1) % f]], q); q.normalize(); for (var k = !1, w = 0; w !== d.length; w++)if (d[w].almostEquals(q) || d[w].almostEquals(q)) { k = !0; break } k || d.push(q.clone()) } }; a.prototype.computeNormals = function () {
                this.faceNormals.length = this.faces.length; for (var a = 0; a < this.faces.length; a++) {
                    for (var d = 0; d < this.faces[a].length; d++)if (!this.vertices[this.faces[a][d]]) throw Error("Vertex " +
                        this.faces[a][d] + " not found!"); d = this.faceNormals[a] || new b; this.getFaceNormal(a, d); d.negate(d); this.faceNormals[a] = d; if (0 > d.dot(this.vertices[this.faces[a][0]])) for (console.error(".faceNormals[" + a + "] = Vec3(" + d.toString() + ") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule."), d = 0; d < this.faces[a].length; d++)console.warn(".vertices[" + this.faces[a][d] + "] = Vec3(" + this.vertices[this.faces[a][d]].toString() + ")")
                }
            }; var e =
                new b, r = new b; a.computeNormal = function (a, d, b, c) { d.vsub(a, r); b.vsub(d, e); e.cross(r, c); c.isZero() || c.normalize() }; a.prototype.getFaceNormal = function (d, b) { var c = this.faces[d]; return a.computeNormal(this.vertices[c[0]], this.vertices[c[1]], this.vertices[c[2]], b) }; var k = new b; a.prototype.clipAgainstHull = function (a, d, c, e, f, g, w, m, z) {
                    for (var r = -1, u = -Number.MAX_VALUE, n = 0; n < c.faces.length; n++) { k.copy(c.faceNormals[n]); f.vmult(k, k); var t = k.dot(g); t > u && (u = t, r = n) } u = []; n = c.faces[r]; t = n.length; for (var q = 0; q < t; q++) {
                        var C =
                            c.vertices[n[q]], p = new b; p.copy(C); f.vmult(p, p); e.vadd(p, p); u.push(p)
                    } 0 <= r && this.clipFaceAgainstHull(g, a, d, u, w, m, z)
                }; var m = new b, u = new b, f = new b, d = new b, w = new b, z = new b; a.prototype.findSeparatingAxis = function (a, b, c, e, g, k, r, n) {
                    var t = Number.MAX_VALUE, q = 0; if (this.uniqueAxes) for (y = 0; y !== this.uniqueAxes.length; y++) { c.vmult(this.uniqueAxes[y], m); v = this.testSepAxis(m, a, b, c, e, g); if (!1 === v) return !1; v < t && (t = v, k.copy(m)) } else for (var C = r ? r.length : this.faces.length, y = 0; y < C; y++) {
                        v = r ? r[y] : y; m.copy(this.faceNormals[v]);
                        c.vmult(m, m); var v = this.testSepAxis(m, a, b, c, e, g); if (!1 === v) return !1; v < t && (t = v, k.copy(m))
                    } if (a.uniqueAxes) for (y = 0; y !== a.uniqueAxes.length; y++) { g.vmult(a.uniqueAxes[y], u); q++; v = this.testSepAxis(u, a, b, c, e, g); if (!1 === v) return !1; v < t && (t = v, k.copy(u)) } else for (r = n ? n.length : a.faces.length, y = 0; y < r; y++) { v = n ? n[y] : y; u.copy(a.faceNormals[v]); g.vmult(u, u); q++; v = this.testSepAxis(u, a, b, c, e, g); if (!1 === v) return !1; v < t && (t = v, k.copy(u)) } for (n = 0; n !== this.uniqueEdges.length; n++)for (c.vmult(this.uniqueEdges[n], d), q = 0; q !==
                        a.uniqueEdges.length; q++)if (g.vmult(a.uniqueEdges[q], w), d.cross(w, z), !z.almostZero()) { z.normalize(); y = this.testSepAxis(z, a, b, c, e, g); if (!1 === y) return !1; y < t && (t = y, k.copy(z)) } e.vsub(b, f); 0 < f.dot(k) && k.negate(k); return !0
                }; var g = [], C = []; a.prototype.testSepAxis = function (b, d, c, e, f, k) { a.project(this, b, c, e, g); a.project(d, b, f, k, C); c = g[0]; b = g[1]; d = C[0]; e = C[1]; if (c < e || d < b) return !1; c -= e; b = d - b; return c < b ? c : b }; var Q = new b, S = new b; a.prototype.calculateLocalInertia = function (a, b) {
                    this.computeLocalAABB(Q, S); var d = S.x -
                        Q.x, c = S.y - Q.y, e = S.z - Q.z; b.x = 1 / 12 * a * (4 * c * c + 4 * e * e); b.y = 1 / 12 * a * (4 * d * d + 4 * e * e); b.z = 1 / 12 * a * (4 * c * c + 4 * d * d)
                }; a.prototype.getPlaneConstantOfFace = function (a) { return -this.faceNormals[a].dot(this.vertices[this.faces[a][0]]) }; var R = new b, O = new b, J = new b, G = new b, E = new b, P = new b, B = new b, L = new b; a.prototype.clipFaceAgainstHull = function (a, b, d, c, e, f, g) {
                    for (var k = [], w = -1, m = Number.MAX_VALUE, z = 0; z < this.faces.length; z++) { R.copy(this.faceNormals[z]); d.vmult(R, R); var r = R.dot(a); r < m && (m = r, w = z) } if (!(0 > w)) {
                        a = this.faces[w]; a.connectedFaces =
                            []; for (m = 0; m < this.faces.length; m++)for (z = 0; z < this.faces[m].length; z++)-1 !== a.indexOf(this.faces[m][z]) && m !== w && -1 === a.connectedFaces.indexOf(m) && a.connectedFaces.push(m); m = a.length; for (z = 0; z < m; z++) {
                                r = this.vertices[a[z]]; r.vsub(this.vertices[a[(z + 1) % m]], O); J.copy(O); d.vmult(J, J); b.vadd(J, J); G.copy(this.faceNormals[w]); d.vmult(G, G); b.vadd(G, G); J.cross(G, E); E.negate(E); P.copy(r); d.vmult(P, P); b.vadd(P, P); P.dot(E); r = a.connectedFaces[z]; B.copy(this.faceNormals[r]); r = this.getPlaneConstantOfFace(r); L.copy(B);
                                d.vmult(L, L); r -= L.dot(b); for (this.clipFaceAgainstPlane(c, k, L, r); c.length;)c.shift(); for (; k.length;)c.push(k.shift())
                            } B.copy(this.faceNormals[w]); r = this.getPlaneConstantOfFace(w); L.copy(B); d.vmult(L, L); r -= L.dot(b); for (m = 0; m < c.length; m++)b = L.dot(c[m]) + r, b <= e && (console.log("clamped: depth=" + b + " to minDist=" + (e + "")), b = e), b <= f && (d = c[m], 0 >= b && g.push({ point: d, normal: L, depth: b }))
                    }
                }; a.prototype.clipFaceAgainstPlane = function (a, d, c, e) {
                    var f = a.length; if (2 > f) return d; var g = a[a.length - 1]; var k = c.dot(g) + e; for (var w =
                        0; w < f; w++) { var m = a[w]; var z = c.dot(m) + e; if (0 > k) { if (0 > z) { var r = new b; r.copy(m) } else r = new b, g.lerp(m, k / (k - z), r); d.push(r) } else 0 > z && (r = new b, g.lerp(m, k / (k - z), r), d.push(r), d.push(m)); g = m; k = z } return d
                }; a.prototype.computeWorldVertices = function (a, d) { for (var c = this.vertices.length; this.worldVertices.length < c;)this.worldVertices.push(new b); for (var e = this.vertices, f = this.worldVertices, g = 0; g !== c; g++)d.vmult(e[g], f[g]), a.vadd(f[g], f[g]); this.worldVerticesNeedsUpdate = !1 }; new b; a.prototype.computeLocalAABB =
                    function (a, d) { var b = this.vertices.length, c = this.vertices; a.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE); d.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE); for (var e = 0; e < b; e++) { var f = c[e]; f.x < a.x ? a.x = f.x : f.x > d.x && (d.x = f.x); f.y < a.y ? a.y = f.y : f.y > d.y && (d.y = f.y); f.z < a.z ? a.z = f.z : f.z > d.z && (d.z = f.z) } }; a.prototype.computeWorldFaceNormals = function (a) {
                        for (var d = this.faceNormals.length; this.worldFaceNormals.length < d;)this.worldFaceNormals.push(new b); for (var c = this.faceNormals, e = this.worldFaceNormals,
                            f = 0; f !== d; f++)a.vmult(c[f], e[f]); this.worldFaceNormalsNeedsUpdate = !1
                    }; a.prototype.updateBoundingSphereRadius = function () { for (var a = 0, d = this.vertices, b = 0, c = d.length; b !== c; b++) { var e = d[b].norm2(); e > a && (a = e) } this.boundingSphereRadius = Math.sqrt(a) }; var I = new b; a.prototype.calculateWorldAABB = function (a, d, b, c) {
                        for (var e = this.vertices.length, f = this.vertices, g, k, w, m, z, r, u = 0; u < e; u++) {
                            I.copy(f[u]); d.vmult(I, I); a.vadd(I, I); var n = I; if (n.x < g || void 0 === g) g = n.x; else if (n.x > m || void 0 === m) m = n.x; if (n.y < k || void 0 ===
                                k) k = n.y; else if (n.y > z || void 0 === z) z = n.y; if (n.z < w || void 0 === w) w = n.z; else if (n.z > r || void 0 === r) r = n.z
                        } b.set(g, k, w); c.set(m, z, r)
                    }; a.prototype.volume = function () { return 4 * Math.PI * this.boundingSphereRadius / 3 }; a.prototype.getAveragePointLocal = function (a) { a = a || new b; for (var d = this.vertices.length, c = this.vertices, e = 0; e < d; e++)a.vadd(c[e], a); a.mult(1 / d, a); return a }; a.prototype.transformAllPoints = function (a, d) {
                        var b = this.vertices.length, c = this.vertices; if (d) {
                            for (var e = 0; e < b; e++) { var f = c[e]; d.vmult(f, f) } for (e =
                                0; e < this.faceNormals.length; e++)f = this.faceNormals[e], d.vmult(f, f)
                        } if (a) for (e = 0; e < b; e++)f = c[e], f.vadd(a, f)
                    }; var T = new b, ba = new b, ja = new b; a.prototype.pointIsInside = function (a) { var d = this.vertices, b = this.faces, c = this.faceNormals, e = this.faces.length; this.getAveragePointLocal(T); for (var f = 0; f < e; f++) { var g = c[f]; var k = d[b[f][0]], w = ba; a.vsub(k, w); w = g.dot(w); var m = ja; T.vsub(k, m); g = g.dot(m); if (0 > w && 0 < g || 0 < w && 0 > g) return !1 } return -1 }; new b; var U = new b, ma = new b; a.project = function (a, d, b, c, e) {
                        var f = a.vertices.length;
                        a = a.vertices; ma.setZero(); y.vectorToLocalFrame(b, c, d, U); y.pointToLocalFrame(b, c, ma, ma); c = ma.dot(U); b = d = a[0].dot(U); for (var g = 1; g < f; g++) { var k = a[g].dot(U); k > d && (d = k); k < b && (b = k) } b -= c; d -= c; b > d && (f = b, b = d, d = f); e[0] = d; e[1] = b
                    }
        }, { "../math/Quaternion": 28, "../math/Transform": 29, "../math/Vec3": 30, "./Shape": 43 }], 39: [function (c, n, v) {
            function a(a, c, r, k) {
                var e = [], u = [], f = [], d = [], w = [], z = Math.cos, g = Math.sin; e.push(new b(c * z(0), c * g(0), .5 * -r)); d.push(0); e.push(new b(a * z(0), a * g(0), .5 * r)); w.push(1); for (var n = 0; n < k; n++) {
                    var q =
                        2 * Math.PI / k * (n + 1), v = 2 * Math.PI / k * (n + .5); n < k - 1 ? (e.push(new b(c * z(q), c * g(q), .5 * -r)), d.push(2 * n + 2), e.push(new b(a * z(q), a * g(q), .5 * r)), w.push(2 * n + 3), f.push([2 * n + 2, 2 * n + 3, 2 * n + 1, 2 * n])) : f.push([0, 1, 2 * n + 1, 2 * n]); (1 === k % 2 || n < k / 2) && u.push(new b(z(v), g(v), 0))
                } f.push(w); u.push(new b(0, 0, 1)); a = []; for (n = 0; n < d.length; n++)a.push(d[d.length - n - 1]); f.push(a); this.type = t.types.CONVEXPOLYHEDRON; y.call(this, e, f, u)
            } n.exports = a; var t = c("./Shape"), b = c("../math/Vec3"); c("../math/Quaternion"); var y = c("./ConvexPolyhedron"); a.prototype =
                new y
        }, { "../math/Quaternion": 28, "../math/Vec3": 30, "./ConvexPolyhedron": 38, "./Shape": 43 }], 40: [function (c, n, v) {
            function a(a, c) {
                c = q.defaults(c, { maxValue: null, minValue: null, elementSize: 1 }); this.data = a; this.maxValue = c.maxValue; this.minValue = c.minValue; this.elementSize = c.elementSize; null === c.minValue && this.updateMinValue(); null === c.maxValue && this.updateMaxValue(); this.cacheEnabled = !0; t.call(this); this.pillarConvex = new b; this.pillarOffset = new y; this.type = t.types.HEIGHTFIELD; this.updateBoundingSphereRadius();
                this._cachedPillars = {}
            } var t = c("./Shape"), b = c("./ConvexPolyhedron"), y = c("../math/Vec3"), q = c("../utils/Utils"); n.exports = a; a.prototype = new t; a.prototype.update = function () { this._cachedPillars = {} }; a.prototype.updateMinValue = function () { for (var a = this.data, b = a[0][0], c = 0; c !== a.length; c++)for (var m = 0; m !== a[c].length; m++) { var n = a[c][m]; n < b && (b = n) } this.minValue = b }; a.prototype.updateMaxValue = function () {
                for (var a = this.data, b = a[0][0], c = 0; c !== a.length; c++)for (var m = 0; m !== a[c].length; m++) {
                    var n = a[c][m]; n > b && (b =
                        n)
                } this.maxValue = b
            }; a.prototype.setHeightValueAtIndex = function (a, b, c) { this.data[a][b] = c; this.clearCachedConvexTrianglePillar(a, b, !1); 0 < a && (this.clearCachedConvexTrianglePillar(a - 1, b, !0), this.clearCachedConvexTrianglePillar(a - 1, b, !1)); 0 < b && (this.clearCachedConvexTrianglePillar(a, b - 1, !0), this.clearCachedConvexTrianglePillar(a, b - 1, !1)); 0 < b && 0 < a && this.clearCachedConvexTrianglePillar(a - 1, b - 1, !0) }; a.prototype.getRectMinMax = function (a, b, c, m, n) {
                n = n || []; for (var e = this.data, d = this.minValue; a <= c; a++)for (var k =
                    b; k <= m; k++) { var z = e[a][k]; z > d && (d = z) } n[0] = this.minValue; n[1] = d
            }; a.prototype.getIndexOfPosition = function (a, b, c, m) { var e = this.elementSize, f = this.data; a = Math.floor(a / e); b = Math.floor(b / e); c[0] = a; c[1] = b; m && (0 > a && (a = 0), 0 > b && (b = 0), a >= f.length - 1 && (a = f.length - 1), b >= f[0].length - 1 && (b = f[0].length - 1)); return 0 > a || 0 > b || a >= f.length - 1 || b >= f[0].length - 1 ? !1 : !0 }; a.prototype.getHeightAt = function (a, b, c) { var e = []; this.getIndexOfPosition(a, b, e, c); a = []; this.getRectMinMax(e[0], e[1] + 1, e[0], e[1] + 1, a); return (a[0] + a[1]) / 2 };
            a.prototype.getCacheConvexTrianglePillarKey = function (a, b, c) { return a + "_" + b + "_" + (c ? 1 : 0) }; a.prototype.getCachedConvexTrianglePillar = function (a, b, c) { return this._cachedPillars[this.getCacheConvexTrianglePillarKey(a, b, c)] }; a.prototype.setCachedConvexTrianglePillar = function (a, b, c, m, n) { this._cachedPillars[this.getCacheConvexTrianglePillarKey(a, b, c)] = { convex: m, offset: n } }; a.prototype.clearCachedConvexTrianglePillar = function (a, b, c) { delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(a, b, c)] }; a.prototype.getConvexTrianglePillar =
                function (a, c, k) {
                    var e = this.pillarConvex, n = this.pillarOffset; if (this.cacheEnabled) { var f = this.getCachedConvexTrianglePillar(a, c, k); if (f) { this.pillarConvex = f.convex; this.pillarOffset = f.offset; return } e = new b; n = new y; this.pillarConvex = e; this.pillarOffset = n } f = this.data; var d = this.elementSize, w = e.faces; e.vertices.length = 6; for (var z = 0; 6 > z; z++)e.vertices[z] || (e.vertices[z] = new y); w.length = 5; for (z = 0; 5 > z; z++)w[z] || (w[z] = []); z = e.vertices; var g = (Math.min(f[a][c], f[a + 1][c], f[a][c + 1], f[a + 1][c + 1]) - this.minValue) /
                        2 + this.minValue; k ? (n.set((a + .75) * d, (c + .75) * d, g), z[0].set(.25 * d, .25 * d, f[a + 1][c + 1] - g), z[1].set(-.75 * d, .25 * d, f[a][c + 1] - g), z[2].set(.25 * d, -.75 * d, f[a + 1][c] - g), z[3].set(.25 * d, .25 * d, -g - 1), z[4].set(-.75 * d, .25 * d, -g - 1), z[5].set(.25 * d, -.75 * d, -g - 1), w[0][0] = 0, w[0][1] = 1, w[0][2] = 2, w[1][0] = 5, w[1][1] = 4, w[1][2] = 3, w[2][0] = 2, w[2][1] = 5, w[2][2] = 3, w[2][3] = 0, w[3][0] = 3, w[3][1] = 4, w[3][2] = 1, w[3][3] = 0, w[4][0] = 1, w[4][1] = 4, w[4][2] = 5, w[4][3] = 2) : (n.set((a + .25) * d, (c + .25) * d, g), z[0].set(-.25 * d, -.25 * d, f[a][c] - g), z[1].set(.75 * d, -.25 *
                            d, f[a + 1][c] - g), z[2].set(-.25 * d, .75 * d, f[a][c + 1] - g), z[3].set(-.25 * d, -.25 * d, -g - 1), z[4].set(.75 * d, -.25 * d, -g - 1), z[5].set(-.25 * d, .75 * d, -g - 1), w[0][0] = 0, w[0][1] = 1, w[0][2] = 2, w[1][0] = 5, w[1][1] = 4, w[1][2] = 3, w[2][0] = 0, w[2][1] = 2, w[2][2] = 5, w[2][3] = 3, w[3][0] = 1, w[3][1] = 0, w[3][2] = 3, w[3][3] = 4, w[4][0] = 4, w[4][1] = 5, w[4][2] = 2, w[4][3] = 1); e.computeNormals(); e.computeEdges(); e.updateBoundingSphereRadius(); this.setCachedConvexTrianglePillar(a, c, k, e, n)
                }; a.prototype.calculateLocalInertia = function (a, b) {
                    b = b || new y; b.set(0, 0, 0);
                    return b
                }; a.prototype.volume = function () { return Number.MAX_VALUE }; a.prototype.calculateWorldAABB = function (a, b, c, m) { c.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE); m.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE) }; a.prototype.updateBoundingSphereRadius = function () { var a = this.data, b = this.elementSize; this.boundingSphereRadius = (new y(a.length * b, a[0].length * b, Math.max(Math.abs(this.maxValue), Math.abs(this.minValue)))).norm() }
        }, {
            "../math/Vec3": 30, "../utils/Utils": 53, "./ConvexPolyhedron": 38,
            "./Shape": 43
        }], 41: [function (c, n, v) { function a() { t.call(this); this.type = t.types.PARTICLE } n.exports = a; var t = c("./Shape"), b = c("../math/Vec3"); a.prototype = new t; a.prototype.constructor = a; a.prototype.calculateLocalInertia = function (a, c) { c = c || new b; c.set(0, 0, 0); return c }; a.prototype.volume = function () { return 0 }; a.prototype.updateBoundingSphereRadius = function () { this.boundingSphereRadius = 0 }; a.prototype.calculateWorldAABB = function (a, b, c, n) { c.copy(a); n.copy(a) } }, { "../math/Vec3": 30, "./Shape": 43 }], 42: [function (c,
            n, v) {
                function a() { t.call(this); this.type = t.types.PLANE; this.worldNormal = new b; this.worldNormalNeedsUpdate = !0; this.boundingSphereRadius = Number.MAX_VALUE } n.exports = a; var t = c("./Shape"), b = c("../math/Vec3"); a.prototype = new t; a.prototype.constructor = a; a.prototype.computeWorldNormal = function (a) { var b = this.worldNormal; b.set(0, 0, 1); a.vmult(b, b); this.worldNormalNeedsUpdate = !1 }; a.prototype.calculateLocalInertia = function (a, c) { return c = c || new b }; a.prototype.volume = function () { return Number.MAX_VALUE }; var y = new b;
            a.prototype.calculateWorldAABB = function (a, b, c, k) { y.set(0, 0, 1); b.vmult(y, y); b = Number.MAX_VALUE; c.set(-b, -b, -b); k.set(b, b, b); 1 === y.x && (k.x = a.x); 1 === y.y && (k.y = a.y); 1 === y.z && (k.z = a.z); -1 === y.x && (c.x = a.x); -1 === y.y && (c.y = a.y); -1 === y.z && (c.z = a.z) }; a.prototype.updateBoundingSphereRadius = function () { this.boundingSphereRadius = Number.MAX_VALUE }
        }, { "../math/Vec3": 30, "./Shape": 43 }], 43: [function (c, n, v) {
            function a() {
            this.id = a.idCounter++; this.boundingSphereRadius = this.type = 0; this.collisionResponse = !0; this.material =
                null
            } n.exports = a; a = c("./Shape"); c("../math/Vec3"); c("../math/Quaternion"); c("../material/Material"); a.prototype.constructor = a; a.prototype.updateBoundingSphereRadius = function () { throw "computeBoundingSphereRadius() not implemented for shape type " + this.type; }; a.prototype.volume = function () { throw "volume() not implemented for shape type " + this.type; }; a.prototype.calculateLocalInertia = function (a, b) { throw "calculateLocalInertia() not implemented for shape type " + this.type; }; a.idCounter = 0; a.types = {
                SPHERE: 1,
                PLANE: 2, BOX: 4, COMPOUND: 8, CONVEXPOLYHEDRON: 16, HEIGHTFIELD: 32, PARTICLE: 64, CYLINDER: 128, TRIMESH: 256
            }
        }, { "../material/Material": 25, "../math/Quaternion": 28, "../math/Vec3": 30, "./Shape": 43 }], 44: [function (c, n, v) {
            function a(a) { t.call(this); this.radius = void 0 !== a ? Number(a) : 1; this.type = t.types.SPHERE; if (0 > this.radius) throw Error("The sphere radius cannot be negative."); this.updateBoundingSphereRadius() } n.exports = a; var t = c("./Shape"), b = c("../math/Vec3"); a.prototype = new t; a.prototype.constructor = a; a.prototype.calculateLocalInertia =
                function (a, c) { c = c || new b; var e = 2 * a * this.radius * this.radius / 5; c.x = e; c.y = e; c.z = e; return c }; a.prototype.volume = function () { return 4 * Math.PI * this.radius / 3 }; a.prototype.updateBoundingSphereRadius = function () { this.boundingSphereRadius = this.radius }; a.prototype.calculateWorldAABB = function (a, b, c, n) { b = this.radius; for (var e = ["x", "y", "z"], m = 0; m < e.length; m++) { var r = e[m]; c[r] = a[r] - b; n[r] = a[r] + b } }
        }, { "../math/Vec3": 30, "./Shape": 43 }], 45: [function (c, n, v) {
            function a(a, d) {
                t.call(this); this.type = t.types.TRIMESH; this.vertices =
                    new Float32Array(a); this.indices = new Int16Array(d); this.normals = new Float32Array(d.length); this.aabb = new q; this.edges = null; this.scale = new b(1, 1, 1); this.tree = new e; this.updateEdges(); this.updateNormals(); this.updateAABB(); this.updateBoundingSphereRadius(); this.updateTree()
            } n.exports = a; var t = c("./Shape"), b = c("../math/Vec3"); c("../math/Quaternion"); var y = c("../math/Transform"), q = c("../collision/AABB"), e = c("../utils/Octree"); a.prototype = new t; a.prototype.constructor = a; var r = new b; a.prototype.updateTree =
                function () { var a = this.tree; a.reset(); a.aabb.copy(this.aabb); var d = this.scale; a.aabb.lowerBound.x *= 1 / d.x; a.aabb.lowerBound.y *= 1 / d.y; a.aabb.lowerBound.z *= 1 / d.z; a.aabb.upperBound.x *= 1 / d.x; a.aabb.upperBound.y *= 1 / d.y; a.aabb.upperBound.z *= 1 / d.z; d = new q; for (var c = new b, e = new b, f = new b, g = [c, e, f], k = 0; k < this.indices.length / 3; k++) { var w = 3 * k; this._getUnscaledVertex(this.indices[w], c); this._getUnscaledVertex(this.indices[w + 1], e); this._getUnscaledVertex(this.indices[w + 2], f); d.setFromPoints(g); a.insert(d, k) } a.removeEmptyNodes() };
            var k = new q; a.prototype.getTrianglesInAABB = function (a, b) { k.copy(a); var d = this.scale, c = d.x, e = d.y; d = d.z; var f = k.lowerBound, g = k.upperBound; f.x /= c; f.y /= e; f.z /= d; g.x /= c; g.y /= e; g.z /= d; return this.tree.aabbQuery(k, b) }; a.prototype.setScale = function (a) { var b = a.x === a.y === a.z; this.scale.x === this.scale.y === this.scale.z && b || this.updateNormals(); this.scale.copy(a); this.updateAABB(); this.updateBoundingSphereRadius() }; a.prototype.updateNormals = function () {
                for (var b = this.normals, d = 0; d < this.indices.length / 3; d++) {
                    var c =
                        3 * d, e = this.indices[c + 1], f = this.indices[c + 2]; this.getVertex(this.indices[c], w); this.getVertex(e, z); this.getVertex(f, g); a.computeNormal(z, w, g, r); b[c] = r.x; b[c + 1] = r.y; b[c + 2] = r.z
                }
            }; a.prototype.updateEdges = function () {
                for (var a = {}, b = function (b, d) { a[e < f ? e + "_" + f : f + "_" + e] = !0 }, d = 0; d < this.indices.length / 3; d++) { var c = 3 * d, e = this.indices[c], f = this.indices[c + 1]; c = this.indices[c + 2]; b(e, f); b(f, c); b(c, e) } b = Object.keys(a); this.edges = new Int16Array(2 * b.length); for (d = 0; d < b.length; d++)c = b[d].split("_"), this.edges[2 * d] =
                    parseInt(c[0], 10), this.edges[2 * d + 1] = parseInt(c[1], 10)
            }; a.prototype.getEdgeVertex = function (a, b, d) { this.getVertex(this.edges[2 * a + (b ? 1 : 0)], d) }; var m = new b, u = new b; a.prototype.getEdgeVector = function (a, b) { this.getEdgeVertex(a, 0, m); this.getEdgeVertex(a, 1, u); u.vsub(m, b) }; var f = new b, d = new b; a.computeNormal = function (a, b, c, e) { b.vsub(a, d); c.vsub(b, f); f.cross(d, e); e.isZero() || e.normalize() }; var w = new b, z = new b, g = new b; a.prototype.getVertex = function (a, b) {
                var d = this.scale; this._getUnscaledVertex(a, b); b.x *= d.x;
                b.y *= d.y; b.z *= d.z; return b
            }; a.prototype._getUnscaledVertex = function (a, b) { var d = 3 * a, c = this.vertices; return b.set(c[d], c[d + 1], c[d + 2]) }; a.prototype.getWorldVertex = function (a, b, d, c) { this.getVertex(a, c); y.pointToWorldFrame(b, d, c, c); return c }; a.prototype.getTriangleVertices = function (a, b, d, c) { a *= 3; this.getVertex(this.indices[a], b); this.getVertex(this.indices[a + 1], d); this.getVertex(this.indices[a + 2], c) }; a.prototype.getNormal = function (a, b) {
                var d = 3 * a; return b.set(this.normals[d], this.normals[d + 1], this.normals[d +
                    2])
            }; var C = new q; a.prototype.calculateLocalInertia = function (a, b) { this.computeLocalAABB(C); var d = C.upperBound.x - C.lowerBound.x, c = C.upperBound.y - C.lowerBound.y, e = C.upperBound.z - C.lowerBound.z; return b.set(1 / 12 * a * (4 * c * c + 4 * e * e), 1 / 12 * a * (4 * d * d + 4 * e * e), 1 / 12 * a * (4 * c * c + 4 * d * d)) }; var Q = new b; a.prototype.computeLocalAABB = function (a) {
                var b = a.lowerBound; a = a.upperBound; var d = this.vertices.length; this.getVertex(0, Q); b.copy(Q); a.copy(Q); for (var c = 0; c !== d; c++)this.getVertex(c, Q), Q.x < b.x ? b.x = Q.x : Q.x > a.x && (a.x = Q.x), Q.y <
                    b.y ? b.y = Q.y : Q.y > a.y && (a.y = Q.y), Q.z < b.z ? b.z = Q.z : Q.z > a.z && (a.z = Q.z)
            }; a.prototype.updateAABB = function () { this.computeLocalAABB(this.aabb) }; a.prototype.updateBoundingSphereRadius = function () { var a = 0, d = this.vertices, c = new b, e = 0; for (d = d.length / 3; e !== d; e++) { this.getVertex(e, c); var f = c.norm2(); f > a && (a = f) } this.boundingSphereRadius = Math.sqrt(a) }; new b; var S = new y, R = new q; a.prototype.calculateWorldAABB = function (a, b, d, c) { S.position = a; S.quaternion = b; this.aabb.toWorldFrame(S, R); d.copy(R.lowerBound); c.copy(R.upperBound) };
            a.prototype.volume = function () { return 4 * Math.PI * this.boundingSphereRadius / 3 }; a.createTorus = function (b, d, c, e, f) { b = b || 1; d = d || .5; c = c || 8; e = e || 6; f = f || 2 * Math.PI; for (var g = [], k = [], w = 0; w <= c; w++)for (var m = 0; m <= e; m++) { var z = m / e * f, n = w / c * Math.PI * 2; g.push((b + d * Math.cos(n)) * Math.cos(z), (b + d * Math.cos(n)) * Math.sin(z), d * Math.sin(n)) } for (w = 1; w <= c; w++)for (m = 1; m <= e; m++)b = (e + 1) * (w - 1) + m - 1, d = (e + 1) * (w - 1) + m, f = (e + 1) * w + m, k.push((e + 1) * w + m - 1, b, f), k.push(b, d, f); return new a(g, k) }
        }, {
            "../collision/AABB": 3, "../math/Quaternion": 28,
            "../math/Transform": 29, "../math/Vec3": 30, "../utils/Octree": 50, "./Shape": 43
        }], 46: [function (c, n, v) {
            function a() { t.call(this); this.iterations = 10; this.tolerance = 1E-7 } n.exports = a; c("../math/Vec3"); c("../math/Quaternion"); var t = c("./Solver"); a.prototype = new t; var b = [], y = [], q = []; a.prototype.solve = function (a, c) {
                var e = 0, m = this.iterations, n = this.tolerance * this.tolerance, f = this.equations, d = f.length, w = c.bodies, z = w.length, g; if (0 !== d) for (g = 0; g !== z; g++)w[g].updateSolveMassProperties(); y.length = d; q.length = d; b.length =
                    d; for (g = 0; g !== d; g++) { var r = f[g]; b[g] = 0; q[g] = r.computeB(a); y[g] = 1 / r.computeC() } if (0 !== d) {
                        for (g = 0; g !== z; g++)r = w[g], e = r.wlambda, r.vlambda.set(0, 0, 0), e && e.set(0, 0, 0); for (e = 0; e !== m; e++) { for (var t = g = 0; t !== d; t++) { r = f[t]; var v = q[t]; var R = y[t]; var O = b[t]; var J = r.computeGWlambda(); v = R * (v - J - r.eps * O); O + v < r.minForce ? v = r.minForce - O : O + v > r.maxForce && (v = r.maxForce - O); b[t] += v; g += 0 < v ? v : -v; r.addToWlambda(v) } if (g * g < n) break } for (g = 0; g !== z; g++)r = w[g], m = r.velocity, n = r.angularVelocity, m.vadd(r.vlambda, m), n && n.vadd(r.wlambda,
                            n)
                    } return e
            }
        }, { "../math/Quaternion": 28, "../math/Vec3": 30, "./Solver": 47 }], 47: [function (c, n, v) { function a() { this.equations = [] } n.exports = a; a.prototype.solve = function (a, b) { return 0 }; a.prototype.addEquation = function (a) { a.enabled && this.equations.push(a) }; a.prototype.removeEquation = function (a) { var b = this.equations; a = b.indexOf(a); -1 !== a && b.splice(a, 1) }; a.prototype.removeAllEquations = function () { this.equations.length = 0 } }, {}], 48: [function (c, n, v) {
            function a(a) {
                q.call(this); this.iterations = 10; this.tolerance = 1E-7;
                this.subsolver = a; this.nodes = []; for (this.nodePool = []; 128 > this.nodePool.length;)this.nodePool.push(this.createNode())
            } function t(a) { for (var b = a.length, c = 0; c !== b; c++) { var e = a[c]; if (!(e.visited || e.body.type & m)) return e } return !1 } function b(a, b, c) { b.push(a.body); b = a.eqs.length; for (var d = 0; d !== b; d++) { var e = a.eqs[d]; -1 === c.indexOf(e) && c.push(e) } } function y(a, b) { return b.id - a.id } n.exports = a; c("../math/Vec3"); c("../math/Quaternion"); var q = c("./Solver"); c = c("../objects/Body"); a.prototype = new q; var e = [], r = [],
                k = { bodies: [] }, m = c.STATIC, u = []; a.prototype.createNode = function () { return { body: null, children: [], eqs: [], visited: !1 } }; a.prototype.solve = function (a, d) {
                    for (var c = this.nodePool, f = d.bodies, g = this.equations, m = g.length, n = f.length, q = this.subsolver; c.length < n;)c.push(this.createNode()); e.length = n; for (var v = 0; v < n; v++)e[v] = c[v]; for (v = 0; v !== n; v++)c = e[v], c.body = f[v], c.children.length = 0, c.eqs.length = 0, c.visited = !1; for (n = 0; n !== m; n++) {
                        c = g[n]; v = f.indexOf(c.bi); var O = f.indexOf(c.bj); v = e[v]; O = e[O]; v.children.push(O); v.eqs.push(c);
                        O.children.push(v); O.eqs.push(c)
                    } f = 0; g = r; q.tolerance = this.tolerance; for (q.iterations = this.iterations; v = t(e);) { g.length = 0; k.bodies.length = 0; c = v; v = b; m = k.bodies; n = g; u.push(c); c.visited = !0; for (v(c, m, n); u.length;)for (c = u.pop(); O = t(c.children);)O.visited = !0, v(O, m, n), u.push(O); m = g.length; g = g.sort(y); for (v = 0; v !== m; v++)q.addEquation(g[v]); q.solve(a, k); q.removeAllEquations(); f++ } return f
                }
        }, { "../math/Quaternion": 28, "../math/Vec3": 30, "../objects/Body": 31, "./Solver": 47 }], 49: [function (c, n, v) {
            c = function () { }; n.exports =
                c; c.prototype = {
                    constructor: c, addEventListener: function (a, c) { void 0 === this._listeners && (this._listeners = {}); var b = this._listeners; void 0 === b[a] && (b[a] = []); -1 === b[a].indexOf(c) && b[a].push(c); return this }, hasEventListener: function (a, c) { if (void 0 === this._listeners) return !1; var b = this._listeners; return void 0 !== b[a] && -1 !== b[a].indexOf(c) ? !0 : !1 }, removeEventListener: function (a, c) {
                        if (void 0 === this._listeners) return this; var b = this._listeners; if (void 0 === b[a]) return this; var n = b[a].indexOf(c); -1 !== n && b[a].splice(n,
                            1); return this
                    }, dispatchEvent: function (a) { if (void 0 === this._listeners) return this; var c = this._listeners[a.type]; if (void 0 !== c) { a.target = this; for (var b = 0, n = c.length; b < n; b++)c[b].call(this, a) } return this }
                }
        }, {}], 50: [function (c, n, v) {
            function a(a) { a = a || {}; this.root = a.root || null; this.aabb = a.aabb ? a.aabb.clone() : new b; this.data = []; this.children = [] } function t(b, c) { c = c || {}; c.root = null; c.aabb = b; a.call(this, c); this.maxDepth = "undefined" !== typeof c.maxDepth ? c.maxDepth : 8 } var b = c("../collision/AABB"), y = c("../math/Vec3");
            n.exports = t; t.prototype = new a; a.prototype.reset = function (a, b) { this.children.length = this.data.length = 0 }; a.prototype.insert = function (a, b, c) { var e = this.data; c = c || 0; if (!this.aabb.contains(a)) return !1; var f = this.children; if (c < (this.maxDepth || this.root.maxDepth)) { var d = !1; f.length || (this.subdivide(), d = !0); for (var k = 0; 8 !== k; k++)if (f[k].insert(a, b, c + 1)) return !0; d && (f.length = 0) } e.push(b); return !0 }; var q = new y; a.prototype.subdivide = function () {
                var c = this.aabb, e = c.lowerBound, m = c.upperBound; c = this.children; c.push(new a({
                    aabb: new b({
                        lowerBound: new y(0,
                            0, 0)
                    })
                }), new a({ aabb: new b({ lowerBound: new y(1, 0, 0) }) }), new a({ aabb: new b({ lowerBound: new y(1, 1, 0) }) }), new a({ aabb: new b({ lowerBound: new y(1, 1, 1) }) }), new a({ aabb: new b({ lowerBound: new y(0, 1, 1) }) }), new a({ aabb: new b({ lowerBound: new y(0, 0, 1) }) }), new a({ aabb: new b({ lowerBound: new y(1, 0, 1) }) }), new a({ aabb: new b({ lowerBound: new y(0, 1, 0) }) })); m.vsub(e, q); q.scale(.5, q); m = this.root || this; for (var n = 0; 8 !== n; n++) { var f = c[n]; f.root = m; var d = f.aabb.lowerBound; d.x *= q.x; d.y *= q.y; d.z *= q.z; d.vadd(e, d); d.vadd(q, f.aabb.upperBound) }
            };
            a.prototype.aabbQuery = function (a, b) { for (var c = [this]; c.length;) { var e = c.pop(); e.aabb.overlaps(a) && Array.prototype.push.apply(b, e.data); Array.prototype.push.apply(c, e.children) } return b }; var e = new b; a.prototype.rayQuery = function (a, b, c) { a.getAABB(e); e.toLocalFrame(b, e); this.aabbQuery(e, c); return c }; a.prototype.removeEmptyNodes = function () { for (var a = [this]; a.length;) { for (var b = a.pop(), c = b.children.length - 1; 0 <= c; c--)b.children[c].data.length || b.children.splice(c, 1); Array.prototype.push.apply(a, b.children) } }
        },
        { "../collision/AABB": 3, "../math/Vec3": 30 }], 51: [function (c, n, v) { function a() { this.objects = []; this.type = Object } n.exports = a; a.prototype.release = function () { for (var a = arguments.length, b = 0; b !== a; b++)this.objects.push(arguments[b]) }; a.prototype.get = function () { return 0 === this.objects.length ? this.constructObject() : this.objects.pop() }; a.prototype.constructObject = function () { throw Error("constructObject() not implemented in this Pool subclass yet!"); } }, {}], 52: [function (c, n, v) {
            function a() { this.data = { keys: [] } }
            n.exports = a; a.prototype.get = function (a, b) { if (a > b) { var c = b; b = a; a = c } return this.data[a + "-" + b] }; a.prototype.set = function (a, b, c) { if (a > b) { var n = b; b = a; a = n } n = a + "-" + b; this.get(a, b) || this.data.keys.push(n); this.data[n] = c }; a.prototype.reset = function () { for (var a = this.data, b = a.keys; 0 < b.length;) { var c = b.pop(); delete a[c] } }
        }, {}], 53: [function (c, n, v) { function a() { } n.exports = a; a.defaults = function (a, b) { a = a || {}; for (var c in b) c in a || (a[c] = b[c]); return a } }, {}], 54: [function (c, n, v) {
            function a() {
                b.call(this); this.type =
                    t
            } n.exports = a; var t = c("../math/Vec3"), b = c("./Pool"); a.prototype = new b; a.prototype.constructObject = function () { return new t }
        }, { "../math/Vec3": 30, "./Pool": 51 }], 55: [function (c, n, v) {
            function a(a) { this.contactPointPool = []; this.frictionEquationPool = []; this.result = []; this.frictionResult = []; this.v3pool = new e; this.world = a; this.currentContactMaterial = null; this.enableFrictionReduction = !1 } n.exports = a; n = c("../collision/AABB"); v = c("../shapes/Shape"); var t = c("../collision/Ray"), b = c("../math/Vec3"), y = c("../math/Transform");
            c("../shapes/ConvexPolyhedron"); var q = c("../math/Quaternion"); c("../solver/Solver"); var e = c("../utils/Vec3Pool"), r = c("../equations/ContactEquation"), k = c("../equations/FrictionEquation"); a.prototype.createContactEquation = function (a, b, d, c, e, p) {
                if (this.contactPointPool.length) { var f = this.contactPointPool.pop(); f.bi = a; f.bj = b } else f = new r(a, b); f.enabled = a.collisionResponse && b.collisionResponse && d.collisionResponse && c.collisionResponse; var g = this.currentContactMaterial; f.restitution = g.restitution; f.setSpookParams(g.contactEquationStiffness,
                    g.contactEquationRelaxation, this.world.dt); a = d.material || a.material; b = c.material || b.material; a && b && 0 <= a.restitution && 0 <= b.restitution && (f.restitution = a.restitution * b.restitution); f.si = e || d; f.sj = p || c; return f
            }; a.prototype.createFrictionEquationsFromContact = function (a, b) {
                var d = a.bi, c = a.bj, e = this.world, p = this.currentContactMaterial, f = p.friction, g = a.si.material || d.material, l = a.sj.material || c.material; g && l && 0 <= g.friction && 0 <= l.friction && (f = g.friction * l.friction); if (0 < f) {
                    f *= e.gravity.length(); g = d.invMass +
                        c.invMass; 0 < g && (g = 1 / g); var x = this.frictionEquationPool; l = x.length ? x.pop() : new k(d, c, f * g); x = x.length ? x.pop() : new k(d, c, f * g); l.bi = x.bi = d; l.bj = x.bj = c; l.minForce = x.minForce = -f * g; l.maxForce = x.maxForce = f * g; l.ri.copy(a.ri); l.rj.copy(a.rj); x.ri.copy(a.ri); x.rj.copy(a.rj); a.ni.tangents(l.t, x.t); l.setSpookParams(p.frictionEquationStiffness, p.frictionEquationRelaxation, e.dt); x.setSpookParams(p.frictionEquationStiffness, p.frictionEquationRelaxation, e.dt); l.enabled = x.enabled = a.enabled; b.push(l, x); return !0
                } return !1
            };
            var m = new b, u = new b, f = new b; a.prototype.createFrictionFromAverage = function (a) {
                var b = this.result[this.result.length - 1]; if (this.createFrictionEquationsFromContact(b, this.frictionResult) && 1 !== a) {
                    var d = this.frictionResult[this.frictionResult.length - 2], c = this.frictionResult[this.frictionResult.length - 1]; m.setZero(); u.setZero(); f.setZero(); for (var e = b.bi, p = 0; p !== a; p++)b = this.result[this.result.length - 1 - p], b.bodyA !== e ? (m.vadd(b.ni, m), u.vadd(b.ri, u), f.vadd(b.rj, f)) : (m.vsub(b.ni, m), u.vadd(b.rj, u), f.vadd(b.ri,
                        f)); a = 1 / a; u.scale(a, d.ri); f.scale(a, d.rj); c.ri.copy(d.ri); c.rj.copy(d.rj); m.normalize(); m.tangents(d.t, c.t)
                }
            }; var d = new b, w = new b, z = new q, g = new q; a.prototype.getContacts = function (a, b, c, e, p, f, l) {
            this.contactPointPool = p; this.frictionEquationPool = l; this.result = e; this.frictionResult = f; e = 0; for (p = a.length; e !== p; e++) {
                f = a[e]; l = b[e]; var x = null; f.material && l.material && (x = c.getContactMaterial(f.material, l.material) || null); for (var k = 0; k < f.shapes.length; k++) {
                    f.quaternion.mult(f.shapeOrientations[k], z); f.quaternion.vmult(f.shapeOffsets[k],
                        d); d.vadd(f.position, d); for (var m = f.shapes[k], n = 0; n < l.shapes.length; n++) {
                            l.quaternion.mult(l.shapeOrientations[n], g); l.quaternion.vmult(l.shapeOffsets[n], w); w.vadd(l.position, w); var D = l.shapes[n]; if (!(d.distanceTo(w) > m.boundingSphereRadius + D.boundingSphereRadius)) {
                                var r = null; m.material && D.material && (r = c.getContactMaterial(m.material, D.material) || null); this.currentContactMaterial = r || x || c.defaultContactMaterial; (r = this[m.type | D.type]) && (m.type < D.type ? r.call(this, m, D, d, w, z, g, f, l, m, D) : r.call(this, D, m,
                                    w, d, g, z, l, f, m, D))
                            }
                        }
                }
            }
            }; a.prototype[v.types.BOX | v.types.BOX] = a.prototype.boxBox = function (a, b, d, c, e, p, f, g) { a.convexPolyhedronRepresentation.material = a.material; b.convexPolyhedronRepresentation.material = b.material; a.convexPolyhedronRepresentation.collisionResponse = a.collisionResponse; b.convexPolyhedronRepresentation.collisionResponse = b.collisionResponse; this.convexConvex(a.convexPolyhedronRepresentation, b.convexPolyhedronRepresentation, d, c, e, p, f, g, a, b) }; a.prototype[v.types.BOX | v.types.CONVEXPOLYHEDRON] =
                a.prototype.boxConvex = function (a, b, d, c, e, p, f, g) { a.convexPolyhedronRepresentation.material = a.material; a.convexPolyhedronRepresentation.collisionResponse = a.collisionResponse; this.convexConvex(a.convexPolyhedronRepresentation, b, d, c, e, p, f, g, a, b) }; a.prototype[v.types.BOX | v.types.PARTICLE] = a.prototype.boxParticle = function (a, b, d, c, e, p, f, g) {
                    a.convexPolyhedronRepresentation.material = a.material; a.convexPolyhedronRepresentation.collisionResponse = a.collisionResponse; this.convexParticle(a.convexPolyhedronRepresentation,
                        b, d, c, e, p, f, g, a, b)
                }; a.prototype[v.types.SPHERE] = a.prototype.sphereSphere = function (a, b, d, c, e, p, f, g) { e = this.createContactEquation(f, g, a, b); c.vsub(d, e.ni); e.ni.normalize(); e.ri.copy(e.ni); e.rj.copy(e.ni); e.ri.mult(a.radius, e.ri); e.rj.mult(-b.radius, e.rj); e.ri.vadd(d, e.ri); e.ri.vsub(f.position, e.ri); e.rj.vadd(c, e.rj); e.rj.vsub(g.position, e.rj); this.result.push(e); this.createFrictionEquationsFromContact(e, this.frictionResult) }; var C = new b, Q = new b, S = new b; a.prototype[v.types.PLANE | v.types.TRIMESH] = a.prototype.planeTrimesh =
                    function (a, d, c, e, p, f, g, l) { var k = new b; C.set(0, 0, 1); p.vmult(C, C); for (p = 0; p < d.vertices.length / 3; p++) { d.getVertex(p, k); var x = new b; x.copy(k); y.pointToWorldFrame(e, f, x, k); x = Q; k.vsub(c, x); if (0 >= C.dot(x)) { var w = this.createContactEquation(g, l, a, d); w.ni.copy(C); var m = S; C.scale(x.dot(C), m); k.vsub(m, m); w.ri.copy(m); w.ri.vsub(g.position, w.ri); w.rj.copy(k); w.rj.vsub(l.position, w.rj); this.result.push(w); this.createFrictionEquationsFromContact(w, this.frictionResult) } } }; var R = new b, O = new b; new b; var J = new b, G = new b,
                        E = new b, P = new b, B = new b, L = new b, I = new b, T = new b, ba = new b, ja = new b, U = new b, ma = new n, W = []; a.prototype[v.types.SPHERE | v.types.TRIMESH] = a.prototype.sphereTrimesh = function (a, b, d, c, e, p, f, g) {
                            y.pointToLocalFrame(c, p, d, I); e = a.radius; ma.lowerBound.set(I.x - e, I.y - e, I.z - e); ma.upperBound.set(I.x + e, I.y + e, I.z + e); b.getTrianglesInAABB(ma, W); var l = a.radius * a.radius; for (e = 0; e < W.length; e++)for (var k = 0; 3 > k; k++)if (b.getVertex(b.indices[3 * W[e] + k], J), J.vsub(I, O), O.norm2() <= l) {
                                G.copy(J); y.pointToWorldFrame(c, p, G, J); J.vsub(d,
                                    O); var x = this.createContactEquation(f, g, a, b); x.ni.copy(O); x.ni.normalize(); x.ri.copy(x.ni); x.ri.scale(a.radius, x.ri); x.ri.vadd(d, x.ri); x.ri.vsub(f.position, x.ri); x.rj.copy(J); x.rj.vsub(g.position, x.rj); this.result.push(x); this.createFrictionEquationsFromContact(x, this.frictionResult)
                            } for (e = 0; e < W.length; e++)for (k = 0; 3 > k; k++)b.getVertex(b.indices[3 * W[e] + k], E), b.getVertex(b.indices[3 * W[e] + (k + 1) % 3], P), P.vsub(E, B), I.vsub(P, T), d = T.dot(B), I.vsub(E, T), x = T.dot(B), 0 < x && 0 > d && (I.vsub(E, T), L.copy(B), L.normalize(),
                                x = T.dot(L), L.scale(x, T), T.vadd(E, T), d = T.distanceTo(I), d < a.radius && (x = this.createContactEquation(f, g, a, b), T.vsub(I, x.ni), x.ni.normalize(), x.ni.scale(a.radius, x.ri), y.pointToWorldFrame(c, p, T, T), T.vsub(g.position, x.rj), y.vectorToWorldFrame(p, x.ni, x.ni), y.vectorToWorldFrame(p, x.ri, x.ri), this.result.push(x), this.createFrictionEquationsFromContact(x, this.frictionResult))); e = 0; for (k = W.length; e !== k; e++)b.getTriangleVertices(W[e], ba, ja, U), b.getNormal(W[e], R), I.vsub(ba, T), d = T.dot(R), R.scale(d, T), I.vsub(T, T),
                                    d = T.distanceTo(I), t.pointInTriangle(T, ba, ja, U) && d < a.radius && (x = this.createContactEquation(f, g, a, b), T.vsub(I, x.ni), x.ni.normalize(), x.ni.scale(a.radius, x.ri), y.pointToWorldFrame(c, p, T, T), T.vsub(g.position, x.rj), y.vectorToWorldFrame(p, x.ni, x.ni), y.vectorToWorldFrame(p, x.ri, x.ri), this.result.push(x), this.createFrictionEquationsFromContact(x, this.frictionResult)); W.length = 0
                        }; var V = new b, aa = new b; a.prototype[v.types.SPHERE | v.types.PLANE] = a.prototype.spherePlane = function (a, b, d, c, e, p, f, g) {
                            b = this.createContactEquation(f,
                                g, a, b); b.ni.set(0, 0, 1); p.vmult(b.ni, b.ni); b.ni.negate(b.ni); b.ni.normalize(); b.ni.mult(a.radius, b.ri); d.vsub(c, V); b.ni.mult(b.ni.dot(V), aa); V.vsub(aa, b.rj); -V.dot(b.ni) <= a.radius && (a = b.ri, p = b.rj, a.vadd(d, a), a.vsub(f.position, a), p.vadd(c, p), p.vsub(g.position, p), this.result.push(b), this.createFrictionEquationsFromContact(b, this.frictionResult))
                        }; var da = new b, ua = new b, ka = new b, ea = new b, za = new b, na = new b, va = new b, ra = [new b, new b, new b, new b, new b, new b], xa = new b, Y = new b, oa = new b, ha = new b; a.prototype[v.types.SPHERE |
                            v.types.BOX] = a.prototype.sphereBox = function (a, b, d, c, e, p, f, g) {
                                e = this.v3pool; d.vsub(c, ea); b.getSideNormals(ra, p); p = a.radius; for (var l = !1, x = null, k = 0, w = 0, m = 0, z = null, n = 0, D = ra.length; n !== D && !1 === l; n++) {
                                    var r = za; r.copy(ra[n]); var H = r.norm(); r.normalize(); var u = ea.dot(r); if (u < H + p && 0 < u) {
                                        var t = na, K = va; t.copy(ra[(n + 1) % 3]); K.copy(ra[(n + 2) % 3]); var F = t.norm(), q = K.norm(); t.normalize(); K.normalize(); var Z = ea.dot(t), ia = ea.dot(K); Z < F && Z > -F && ia < q && ia > -q && (u = Math.abs(u - H - p), null === z || u < z) && (z = u, w = Z, m = ia, x = H, Y.copy(r),
                                            oa.copy(t), ha.copy(K), k++)
                                    }
                                } k && (l = !0, k = this.createContactEquation(f, g, a, b), Y.mult(-p, k.ri), k.ni.copy(Y), k.ni.negate(k.ni), Y.mult(x, Y), oa.mult(w, oa), Y.vadd(oa, Y), ha.mult(m, ha), Y.vadd(ha, k.rj), k.ri.vadd(d, k.ri), k.ri.vsub(f.position, k.ri), k.rj.vadd(c, k.rj), k.rj.vsub(g.position, k.rj), this.result.push(k), this.createFrictionEquationsFromContact(k, this.frictionResult)); u = e.get(); for (x = 0; 2 !== x && !l; x++)for (w = 0; 2 !== w && !l; w++)for (m = 0; 2 !== m && !l; m++)u.set(0, 0, 0), x ? u.vadd(ra[0], u) : u.vsub(ra[0], u), w ? u.vadd(ra[1],
                                    u) : u.vsub(ra[1], u), m ? u.vadd(ra[2], u) : u.vsub(ra[2], u), c.vadd(u, xa), xa.vsub(d, xa), xa.norm2() < p * p && (l = !0, k = this.createContactEquation(f, g, a, b), k.ri.copy(xa), k.ri.normalize(), k.ni.copy(k.ri), k.ri.mult(p, k.ri), k.rj.copy(u), k.ri.vadd(d, k.ri), k.ri.vsub(f.position, k.ri), k.rj.vadd(c, k.rj), k.rj.vsub(g.position, k.rj), this.result.push(k), this.createFrictionEquationsFromContact(k, this.frictionResult)); e.release(u); z = e.get(); n = e.get(); k = e.get(); D = e.get(); u = e.get(); r = ra.length; for (x = 0; x !== r && !l; x++)for (w = 0; w !==
                                        r && !l; w++)if (x % 3 !== w % 3) {
                                            ra[w].cross(ra[x], z); z.normalize(); ra[x].vadd(ra[w], n); k.copy(d); k.vsub(n, k); k.vsub(c, k); H = k.dot(z); z.mult(H, D); for (m = 0; m === x % 3 || m === w % 3;)m++; u.copy(d); u.vsub(D, u); u.vsub(n, u); u.vsub(c, u); H = Math.abs(H); t = u.norm(); H < ra[m].norm() && t < p && (l = !0, m = this.createContactEquation(f, g, a, b), n.vadd(D, m.rj), m.rj.copy(m.rj), u.negate(m.ni), m.ni.normalize(), m.ri.copy(m.rj), m.ri.vadd(c, m.ri), m.ri.vsub(d, m.ri), m.ri.normalize(), m.ri.mult(p, m.ri), m.ri.vadd(d, m.ri), m.ri.vsub(f.position, m.ri), m.rj.vadd(c,
                                                m.rj), m.rj.vsub(g.position, m.rj), this.result.push(m), this.createFrictionEquationsFromContact(m, this.frictionResult))
                                        } e.release(z, n, k, D, u)
                            }; var p = new b, x = new b, D = new b, H = new b, pa = new b, ca = new b, Ja = new b, ta = new b, la = new b, l = new b; a.prototype[v.types.SPHERE | v.types.CONVEXPOLYHEDRON] = a.prototype.sphereConvex = function (a, b, d, c, e, f, g, k) {
                                e = this.v3pool; d.vsub(c, p); for (var m = b.faceNormals, w = b.faces, z = b.vertices, n = a.radius, r = 0; r !== z.length; r++) {
                                    var u = pa; f.vmult(z[r], u); c.vadd(u, u); var t = H; u.vsub(d, t); if (t.norm2() <
                                        n * n) { a = this.createContactEquation(g, k, a, b); a.ri.copy(t); a.ri.normalize(); a.ni.copy(a.ri); a.ri.mult(n, a.ri); u.vsub(c, a.rj); a.ri.vadd(d, a.ri); a.ri.vsub(g.position, a.ri); a.rj.vadd(c, a.rj); a.rj.vsub(k.position, a.rj); this.result.push(a); this.createFrictionEquationsFromContact(a, this.frictionResult); return }
                                } r = 0; for (u = w.length; r !== u; r++) {
                                    t = w[r]; var q = ca; f.vmult(m[r], q); var v = Ja; f.vmult(z[t[0]], v); v.vadd(c, v); var y = ta; q.mult(-n, y); d.vadd(y, y); var C = la; y.vsub(v, C); y = C.dot(q); C = l; d.vsub(v, C); if (0 > y && 0 < C.dot(q)) {
                                        v =
                                        []; C = 0; for (var Q = t.length; C !== Q; C++) { var K = e.get(); f.vmult(z[t[C]], K); c.vadd(K, K); v.push(K) } a: { C = v; Q = q; K = d; for (var F = null, qa = C.length, Z = 0; Z !== qa; Z++) { var ia = C[Z], Ha = da; C[(Z + 1) % qa].vsub(ia, Ha); var Ca = ua; Ha.cross(Q, Ca); Ha = ka; K.vsub(ia, Ha); ia = Ca.dot(Ha); if (null === F || 0 < ia && !0 === F || 0 >= ia && !1 === F) null === F && (F = 0 < ia); else { C = !1; break a } } C = !0 } if (C) {
                                            a = this.createContactEquation(g, k, a, b); q.mult(-n, a.ri); q.negate(a.ni); b = e.get(); q.mult(-y, b); f = e.get(); q.mult(-n, f); d.vsub(c, a.rj); a.rj.vadd(f, a.rj); a.rj.vadd(b,
                                                a.rj); a.rj.vadd(c, a.rj); a.rj.vsub(k.position, a.rj); a.ri.vadd(d, a.ri); a.ri.vsub(g.position, a.ri); e.release(b); e.release(f); this.result.push(a); this.createFrictionEquationsFromContact(a, this.frictionResult); C = 0; for (t = v.length; C !== t; C++)e.release(v[C]); break
                                        } else for (C = 0; C !== t.length; C++) {
                                            q = e.get(); y = e.get(); f.vmult(z[t[(C + 1) % t.length]], q); f.vmult(z[t[(C + 2) % t.length]], y); c.vadd(q, q); c.vadd(y, y); qa = x; y.vsub(q, qa); F = D; qa.unit(F); Q = e.get(); K = e.get(); d.vsub(q, K); Z = K.dot(F); F.mult(Z, Q); Q.vadd(q, Q); F = e.get();
                                            Q.vsub(d, F); if (0 < Z && Z * Z < qa.norm2() && F.norm2() < n * n) { a = this.createContactEquation(g, k, a, b); Q.vsub(c, a.rj); Q.vsub(d, a.ni); a.ni.normalize(); a.ni.mult(n, a.ri); a.rj.vadd(c, a.rj); a.rj.vsub(k.position, a.rj); a.ri.vadd(d, a.ri); a.ri.vsub(g.position, a.ri); this.result.push(a); this.createFrictionEquationsFromContact(a, this.frictionResult); C = 0; for (t = v.length; C !== t; C++)e.release(v[C]); e.release(q); e.release(y); e.release(Q); e.release(F); e.release(K); return } e.release(q); e.release(y); e.release(Q); e.release(F); e.release(K)
                                        } C =
                                            0; for (t = v.length; C !== t; C++)e.release(v[C])
                                    }
                                }
                            }; new b; new b; a.prototype[v.types.PLANE | v.types.BOX] = a.prototype.planeBox = function (a, b, d, c, e, p, f, g) { b.convexPolyhedronRepresentation.material = b.material; b.convexPolyhedronRepresentation.collisionResponse = b.collisionResponse; this.planeConvex(a, b.convexPolyhedronRepresentation, d, c, e, p, f, g) }; var Ga = new b, Fa = new b, Wa = new b, ab = new b; a.prototype[v.types.PLANE | v.types.CONVEXPOLYHEDRON] = a.prototype.planeConvex = function (a, b, d, c, e, p, f, g) {
                                Fa.set(0, 0, 1); e.vmult(Fa,
                                    Fa); for (var l = e = 0; l !== b.vertices.length; l++)if (Ga.copy(b.vertices[l]), p.vmult(Ga, Ga), c.vadd(Ga, Ga), Ga.vsub(d, Wa), 0 >= Fa.dot(Wa)) { var k = this.createContactEquation(f, g, a, b), x = ab; Fa.mult(Fa.dot(Wa), x); Ga.vsub(x, x); x.vsub(d, k.ri); k.ni.copy(Fa); Ga.vsub(c, k.rj); k.ri.vadd(d, k.ri); k.ri.vsub(f.position, k.ri); k.rj.vadd(c, k.rj); k.rj.vsub(g.position, k.rj); this.result.push(k); e++; this.enableFrictionReduction || this.createFrictionEquationsFromContact(k, this.frictionResult) } this.enableFrictionReduction && e && this.createFrictionFromAverage(e)
                            };
            var La = new b, Aa = new b; a.prototype[v.types.CONVEXPOLYHEDRON] = a.prototype.convexConvex = function (a, b, d, c, e, p, f, g, l, k, x, m) {
                if (!(d.distanceTo(c) > a.boundingSphereRadius + b.boundingSphereRadius) && a.findSeparatingAxis(b, d, e, c, p, La, x, m)) {
                    x = []; a.clipAgainstHull(d, e, b, c, p, La, -100, 100, x); for (p = e = 0; p !== x.length; p++) {
                        m = this.createContactEquation(f, g, a, b, l, k); var w = m.ri, z = m.rj; La.negate(m.ni); x[p].normal.negate(Aa); Aa.mult(x[p].depth, Aa); x[p].point.vadd(Aa, w); z.copy(x[p].point); w.vsub(d, w); z.vsub(c, z); w.vadd(d, w);
                        w.vsub(f.position, w); z.vadd(c, z); z.vsub(g.position, z); this.result.push(m); e++; this.enableFrictionReduction || this.createFrictionEquationsFromContact(m, this.frictionResult)
                    } this.enableFrictionReduction && e && this.createFrictionFromAverage(e)
                }
            }; var Ma = new b, Xa = new b, Qa = new b; a.prototype[v.types.PLANE | v.types.PARTICLE] = a.prototype.planeParticle = function (a, b, d, c, e, p, f, g) {
                Ma.set(0, 0, 1); f.quaternion.vmult(Ma, Ma); c.vsub(f.position, Xa); 0 >= Ma.dot(Xa) && (a = this.createContactEquation(g, f, b, a), a.ni.copy(Ma), a.ni.negate(a.ni),
                    a.ri.set(0, 0, 0), Ma.mult(Ma.dot(c), Qa), c.vsub(Qa, Qa), a.rj.copy(Qa), this.result.push(a), this.createFrictionEquationsFromContact(a, this.frictionResult))
            }; var wa = new b; a.prototype[v.types.PARTICLE | v.types.SPHERE] = a.prototype.sphereParticle = function (a, b, d, c, e, p, f, g) {
                wa.set(0, 0, 1); c.vsub(d, wa); wa.norm2() <= a.radius * a.radius && (b = this.createContactEquation(g, f, b, a), wa.normalize(), b.rj.copy(wa), b.rj.mult(a.radius, b.rj), b.ni.copy(wa), b.ni.negate(b.ni), b.ri.set(0, 0, 0), this.result.push(b), this.createFrictionEquationsFromContact(b,
                    this.frictionResult))
            }; var Ya = new q, Na = new b; new b; var Ba = new b, eb = new b, fa = new b; a.prototype[v.types.PARTICLE | v.types.CONVEXPOLYHEDRON] = a.prototype.convexParticle = function (a, b, d, c, e, p, f, g) {
                var l = -1; p = null; var k = 0; Na.copy(c); Na.vsub(d, Na); e.conjugate(Ya); Ya.vmult(Na, Na); if (a.pointIsInside(Na)) {
                a.worldVerticesNeedsUpdate && a.computeWorldVertices(d, e); a.worldFaceNormalsNeedsUpdate && a.computeWorldFaceNormals(e); e = 0; for (var x = a.faces.length; e !== x; e++) {
                    var m = a.worldFaceNormals[e]; c.vsub(a.worldVertices[a.faces[e][0]],
                        eb); var w = -m.dot(eb); if (null === p || Math.abs(w) < Math.abs(p)) p = w, l = e, Ba.copy(m), k++
                } -1 !== l ? (a = this.createContactEquation(g, f, b, a), Ba.mult(p, fa), fa.vadd(c, fa), fa.vsub(d, fa), a.rj.copy(fa), Ba.negate(a.ni), a.ri.set(0, 0, 0), b = a.ri, p = a.rj, b.vadd(c, b), b.vsub(g.position, b), p.vadd(d, p), p.vsub(f.position, p), this.result.push(a), this.createFrictionEquationsFromContact(a, this.frictionResult)) : console.warn("Point found inside convex, but did not find penetrating face!")
                }
            }; a.prototype[v.types.BOX | v.types.HEIGHTFIELD] =
                a.prototype.boxHeightfield = function (a, b, d, c, e, p, f, g) { a.convexPolyhedronRepresentation.material = a.material; a.convexPolyhedronRepresentation.collisionResponse = a.collisionResponse; this.convexHeightfield(a.convexPolyhedronRepresentation, b, d, c, e, p, f, g) }; var Ra = new b, Ea = new b, Ia = [0]; a.prototype[v.types.CONVEXPOLYHEDRON | v.types.HEIGHTFIELD] = a.prototype.convexHeightfield = function (a, b, d, c, e, p, f, g) {
                    var l = b.data, k = b.elementSize, x = a.boundingSphereRadius; y.pointToLocalFrame(c, p, d, Ra); var m = Math.floor((Ra.x - x) /
                        k) - 1, w = Math.ceil((Ra.x + x) / k) + 1, z = Math.floor((Ra.y - x) / k) - 1; k = Math.ceil((Ra.y + x) / k) + 1; if (!(0 > w || 0 > k || m > l.length || z > l[0].length)) {
                        0 > m && (m = 0); 0 > w && (w = 0); 0 > z && (z = 0); 0 > k && (k = 0); m >= l.length && (m = l.length - 1); w >= l.length && (w = l.length - 1); k >= l[0].length && (k = l[0].length - 1); z >= l[0].length && (z = l[0].length - 1); l = []; b.getRectMinMax(m, z, w, k, l); var n = l[0]; if (!(Ra.z - x > l[1] || Ra.z + x < n)) for (x = m; x < w; x++)for (m = z; m < k; m++)b.getConvexTrianglePillar(x, m, !1), y.pointToWorldFrame(c, p, b.pillarOffset, Ea), d.distanceTo(Ea) < b.pillarConvex.boundingSphereRadius +
                            a.boundingSphereRadius && this.convexConvex(a, b.pillarConvex, d, Ea, e, p, f, g, null, null, Ia, null), b.getConvexTrianglePillar(x, m, !0), y.pointToWorldFrame(c, p, b.pillarOffset, Ea), d.distanceTo(Ea) < b.pillarConvex.boundingSphereRadius + a.boundingSphereRadius && this.convexConvex(a, b.pillarConvex, d, Ea, e, p, f, g, null, null, Ia, null)
                        }
                }; var sa = new b, M = new b; a.prototype[v.types.SPHERE | v.types.HEIGHTFIELD] = a.prototype.sphereHeightfield = function (a, b, d, c, e, p, f, g) {
                    var l = b.data, k = a.radius, x = b.elementSize; y.pointToLocalFrame(c,
                        p, d, sa); var m = Math.floor((sa.x - k) / x) - 1, w = Math.ceil((sa.x + k) / x) + 1, z = Math.floor((sa.y - k) / x) - 1; x = Math.ceil((sa.y + k) / x) + 1; if (!(0 > w || 0 > x || m > l.length || x > l[0].length)) {
                        0 > m && (m = 0); 0 > w && (w = 0); 0 > z && (z = 0); 0 > x && (x = 0); m >= l.length && (m = l.length - 1); w >= l.length && (w = l.length - 1); x >= l[0].length && (x = l[0].length - 1); z >= l[0].length && (z = l[0].length - 1); l = []; b.getRectMinMax(m, z, w, x, l); var n = l[0]; if (!(sa.z - k > l[1] || sa.z + k < n)) for (k = this.result; m < w; m++)for (l = z; l < x; l++)if (n = k.length, b.getConvexTrianglePillar(m, l, !1), y.pointToWorldFrame(c,
                            p, b.pillarOffset, M), d.distanceTo(M) < b.pillarConvex.boundingSphereRadius + a.boundingSphereRadius && this.sphereConvex(a, b.pillarConvex, d, M, e, p, f, g), b.getConvexTrianglePillar(m, l, !0), y.pointToWorldFrame(c, p, b.pillarOffset, M), d.distanceTo(M) < b.pillarConvex.boundingSphereRadius + a.boundingSphereRadius && this.sphereConvex(a, b.pillarConvex, d, M, e, p, f, g), 2 < k.length - n) return
                        }
                }
        }, {
            "../collision/AABB": 3, "../collision/Ray": 9, "../equations/ContactEquation": 19, "../equations/FrictionEquation": 21, "../math/Quaternion": 28,
            "../math/Transform": 29, "../math/Vec3": 30, "../shapes/ConvexPolyhedron": 38, "../shapes/Shape": 43, "../solver/Solver": 47, "../utils/Vec3Pool": 54
        }], 56: [function (c, n, v) {
            function a() {
                q.apply(this); this.dt = -1; this.allowSleep = !1; this.contacts = []; this.frictionEquations = []; this.quatNormalizeSkip = 0; this.quatNormalizeFast = !1; this.stepnumber = this.time = 0; this.default_dt = 1 / 60; this.nextId = 0; this.gravity = new t; this.broadphase = new w; this.bodies = []; this.solver = new b; this.constraints = []; this.narrowphase = new y(this); this.collisionMatrix =
                    new e; this.collisionMatrixPrevious = new e; this.materials = []; this.contactmaterials = []; this.contactMaterialTable = new u; this.defaultMaterial = new r("default"); this.defaultContactMaterial = new k(this.defaultMaterial, this.defaultMaterial, { friction: .3, restitution: 0 }); this.doProfiling = !1; this.profile = { solve: 0, makeContactConstraints: 0, broadphase: 0, integrate: 0, narrowphase: 0 }; this.subsystems = []; this.addBodyEvent = { type: "addBody", body: null }; this.removeBodyEvent = { type: "removeBody", body: null }
            } n.exports = a; c("../shapes/Shape");
            var t = c("../math/Vec3"); n = c("../math/Quaternion"); var b = c("../solver/GSSolver"); c("../utils/Vec3Pool"); c("../equations/ContactEquation"); c("../equations/FrictionEquation"); var y = c("./Narrowphase"), q = c("../utils/EventTarget"), e = c("../collision/ArrayCollisionMatrix"), r = c("../material/Material"), k = c("../material/ContactMaterial"), m = c("../objects/Body"), u = c("../utils/TupleDictionary"), f = c("../collision/RaycastResult"); v = c("../collision/AABB"); var d = c("../collision/Ray"), w = c("../collision/NaiveBroadphase");
            a.prototype = new q; new v; var z = new d; a.prototype.getContactMaterial = function (a, b) { return this.contactMaterialTable.get(a.id, b.id) }; a.prototype.numObjects = function () { return this.bodies.length }; a.prototype.collisionMatrixTick = function () { var a = this.collisionMatrixPrevious; this.collisionMatrixPrevious = this.collisionMatrix; this.collisionMatrix = a; this.collisionMatrix.reset() }; a.prototype.add = a.prototype.addBody = function (a) {
            -1 === this.bodies.indexOf(a) && (a.index = this.bodies.length, this.bodies.push(a), a.world =
                this, a.initPosition.copy(a.position), a.initVelocity.copy(a.velocity), a.timeLastSleepy = this.time, a instanceof m && (a.initAngularVelocity.copy(a.angularVelocity), a.initQuaternion.copy(a.quaternion)), this.collisionMatrix.setNumObjects(this.bodies.length), this.addBodyEvent.body = a, this.dispatchEvent(this.addBodyEvent))
            }; a.prototype.addConstraint = function (a) { this.constraints.push(a) }; a.prototype.removeConstraint = function (a) { a = this.constraints.indexOf(a); -1 !== a && this.constraints.splice(a, 1) }; a.prototype.rayTest =
                function (a, b, d) { d instanceof f ? this.raycastClosest(a, b, { skipBackfaces: !0 }, d) : this.raycastAll(a, b, { skipBackfaces: !0 }, d) }; a.prototype.raycastAll = function (a, b, c, e) { c.mode = d.ALL; c.from = a; c.to = b; c.callback = e; return z.intersectWorld(this, c) }; a.prototype.raycastAny = function (a, b, c, e) { c.mode = d.ANY; c.from = a; c.to = b; c.result = e; return z.intersectWorld(this, c) }; a.prototype.raycastClosest = function (a, b, c, e) { c.mode = d.CLOSEST; c.from = a; c.to = b; c.result = e; return z.intersectWorld(this, c) }; a.prototype.remove = function (a) {
                a.world =
                    null; var b = this.bodies.length - 1, d = this.bodies, c = d.indexOf(a); if (-1 !== c) { d.splice(c, 1); for (c = 0; c !== d.length; c++)d[c].index = c; this.collisionMatrix.setNumObjects(b); this.removeBodyEvent.body = a; this.dispatchEvent(this.removeBodyEvent) }
                }; a.prototype.removeBody = a.prototype.remove; a.prototype.addMaterial = function (a) { this.materials.push(a) }; a.prototype.addContactMaterial = function (a) { this.contactmaterials.push(a); this.contactMaterialTable.set(a.materials[0].id, a.materials[1].id, a) }; "undefined" === typeof performance &&
                    (performance = {}); if (!performance.now) { var g = Date.now(); performance.timing && performance.timing.navigationStart && (g = performance.timing.navigationStart); performance.now = function () { return Date.now() - g } } var C = new t; a.prototype.step = function (a, b, d) {
                        d = d || 10; b = b || 0; if (0 === b) this.internalStep(a), this.time += a; else {
                            var c = Math.floor((this.time + b) / a) - Math.floor(this.time / a); c = Math.min(c, d); d = performance.now(); for (var e = 0; e !== c && !(this.internalStep(a), performance.now() - d > 1E3 * a); e++); this.time += b; a = this.time % a /
                                a; b = this.bodies; for (c = 0; c !== b.length; c++)d = b[c], d.type !== m.STATIC && d.sleepState !== m.SLEEPING ? (d.position.vsub(d.previousPosition, C), C.scale(a, C), d.position.vadd(C, d.interpolatedPosition)) : (d.interpolatedPosition.copy(d.position), d.interpolatedQuaternion.copy(d.quaternion))
                        }
                    }; var Q = { type: "postStep" }, S = { type: "preStep" }, R = { type: "collide", body: null, contact: null }, O = [], J = [], G = [], E = []; new t; new t; new t; new t; new t; new t; new t; new t; new t; new n; var P = new n, B = new n, L = new t; a.prototype.internalStep = function (a) {
                    this.dt =
                        a; var b = this.contacts, d = this.numObjects(), c = this.bodies, e = this.solver, f = this.gravity, g = this.doProfiling, k = this.profile, w = m.DYNAMIC, z, n = this.constraints; f.norm(); var r = f.x, u = f.y, t = f.z; g && (z = performance.now()); for (f = 0; f !== d; f++) { var q = c[f]; if (q.type & w) { var v = q.force; q = q.mass; v.x += q * r; v.y += q * u; v.z += q * t } } f = 0; for (q = this.subsystems.length; f !== q; f++)this.subsystems[f].update(); g && (z = performance.now()); G.length = 0; E.length = 0; this.broadphase.collisionPairs(this, G, E); g && (k.broadphase = performance.now() - z); q =
                            n.length; for (f = 0; f !== q; f++)if (r = n[f], !r.collideConnected) for (u = G.length - 1; 0 <= u; --u)if (r.bodyA === G[u] && r.bodyB === E[u] || r.bodyB === G[u] && r.bodyA === E[u]) G.splice(u, 1), E.splice(u, 1); this.collisionMatrixTick(); g && (z = performance.now()); q = b.length; for (f = 0; f !== q; f++)O.push(b[f]); b.length = 0; q = this.frictionEquations.length; for (f = 0; f !== q; f++)J.push(this.frictionEquations[f]); this.frictionEquations.length = 0; this.narrowphase.getContacts(G, E, this, b, O, this.frictionEquations, J); g && (k.narrowphase = performance.now() -
                                z); g && (z = performance.now()); for (f = 0; f < this.frictionEquations.length; f++)e.addEquation(this.frictionEquations[f]); f = b.length; for (u = 0; u !== f; u++)r = b[u], q = r.bi, t = r.bj, q.material && t.material && this.getContactMaterial(q.material, t.material), q.material && t.material && 0 <= q.material.restitution && 0 <= t.material.restitution && (r.restitution = q.material.restitution * t.material.restitution), e.addEquation(r), q.allowSleep && q.type === m.DYNAMIC && q.sleepState === m.SLEEPING && t.sleepState === m.AWAKE && t.type !== m.STATIC && t.velocity.norm2() +
                                    t.angularVelocity.norm2() >= 2 * Math.pow(t.sleepSpeedLimit, 2) && (q._wakeUpAfterNarrowphase = !0), t.allowSleep && t.type === m.DYNAMIC && t.sleepState === m.SLEEPING && q.sleepState === m.AWAKE && q.type !== m.STATIC && q.velocity.norm2() + q.angularVelocity.norm2() >= 2 * Math.pow(q.sleepSpeedLimit, 2) && (t._wakeUpAfterNarrowphase = !0), this.collisionMatrix.set(q, t, !0), this.collisionMatrixPrevious.get(q, t) || (R.body = t, R.contact = r, q.dispatchEvent(R), R.body = q, t.dispatchEvent(R)); g && (k.makeContactConstraints = performance.now() - z, z = performance.now());
                        for (f = 0; f !== d; f++)q = c[f], q._wakeUpAfterNarrowphase && (q.wakeUp(), q._wakeUpAfterNarrowphase = !1); q = n.length; for (f = 0; f !== q; f++)for (r = n[f], r.update(), u = 0, b = r.equations.length; u !== b; u++)e.addEquation(r.equations[u]); e.solve(a, this); g && (k.solve = performance.now() - z); e.removeAllEquations(); e = Math.pow; for (f = 0; f !== d; f++)if (q = c[f], q.type & w && (n = e(1 - q.linearDamping, a), b = q.velocity, b.mult(n, b), n = q.angularVelocity)) b = e(1 - q.angularDamping, a), n.mult(b, n); this.dispatchEvent(S); for (f = 0; f !== d; f++)q = c[f], q.preStep && q.preStep.call(q);
                        g && (z = performance.now()); w = m.DYNAMIC | m.KINEMATIC; e = 0 === this.stepnumber % (this.quatNormalizeSkip + 1); n = this.quatNormalizeFast; b = .5 * a; for (f = 0; f !== d; f++)if (q = c[f], r = q.force, u = q.torque, q.type & w && q.sleepState !== m.SLEEPING) {
                            t = q.velocity; v = q.angularVelocity; var C = q.position, y = q.quaternion, I = q.invMass, oa = q.invInertiaWorld; t.x += r.x * I * a; t.y += r.y * I * a; t.z += r.z * I * a; q.angularVelocity && (oa.vmult(u, L), L.mult(a, L), L.vadd(v, v)); C.x += t.x * a; C.y += t.y * a; C.z += t.z * a; q.angularVelocity && (P.set(v.x, v.y, v.z, 0), P.mult(y, B), y.x +=
                                b * B.x, y.y += b * B.y, y.z += b * B.z, y.w += b * B.w, e && (n ? y.normalizeFast() : y.normalize())); q.aabb && (q.aabbNeedsUpdate = !0); q.updateInertiaWorld && q.updateInertiaWorld()
                        } this.clearForces(); this.broadphase.dirty = !0; g && (k.integrate = performance.now() - z); this.time += a; this.stepnumber += 1; this.dispatchEvent(Q); for (f = 0; f !== d; f++)q = c[f], (a = q.postStep) && a.call(q); if (this.allowSleep) for (f = 0; f !== d; f++)c[f].sleepTick(this.time)
                    }; a.prototype.clearForces = function () {
                        for (var a = this.bodies, b = a.length, d = 0; d !== b; d++) {
                            var c = a[d]; c.force.set(0,
                                0, 0); c.torque.set(0, 0, 0)
                        }
                    }
        }, { "../collision/AABB": 3, "../collision/ArrayCollisionMatrix": 4, "../collision/NaiveBroadphase": 7, "../collision/Ray": 9, "../collision/RaycastResult": 10, "../equations/ContactEquation": 19, "../equations/FrictionEquation": 21, "../material/ContactMaterial": 24, "../material/Material": 25, "../math/Quaternion": 28, "../math/Vec3": 30, "../objects/Body": 31, "../shapes/Shape": 43, "../solver/GSSolver": 46, "../utils/EventTarget": 49, "../utils/TupleDictionary": 52, "../utils/Vec3Pool": 54, "./Narrowphase": 55 }]
    },
        {}, [2])(2)
});/*
 jQuery JavaScript Library v3.1.0
 https://jquery.com/

 Includes Sizzle.js
 https://sizzlejs.com/

 Copyright jQuery Foundation and other contributors
 Released under the MIT license
 https://jquery.org/license

 Date: 2016-07-07T21:44Z
 Sizzle CSS Selector Engine v2.3.0
 https://sizzlejs.com/

 Copyright jQuery Foundation and other contributors
 Released under the MIT license
 http://jquery.org/license

 Date: 2016-01-04
*/
(function (h, c) { "object" === typeof module && "object" === typeof module.exports ? module.exports = h.document ? c(h, !0) : function (h) { if (!h.document) throw Error("jQuery requires a window with a document"); return c(h) } : c(h) })("undefined" !== typeof window ? window : this, function (h, c) {
    function n(a, b) { b = b || Y; var d = b.createElement("script"); d.text = a; b.head.appendChild(d).parentNode.removeChild(d) } function v(a) {
        var b = !!a && "length" in a && a.length, d = l.type(a); return "function" === d || l.isWindow(a) ? !1 : "array" === d || 0 === b || "number" ===
            typeof b && 0 < b && b - 1 in a
    } function a(a, b, d) { if (l.isFunction(b)) return l.grep(a, function (a, c) { return !!b.call(a, c, a) !== d }); if (b.nodeType) return l.grep(a, function (a) { return a === b !== d }); if ("string" === typeof b) { if (wa.test(b)) return l.filter(b, a, d); b = l.filter(b, a) } return l.grep(a, function (a) { return -1 < D.call(b, a) !== d && 1 === a.nodeType }) } function t(a, b) { for (; (a = a[b]) && 1 !== a.nodeType;); return a } function b(a) { var b = {}; l.each(a.match(fa) || [], function (a, d) { b[d] = !0 }); return b } function y(a) { return a } function q(a) {
        throw a;
    } function e(a, b, d) { var c; try { a && l.isFunction(c = a.promise) ? c.call(a).done(b).fail(d) : a && l.isFunction(c = a.then) ? c.call(a, b, d) : b.call(void 0, a) } catch (Mb) { d.call(void 0, Mb) } } function r() { Y.removeEventListener("DOMContentLoaded", r); h.removeEventListener("load", r); l.ready() } function k() { this.expando = l.expando + k.uid++ } function m(a, b, d) {
        if (void 0 === d && 1 === a.nodeType) if (d = "data-" + b.replace(fb, "-$&").toLowerCase(), d = a.getAttribute(d), "string" === typeof d) {
            try {
                d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d +
                    "" === d ? +d : Oa.test(d) ? JSON.parse(d) : d
            } catch (ec) { } Da.set(a, b, d)
        } else d = void 0; return d
    } function u(a, b, d, c) { var A = 1, e = 20, p = c ? function () { return c.cur() } : function () { return l.css(a, b, "") }, f = p(), g = d && d[3] || (l.cssNumber[b] ? "" : "px"), X = (l.cssNumber[b] || "px" !== g && +f) && Za.exec(l.css(a, b)); if (X && X[3] !== g) { g = g || X[3]; d = d || []; X = +f || 1; do A = A || ".5", X /= A, l.style(a, b, X + g); while (A !== (A = p() / f) && 1 !== A && --e) } if (d) { X = +X || +f || 0; var k = d[1] ? X + (d[1] + 1) * d[2] : +d[2]; c && (c.unit = g, c.start = X, c.end = k) } return k } function f(a, b) {
        for (var d,
            c, A = [], e = 0, p = a.length; e < p; e++)if (c = a[e], c.style) if (d = c.style.display, b) { if ("none" === d && (A[e] = M.get(c, "display") || null, A[e] || (c.style.display = "")), "" === c.style.display && gb(c)) { d = e; var f = c.ownerDocument; c = c.nodeName; var g = ib[c]; g || (f = f.body.appendChild(f.createElement(c)), g = l.css(f, "display"), f.parentNode.removeChild(f), "none" === g && (g = "block"), ib[c] = g); f = g; A[d] = f } } else "none" !== d && (A[e] = "none", M.set(c, "display", d)); for (e = 0; e < p; e++)null != A[e] && (a[e].style.display = A[e]); return a
    } function d(a, b) {
        var d =
            "undefined" !== typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" !== typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : []; return void 0 === b || b && l.nodeName(a, b) ? l.merge([a], d) : d
    } function w(a, b) { for (var d = 0, c = a.length; d < c; d++)M.set(a[d], "globalEval", !b || M.get(b[d], "globalEval")) } function z(a, b, c, e, p) {
        for (var A, f, g, X = b.createDocumentFragment(), k = [], x = 0, m = a.length; x < m; x++)if ((A = a[x]) || 0 === A) if ("object" === l.type(A)) l.merge(k, A.nodeType ? [A] : A); else if (vb.test(A)) {
            f = f || X.appendChild(b.createElement("div"));
            g = (kb.exec(A) || ["", ""])[1].toLowerCase(); g = Ka[g] || Ka._default; f.innerHTML = g[1] + l.htmlPrefilter(A) + g[2]; for (g = g[0]; g--;)f = f.lastChild; l.merge(k, f.childNodes); f = X.firstChild; f.textContent = ""
        } else k.push(b.createTextNode(A)); X.textContent = ""; for (x = 0; A = k[x++];)if (e && -1 < l.inArray(A, e)) p && p.push(A); else if (a = l.contains(A.ownerDocument, A), f = d(X.appendChild(A), "script"), a && w(f), c) for (g = 0; A = f[g++];)$a.test(A.type || "") && c.push(A); return X
    } function g() { return !0 } function C() { return !1 } function Q() { try { return Y.activeElement } catch (A) { } }
    function S(a, b, d, c, e, f) { var A; if ("object" === typeof b) { "string" !== typeof d && (c = c || d, d = void 0); for (A in b) S(a, A, d, c, b[A], f); return a } null == c && null == e ? (e = d, c = d = void 0) : null == e && ("string" === typeof d ? (e = c, c = void 0) : (e = c, c = d, d = void 0)); if (!1 === e) e = C; else if (!e) return a; if (1 === f) { var p = e; e = function (a) { l().off(a); return p.apply(this, arguments) }; e.guid = p.guid || (p.guid = l.guid++) } return a.each(function () { l.event.add(this, b, e, c, d) }) } function R(a, b) {
        return l.nodeName(a, "table") && l.nodeName(11 !== b.nodeType ? b : b.firstChild,
            "tr") ? a.getElementsByTagName("tbody")[0] || a : a
    } function O(a) { a.type = (null !== a.getAttribute("type")) + "/" + a.type; return a } function J(a) { var b = F.exec(a.type); b ? a.type = b[1] : a.removeAttribute("type"); return a } function G(a, b) { var d; if (1 === b.nodeType) { if (M.hasData(a)) { var c = M.access(a); var e = M.set(b, c); if (c = c.events) for (A in delete e.handle, e.events = {}, c) for (e = 0, d = c[A].length; e < d; e++)l.event.add(b, A, c[A][e]) } if (Da.hasData(a)) { var A = Da.access(a); A = l.extend({}, A); Da.set(b, A) } } } function E(a, b, c, e) {
        b = p.apply([],
            b); var A, f = 0, g = a.length, X = g - 1, k = b[0], x = l.isFunction(k); if (x || 1 < g && "string" === typeof k && !la.checkClone && K.test(k)) return a.each(function (d) { var A = a.eq(d); x && (b[0] = k.call(this, d, A.html())); E(A, b, c, e) }); if (g) {
                var m = z(b, a[0].ownerDocument, !1, a, e); var w = m.firstChild; 1 === m.childNodes.length && (m = w); if (w || e) {
                    w = l.map(d(m, "script"), O); for (A = w.length; f < g; f++) { var h = m; f !== X && (h = l.clone(h, !0, !0), A && l.merge(w, d(h, "script"))); c.call(a[f], h, f) } if (A) for (m = w[w.length - 1].ownerDocument, l.map(w, J), f = 0; f < A; f++)h = w[f],
                        $a.test(h.type || "") && !M.access(h, "globalEval") && l.contains(m, h) && (h.src ? l._evalUrl && l._evalUrl(h.src) : n(h.textContent.replace(qa, ""), m))
                }
            } return a
    } function P(a, b, c) { for (var e = b ? l.filter(b, a) : a, A = 0; null != (b = e[A]); A++)c || 1 !== b.nodeType || l.cleanData(d(b)), b.parentNode && (c && l.contains(b.ownerDocument, b) && w(d(b, "script")), b.parentNode.removeChild(b)); return a } function B(a, b, d) {
        var c = a.style; if (d = d || Ha(a)) {
            var e = d.getPropertyValue(b) || d[b]; "" !== e || l.contains(a.ownerDocument, a) || (e = l.style(a, b)); if (!la.pixelMarginRight() &&
                ia.test(e) && Z.test(b)) { a = c.width; b = c.minWidth; var A = c.maxWidth; c.minWidth = c.maxWidth = c.width = e; e = d.width; c.width = a; c.minWidth = b; c.maxWidth = A }
        } return void 0 !== e ? e + "" : e
    } function L(a, b) { return { get: function () { if (a()) delete this.get; else return (this.get = b).apply(this, arguments) } } } function I(a) { if (a in sb) return a; for (var b = a[0].toUpperCase() + a.slice(1), d = Va.length; d--;)if (a = Va[d] + b, a in sb) return a } function T(a, b, d) { return (a = Za.exec(b)) ? Math.max(0, a[2] - (d || 0)) + (a[3] || "px") : b } function ba(a, b, d, c, e) {
        b = d ===
            (c ? "border" : "content") ? 4 : "width" === b ? 1 : 0; for (var A = 0; 4 > b; b += 2)"margin" === d && (A += l.css(a, d + Pa[b], !0, e)), c ? ("content" === d && (A -= l.css(a, "padding" + Pa[b], !0, e)), "margin" !== d && (A -= l.css(a, "border" + Pa[b] + "Width", !0, e))) : (A += l.css(a, "padding" + Pa[b], !0, e), "padding" !== d && (A += l.css(a, "border" + Pa[b] + "Width", !0, e))); return A
    } function ja(a, b, d) {
        var c, e = !0, A = Ha(a), f = "border-box" === l.css(a, "boxSizing", !1, A); a.getClientRects().length && (c = a.getBoundingClientRect()[b]); if (0 >= c || null == c) {
            c = B(a, b, A); if (0 > c || null == c) c =
                a.style[b]; if (ia.test(c)) return c; e = f && (la.boxSizingReliable() || c === a.style[b]); c = parseFloat(c) || 0
        } return c + ba(a, b, d || (f ? "border" : "content"), e, A) + "px"
    } function U(a, b, d, c, e) { return new U.prototype.init(a, b, d, c, e) } function ma() { Sa && (h.requestAnimationFrame(ma), l.fx.tick()) } function W() { h.setTimeout(function () { bb = void 0 }); return bb = l.now() } function V(a, b) { var d = 0, c = { height: a }; for (b = b ? 1 : 0; 4 > d; d += 2 - b) { var e = Pa[d]; c["margin" + e] = c["padding" + e] = a } b && (c.opacity = c.width = a); return c } function aa(a, b, d) {
        for (var c,
            e = (ua.tweeners[b] || []).concat(ua.tweeners["*"]), A = 0, f = e.length; A < f; A++)if (c = e[A].call(d, b, a)) return c
    } function da(a, b) { var d, c; for (d in a) { var e = l.camelCase(d); var A = b[e]; var f = a[d]; l.isArray(f) && (A = f[1], f = a[d] = f[0]); d !== e && (a[e] = f, delete a[d]); if ((c = l.cssHooks[e]) && "expand" in c) for (d in f = c.expand(f), delete a[e], f) d in a || (a[d] = f[d], b[d] = A); else b[e] = A } } function ua(a, b, d) {
        var c, e = 0, A = ua.prefilters.length, f = l.Deferred().always(function () { delete p.elem }), p = function () {
            if (c) return !1; var b = bb || W(); b =
                Math.max(0, g.startTime + g.duration - b); for (var d = 1 - (b / g.duration || 0), e = 0, A = g.tweens.length; e < A; e++)g.tweens[e].run(d); f.notifyWith(a, [g, d, b]); if (1 > d && A) return b; f.resolveWith(a, [g]); return !1
        }, g = f.promise({
            elem: a, props: l.extend({}, b), opts: l.extend(!0, { specialEasing: {}, easing: l.easing._default }, d), originalProperties: b, originalOptions: d, startTime: bb || W(), duration: d.duration, tweens: [], createTween: function (b, d) { var c = l.Tween(a, g.opts, b, d, g.opts.specialEasing[b] || g.opts.easing); g.tweens.push(c); return c },
            stop: function (b) { var d = 0, e = b ? g.tweens.length : 0; if (c) return this; for (c = !0; d < e; d++)g.tweens[d].run(1); b ? (f.notifyWith(a, [g, 1, 0]), f.resolveWith(a, [g, b])) : f.rejectWith(a, [g, b]); return this }
        }); d = g.props; for (da(d, g.opts.specialEasing); e < A; e++)if (b = ua.prefilters[e].call(g, a, d, g.opts)) return l.isFunction(b.stop) && (l._queueHooks(g.elem, g.opts.queue).stop = l.proxy(b.stop, b)), b; l.map(d, aa, g); l.isFunction(g.opts.start) && g.opts.start.call(a, g); l.fx.timer(l.extend(p, { elem: a, anim: g, queue: g.opts.queue })); return g.progress(g.opts.progress).done(g.opts.done,
            g.opts.complete).fail(g.opts.fail).always(g.opts.always)
    } function ka(a) { return a.getAttribute && a.getAttribute("class") || "" } function ea(a, b, d, c) { var e; if (l.isArray(b)) l.each(b, function (b, e) { d || Pb.test(a) ? c(a, e) : ea(a + "[" + ("object" === typeof e && null != e ? b : "") + "]", e, d, c) }); else if (d || "object" !== l.type(b)) c(a, b); else for (e in b) ea(a + "[" + e + "]", b[e], d, c) } function za(a) {
        return function (b, d) {
        "string" !== typeof b && (d = b, b = "*"); var c, e = 0, A = b.toLowerCase().match(fa) || []; if (l.isFunction(d)) for (; c = A[e++];)"+" === c[0] ?
            (c = c.slice(1) || "*", (a[c] = a[c] || []).unshift(d)) : (a[c] = a[c] || []).push(d)
        }
    } function na(a, b, d, c) { function e(p) { var g; A[p] = !0; l.each(a[p] || [], function (a, p) { var l = p(b, d, c); if ("string" === typeof l && !f && !A[l]) return b.dataTypes.unshift(l), e(l), !1; if (f) return !(g = l) }); return g } var A = {}, f = a === yb; return e(b.dataTypes[0]) || !A["*"] && e("*") } function va(a, b) { var d, c, e = l.ajaxSettings.flatOptions || {}; for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]); c && l.extend(!0, a, c); return a } function ra(a) {
        return l.isWindow(a) ?
            a : 9 === a.nodeType && a.defaultView
    } var xa = [], Y = h.document, oa = Object.getPrototypeOf, ha = xa.slice, p = xa.concat, x = xa.push, D = xa.indexOf, H = {}, pa = H.toString, ca = H.hasOwnProperty, Ja = ca.toString, ta = Ja.call(Object), la = {}, l = function (a, b) { return new l.fn.init(a, b) }, Ga = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, Fa = /^-ms-/, Wa = /-([a-z])/g, ab = function (a, b) { return b.toUpperCase() }; l.fn = l.prototype = {
        jquery: "3.1.0", constructor: l, length: 0, toArray: function () { return ha.call(this) }, get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] :
                this[a] : ha.call(this)
        }, pushStack: function (a) { a = l.merge(this.constructor(), a); a.prevObject = this; return a }, each: function (a) { return l.each(this, a) }, map: function (a) { return this.pushStack(l.map(this, function (b, d) { return a.call(b, d, b) })) }, slice: function () { return this.pushStack(ha.apply(this, arguments)) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, eq: function (a) { var b = this.length; a = +a + (0 > a ? b : 0); return this.pushStack(0 <= a && a < b ? [this[a]] : []) }, end: function () {
            return this.prevObject ||
                this.constructor()
        }, push: x, sort: xa.sort, splice: xa.splice
    }; l.extend = l.fn.extend = function () { var a, b, d, c = arguments[0] || {}, e = 1, f = arguments.length, p = !1; "boolean" === typeof c && (p = c, c = arguments[e] || {}, e++); "object" === typeof c || l.isFunction(c) || (c = {}); e === f && (c = this, e--); for (; e < f; e++)if (null != (a = arguments[e])) for (b in a) { var g = c[b]; var k = a[b]; c !== k && (p && k && (l.isPlainObject(k) || (d = l.isArray(k))) ? (d ? (d = !1, g = g && l.isArray(g) ? g : []) : g = g && l.isPlainObject(g) ? g : {}, c[b] = l.extend(p, g, k)) : void 0 !== k && (c[b] = k)) } return c };
    l.extend({
        expando: "jQuery" + ("3.1.0" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) { throw Error(a); }, noop: function () { }, isFunction: function (a) { return "function" === l.type(a) }, isArray: Array.isArray, isWindow: function (a) { return null != a && a === a.window }, isNumeric: function (a) { var b = l.type(a); return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a)) }, isPlainObject: function (a) {
            if (!a || "[object Object]" !== pa.call(a)) return !1; a = oa(a); if (!a) return !0; a = ca.call(a, "constructor") && a.constructor; return "function" ===
                typeof a && Ja.call(a) === ta
        }, isEmptyObject: function (a) { for (var b in a) return !1; return !0 }, type: function (a) { return null == a ? a + "" : "object" === typeof a || "function" === typeof a ? H[pa.call(a)] || "object" : typeof a }, globalEval: function (a) { n(a) }, camelCase: function (a) { return a.replace(Fa, "ms-").replace(Wa, ab) }, nodeName: function (a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() }, each: function (a, b) {
            var d, c = 0; if (v(a)) for (d = a.length; c < d && !1 !== b.call(a[c], c, a[c]); c++); else for (c in a) if (!1 === b.call(a[c],
                c, a[c])) break; return a
        }, trim: function (a) { return null == a ? "" : (a + "").replace(Ga, "") }, makeArray: function (a, b) { var d = b || []; null != a && (v(Object(a)) ? l.merge(d, "string" === typeof a ? [a] : a) : x.call(d, a)); return d }, inArray: function (a, b, d) { return null == b ? -1 : D.call(b, a, d) }, merge: function (a, b) { for (var d = +b.length, c = 0, e = a.length; c < d; c++)a[e++] = b[c]; a.length = e; return a }, grep: function (a, b, d) { for (var c = [], e = 0, f = a.length, p = !d; e < f; e++)d = !b(a[e], e), d !== p && c.push(a[e]); return c }, map: function (a, b, d) {
            var c, e = 0, f = []; if (v(a)) for (c =
                a.length; e < c; e++) { var A = b(a[e], e, d); null != A && f.push(A) } else for (e in a) A = b(a[e], e, d), null != A && f.push(A); return p.apply([], f)
        }, guid: 1, proxy: function (a, b) { if ("string" === typeof b) { var d = a[b]; b = a; a = d } if (l.isFunction(a)) { var c = ha.call(arguments, 2); d = function () { return a.apply(b || this, c.concat(ha.call(arguments))) }; d.guid = a.guid = a.guid || l.guid++; return d } }, now: Date.now, support: la
    }); $jscomp.initSymbol(); "function" === typeof Symbol && ($jscomp.initSymbol(), $jscomp.initSymbolIterator(), $jscomp.initSymbol(), $jscomp.initSymbolIterator(),
        l.fn[Symbol.iterator] = xa[Symbol.iterator]); l.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) { H["[object " + b + "]"] = b.toLowerCase() }); var La = function (a) {
            function b(a, b, d, c) {
                var e, f, p, A, g = b && b.ownerDocument, l = b ? b.nodeType : 9; d = d || []; if ("string" !== typeof a || !a || 1 !== l && 9 !== l && 11 !== l) return d; if (!c && ((b ? b.ownerDocument || b : ca) !== F && U(b), b = b || F, v)) {
                    if (11 !== l && (A = Bb.exec(a))) if (e = A[1]) if (9 === l) if (f = b.getElementById(e)) { if (f.id === e) return d.push(f), d } else return d;
                    else { if (g && (f = g.getElementById(e)) && y(b, f) && f.id === e) return d.push(f), d } else { if (A[2]) return Ta.apply(d, b.getElementsByTagName(a)), d; if ((e = A[3]) && ya.getElementsByClassName && b.getElementsByClassName) return Ta.apply(d, b.getElementsByClassName(e)), d } if (!(!ya.qsa || Ha[a + " "] || ia && ia.test(a))) {
                        if (1 !== l) { g = b; var k = a } else if ("object" !== b.nodeName.toLowerCase()) {
                            (p = b.getAttribute("id")) ? p = p.replace(nb, T) : b.setAttribute("id", p = C); f = Y(a); for (e = f.length; e--;)f[e] = "#" + p + " " + w(f[e]); k = f.join(","); g = Fa.test(a) &&
                                x(b.parentNode) || b
                        } if (k) try { return Ta.apply(d, g.querySelectorAll(k)), d } catch (jc) { } finally { p === C && b.removeAttribute("id") }
                    }
                } return ea(a.replace(O, "$1"), b, d, c)
            } function d() { function a(d, c) { b.push(d + " ") > M.cacheLength && delete a[b.shift()]; return a[d + " "] = c } var b = []; return a } function c(a) { a[C] = !0; return a } function e(a) { var b = F.createElement("fieldset"); try { return !!a(b) } catch (hc) { return !1 } finally { b.parentNode && b.parentNode.removeChild(b) } } function f(a, b) {
                for (var d = a.split("|"), c = d.length; c--;)M.attrHandle[d[c]] =
                    b
            } function p(a, b) { var d = b && a, c = d && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex; if (c) return c; if (d) for (; d = d.nextSibling;)if (d === b) return -1; return a ? 1 : -1 } function A(a) { return function (b) { return "input" === b.nodeName.toLowerCase() && b.type === a } } function g(a) { return function (b) { var d = b.nodeName.toLowerCase(); return ("input" === d || "button" === d) && b.type === a } } function l(a) {
                return function (b) {
                    return "label" in b && b.disabled === a || "form" in b && b.disabled === a || "form" in b && !1 === b.disabled && (b.isDisabled ===
                        a || b.isDisabled !== !a && ("label" in b || !V(b)) !== a)
                }
            } function k(a) { return c(function (b) { b = +b; return c(function (d, c) { for (var e, f = a([], d.length, b), p = f.length; p--;)d[e = f[p]] && (d[e] = !(c[e] = d[e])) }) }) } function x(a) { return a && "undefined" !== typeof a.getElementsByTagName && a } function m() { } function w(a) { for (var b = 0, d = a.length, c = ""; b < d; b++)c += a[b].value; return c } function h(a, b, d) {
                var c = b.dir, e = b.next, f = e || c, p = d && "parentNode" === f, A = ta++; return b.first ? function (b, d, e) {
                    for (; b = b[c];)if (1 === b.nodeType || p) return a(b,
                        d, e)
                } : function (b, d, g) { var l, k = [pa, A]; if (g) for (; b = b[c];) { if ((1 === b.nodeType || p) && a(b, d, g)) return !0 } else for (; b = b[c];)if (1 === b.nodeType || p) { var x = b[C] || (b[C] = {}); x = x[b.uniqueID] || (x[b.uniqueID] = {}); if (e && e === b.nodeName.toLowerCase()) b = b[c] || b; else { if ((l = x[f]) && l[0] === pa && l[1] === A) return k[2] = l[2]; x[f] = k; if (k[2] = a(b, d, g)) return !0 } } }
            } function z(a) { return 1 < a.length ? function (b, d, c) { for (var e = a.length; e--;)if (!a[e](b, d, c)) return !1; return !0 } : a[0] } function n(a, b, d, c, e) {
                for (var f, p = [], A = 0, g = a.length, l = null !=
                    b; A < g; A++)if (f = a[A]) if (!d || d(f, c, e)) p.push(f), l && b.push(A); return p
            } function D(a, d, e, f, p, A) {
            f && !f[C] && (f = D(f)); p && !p[C] && (p = D(p, A)); return c(function (c, A, g, l) {
                var k, x = [], m = [], w = A.length, h; if (!(h = c)) { h = d || "*"; for (var X = g.nodeType ? [g] : g, z = [], D = 0, r = X.length; D < r; D++)b(h, X[D], z); h = z } h = !a || !c && d ? h : n(h, x, a, g, l); X = e ? p || (c ? a : w || f) ? [] : A : h; e && e(h, X, g, l); if (f) { var K = n(X, m); f(K, [], g, l); for (g = K.length; g--;)if (k = K[g]) X[m[g]] = !(h[m[g]] = k) } if (c) {
                    if (p || a) {
                        if (p) {
                            K = []; for (g = X.length; g--;)(k = X[g]) && K.push(h[g] = k); p(null,
                                X = [], K, l)
                        } for (g = X.length; g--;)(k = X[g]) && -1 < (K = p ? Va(c, k) : x[g]) && (c[K] = !(A[K] = k))
                    }
                } else X = n(X === A ? X.splice(w, X.length) : X), p ? p(null, A, X, l) : Ta.apply(A, X)
            })
            } function r(a) {
                var b, d, c = a.length, e = M.relative[a[0].type]; var f = e || M.relative[" "]; for (var p = e ? 1 : 0, A = h(function (a) { return a === b }, f, !0), g = h(function (a) { return -1 < Va(b, a) }, f, !0), l = [function (a, d, c) { a = !e && (c || d !== q) || ((b = d).nodeType ? A(a, d, c) : g(a, d, c)); b = null; return a }]; p < c; p++)if (f = M.relative[a[p].type]) l = [h(z(l), f)]; else {
                    f = M.filter[a[p].type].apply(null,
                        a[p].matches); if (f[C]) { for (d = ++p; d < c && !M.relative[a[d].type]; d++); return D(1 < p && z(l), 1 < p && w(a.slice(0, p - 1).concat({ value: " " === a[p - 2].type ? "*" : "" })).replace(O, "$1"), f, p < d && r(a.slice(p, d)), d < c && r(a = a.slice(d)), d < c && w(a)) } l.push(f)
                } return z(l)
            } function K(a, d) {
                var e = 0 < d.length, f = 0 < a.length, p = function (c, p, A, g, l) {
                    var k, x, m = 0, w = "0", h = c && [], X = [], z = q, D = c || f && M.find.TAG("*", l), K = pa += null == z ? 1 : Math.random() || .1, r = D.length; for (l && (q = p === F || p || l); w !== r && null != (k = D[w]); w++) {
                        if (f && k) {
                            var u = 0; p || k.ownerDocument ===
                                F || (U(k), A = !v); for (; x = a[u++];)if (x(k, p || F, A)) { g.push(k); break } l && (pa = K)
                        } e && ((k = !x && k) && m-- , c && h.push(k))
                    } m += w; if (e && w !== m) { for (u = 0; x = d[u++];)x(h, X, p, A); if (c) { if (0 < m) for (; w--;)h[w] || X[w] || (X[w] = S.call(g)); X = n(X) } Ta.apply(g, X); l && !c && 0 < X.length && 1 < m + d.length && b.uniqueSort(g) } l && (pa = K, q = z); return h
                }; return e ? c(p) : p
            } var u, q, H, t, F, Z, v, ia, Ca, qa, y, C = "sizzle" + 1 * new Date, ca = a.document, pa = 0, ta = 0, Q = d(), tb = d(), Ha = d(), la = function (a, b) { a === b && (t = !0); return 0 }, B = {}.hasOwnProperty, Ja = [], S = Ja.pop, sb = Ja.push, Ta = Ja.push,
                E = Ja.slice, Va = function (a, b) { for (var d = 0, c = a.length; d < c; d++)if (a[d] === b) return d; return -1 }, G = RegExp("[\\x20\\t\\r\\n\\f]+", "g"), O = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"), R = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, aa = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/, bb = RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]", "g"), Ab = /:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
                J = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/, Sa = {
                    ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/, CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/, TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/, ATTR: /^\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\]/, PSEUDO: /^:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
                    CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i, bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i, needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
                }, Ga = /^(?:input|select|textarea|button)$/i, P = /^h\d$/i, I = /^[^{]+\{\s*\[native \w/,
                Bb = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Fa = /[+~]/, L = RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)", "ig"), Ua = function (a, b, d) { a = "0x" + b - 65536; return a !== a || d ? b : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, a & 1023 | 56320) }, nb = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, T = function (a, b) { return b ? "\x00" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a }, cb = function () { U() }, V = h(function (a) { return !0 === a.disabled }, {
                    dir: "parentNode",
                    next: "legend"
                }); try { Ta.apply(Ja = E.call(ca.childNodes), ca.childNodes), Ja[ca.childNodes.length].nodeType } catch (gc) { Ta = { apply: Ja.length ? function (a, b) { sb.apply(a, E.call(b)) } : function (a, b) { for (var d = a.length, c = 0; a[d++] = b[c++];); a.length = d - 1 } } } var ya = b.support = {}; var W = b.isXML = function (a) { return (a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName : !1 }; var U = b.setDocument = function (a) {
                    var b; a = a ? a.ownerDocument || a : ca; if (a === F || 9 !== a.nodeType || !a.documentElement) return F; F = a; Z = F.documentElement; v =
                        !W(F); ca !== F && (b = F.defaultView) && b.top !== b && (b.addEventListener ? b.addEventListener("unload", cb, !1) : b.attachEvent && b.attachEvent("onunload", cb)); ya.attributes = e(function (a) { a.className = "i"; return !a.getAttribute("className") }); ya.getElementsByTagName = e(function (a) { a.appendChild(F.createComment("")); return !a.getElementsByTagName("*").length }); ya.getElementsByClassName = I.test(F.getElementsByClassName); ya.getById = e(function (a) { Z.appendChild(a).id = C; return !F.getElementsByName || !F.getElementsByName(C).length });
                    ya.getById ? (M.find.ID = function (a, b) { if ("undefined" !== typeof b.getElementById && v) { var d = b.getElementById(a); return d ? [d] : [] } }, M.filter.ID = function (a) { var b = a.replace(L, Ua); return function (a) { return a.getAttribute("id") === b } }) : (delete M.find.ID, M.filter.ID = function (a) { var b = a.replace(L, Ua); return function (a) { return (a = "undefined" !== typeof a.getAttributeNode && a.getAttributeNode("id")) && a.value === b } }); M.find.TAG = ya.getElementsByTagName ? function (a, b) {
                        if ("undefined" !== typeof b.getElementsByTagName) return b.getElementsByTagName(a);
                        if (ya.qsa) return b.querySelectorAll(a)
                    } : function (a, b) { var d, c = [], e = 0, f = b.getElementsByTagName(a); if ("*" === a) { for (; d = f[e++];)1 === d.nodeType && c.push(d); return c } return f }; M.find.CLASS = ya.getElementsByClassName && function (a, b) { if ("undefined" !== typeof b.getElementsByClassName && v) return b.getElementsByClassName(a) }; Ca = []; ia = []; if (ya.qsa = I.test(F.querySelectorAll)) e(function (a) {
                        Z.appendChild(a).innerHTML = "<a id='" + C + "'></a><select id='" + C + "-\r\\' msallowcapture=''><option selected=''></option></select>";
                        a.querySelectorAll("[msallowcapture^='']").length && ia.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"); a.querySelectorAll("[selected]").length || ia.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)"); a.querySelectorAll("[id~=" + C + "-]").length || ia.push("~="); a.querySelectorAll(":checked").length || ia.push(":checked"); a.querySelectorAll("a#" + C + "+*").length || ia.push(".#.+[+~]")
                    }), e(function (a) {
                    a.innerHTML =
                        "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"; var b = F.createElement("input"); b.setAttribute("type", "hidden"); a.appendChild(b).setAttribute("name", "D"); a.querySelectorAll("[name=d]").length && ia.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="); 2 !== a.querySelectorAll(":enabled").length && ia.push(":enabled", ":disabled"); Z.appendChild(a).disabled = !0; 2 !== a.querySelectorAll(":disabled").length && ia.push(":enabled", ":disabled"); a.querySelectorAll("*,:x"); ia.push(",.*:")
                    }); (ya.matchesSelector =
                        I.test(qa = Z.matches || Z.webkitMatchesSelector || Z.mozMatchesSelector || Z.oMatchesSelector || Z.msMatchesSelector)) && e(function (a) { ya.disconnectedMatch = qa.call(a, "*"); qa.call(a, "[s!='']:x"); Ca.push("!=", ":((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)") });
                    ia = ia.length && new RegExp(ia.join("|")); Ca = Ca.length && new RegExp(Ca.join("|")); y = (b = I.test(Z.compareDocumentPosition)) || I.test(Z.contains) ? function (a, b) { var d = 9 === a.nodeType ? a.documentElement : a, c = b && b.parentNode; return a === c || !!(c && 1 === c.nodeType && (d.contains ? d.contains(c) : a.compareDocumentPosition && a.compareDocumentPosition(c) & 16)) } : function (a, b) { if (b) for (; b = b.parentNode;)if (b === a) return !0; return !1 }; la = b ? function (a, b) {
                        if (a === b) return t = !0, 0; var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                        if (d) return d; d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1; return d & 1 || !ya.sortDetached && b.compareDocumentPosition(a) === d ? a === F || a.ownerDocument === ca && y(ca, a) ? -1 : b === F || b.ownerDocument === ca && y(ca, b) ? 1 : H ? Va(H, a) - Va(H, b) : 0 : d & 4 ? -1 : 1
                    } : function (a, b) {
                        if (a === b) return t = !0, 0; var d = 0; var c = a.parentNode; var e = b.parentNode, f = [a], A = [b]; if (!c || !e) return a === F ? -1 : b === F ? 1 : c ? -1 : e ? 1 : H ? Va(H, a) - Va(H, b) : 0; if (c === e) return p(a, b); for (c = a; c = c.parentNode;)f.unshift(c); for (c = b; c = c.parentNode;)A.unshift(c);
                        for (; f[d] === A[d];)d++; return d ? p(f[d], A[d]) : f[d] === ca ? -1 : A[d] === ca ? 1 : 0
                    }; return F
                }; b.matches = function (a, d) { return b(a, null, null, d) }; b.matchesSelector = function (a, d) { (a.ownerDocument || a) !== F && U(a); d = d.replace(bb, "='$1']"); if (!(!ya.matchesSelector || !v || Ha[d + " "] || Ca && Ca.test(d) || ia && ia.test(d))) try { var c = qa.call(a, d); if (c || ya.disconnectedMatch || a.document && 11 !== a.document.nodeType) return c } catch (ic) { } return 0 < b(d, F, null, [a]).length }; b.contains = function (a, b) { (a.ownerDocument || a) !== F && U(a); return y(a, b) };
            b.attr = function (a, b) { (a.ownerDocument || a) !== F && U(a); var d = M.attrHandle[b.toLowerCase()]; d = d && B.call(M.attrHandle, b.toLowerCase()) ? d(a, b, !v) : void 0; return void 0 !== d ? d : ya.attributes || !v ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }; b.escape = function (a) { return (a + "").replace(nb, T) }; b.error = function (a) { throw Error("Syntax error, unrecognized expression: " + a); }; b.uniqueSort = function (a) {
                var b, d = [], c = 0, e = 0; t = !ya.detectDuplicates; H = !ya.sortStable && a.slice(0); a.sort(la); if (t) {
                    for (; b =
                        a[e++];)b === a[e] && (c = d.push(e)); for (; c--;)a.splice(d[c], 1)
                } H = null; return a
            }; var da = b.getText = function (a) { var b = "", d = 0; var c = a.nodeType; if (!c) for (; c = a[d++];)b += da(c); else if (1 === c || 9 === c || 11 === c) { if ("string" === typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling)b += da(a) } else if (3 === c || 4 === c) return a.nodeValue; return b }; var M = b.selectors = {
                cacheLength: 50, createPseudo: c, match: Sa, attrHandle: {}, find: {}, relative: {
                    ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": {
                        dir: "previousSibling",
                        first: !0
                    }, "~": { dir: "previousSibling" }
                }, preFilter: {
                    ATTR: function (a) { a[1] = a[1].replace(L, Ua); a[3] = (a[3] || a[4] || a[5] || "").replace(L, Ua); "~=" === a[2] && (a[3] = " " + a[3] + " "); return a.slice(0, 4) }, CHILD: function (a) { a[1] = a[1].toLowerCase(); "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]); return a }, PSEUDO: function (a) {
                        var b, d = !a[6] && a[2]; if (Sa.CHILD.test(a[0])) return null; a[3] ? a[2] = a[4] || a[5] || "" : d && Ab.test(d) &&
                            (b = Y(d, !0)) && (b = d.indexOf(")", d.length - b) - d.length) && (a[0] = a[0].slice(0, b), a[2] = d.slice(0, b)); return a.slice(0, 3)
                    }
                }, filter: {
                    TAG: function (a) { var b = a.replace(L, Ua).toLowerCase(); return "*" === a ? function () { return !0 } : function (a) { return a.nodeName && a.nodeName.toLowerCase() === b } }, CLASS: function (a) {
                        var b = Q[a + " "]; return b || (b = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)"), Q(a, function (a) {
                            return b.test("string" === typeof a.className && a.className || "undefined" !== typeof a.getAttribute && a.getAttribute("class") ||
                                "")
                        }))
                    }, ATTR: function (a, d, c) { return function (e) { e = b.attr(e, a); if (null == e) return "!=" === d; if (!d) return !0; e += ""; return "=" === d ? e === c : "!=" === d ? e !== c : "^=" === d ? c && 0 === e.indexOf(c) : "*=" === d ? c && -1 < e.indexOf(c) : "$=" === d ? c && e.slice(-c.length) === c : "~=" === d ? -1 < (" " + e.replace(G, " ") + " ").indexOf(c) : "|=" === d ? e === c || e.slice(0, c.length + 1) === c + "-" : !1 } }, CHILD: function (a, b, d, c, e) {
                        var f = "nth" !== a.slice(0, 3), p = "last" !== a.slice(-4), A = "of-type" === b; return 1 === c && 0 === e ? function (a) { return !!a.parentNode } : function (b, d, g) {
                            var l,
                            k; d = f !== p ? "nextSibling" : "previousSibling"; var x = b.parentNode, m = A && b.nodeName.toLowerCase(); g = !g && !A; var w = !1; if (x) {
                                if (f) { for (; d;) { for (l = b; l = l[d];)if (A ? l.nodeName.toLowerCase() === m : 1 === l.nodeType) return !1; var h = d = "only" === a && !h && "nextSibling" } return !0 } h = [p ? x.firstChild : x.lastChild]; if (p && g) { l = x; var X = l[C] || (l[C] = {}); X = X[l.uniqueID] || (X[l.uniqueID] = {}); w = X[a] || []; w = (k = w[0] === pa && w[1]) && w[2]; for (l = k && x.childNodes[k]; l = ++k && l && l[d] || (w = k = 0) || h.pop();)if (1 === l.nodeType && ++w && l === b) { X[a] = [pa, k, w]; break } } else if (g &&
                                    (l = b, X = l[C] || (l[C] = {}), X = X[l.uniqueID] || (X[l.uniqueID] = {}), w = X[a] || [], w = k = w[0] === pa && w[1]), !1 === w) for (; (l = ++k && l && l[d] || (w = k = 0) || h.pop()) && ((A ? l.nodeName.toLowerCase() !== m : 1 !== l.nodeType) || !++w || (g && (X = l[C] || (l[C] = {}), X = X[l.uniqueID] || (X[l.uniqueID] = {}), X[a] = [pa, w]), l !== b));); w -= e; return w === c || 0 === w % c && 0 <= w / c
                            }
                        }
                    }, PSEUDO: function (a, d) {
                        var e = M.pseudos[a] || M.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a); if (e[C]) return e(d); if (1 < e.length) {
                            var f = [a, a, "", d]; return M.setFilters.hasOwnProperty(a.toLowerCase()) ?
                                c(function (a, b) { for (var c, f = e(a, d), p = f.length; p--;)c = Va(a, f[p]), a[c] = !(b[c] = f[p]) }) : function (a) { return e(a, 0, f) }
                        } return e
                    }
                }, pseudos: {
                    not: c(function (a) { var b = [], d = [], e = ub(a.replace(O, "$1")); return e[C] ? c(function (a, b, d, c) { c = e(a, null, c, []); for (var f = a.length; f--;)if (d = c[f]) a[f] = !(b[f] = d) }) : function (a, c, f) { b[0] = a; e(b, null, f, d); b[0] = null; return !d.pop() } }), has: c(function (a) { return function (d) { return 0 < b(a, d).length } }), contains: c(function (a) {
                        a = a.replace(L, Ua); return function (b) {
                            return -1 < (b.textContent ||
                                b.innerText || da(b)).indexOf(a)
                        }
                    }), lang: c(function (a) { J.test(a || "") || b.error("unsupported lang: " + a); a = a.replace(L, Ua).toLowerCase(); return function (b) { var d; do if (d = v ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return d = d.toLowerCase(), d === a || 0 === d.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType); return !1 } }), target: function (b) { var d = a.location && a.location.hash; return d && d.slice(1) === b.id }, root: function (a) { return a === Z }, focus: function (a) {
                        return a === F.activeElement && (!F.hasFocus ||
                            F.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                    }, enabled: l(!1), disabled: l(!0), checked: function (a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected }, selected: function (a) { a.parentNode && a.parentNode.selectedIndex; return !0 === a.selected }, empty: function (a) { for (a = a.firstChild; a; a = a.nextSibling)if (6 > a.nodeType) return !1; return !0 }, parent: function (a) { return !M.pseudos.empty(a) }, header: function (a) { return P.test(a.nodeName) }, input: function (a) { return Ga.test(a.nodeName) },
                    button: function (a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b }, text: function (a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) }, first: k(function () { return [0] }), last: k(function (a, b) { return [b - 1] }), eq: k(function (a, b, d) { return [0 > d ? d + b : d] }), even: k(function (a, b) { for (var d = 0; d < b; d += 2)a.push(d); return a }), odd: k(function (a, b) { for (var d = 1; d < b; d += 2)a.push(d); return a }), lt: k(function (a, b, d) {
                        for (b =
                            0 > d ? d + b : d; 0 <= --b;)a.push(b); return a
                    }), gt: k(function (a, b, d) { for (d = 0 > d ? d + b : d; ++d < b;)a.push(d); return a })
                }
            }; M.pseudos.nth = M.pseudos.eq; for (u in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) M.pseudos[u] = A(u); for (u in { submit: !0, reset: !0 }) M.pseudos[u] = g(u); m.prototype = M.filters = M.pseudos; M.setFilters = new m; var Y = b.tokenize = function (a, d) {
                var c, e, f, p, A; if (p = tb[a + " "]) return d ? 0 : p.slice(0); p = a; var g = []; for (A = M.preFilter; p;) {
                    if (!l || (c = R.exec(p))) c && (p = p.slice(c[0].length) || p), g.push(e = []); var l = !1; if (c =
                        aa.exec(p)) l = c.shift(), e.push({ value: l, type: c[0].replace(O, " ") }), p = p.slice(l.length); for (f in M.filter) !(c = Sa[f].exec(p)) || A[f] && !(c = A[f](c)) || (l = c.shift(), e.push({ value: l, type: f, matches: c }), p = p.slice(l.length)); if (!l) break
                } return d ? p.length : p ? b.error(a) : tb(a, g).slice(0)
            }; var ub = b.compile = function (a, b) { var d, c = [], e = [], f = Ha[a + " "]; if (!f) { b || (b = Y(a)); for (d = b.length; d--;)f = r(b[d]), f[C] ? c.push(f) : e.push(f); f = Ha(a, K(e, c)); f.selector = a } return f }; var ea = b.select = function (a, b, d, c) {
                var e, f, p, A = "function" ===
                    typeof a && a, g = !c && Y(a = A.selector || a); d = d || []; if (1 === g.length) {
                        var l = g[0] = g[0].slice(0); if (2 < l.length && "ID" === (f = l[0]).type && ya.getById && 9 === b.nodeType && v && M.relative[l[1].type]) { b = (M.find.ID(f.matches[0].replace(L, Ua), b) || [])[0]; if (!b) return d; A && (b = b.parentNode); a = a.slice(l.shift().value.length) } for (e = Sa.needsContext.test(a) ? 0 : l.length; e--;) {
                            f = l[e]; if (M.relative[p = f.type]) break; if (p = M.find[p]) if (c = p(f.matches[0].replace(L, Ua), Fa.test(l[0].type) && x(b.parentNode) || b)) {
                                l.splice(e, 1); a = c.length && w(l);
                                if (!a) return Ta.apply(d, c), d; break
                            }
                        }
                    } (A || ub(a, g))(c, b, !v, d, !b || Fa.test(a) && x(b.parentNode) || b); return d
            }; ya.sortStable = C.split("").sort(la).join("") === C; ya.detectDuplicates = !!t; U(); ya.sortDetached = e(function (a) { return a.compareDocumentPosition(F.createElement("fieldset")) & 1 }); e(function (a) { a.innerHTML = "<a href='#'></a>"; return "#" === a.firstChild.getAttribute("href") }) || f("type|href|height|width", function (a, b, d) { if (!d) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }); ya.attributes && e(function (a) {
            a.innerHTML =
                "<input/>"; a.firstChild.setAttribute("value", ""); return "" === a.firstChild.getAttribute("value")
            }) || f("value", function (a, b, d) { if (!d && "input" === a.nodeName.toLowerCase()) return a.defaultValue }); e(function (a) { return null == a.getAttribute("disabled") }) || f("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function (a, b, d) { var c; if (!d) return !0 === a[b] ? b.toLowerCase() : (c = a.getAttributeNode(b)) && c.specified ? c.value : null }); return b
        }(h);
    l.find = La; l.expr = La.selectors; l.expr[":"] = l.expr.pseudos; l.uniqueSort = l.unique = La.uniqueSort; l.text = La.getText; l.isXMLDoc = La.isXML; l.contains = La.contains; l.escapeSelector = La.escape; var Aa = function (a, b, d) { for (var c = [], e = void 0 !== d; (a = a[b]) && 9 !== a.nodeType;)if (1 === a.nodeType) { if (e && l(a).is(d)) break; c.push(a) } return c }, Ma = function (a, b) { for (var d = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && d.push(a); return d }, Xa = l.expr.match.needsContext, Qa = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        wa = /^.[^:#\[\.,]*$/; l.filter = function (a, b, d) { var c = b[0]; d && (a = ":not(" + a + ")"); return 1 === b.length && 1 === c.nodeType ? l.find.matchesSelector(c, a) ? [c] : [] : l.find.matches(a, l.grep(b, function (a) { return 1 === a.nodeType })) }; l.fn.extend({
            find: function (a) { var b, d = this.length, c = this; if ("string" !== typeof a) return this.pushStack(l(a).filter(function () { for (b = 0; b < d; b++)if (l.contains(c[b], this)) return !0 })); var e = this.pushStack([]); for (b = 0; b < d; b++)l.find(a, c[b], e); return 1 < d ? l.uniqueSort(e) : e }, filter: function (b) {
                return this.pushStack(a(this,
                    b || [], !1))
            }, not: function (b) { return this.pushStack(a(this, b || [], !0)) }, is: function (b) { return !!a(this, "string" === typeof b && Xa.test(b) ? l(b) : b || [], !1).length }
        }); var Ya = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/; (l.fn.init = function (a, b, d) {
            if (!a) return this; d = d || Na; if ("string" === typeof a) {
                var c = "<" === a[0] && ">" === a[a.length - 1] && 3 <= a.length ? [null, a, null] : Ya.exec(a); if (!c || !c[1] && b) return !b || b.jquery ? (b || d).find(a) : this.constructor(b).find(a); if (c[1]) {
                    if (b = b instanceof l ? b[0] : b, l.merge(this, l.parseHTML(c[1], b &&
                        b.nodeType ? b.ownerDocument || b : Y, !0)), Qa.test(c[1]) && l.isPlainObject(b)) for (c in b) if (l.isFunction(this[c])) this[c](b[c]); else this.attr(c, b[c])
                } else if (a = Y.getElementById(c[2])) this[0] = a, this.length = 1; return this
            } return a.nodeType ? (this[0] = a, this.length = 1, this) : l.isFunction(a) ? void 0 !== d.ready ? d.ready(a) : a(l) : l.makeArray(a, this)
        }).prototype = l.fn; var Na = l(Y); var Ba = /^(?:parents|prev(?:Until|All))/, eb = { children: !0, contents: !0, next: !0, prev: !0 }; l.fn.extend({
            has: function (a) {
                var b = l(a, this), d = b.length;
                return this.filter(function () { for (var a = 0; a < d; a++)if (l.contains(this, b[a])) return !0 })
            }, closest: function (a, b) { var d, c = 0, e = this.length, f = [], p = "string" !== typeof a && l(a); if (!Xa.test(a)) for (; c < e; c++)for (d = this[c]; d && d !== b; d = d.parentNode)if (11 > d.nodeType && (p ? -1 < p.index(d) : 1 === d.nodeType && l.find.matchesSelector(d, a))) { f.push(d); break } return this.pushStack(1 < f.length ? l.uniqueSort(f) : f) }, index: function (a) {
                return a ? "string" === typeof a ? D.call(l(a), this[0]) : D.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ?
                    this.first().prevAll().length : -1
            }, add: function (a, b) { return this.pushStack(l.uniqueSort(l.merge(this.get(), l(a, b)))) }, addBack: function (a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) }
        }); l.each({
            parent: function (a) { return (a = a.parentNode) && 11 !== a.nodeType ? a : null }, parents: function (a) { return Aa(a, "parentNode") }, parentsUntil: function (a, b, d) { return Aa(a, "parentNode", d) }, next: function (a) { return t(a, "nextSibling") }, prev: function (a) { return t(a, "previousSibling") }, nextAll: function (a) {
                return Aa(a,
                    "nextSibling")
            }, prevAll: function (a) { return Aa(a, "previousSibling") }, nextUntil: function (a, b, d) { return Aa(a, "nextSibling", d) }, prevUntil: function (a, b, d) { return Aa(a, "previousSibling", d) }, siblings: function (a) { return Ma((a.parentNode || {}).firstChild, a) }, children: function (a) { return Ma(a.firstChild) }, contents: function (a) { return a.contentDocument || l.merge([], a.childNodes) }
        }, function (a, b) {
        l.fn[a] = function (d, c) {
            var e = l.map(this, b, d); "Until" !== a.slice(-5) && (c = d); c && "string" === typeof c && (e = l.filter(c, e)); 1 < this.length &&
                (eb[a] || l.uniqueSort(e), Ba.test(a) && e.reverse()); return this.pushStack(e)
        }
        }); var fa = /\S+/g; l.Callbacks = function (a) {
            a = "string" === typeof a ? b(a) : l.extend({}, a); var d, c, e, f, p = [], g = [], A = -1, k = function () { f = a.once; for (e = d = !0; g.length; A = -1)for (c = g.shift(); ++A < p.length;)!1 === p[A].apply(c[0], c[1]) && a.stopOnFalse && (A = p.length, c = !1); a.memory || (c = !1); d = !1; f && (p = c ? [] : "") }, x = {
                add: function () {
                    p && (c && !d && (A = p.length - 1, g.push(c)), function Ob(b) {
                        l.each(b, function (b, d) {
                            l.isFunction(d) ? a.unique && x.has(d) || p.push(d) : d &&
                                d.length && "string" !== l.type(d) && Ob(d)
                        })
                    }(arguments), c && !d && k()); return this
                }, remove: function () { l.each(arguments, function (a, b) { for (var d; -1 < (d = l.inArray(b, p, d));)p.splice(d, 1), d <= A && A-- }); return this }, has: function (a) { return a ? -1 < l.inArray(a, p) : 0 < p.length }, empty: function () { p && (p = []); return this }, disable: function () { f = g = []; p = c = ""; return this }, disabled: function () { return !p }, lock: function () { f = g = []; c || d || (p = c = ""); return this }, locked: function () { return !!f }, fireWith: function (a, b) {
                    f || (b = b || [], b = [a, b.slice ? b.slice() :
                        b], g.push(b), d || k()); return this
                }, fire: function () { x.fireWith(this, arguments); return this }, fired: function () { return !!e }
            }; return x
        }; l.extend({
            Deferred: function (a) {
                var b = [["notify", "progress", l.Callbacks("memory"), l.Callbacks("memory"), 2], ["resolve", "done", l.Callbacks("once memory"), l.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", l.Callbacks("once memory"), l.Callbacks("once memory"), 1, "rejected"]], d = "pending", c = {
                    state: function () { return d }, always: function () {
                        e.done(arguments).fail(arguments);
                        return this
                    }, "catch": function (a) { return c.then(null, a) }, pipe: function () { var a = arguments; return l.Deferred(function (d) { l.each(b, function (b, c) { var f = l.isFunction(a[c[4]]) && a[c[4]]; e[c[1]](function () { var a = f && f.apply(this, arguments); if (a && l.isFunction(a.promise)) a.promise().progress(d.notify).done(d.resolve).fail(d.reject); else d[c[0] + "With"](this, f ? [a] : arguments) }) }); a = null }).promise() }, then: function (a, d, c) {
                        function e(a, b, d, c) {
                            return function () {
                                var p = this, g = arguments, A = function () {
                                    if (!(a < f)) {
                                        var A = d.apply(p,
                                            g); if (A === b.promise()) throw new TypeError("Thenable self-resolution"); var k = A && ("object" === typeof A || "function" === typeof A) && A.then; l.isFunction(k) ? c ? k.call(A, e(f, b, y, c), e(f, b, q, c)) : (f++ , k.call(A, e(f, b, y, c), e(f, b, q, c), e(f, b, y, b.notifyWith))) : (d !== y && (p = void 0, g = [A]), (c || b.resolveWith)(p, g))
                                    }
                                }, k = c ? A : function () { try { A() } catch (Fb) { l.Deferred.exceptionHook && l.Deferred.exceptionHook(Fb, k.stackTrace), a + 1 >= f && (d !== q && (p = void 0, g = [Fb]), b.rejectWith(p, g)) } }; a ? k() : (l.Deferred.getStackHook && (k.stackTrace = l.Deferred.getStackHook()),
                                    h.setTimeout(k))
                            }
                        } var f = 0; return l.Deferred(function (f) { b[0][3].add(e(0, f, l.isFunction(c) ? c : y, f.notifyWith)); b[1][3].add(e(0, f, l.isFunction(a) ? a : y)); b[2][3].add(e(0, f, l.isFunction(d) ? d : q)) }).promise()
                    }, promise: function (a) { return null != a ? l.extend(a, c) : c }
                }, e = {}; l.each(b, function (a, f) { var p = f[2], g = f[5]; c[f[1]] = p.add; g && p.add(function () { d = g }, b[3 - a][2].disable, b[0][2].lock); p.add(f[3].fire); e[f[0]] = function () { e[f[0] + "With"](this === e ? void 0 : this, arguments); return this }; e[f[0] + "With"] = p.fireWith }); c.promise(e);
                a && a.call(e, e); return e
            }, when: function (a) { var b = arguments.length, d = b, c = Array(d), f = ha.call(arguments), p = l.Deferred(), g = function (a) { return function (d) { c[a] = this; f[a] = 1 < arguments.length ? ha.call(arguments) : d; --b || p.resolveWith(c, f) } }; if (1 >= b && (e(a, p.done(g(d)).resolve, p.reject), "pending" === p.state() || l.isFunction(f[d] && f[d].then))) return p.then(); for (; d--;)e(f[d], g(d), p.reject); return p.promise() }
        }); var Ra = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/; l.Deferred.exceptionHook = function (a, b) {
        h.console &&
            h.console.warn && a && Ra.test(a.name) && h.console.warn("jQuery.Deferred exception: " + a.message, a.stack, b)
        }; l.readyException = function (a) { h.setTimeout(function () { throw a; }) }; var Ea = l.Deferred(); l.fn.ready = function (a) { Ea.then(a)["catch"](function (a) { l.readyException(a) }); return this }; l.extend({ isReady: !1, readyWait: 1, holdReady: function (a) { a ? l.readyWait++ : l.ready(!0) }, ready: function (a) { (!0 === a ? --l.readyWait : l.isReady) || (l.isReady = !0, !0 !== a && 0 < --l.readyWait || Ea.resolveWith(Y, [l])) } }); l.ready.then = Ea.then; "complete" ===
            Y.readyState || "loading" !== Y.readyState && !Y.documentElement.doScroll ? h.setTimeout(l.ready) : (Y.addEventListener("DOMContentLoaded", r), h.addEventListener("load", r)); var Ia = function (a, b, d, c, e, f, p) { var g = 0, A = a.length, k = null == d; if ("object" === l.type(d)) for (g in e = !0, d) Ia(a, b, g, d[g], !0, f, p); else if (void 0 !== c && (e = !0, l.isFunction(c) || (p = !0), k && (p ? (b.call(a, c), b = null) : (k = b, b = function (a, b, d) { return k.call(l(a), d) })), b)) for (; g < A; g++)b(a[g], d, p ? c : c.call(a[g], g, b(a[g], d))); return e ? a : k ? b.call(a) : A ? b(a[0], d) : f },
                sa = function (a) { return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType }; k.uid = 1; k.prototype = {
                    cache: function (a) { var b = a[this.expando]; b || (b = {}, sa(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))); return b }, set: function (a, b, d) { var c; a = this.cache(a); if ("string" === typeof b) a[l.camelCase(b)] = d; else for (c in b) a[l.camelCase(c)] = b[c]; return a }, get: function (a, b) { return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][l.camelCase(b)] }, access: function (a,
                        b, d) { if (void 0 === b || b && "string" === typeof b && void 0 === d) return this.get(a, b); this.set(a, b, d); return void 0 !== d ? d : b }, remove: function (a, b) { var d, c = a[this.expando]; if (void 0 !== c) { if (void 0 !== b) for (l.isArray(b) ? b = b.map(l.camelCase) : (b = l.camelCase(b), b = b in c ? [b] : b.match(fa) || []), d = b.length; d--;)delete c[b[d]]; if (void 0 === b || l.isEmptyObject(c)) a.nodeType ? a[this.expando] = void 0 : delete a[this.expando] } }, hasData: function (a) { a = a[this.expando]; return void 0 !== a && !l.isEmptyObject(a) }
                }; var M = new k, Da = new k, Oa =
                    /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, fb = /[A-Z]/g; l.extend({ hasData: function (a) { return Da.hasData(a) || M.hasData(a) }, data: function (a, b, d) { return Da.access(a, b, d) }, removeData: function (a, b) { Da.remove(a, b) }, _data: function (a, b, d) { return M.access(a, b, d) }, _removeData: function (a, b) { M.remove(a, b) } }); l.fn.extend({
                        data: function (a, b) {
                            var d, c = this[0], e = c && c.attributes; if (void 0 === a) {
                                if (this.length) {
                                    var f = Da.get(c); if (1 === c.nodeType && !M.get(c, "hasDataAttrs")) {
                                        for (d = e.length; d--;)if (e[d]) {
                                            var p = e[d].name; 0 === p.indexOf("data-") &&
                                                (p = l.camelCase(p.slice(5)), m(c, p, f[p]))
                                        } M.set(c, "hasDataAttrs", !0)
                                    }
                                } return f
                            } return "object" === typeof a ? this.each(function () { Da.set(this, a) }) : Ia(this, function (b) { if (c && void 0 === b) { var d = Da.get(c, a); if (void 0 !== d) return d; d = m(c, a); if (void 0 !== d) return d } else this.each(function () { Da.set(this, a, b) }) }, null, b, 1 < arguments.length, null, !0)
                        }, removeData: function (a) { return this.each(function () { Da.remove(this, a) }) }
                    }); l.extend({
                        queue: function (a, b, d) {
                            if (a) {
                                b = (b || "fx") + "queue"; var c = M.get(a, b); d && (!c || l.isArray(d) ?
                                    c = M.access(a, b, l.makeArray(d)) : c.push(d)); return c || []
                            }
                        }, dequeue: function (a, b) { b = b || "fx"; var d = l.queue(a, b), c = d.length, e = d.shift(), f = l._queueHooks(a, b), p = function () { l.dequeue(a, b) }; "inprogress" === e && (e = d.shift(), c--); e && ("fx" === b && d.unshift("inprogress"), delete f.stop, e.call(a, p, f)); !c && f && f.empty.fire() }, _queueHooks: function (a, b) { var d = b + "queueHooks"; return M.get(a, d) || M.access(a, d, { empty: l.Callbacks("once memory").add(function () { M.remove(a, [b + "queue", d]) }) }) }
                    }); l.fn.extend({
                        queue: function (a, b) {
                            var d =
                                2; "string" !== typeof a && (b = a, a = "fx", d--); return arguments.length < d ? l.queue(this[0], a) : void 0 === b ? this : this.each(function () { var d = l.queue(this, a, b); l._queueHooks(this, a); "fx" === a && "inprogress" !== d[0] && l.dequeue(this, a) })
                        }, dequeue: function (a) { return this.each(function () { l.dequeue(this, a) }) }, clearQueue: function (a) { return this.queue(a || "fx", []) }, promise: function (a, b) {
                            var d, c = 1, e = l.Deferred(), f = this, p = this.length, g = function () { --c || e.resolveWith(f, [f]) }; "string" !== typeof a && (b = a, a = void 0); for (a = a || "fx"; p--;)(d =
                                M.get(f[p], a + "queueHooks")) && d.empty && (c++ , d.empty.add(g)); g(); return e.promise(b)
                        }
                    }); var qb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Za = new RegExp("^(?:([+-])=|)(" + qb + ")([a-z%]*)$", "i"), Pa = ["Top", "Right", "Bottom", "Left"], gb = function (a, b) { a = b || a; return "none" === a.style.display || "" === a.style.display && l.contains(a.ownerDocument, a) && "none" === l.css(a, "display") }, hb = function (a, b, d, c) { var e, f = {}; for (e in b) f[e] = a.style[e], a.style[e] = b[e]; d = d.apply(a, c || []); for (e in b) a.style[e] = f[e]; return d }, ib = {};
    l.fn.extend({ show: function () { return f(this, !0) }, hide: function () { return f(this) }, toggle: function (a) { return "boolean" === typeof a ? a ? this.show() : this.hide() : this.each(function () { gb(this) ? l(this).show() : l(this).hide() }) } }); var jb = /^(?:checkbox|radio)$/i, kb = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, $a = /^$|\/(?:java|ecma)script/i, Ka = {
        option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3,
            "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""]
    }; Ka.optgroup = Ka.option; Ka.tbody = Ka.tfoot = Ka.colgroup = Ka.caption = Ka.thead; Ka.th = Ka.td; var vb = /<|&#?\w+;/; (function () {
        var a = Y.createDocumentFragment().appendChild(Y.createElement("div")), b = Y.createElement("input"); b.setAttribute("type", "radio"); b.setAttribute("checked", "checked"); b.setAttribute("name", "t"); a.appendChild(b); la.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked; a.innerHTML = "<textarea>x</textarea>"; la.noCloneChecked =
            !!a.cloneNode(!0).lastChild.defaultValue
    })(); var lb = Y.documentElement, db = /^key/, wb = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, rb = /^([^.]*)(?:\.(.+)|)/; l.event = {
        global: {}, add: function (a, b, d, c, e) {
            var f, p, g, k, A; if (g = M.get(a)) {
                if (d.handler) { var x = d; d = x.handler; e = x.selector } e && l.find.matchesSelector(lb, e); d.guid || (d.guid = l.guid++); (p = g.events) || (p = g.events = {}); (f = g.handle) || (f = g.handle = function (b) { return "undefined" !== typeof l && l.event.triggered !== b.type ? l.event.dispatch.apply(a, arguments) : void 0 });
                b = (b || "").match(fa) || [""]; for (g = b.length; g--;) {
                    var w = rb.exec(b[g]) || []; var m = k = w[1]; var h = (w[2] || "").split(".").sort(); m && (w = l.event.special[m] || {}, m = (e ? w.delegateType : w.bindType) || m, w = l.event.special[m] || {}, k = l.extend({ type: m, origType: k, data: c, handler: d, guid: d.guid, selector: e, needsContext: e && l.expr.match.needsContext.test(e), namespace: h.join(".") }, x), (A = p[m]) || (A = p[m] = [], A.delegateCount = 0, w.setup && !1 !== w.setup.call(a, c, h, f) || a.addEventListener && a.addEventListener(m, f)), w.add && (w.add.call(a, k), k.handler.guid ||
                        (k.handler.guid = d.guid)), e ? A.splice(A.delegateCount++, 0, k) : A.push(k), l.event.global[m] = !0)
                }
            }
        }, remove: function (a, b, d, c, e) {
            var f, p, g, k, A, x = M.hasData(a) && M.get(a); if (x && (g = x.events)) {
                b = (b || "").match(fa) || [""]; for (k = b.length; k--;) {
                    var w = rb.exec(b[k]) || []; var m = A = w[1]; var h = (w[2] || "").split(".").sort(); if (m) {
                        var z = l.event.special[m] || {}; m = (c ? z.delegateType : z.bindType) || m; var n = g[m] || []; w = w[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"); for (p = f = n.length; f--;) {
                            var D = n[f]; !e && A !== D.origType ||
                                d && d.guid !== D.guid || w && !w.test(D.namespace) || c && c !== D.selector && ("**" !== c || !D.selector) || (n.splice(f, 1), D.selector && n.delegateCount-- , z.remove && z.remove.call(a, D))
                        } p && !n.length && (z.teardown && !1 !== z.teardown.call(a, h, x.handle) || l.removeEvent(a, m, x.handle), delete g[m])
                    } else for (m in g) l.event.remove(a, m + b[k], d, c, !0)
                } l.isEmptyObject(g) && M.remove(a, "handle events")
            }
        }, dispatch: function (a) {
            var b = l.event.fix(a), d, c, e, f = Array(arguments.length); var p = (M.get(this, "events") || {})[b.type] || []; var g = l.event.special[b.type] ||
                {}; f[0] = b; for (d = 1; d < arguments.length; d++)f[d] = arguments[d]; b.delegateTarget = this; if (!g.preDispatch || !1 !== g.preDispatch.call(this, b)) {
                    var k = l.event.handlers.call(this, b, p); for (d = 0; (e = k[d++]) && !b.isPropagationStopped();)for (b.currentTarget = e.elem, p = 0; (c = e.handlers[p++]) && !b.isImmediatePropagationStopped();)if (!b.rnamespace || b.rnamespace.test(c.namespace)) b.handleObj = c, b.data = c.data, c = ((l.event.special[c.origType] || {}).handle || c.handler).apply(e.elem, f), void 0 !== c && !1 === (b.result = c) && (b.preventDefault(),
                        b.stopPropagation()); g.postDispatch && g.postDispatch.call(this, b); return b.result
                }
        }, handlers: function (a, b) {
            var d, c = [], e = b.delegateCount, f = a.target; if (e && f.nodeType && ("click" !== a.type || isNaN(a.button) || 1 > a.button)) for (; f !== this; f = f.parentNode || this)if (1 === f.nodeType && (!0 !== f.disabled || "click" !== a.type)) { var p = []; for (d = 0; d < e; d++) { var g = b[d]; var k = g.selector + " "; void 0 === p[k] && (p[k] = g.needsContext ? -1 < l(k, this).index(f) : l.find(k, this, null, [f]).length); p[k] && p.push(g) } p.length && c.push({ elem: f, handlers: p }) } e <
                b.length && c.push({ elem: this, handlers: b.slice(e) }); return c
        }, addProp: function (a, b) { Object.defineProperty(l.Event.prototype, a, { enumerable: !0, configurable: !0, get: l.isFunction(b) ? function () { if (this.originalEvent) return b(this.originalEvent) } : function () { if (this.originalEvent) return this.originalEvent[a] }, set: function (b) { Object.defineProperty(this, a, { enumerable: !0, configurable: !0, writable: !0, value: b }) } }) }, fix: function (a) { return a[l.expando] ? a : new l.Event(a) }, special: {
            load: { noBubble: !0 }, focus: {
                trigger: function () {
                    if (this !==
                        Q() && this.focus) return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: { trigger: function () { if (this === Q() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function () { if ("checkbox" === this.type && this.click && l.nodeName(this, "input")) return this.click(), !1 }, _default: function (a) { return l.nodeName(a.target, "a") } }, beforeunload: { postDispatch: function (a) { void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result) } }
        }
    }; l.removeEvent = function (a, b, d) {
    a.removeEventListener &&
        a.removeEventListener(b, d)
    }; l.Event = function (a, b) { if (!(this instanceof l.Event)) return new l.Event(a, b); a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? g : C, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a; b && l.extend(this, b); this.timeStamp = a && a.timeStamp || l.now(); this[l.expando] = !0 }; l.Event.prototype =
        {
            constructor: l.Event, isDefaultPrevented: C, isPropagationStopped: C, isImmediatePropagationStopped: C, isSimulated: !1, preventDefault: function () { var a = this.originalEvent; this.isDefaultPrevented = g; a && !this.isSimulated && a.preventDefault() }, stopPropagation: function () { var a = this.originalEvent; this.isPropagationStopped = g; a && !this.isSimulated && a.stopPropagation() }, stopImmediatePropagation: function () {
                var a = this.originalEvent; this.isImmediatePropagationStopped = g; a && !this.isSimulated && a.stopImmediatePropagation();
                this.stopPropagation()
            }
        }; l.each({
            altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function (a) {
                var b = a.button; return null == a.which && db.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && wb.test(a.type) ?
                    b & 1 ? 1 : b & 2 ? 3 : b & 4 ? 2 : 0 : a.which
            }
        }, l.event.addProp); l.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) { l.event.special[a] = { delegateType: b, bindType: b, handle: function (a) { var d = a.relatedTarget, c = a.handleObj; if (!d || d !== this && !l.contains(this, d)) { a.type = c.origType; var e = c.handler.apply(this, arguments); a.type = b } return e } } }); l.fn.extend({
            on: function (a, b, d, c) { return S(this, a, b, d, c) }, one: function (a, b, d, c) { return S(this, a, b, d, c, 1) }, off: function (a,
                b, d) { if (a && a.preventDefault && a.handleObj) { var c = a.handleObj; l(a.delegateTarget).off(c.namespace ? c.origType + "." + c.namespace : c.origType, c.selector, c.handler); return this } if ("object" === typeof a) { for (c in a) this.off(c, b, a[c]); return this } if (!1 === b || "function" === typeof b) d = b, b = void 0; !1 === d && (d = C); return this.each(function () { l.event.remove(this, a, d, b) }) }
        }); var xb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, mb = /<script|<style|<link/i, K = /checked\s*(?:[^=]|=\s*.checked.)/i,
            F = /^true\/(.*)/, qa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; l.extend({
                htmlPrefilter: function (a) { return a.replace(xb, "<$1></$2>") }, clone: function (a, b, c) {
                    var e, f = a.cloneNode(!0), p = l.contains(a.ownerDocument, a); if (!(la.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || l.isXMLDoc(a))) { var g = d(f); var k = d(a); var x = 0; for (e = k.length; x < e; x++) { var A = k[x], m = g[x], h = m.nodeName.toLowerCase(); if ("input" === h && jb.test(A.type)) m.checked = A.checked; else if ("input" === h || "textarea" === h) m.defaultValue = A.defaultValue } } if (b) if (c) for (k =
                        k || d(a), g = g || d(f), x = 0, e = k.length; x < e; x++)G(k[x], g[x]); else G(a, f); g = d(f, "script"); 0 < g.length && w(g, !p && d(a, "script")); return f
                }, cleanData: function (a) { for (var b, d, c, e = l.event.special, f = 0; void 0 !== (d = a[f]); f++)if (sa(d)) { if (b = d[M.expando]) { if (b.events) for (c in b.events) e[c] ? l.event.remove(d, c) : l.removeEvent(d, c, b.handle); d[M.expando] = void 0 } d[Da.expando] && (d[Da.expando] = void 0) } }
            }); l.fn.extend({
                detach: function (a) { return P(this, a, !0) }, remove: function (a) { return P(this, a) }, text: function (a) {
                    return Ia(this,
                        function (a) { return void 0 === a ? l.text(this) : this.empty().each(function () { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) this.textContent = a }) }, null, a, arguments.length)
                }, append: function () { return E(this, arguments, function (a) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || R(this, a).appendChild(a) }) }, prepend: function () { return E(this, arguments, function (a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = R(this, a); b.insertBefore(a, b.firstChild) } }) }, before: function () {
                    return E(this,
                        arguments, function (a) { this.parentNode && this.parentNode.insertBefore(a, this) })
                }, after: function () { return E(this, arguments, function (a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) }, empty: function () { for (var a, b = 0; null != (a = this[b]); b++)1 === a.nodeType && (l.cleanData(d(a, !1)), a.textContent = ""); return this }, clone: function (a, b) { a = null == a ? !1 : a; b = null == b ? a : b; return this.map(function () { return l.clone(this, a, b) }) }, html: function (a) {
                    return Ia(this, function (a) {
                        var b = this[0] || {}, c = 0, e = this.length;
                        if (void 0 === a && 1 === b.nodeType) return b.innerHTML; if ("string" === typeof a && !mb.test(a) && !Ka[(kb.exec(a) || ["", ""])[1].toLowerCase()]) { a = l.htmlPrefilter(a); try { for (; c < e; c++)b = this[c] || {}, 1 === b.nodeType && (l.cleanData(d(b, !1)), b.innerHTML = a); b = 0 } catch (fc) { } } b && this.empty().append(a)
                    }, null, a, arguments.length)
                }, replaceWith: function () { var a = []; return E(this, arguments, function (b) { var c = this.parentNode; 0 > l.inArray(this, a) && (l.cleanData(d(this)), c && c.replaceChild(b, this)) }, a) }
            }); l.each({
                appendTo: "append", prependTo: "prepend",
                insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"
            }, function (a, b) { l.fn[a] = function (a) { for (var d = [], c = l(a), e = c.length - 1, f = 0; f <= e; f++)a = f === e ? this : this.clone(!0), l(c[f])[b](a), x.apply(d, a.get()); return this.pushStack(d) } }); var Z = /^margin/, ia = new RegExp("^(" + qb + ")(?!px)[a-z%]+$", "i"), Ha = function (a) { var b = a.ownerDocument.defaultView; b && b.opener || (b = h); return b.getComputedStyle(a) }; (function () {
                function a() {
                    if (p) {
                        p.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
                        p.innerHTML = ""; lb.appendChild(f); var a = h.getComputedStyle(p); b = "1%" !== a.top; e = "2px" === a.marginLeft; d = "4px" === a.width; p.style.marginRight = "50%"; c = "4px" === a.marginRight; lb.removeChild(f); p = null
                    }
                } var b, d, c, e, f = Y.createElement("div"), p = Y.createElement("div"); p.style && (p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", la.clearCloneStyle = "content-box" === p.style.backgroundClip, f.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
                    f.appendChild(p), l.extend(la, { pixelPosition: function () { a(); return b }, boxSizingReliable: function () { a(); return d }, pixelMarginRight: function () { a(); return c }, reliableMarginLeft: function () { a(); return e } }))
            })(); var Ca = /^(none|table(?!-c[ea]).+)/, tb = { position: "absolute", visibility: "hidden", display: "block" }, Ta = { letterSpacing: "0", fontWeight: "400" }, Va = ["Webkit", "Moz", "ms"], sb = Y.createElement("div").style; l.extend({
                cssHooks: { opacity: { get: function (a, b) { if (b) { var d = B(a, "opacity"); return "" === d ? "1" : d } } } }, cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0
                }, cssProps: { "float": "cssFloat" }, style: function (a, b, d, c) {
                    if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                        var e, f = l.camelCase(b), p = a.style; b = l.cssProps[f] || (l.cssProps[f] = I(f) || f); var g = l.cssHooks[b] || l.cssHooks[f]; if (void 0 !== d) {
                            var k = typeof d; "string" === k && (e = Za.exec(d)) && e[1] && (d = u(a, b, e), k = "number"); null != d && d === d && ("number" === k && (d += e && e[3] || (l.cssNumber[f] ?
                                "" : "px")), la.clearCloneStyle || "" !== d || 0 !== b.indexOf("background") || (p[b] = "inherit"), g && "set" in g && void 0 === (d = g.set(a, d, c)) || (p[b] = d))
                        } else return g && "get" in g && void 0 !== (e = g.get(a, !1, c)) ? e : p[b]
                    }
                }, css: function (a, b, d, c) { var e; var f = l.camelCase(b); b = l.cssProps[f] || (l.cssProps[f] = I(f) || f); (f = l.cssHooks[b] || l.cssHooks[f]) && "get" in f && (e = f.get(a, !0, d)); void 0 === e && (e = B(a, b, c)); "normal" === e && b in Ta && (e = Ta[b]); return "" === d || d ? (a = parseFloat(e), !0 === d || isFinite(a) ? a || 0 : e) : e }
            }); l.each(["height", "width"], function (a,
                b) { l.cssHooks[b] = { get: function (a, d, c) { if (d) return !Ca.test(l.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? ja(a, b, c) : hb(a, tb, function () { return ja(a, b, c) }) }, set: function (a, d, c) { var e, f = c && Ha(a); (c = c && ba(a, b, c, "border-box" === l.css(a, "boxSizing", !1, f), f)) && (e = Za.exec(d)) && "px" !== (e[3] || "px") && (a.style[b] = d, d = l.css(a, b)); return T(a, d, c) } } }); l.cssHooks.marginLeft = L(la.reliableMarginLeft, function (a, b) {
                    if (b) return (parseFloat(B(a, "marginLeft")) || a.getBoundingClientRect().left -
                        hb(a, { marginLeft: 0 }, function () { return a.getBoundingClientRect().left })) + "px"
                }); l.each({ margin: "", padding: "", border: "Width" }, function (a, b) { l.cssHooks[a + b] = { expand: function (d) { var c = 0, e = {}; for (d = "string" === typeof d ? d.split(" ") : [d]; 4 > c; c++)e[a + Pa[c] + b] = d[c] || d[c - 2] || d[0]; return e } }; Z.test(a) || (l.cssHooks[a + b].set = T) }); l.fn.extend({
                    css: function (a, b) {
                        return Ia(this, function (a, b, d) {
                            var c, e = {}, f = 0; if (l.isArray(b)) { d = Ha(a); for (c = b.length; f < c; f++)e[b[f]] = l.css(a, b[f], !1, d); return e } return void 0 !== d ? l.style(a,
                                b, d) : l.css(a, b)
                        }, a, b, 1 < arguments.length)
                    }
                }); l.Tween = U; U.prototype = {
                    constructor: U, init: function (a, b, d, c, e, f) { this.elem = a; this.prop = d; this.easing = e || l.easing._default; this.options = b; this.start = this.now = this.cur(); this.end = c; this.unit = f || (l.cssNumber[d] ? "" : "px") }, cur: function () { var a = U.propHooks[this.prop]; return a && a.get ? a.get(this) : U.propHooks._default.get(this) }, run: function (a) {
                        var b, d = U.propHooks[this.prop]; this.pos = this.options.duration ? b = l.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) :
                            b = a; this.now = (this.end - this.start) * b + this.start; this.options.step && this.options.step.call(this.elem, this.now, this); d && d.set ? d.set(this) : U.propHooks._default.set(this); return this
                    }
                }; U.prototype.init.prototype = U.prototype; U.propHooks = {
                    _default: {
                        get: function (a) { return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (a = l.css(a.elem, a.prop, "")) && "auto" !== a ? a : 0 }, set: function (a) {
                            if (l.fx.step[a.prop]) l.fx.step[a.prop](a); else 1 !== a.elem.nodeType || null == a.elem.style[l.cssProps[a.prop]] &&
                                !l.cssHooks[a.prop] ? a.elem[a.prop] = a.now : l.style(a.elem, a.prop, a.now + a.unit)
                        }
                    }
                }; U.propHooks.scrollTop = U.propHooks.scrollLeft = { set: function (a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }; l.easing = { linear: function (a) { return a }, swing: function (a) { return .5 - Math.cos(a * Math.PI) / 2 }, _default: "swing" }; l.fx = U.prototype.init; l.fx.step = {}; var bb, Sa, Ab = /^(?:toggle|show|hide)$/, Ua = /queueHooks$/; l.Animation = l.extend(ua, {
                    tweeners: {
                        "*": [function (a, b) {
                            var d = this.createTween(a, b); u(d.elem, a, Za.exec(b),
                                d); return d
                        }]
                    }, tweener: function (a, b) { l.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(fa); for (var d, c = 0, e = a.length; c < e; c++)d = a[c], ua.tweeners[d] = ua.tweeners[d] || [], ua.tweeners[d].unshift(b) }, prefilters: [function (a, b, d) {
                        var c; var e = "width" in b || "height" in b; var p = this, g = {}, k = a.style, x = a.nodeType && gb(a), m = M.get(a, "fxshow"); if (!d.queue) {
                            var w = l._queueHooks(a, "fx"); if (null == w.unqueued) { w.unqueued = 0; var h = w.empty.fire; w.empty.fire = function () { w.unqueued || h() } } w.unqueued++; p.always(function () {
                                p.always(function () {
                                w.unqueued--;
                                    l.queue(a, "fx").length || w.empty.fire()
                                })
                            })
                        } for (c in b) { var z = b[c]; if (Ab.test(z)) { delete b[c]; var n = n || "toggle" === z; if (z === (x ? "hide" : "show")) if ("show" === z && m && void 0 !== m[c]) x = !0; else continue; g[c] = m && m[c] || l.style(a, c) } } if ((b = !l.isEmptyObject(b)) || !l.isEmptyObject(g)) {
                            if (e && 1 === a.nodeType) {
                            d.overflow = [k.overflow, k.overflowX, k.overflowY]; var A = m && m.display; null == A && (A = M.get(a, "display")); e = l.css(a, "display"); "none" === e && (A ? e = A : (f([a], !0), A = a.style.display || A, e = l.css(a, "display"), f([a]))); ("inline" ===
                                e || "inline-block" === e && null != A) && "none" === l.css(a, "float") && (b || (p.done(function () { k.display = A }), null == A && (e = k.display, A = "none" === e ? "" : e)), k.display = "inline-block")
                            } d.overflow && (k.overflow = "hidden", p.always(function () { k.overflow = d.overflow[0]; k.overflowX = d.overflow[1]; k.overflowY = d.overflow[2] })); b = !1; for (c in g) b || (m ? "hidden" in m && (x = m.hidden) : m = M.access(a, "fxshow", { display: A }), n && (m.hidden = !x), x && f([a], !0), p.done(function () { x || f([a]); M.remove(a, "fxshow"); for (c in g) l.style(a, c, g[c]) })), b = aa(x ? m[c] :
                                0, c, p), c in m || (m[c] = b.start, x && (b.end = b.start, b.start = 0))
                        }
                    }], prefilter: function (a, b) { b ? ua.prefilters.unshift(a) : ua.prefilters.push(a) }
                }); l.speed = function (a, b, d) {
                    var c = a && "object" === typeof a ? l.extend({}, a) : { complete: d || !d && b || l.isFunction(a) && a, duration: a, easing: d && b || b && !l.isFunction(b) && b }; c.duration = l.fx.off || Y.hidden ? 0 : "number" === typeof c.duration ? c.duration : c.duration in l.fx.speeds ? l.fx.speeds[c.duration] : l.fx.speeds._default; if (null == c.queue || !0 === c.queue) c.queue = "fx"; c.old = c.complete; c.complete =
                        function () { l.isFunction(c.old) && c.old.call(this); c.queue && l.dequeue(this, c.queue) }; return c
                }; l.fn.extend({
                    fadeTo: function (a, b, d, c) { return this.filter(gb).css("opacity", 0).show().end().animate({ opacity: b }, a, d, c) }, animate: function (a, b, d, c) { var e = l.isEmptyObject(a), f = l.speed(b, d, c); b = function () { var b = ua(this, l.extend({}, a), f); (e || M.get(this, "finish")) && b.stop(!0) }; b.finish = b; return e || !1 === f.queue ? this.each(b) : this.queue(f.queue, b) }, stop: function (a, b, d) {
                        var c = function (a) { var b = a.stop; delete a.stop; b(d) };
                        "string" !== typeof a && (d = b, b = a, a = void 0); b && !1 !== a && this.queue(a || "fx", []); return this.each(function () { var b = !0, e = null != a && a + "queueHooks", f = l.timers, p = M.get(this); if (e) p[e] && p[e].stop && c(p[e]); else for (e in p) p[e] && p[e].stop && Ua.test(e) && c(p[e]); for (e = f.length; e--;)f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(d), b = !1, f.splice(e, 1)); !b && d || l.dequeue(this, a) })
                    }, finish: function (a) {
                    !1 !== a && (a = a || "fx"); return this.each(function () {
                        var b = M.get(this), d = b[a + "queue"]; var c = b[a + "queueHooks"]; var e =
                            l.timers, f = d ? d.length : 0; b.finish = !0; l.queue(this, a, []); c && c.stop && c.stop.call(this, !0); for (c = e.length; c--;)e[c].elem === this && e[c].queue === a && (e[c].anim.stop(!0), e.splice(c, 1)); for (c = 0; c < f; c++)d[c] && d[c].finish && d[c].finish.call(this); delete b.finish
                    })
                    }
                }); l.each(["toggle", "show", "hide"], function (a, b) { var d = l.fn[b]; l.fn[b] = function (a, c, e) { return null == a || "boolean" === typeof a ? d.apply(this, arguments) : this.animate(V(b, !0), a, c, e) } }); l.each({
                    slideDown: V("show"), slideUp: V("hide"), slideToggle: V("toggle"),
                    fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" }
                }, function (a, b) { l.fn[a] = function (a, d, c) { return this.animate(b, a, d, c) } }); l.timers = []; l.fx.tick = function () { var a = 0, b = l.timers; for (bb = l.now(); a < b.length; a++) { var d = b[a]; d() || b[a] !== d || b.splice(a--, 1) } b.length || l.fx.stop(); bb = void 0 }; l.fx.timer = function (a) { l.timers.push(a); a() ? l.fx.start() : l.timers.pop() }; l.fx.interval = 13; l.fx.start = function () {
                    Sa || (Sa = h.requestAnimationFrame ? h.requestAnimationFrame(ma) : h.setInterval(l.fx.tick,
                        l.fx.interval))
                }; l.fx.stop = function () { h.cancelAnimationFrame ? h.cancelAnimationFrame(Sa) : h.clearInterval(Sa); Sa = null }; l.fx.speeds = { slow: 600, fast: 200, _default: 400 }; l.fn.delay = function (a, b) { a = l.fx ? l.fx.speeds[a] || a : a; return this.queue(b || "fx", function (b, d) { var c = h.setTimeout(b, a); d.stop = function () { h.clearTimeout(c) } }) }; (function () {
                    var a = Y.createElement("input"), b = Y.createElement("select").appendChild(Y.createElement("option")); a.type = "checkbox"; la.checkOn = "" !== a.value; la.optSelected = b.selected; a = Y.createElement("input");
                    a.value = "t"; a.type = "radio"; la.radioValue = "t" === a.value
                })(); var cb = l.expr.attrHandle; l.fn.extend({ attr: function (a, b) { return Ia(this, l.attr, a, b, 1 < arguments.length) }, removeAttr: function (a) { return this.each(function () { l.removeAttr(this, a) }) } }); l.extend({
                    attr: function (a, b, d) {
                        var c, e, f = a.nodeType; if (3 !== f && 8 !== f && 2 !== f) {
                            if ("undefined" === typeof a.getAttribute) return l.prop(a, b, d); 1 === f && l.isXMLDoc(a) || (e = l.attrHooks[b.toLowerCase()] || (l.expr.match.bool.test(b) ? Bb : void 0)); if (void 0 !== d) {
                                if (null === d) {
                                    l.removeAttr(a,
                                        b); return
                                } if (e && "set" in e && void 0 !== (c = e.set(a, d, b))) return c; a.setAttribute(b, d + ""); return d
                            } if (e && "get" in e && null !== (c = e.get(a, b))) return c; c = l.find.attr(a, b); return null == c ? void 0 : c
                        }
                    }, attrHooks: { type: { set: function (a, b) { if (!la.radioValue && "radio" === b && l.nodeName(a, "input")) { var d = a.value; a.setAttribute("type", b); d && (a.value = d); return b } } } }, removeAttr: function (a, b) { var d, c = 0, e = b && b.match(fa); if (e && 1 === a.nodeType) for (; d = e[c++];)a.removeAttribute(d) }
                }); var Bb = {
                    set: function (a, b, d) {
                    !1 === b ? l.removeAttr(a,
                        d) : a.setAttribute(d, d); return d
                    }
                }; l.each(l.expr.match.bool.source.match(/\w+/g), function (a, b) { var d = cb[b] || l.find.attr; cb[b] = function (a, b, c) { var e = b.toLowerCase(); if (!c) { var f = cb[e]; cb[e] = p; var p = null != d(a, b, c) ? e : null; cb[e] = f } return p } }); var ya = /^(?:input|select|textarea|button)$/i, ub = /^(?:a|area)$/i; l.fn.extend({ prop: function (a, b) { return Ia(this, l.prop, a, b, 1 < arguments.length) }, removeProp: function (a) { return this.each(function () { delete this[l.propFix[a] || a] }) } }); l.extend({
                    prop: function (a, b, d) {
                        var c,
                        e = a.nodeType; if (3 !== e && 8 !== e && 2 !== e) { if (1 !== e || !l.isXMLDoc(a)) { b = l.propFix[b] || b; var f = l.propHooks[b] } return void 0 !== d ? f && "set" in f && void 0 !== (c = f.set(a, d, b)) ? c : a[b] = d : f && "get" in f && null !== (c = f.get(a, b)) ? c : a[b] }
                    }, propHooks: { tabIndex: { get: function (a) { var b = l.find.attr(a, "tabindex"); return b ? parseInt(b, 10) : ya.test(a.nodeName) || ub.test(a.nodeName) && a.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" }
                }); la.optSelected || (l.propHooks.selected = {
                    get: function (a) {
                    (a = a.parentNode) && a.parentNode && a.parentNode.selectedIndex;
                        return null
                    }, set: function (a) { if (a = a.parentNode) a.selectedIndex, a.parentNode && a.parentNode.selectedIndex }
                }); l.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function () { l.propFix[this.toLowerCase()] = this }); var nb = /[\t\r\n\f]/g; l.fn.extend({
                    addClass: function (a) {
                        var b, d, c, e, f, p = 0; if (l.isFunction(a)) return this.each(function (b) { l(this).addClass(a.call(this, b, ka(this))) }); if ("string" === typeof a && a) for (b = a.match(fa) || []; d = this[p++];) {
                            var g =
                                ka(d); if (c = 1 === d.nodeType && (" " + g + " ").replace(nb, " ")) { for (f = 0; e = b[f++];)0 > c.indexOf(" " + e + " ") && (c += e + " "); c = l.trim(c); g !== c && d.setAttribute("class", c) }
                        } return this
                    }, removeClass: function (a) {
                        var b, d, c, e, f, p = 0; if (l.isFunction(a)) return this.each(function (b) { l(this).removeClass(a.call(this, b, ka(this))) }); if (!arguments.length) return this.attr("class", ""); if ("string" === typeof a && a) for (b = a.match(fa) || []; d = this[p++];) {
                            var g = ka(d); if (c = 1 === d.nodeType && (" " + g + " ").replace(nb, " ")) {
                                for (f = 0; e = b[f++];)for (; -1 <
                                    c.indexOf(" " + e + " ");)c = c.replace(" " + e + " ", " "); c = l.trim(c); g !== c && d.setAttribute("class", c)
                            }
                        } return this
                    }, toggleClass: function (a, b) {
                        var d = typeof a; return "boolean" === typeof b && "string" === d ? b ? this.addClass(a) : this.removeClass(a) : l.isFunction(a) ? this.each(function (d) { l(this).toggleClass(a.call(this, d, ka(this), b), b) }) : this.each(function () {
                            var b, c; if ("string" === d) { var e = 0; var f = l(this); for (c = a.match(fa) || []; b = c[e++];)f.hasClass(b) ? f.removeClass(b) : f.addClass(b) } else if (void 0 === a || "boolean" === d) (b = ka(this)) &&
                                M.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || !1 === a ? "" : M.get(this, "__className__") || "")
                        })
                    }, hasClass: function (a) { var b, d = 0; for (a = " " + a + " "; b = this[d++];)if (1 === b.nodeType && -1 < (" " + ka(b) + " ").replace(nb, " ").indexOf(a)) return !0; return !1 }
                }); var Rb = /\r/g, Sb = /[\x20\t\r\n\f]+/g; l.fn.extend({
                    val: function (a) {
                        var b, d, c = this[0]; if (arguments.length) {
                            var e = l.isFunction(a); return this.each(function (d) {
                            1 === this.nodeType && (d = e ? a.call(this, d, l(this).val()) : a, null == d ? d = "" : "number" ===
                                typeof d ? d += "" : l.isArray(d) && (d = l.map(d, function (a) { return null == a ? "" : a + "" })), b = l.valHooks[this.type] || l.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, d, "value") || (this.value = d))
                            })
                        } if (c) { if ((b = l.valHooks[c.type] || l.valHooks[c.nodeName.toLowerCase()]) && "get" in b && void 0 !== (d = b.get(c, "value"))) return d; d = c.value; return "string" === typeof d ? d.replace(Rb, "") : null == d ? "" : d }
                    }
                }); l.extend({
                    valHooks: {
                        option: {
                            get: function (a) {
                                var b = l.find.attr(a, "value"); return null != b ? b : l.trim(l.text(a)).replace(Sb,
                                    " ")
                            }
                        }, select: { get: function (a) { for (var b, d = a.options, c = a.selectedIndex, e = (a = "select-one" === a.type) ? null : [], f = a ? c + 1 : d.length, p = 0 > c ? f : a ? c : 0; p < f; p++)if (b = d[p], !(!b.selected && p !== c || b.disabled || b.parentNode.disabled && l.nodeName(b.parentNode, "optgroup"))) { b = l(b).val(); if (a) return b; e.push(b) } return e }, set: function (a, b) { for (var d, c, e = a.options, f = l.makeArray(b), p = e.length; p--;)if (c = e[p], c.selected = -1 < l.inArray(l.valHooks.option.get(c), f)) d = !0; d || (a.selectedIndex = -1); return f } }
                    }
                }); l.each(["radio", "checkbox"],
                    function () { l.valHooks[this] = { set: function (a, b) { if (l.isArray(b)) return a.checked = -1 < l.inArray(l(a).val(), b) } }; la.checkOn || (l.valHooks[this].get = function (a) { return null === a.getAttribute("value") ? "on" : a.value }) }); var Gb = /^(?:focusinfocus|focusoutblur)$/; l.extend(l.event, {
                        trigger: function (a, b, d, c) {
                            var e, f, p = [d || Y], g = ca.call(a, "type") ? a.type : a; var k = ca.call(a, "namespace") ? a.namespace.split(".") : []; var x = e = d = d || Y; if (3 !== d.nodeType && 8 !== d.nodeType && !Gb.test(g + l.event.triggered)) {
                            -1 < g.indexOf(".") && (k = g.split("."),
                                g = k.shift(), k.sort()); var m = 0 > g.indexOf(":") && "on" + g; a = a[l.expando] ? a : new l.Event(g, "object" === typeof a && a); a.isTrigger = c ? 2 : 3; a.namespace = k.join("."); a.rnamespace = a.namespace ? new RegExp("(^|\\.)" + k.join("\\.(?:.*\\.|)") + "(\\.|$)") : null; a.result = void 0; a.target || (a.target = d); b = null == b ? [a] : l.makeArray(b, [a]); k = l.event.special[g] || {}; if (c || !k.trigger || !1 !== k.trigger.apply(d, b)) {
                                    if (!c && !k.noBubble && !l.isWindow(d)) {
                                        var w = k.delegateType || g; Gb.test(w + g) || (x = x.parentNode); for (; x; x = x.parentNode)p.push(x),
                                            e = x; e === (d.ownerDocument || Y) && p.push(e.defaultView || e.parentWindow || h)
                                    } for (e = 0; (x = p[e++]) && !a.isPropagationStopped();)a.type = 1 < e ? w : k.bindType || g, (f = (M.get(x, "events") || {})[a.type] && M.get(x, "handle")) && f.apply(x, b), (f = m && x[m]) && f.apply && sa(x) && (a.result = f.apply(x, b), !1 === a.result && a.preventDefault()); a.type = g; c || a.isDefaultPrevented() || k._default && !1 !== k._default.apply(p.pop(), b) || !sa(d) || !m || !l.isFunction(d[g]) || l.isWindow(d) || ((e = d[m]) && (d[m] = null), l.event.triggered = g, d[g](), l.event.triggered = void 0,
                                        e && (d[m] = e)); return a.result
                                }
                            }
                        }, simulate: function (a, b, d) { a = l.extend(new l.Event, d, { type: a, isSimulated: !0 }); l.event.trigger(a, null, b) }
                    }); l.fn.extend({ trigger: function (a, b) { return this.each(function () { l.event.trigger(a, b, this) }) }, triggerHandler: function (a, b) { var d = this[0]; if (d) return l.event.trigger(a, b, d, !0) } }); l.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
                        function (a, b) { l.fn[b] = function (a, d) { return 0 < arguments.length ? this.on(b, null, a, d) : this.trigger(b) } }); l.fn.extend({ hover: function (a, b) { return this.mouseenter(a).mouseleave(b || a) } }); la.focusin = "onfocusin" in h; la.focusin || l.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
                            var d = function (a) { l.event.simulate(b, a.target, l.event.fix(a)) }; l.event.special[b] = {
                                setup: function () { var c = this.ownerDocument || this, e = M.access(c, b); e || c.addEventListener(a, d, !0); M.access(c, b, (e || 0) + 1) }, teardown: function () {
                                    var c =
                                        this.ownerDocument || this, e = M.access(c, b) - 1; e ? M.access(c, b, e) : (c.removeEventListener(a, d, !0), M.remove(c, b))
                                }
                            }
                        }); var ob = h.location, Hb = l.now(), Cb = /\?/; l.parseXML = function (a) { if (!a || "string" !== typeof a) return null; try { var b = (new h.DOMParser).parseFromString(a, "text/xml") } catch (dc) { b = void 0 } b && !b.getElementsByTagName("parsererror").length || l.error("Invalid XML: " + a); return b }; var Pb = /\[\]$/, Ib = /\r?\n/g, Tb = /^(?:submit|button|image|reset|file)$/i, Ub = /^(?:input|select|textarea|keygen)/i; l.param = function (a,
                            b) { var d, c = [], e = function (a, b) { var d = l.isFunction(b) ? b() : b; c[c.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == d ? "" : d) }; if (l.isArray(a) || a.jquery && !l.isPlainObject(a)) l.each(a, function () { e(this.name, this.value) }); else for (d in a) ea(d, a[d], b, e); return c.join("&") }; l.fn.extend({
                                serialize: function () { return l.param(this.serializeArray()) }, serializeArray: function () {
                                    return this.map(function () { var a = l.prop(this, "elements"); return a ? l.makeArray(a) : this }).filter(function () {
                                        var a = this.type; return this.name &&
                                            !l(this).is(":disabled") && Ub.test(this.nodeName) && !Tb.test(a) && (this.checked || !jb.test(a))
                                    }).map(function (a, b) { var d = l(this).val(); return null == d ? null : l.isArray(d) ? l.map(d, function (a) { return { name: b.name, value: a.replace(Ib, "\r\n") } }) : { name: b.name, value: d.replace(Ib, "\r\n") } }).get()
                                }
                            }); var Vb = /%20/g, Wb = /#.*$/, Xb = /([?&])_=[^&]*/, Yb = /^(.*?):[ \t]*([^\r\n]*)$/mg, Zb = /^(?:GET|HEAD)$/, $b = /^\/\//, Jb = {}, yb = {}, Kb = "*/".concat("*"), Db = Y.createElement("a"); Db.href = ob.href; l.extend({
                                active: 0, lastModified: {}, etag: {},
                                ajaxSettings: {
                                    url: ob.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ob.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Kb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: {
                                        "* text": String,
                                        "text html": !0, "text json": JSON.parse, "text xml": l.parseXML
                                    }, flatOptions: { url: !0, context: !0 }
                                }, ajaxSetup: function (a, b) { return b ? va(va(a, l.ajaxSettings), b) : va(l.ajaxSettings, a) }, ajaxPrefilter: za(Jb), ajaxTransport: za(yb), ajax: function (a, b) {
                                    function d(a, b, d, f) {
                                        var k = b; if (!t) {
                                            t = !0; p && h.clearTimeout(p); c = void 0; e = f || ""; q.readyState = 0 < a ? 4 : 0; f = 200 <= a && 300 > a || 304 === a; if (d) {
                                                var K = x; for (var r = q, u, F, Z, v, ia = K.contents, Ca = K.dataTypes; "*" === Ca[0];)Ca.shift(), void 0 === u && (u = K.mimeType || r.getResponseHeader("Content-Type"));
                                                if (u) for (F in ia) if (ia[F] && ia[F].test(u)) { Ca.unshift(F); break } if (Ca[0] in d) Z = Ca[0]; else { for (F in d) { if (!Ca[0] || K.converters[F + " " + Ca[0]]) { Z = F; break } v || (v = F) } Z = Z || v } Z ? (Z !== Ca[0] && Ca.unshift(Z), K = d[Z]) : K = void 0
                                            } a: {
                                                d = x; u = K; F = q; Z = f; var qa; r = {}; ia = d.dataTypes.slice(); if (ia[1]) for (A in d.converters) r[A.toLowerCase()] = d.converters[A]; for (v = ia.shift(); v;) {
                                                d.responseFields[v] && (F[d.responseFields[v]] = u); !C && Z && d.dataFilter && (u = d.dataFilter(u, d.dataType)); var C = v; if (v = ia.shift()) if ("*" === v) v = C; else if ("*" !==
                                                    C && C !== v) { var A = r[C + " " + v] || r["* " + v]; if (!A) for (qa in r) if (K = qa.split(" "), K[1] === v && (A = r[C + " " + K[0]] || r["* " + K[0]])) { !0 === A ? A = r[qa] : !0 !== r[qa] && (v = K[0], ia.unshift(K[1])); break } if (!0 !== A) if (A && d["throws"]) u = A(u); else try { u = A(u) } catch (Qb) { K = { state: "parsererror", error: A ? Qb : "No conversion from " + C + " to " + v }; break a } }
                                                } K = { state: "success", data: u }
                                            } if (f) if (x.ifModified && ((k = q.getResponseHeader("Last-Modified")) && (l.lastModified[H] = k), (k = q.getResponseHeader("etag")) && (l.etag[H] = k)), 204 === a || "HEAD" === x.type) k =
                                                "nocontent"; else if (304 === a) k = "notmodified"; else { k = K.state; var y = K.data; var ca = K.error; f = !ca } else if (ca = k, a || !k) k = "error", 0 > a && (a = 0); q.status = a; q.statusText = (b || k) + ""; f ? z.resolveWith(m, [y, k, q]) : z.rejectWith(m, [q, k, ca]); q.statusCode(D); D = void 0; g && w.trigger(f ? "ajaxSuccess" : "ajaxError", [q, x, f ? y : ca]); n.fireWith(m, [q, k]); g && (w.trigger("ajaxComplete", [q, x]), --l.active || l.event.trigger("ajaxStop"))
                                        }
                                    } "object" === typeof a && (b = a, a = void 0); b = b || {}; var c, e, f, p, g, k, x = l.ajaxSetup({}, b), m = x.context || x, w = x.context &&
                                        (m.nodeType || m.jquery) ? l(m) : l.event, z = l.Deferred(), n = l.Callbacks("once memory"), D = x.statusCode || {}, K = {}, r = {}, u = "canceled", q = {
                                            readyState: 0, getResponseHeader: function (a) { var b; if (t) { if (!f) for (f = {}; b = Yb.exec(e);)f[b[1].toLowerCase()] = b[2]; b = f[a.toLowerCase()] } return null == b ? null : b }, getAllResponseHeaders: function () { return t ? e : null }, setRequestHeader: function (a, b) { null == t && (a = r[a.toLowerCase()] = r[a.toLowerCase()] || a, K[a] = b); return this }, overrideMimeType: function (a) { null == t && (x.mimeType = a); return this },
                                            statusCode: function (a) { var b; if (a) if (t) q.always(a[q.status]); else for (b in a) D[b] = [D[b], a[b]]; return this }, abort: function (a) { a = a || u; c && c.abort(a); d(0, a); return this }
                                        }; z.promise(q); x.url = ((a || x.url || ob.href) + "").replace($b, ob.protocol + "//"); x.type = b.method || b.type || x.method || x.type; x.dataTypes = (x.dataType || "*").toLowerCase().match(fa) || [""]; if (null == x.crossDomain) {
                                            var F = Y.createElement("a"); try { F.href = x.url, F.href = F.href, x.crossDomain = Db.protocol + "//" + Db.host !== F.protocol + "//" + F.host } catch (zb) {
                                            x.crossDomain =
                                                !0
                                            }
                                        } x.data && x.processData && "string" !== typeof x.data && (x.data = l.param(x.data, x.traditional)); na(Jb, x, b, q); if (t) return q; (g = l.event && x.global) && 0 === l.active++ && l.event.trigger("ajaxStart"); x.type = x.type.toUpperCase(); x.hasContent = !Zb.test(x.type); var H = x.url.replace(Wb, ""); x.hasContent ? x.data && x.processData && 0 === (x.contentType || "").indexOf("application/x-www-form-urlencoded") && (x.data = x.data.replace(Vb, "+")) : (F = x.url.slice(H.length), x.data && (H += (Cb.test(H) ? "&" : "?") + x.data, delete x.data), !1 === x.cache &&
                                            (H = H.replace(Xb, ""), F = (Cb.test(H) ? "&" : "?") + "_=" + Hb++ + F), x.url = H + F); x.ifModified && (l.lastModified[H] && q.setRequestHeader("If-Modified-Since", l.lastModified[H]), l.etag[H] && q.setRequestHeader("If-None-Match", l.etag[H])); (x.data && x.hasContent && !1 !== x.contentType || b.contentType) && q.setRequestHeader("Content-Type", x.contentType); q.setRequestHeader("Accept", x.dataTypes[0] && x.accepts[x.dataTypes[0]] ? x.accepts[x.dataTypes[0]] + ("*" !== x.dataTypes[0] ? ", " + Kb + "; q=0.01" : "") : x.accepts["*"]); for (k in x.headers) q.setRequestHeader(k,
                                                x.headers[k]); if (x.beforeSend && (!1 === x.beforeSend.call(m, q, x) || t)) return q.abort(); u = "abort"; n.add(x.complete); q.done(x.success); q.fail(x.error); if (c = na(yb, x, b, q)) { q.readyState = 1; g && w.trigger("ajaxSend", [q, x]); if (t) return q; x.async && 0 < x.timeout && (p = h.setTimeout(function () { q.abort("timeout") }, x.timeout)); try { var t = !1; c.send(K, d) } catch (zb) { if (t) throw zb; d(-1, zb) } } else d(-1, "No Transport"); return q
                                }, getJSON: function (a, b, d) { return l.get(a, b, d, "json") }, getScript: function (a, b) { return l.get(a, void 0, b, "script") }
                            });
    l.each(["get", "post"], function (a, b) { l[b] = function (a, d, c, e) { l.isFunction(d) && (e = e || c, c = d, d = void 0); return l.ajax(l.extend({ url: a, type: b, dataType: e, data: d, success: c }, l.isPlainObject(a) && a)) } }); l._evalUrl = function (a) { return l.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 }) }; l.fn.extend({
        wrapAll: function (a) {
        this[0] && (l.isFunction(a) && (a = a.call(this[0])), a = l(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && a.insertBefore(this[0]), a.map(function () {
            for (var a =
                this; a.firstElementChild;)a = a.firstElementChild; return a
        }).append(this)); return this
        }, wrapInner: function (a) { return l.isFunction(a) ? this.each(function (b) { l(this).wrapInner(a.call(this, b)) }) : this.each(function () { var b = l(this), d = b.contents(); d.length ? d.wrapAll(a) : b.append(a) }) }, wrap: function (a) { var b = l.isFunction(a); return this.each(function (d) { l(this).wrapAll(b ? a.call(this, d) : a) }) }, unwrap: function (a) { this.parent(a).not("body").each(function () { l(this).replaceWith(this.childNodes) }); return this }
    }); l.expr.pseudos.hidden =
        function (a) { return !l.expr.pseudos.visible(a) }; l.expr.pseudos.visible = function (a) { return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length) }; l.ajaxSettings.xhr = function () { try { return new h.XMLHttpRequest } catch (A) { } }; var ac = { 0: 200, 1223: 204 }, pb = l.ajaxSettings.xhr(); la.cors = !!pb && "withCredentials" in pb; la.ajax = pb = !!pb; l.ajaxTransport(function (a) {
            var b, d; if (la.cors || pb && !a.crossDomain) return {
                send: function (c, e) {
                    var f, p = a.xhr(); p.open(a.type, a.url, a.async, a.username, a.password); if (a.xhrFields) for (f in a.xhrFields) p[f] =
                        a.xhrFields[f]; a.mimeType && p.overrideMimeType && p.overrideMimeType(a.mimeType); a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest"); for (f in c) p.setRequestHeader(f, c[f]); b = function (a) {
                            return function () {
                                b && (b = d = p.onload = p.onerror = p.onabort = p.onreadystatechange = null, "abort" === a ? p.abort() : "error" === a ? "number" !== typeof p.status ? e(0, "error") : e(p.status, p.statusText) : e(ac[p.status] || p.status, p.statusText, "text" !== (p.responseType || "text") || "string" !== typeof p.responseText ? { binary: p.response } :
                                    { text: p.responseText }, p.getAllResponseHeaders()))
                            }
                        }; p.onload = b(); d = p.onerror = b("error"); void 0 !== p.onabort ? p.onabort = d : p.onreadystatechange = function () { 4 === p.readyState && h.setTimeout(function () { b && d() }) }; b = b("abort"); try { p.send(a.hasContent && a.data || null) } catch (Nb) { if (b) throw Nb; }
                }, abort: function () { b && b() }
            }
        }); l.ajaxPrefilter(function (a) { a.crossDomain && (a.contents.script = !1) }); l.ajaxSetup({
            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ },
            converters: { "text script": function (a) { l.globalEval(a); return a } }
        }); l.ajaxPrefilter("script", function (a) { void 0 === a.cache && (a.cache = !1); a.crossDomain && (a.type = "GET") }); l.ajaxTransport("script", function (a) { if (a.crossDomain) { var b, d; return { send: function (c, e) { b = l("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", d = function (a) { b.remove(); d = null; a && e("error" === a.type ? 404 : 200, a.type) }); Y.head.appendChild(b[0]) }, abort: function () { d && d() } } } }); var Lb = [], Eb = /(=)\?(?=&|$)|\?\?/; l.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () { var a = Lb.pop() || l.expando + "_" + Hb++; this[a] = !0; return a }
        }); l.ajaxPrefilter("json jsonp", function (a, b, d) {
            var c, e = !1 !== a.jsonp && (Eb.test(a.url) ? "url" : "string" === typeof a.data && 0 === (a.contentType || "").indexOf("application/x-www-form-urlencoded") && Eb.test(a.data) && "data"); if (e || "jsonp" === a.dataTypes[0]) {
                var f = a.jsonpCallback = l.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback; e ? a[e] = a[e].replace(Eb, "$1" + f) : !1 !== a.jsonp && (a.url += (Cb.test(a.url) ? "&" : "?") + a.jsonp + "=" +
                    f); a.converters["script json"] = function () { c || l.error(f + " was not called"); return c[0] }; a.dataTypes[0] = "json"; var p = h[f]; h[f] = function () { c = arguments }; d.always(function () { void 0 === p ? l(h).removeProp(f) : h[f] = p; a[f] && (a.jsonpCallback = b.jsonpCallback, Lb.push(f)); c && l.isFunction(p) && p(c[0]); c = p = void 0 }); return "script"
            }
        }); la.createHTMLDocument = function () { var a = Y.implementation.createHTMLDocument("").body; a.innerHTML = "<form></form><form></form>"; return 2 === a.childNodes.length }(); l.parseHTML = function (a, b, d) {
            if ("string" !==
                typeof a) return []; "boolean" === typeof b && (d = b, b = !1); if (!b) if (la.createHTMLDocument) { b = Y.implementation.createHTMLDocument(""); var c = b.createElement("base"); c.href = Y.location.href; b.head.appendChild(c) } else b = Y; c = Qa.exec(a); d = !d && []; if (c) return [b.createElement(c[1])]; c = z([a], b, d); d && d.length && l(d).remove(); return l.merge([], c.childNodes)
        }; l.fn.load = function (a, b, d) {
            var c, e, f = this, p = a.indexOf(" "); if (-1 < p) { var g = l.trim(a.slice(p)); a = a.slice(0, p) } l.isFunction(b) ? (d = b, b = void 0) : b && "object" === typeof b &&
                (c = "POST"); 0 < f.length && l.ajax({ url: a, type: c || "GET", dataType: "html", data: b }).done(function (a) { e = arguments; f.html(g ? l("<div>").append(l.parseHTML(a)).find(g) : a) }).always(d && function (a, b) { f.each(function () { d.apply(this, e || [a.responseText, b, a]) }) }); return this
        }; l.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) { l.fn[b] = function (a) { return this.on(b, a) } }); l.expr.pseudos.animated = function (a) { return l.grep(l.timers, function (b) { return a === b.elem }).length }; l.offset =
            { setOffset: function (a, b, d) { var c = l.css(a, "position"), e = l(a), f = {}; "static" === c && (a.style.position = "relative"); var p = e.offset(); var g = l.css(a, "top"); var k = l.css(a, "left"); ("absolute" === c || "fixed" === c) && -1 < (g + k).indexOf("auto") ? (k = e.position(), g = k.top, k = k.left) : (g = parseFloat(g) || 0, k = parseFloat(k) || 0); l.isFunction(b) && (b = b.call(a, d, l.extend({}, p))); null != b.top && (f.top = b.top - p.top + g); null != b.left && (f.left = b.left - p.left + k); "using" in b ? b.using.call(a, f) : e.css(f) } }; l.fn.extend({
                offset: function (a) {
                    if (arguments.length) return void 0 ===
                        a ? this : this.each(function (b) { l.offset.setOffset(this, a, b) }); var b; if (b = this[0]) { if (!b.getClientRects().length) return { top: 0, left: 0 }; var d = b.getBoundingClientRect(); if (d.width || d.height) { var c = b.ownerDocument; b = ra(c); c = c.documentElement; return { top: d.top + b.pageYOffset - c.clientTop, left: d.left + b.pageXOffset - c.clientLeft } } return d }
                }, position: function () {
                    if (this[0]) {
                        var a = this[0], b = { top: 0, left: 0 }; if ("fixed" === l.css(a, "position")) var d = a.getBoundingClientRect(); else {
                            var c = this.offsetParent(); d = this.offset();
                            l.nodeName(c[0], "html") || (b = c.offset()); b = { top: b.top + l.css(c[0], "borderTopWidth", !0), left: b.left + l.css(c[0], "borderLeftWidth", !0) }
                        } return { top: d.top - b.top - l.css(a, "marginTop", !0), left: d.left - b.left - l.css(a, "marginLeft", !0) }
                    }
                }, offsetParent: function () { return this.map(function () { for (var a = this.offsetParent; a && "static" === l.css(a, "position");)a = a.offsetParent; return a || lb }) }
            }); l.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
                var d = "pageYOffset" === b; l.fn[a] = function (c) {
                    return Ia(this,
                        function (a, c, e) { var f = ra(a); if (void 0 === e) return f ? f[b] : a[c]; f ? f.scrollTo(d ? f.pageXOffset : e, d ? e : f.pageYOffset) : a[c] = e }, a, c, arguments.length)
                }
            }); l.each(["top", "left"], function (a, b) { l.cssHooks[b] = L(la.pixelPosition, function (a, d) { if (d) return d = B(a, b), ia.test(d) ? l(a).position()[b] + "px" : d }) }); l.each({ Height: "height", Width: "width" }, function (a, b) {
                l.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (d, c) {
                l.fn[c] = function (e, f) {
                    var p = arguments.length && (d || "boolean" !== typeof e), g = d || (!0 === e || !0 === f ? "margin" :
                        "border"); return Ia(this, function (b, d, e) { return l.isWindow(b) ? 0 === c.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (d = b.documentElement, Math.max(b.body["scroll" + a], d["scroll" + a], b.body["offset" + a], d["offset" + a], d["client" + a])) : void 0 === e ? l.css(b, d, g) : l.style(b, d, e, g) }, b, p ? e : void 0, p)
                }
                })
            }); l.fn.extend({
                bind: function (a, b, d) { return this.on(a, null, b, d) }, unbind: function (a, b) { return this.off(a, null, b) }, delegate: function (a, b, d, c) { return this.on(b, a, d, c) }, undelegate: function (a,
                    b, d) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", d) }
            }); l.parseJSON = JSON.parse; "function" === typeof define && define.amd && define("jquery", [], function () { return l }); var bc = h.jQuery, cc = h.$; l.noConflict = function (a) { h.$ === l && (h.$ = cc); a && h.jQuery === l && (h.jQuery = bc); return l }; c || (h.jQuery = h.$ = l); return l
});/*
 VERSION: 1.19.0
 DATE: 2016-07-16
 UPDATES AND DOCS AT: http://greensock.com

 @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 This work is subject to the terms at http://greensock.com/standard-license or for
 Club GreenSock members, the software agreement that was issued with your membership.

 @author: Jack Doyle, jack@greensock.com
*/
!function (h, c) {
    var n = {}, v = h.GreenSockGlobals = h.GreenSockGlobals || h; if (!v.TweenLite) {
        var a, t = function (a) { var b = a.split("."), d = v; for (a = 0; a < b.length; a++)d[b[a]] = d = d[b[a]] || {}; return d }, b = t("com.greensock"), y = function (a) { var b, d = [], c = a.length; for (b = 0; b !== c; d.push(a[b++])); return d }, q = function () { }, e = function () { var a = Object.prototype.toString, b = a.call([]); return function (d) { return null != d && (d instanceof Array || "object" == typeof d && !!d.push && a.call(d) === b) } }(), r = {}, k = function (a, b, d, e) {
        this.sc = r[a] ? r[a].sc :
            []; r[a] = this; this.gsClass = null; this.func = d; var f = []; this.check = function (p) {
                for (var g, x, m, l, w, z = b.length, D = z; -1 < --z;)(g = r[b[z]] || new k(b[z], [])).gsClass ? (f[z] = g.gsClass, D--) : p && g.sc.push(this); if (0 === D && d) {
                    if (x = ("com.greensock." + a).split("."), m = x.pop(), l = t(x.join("."))[m] = this.gsClass = d.apply(d, f), e) if (v[m] = n[m] = l, w = "undefined" != typeof module && module.exports, !w && "function" == typeof define && define.amd) define((h.GreenSockAMDPath ? h.GreenSockAMDPath + "/" : "") + a.split(".").pop(), [], function () { return l }); else if (w) if (a ===
                        c) for (z in module.exports = n[c] = l, n) l[z] = n[z]; else n[c] && (n[c][m] = l); for (z = 0; z < this.sc.length; z++)this.sc[z].check()
                }
            }; this.check(!0)
        }, m = h._gsDefine = function (a, b, d, c) { return new k(a, b, d, c) }, u = b._class = function (a, b, d) { return b = b || function () { }, m(a, [], function () { return b }, d), b }; m.globals = v; var f = [0, 0, 1, 1], d = u("easing.Ease", function (a, b, d, c) { this._func = a; this._type = d || 0; this._power = c || 0; this._params = b ? f.concat(b) : f }, !0), w = d.map = {}, z = d.register = function (a, d, c, e) {
            var f; d = d.split(","); for (var p = d.length,
                g = (c || "easeIn,easeOut,easeInOut").split(","); -1 < --p;) { var k = d[p]; c = e ? u("easing." + k, null, !0) : b.easing[k] || {}; for (f = g.length; -1 < --f;) { var x = g[f]; w[k + "." + x] = w[x + k] = c[x] = a.getRatio ? a : a[x] || new a } }
        }; var g = d.prototype; g._calcEnd = !1; g.getRatio = function (a) { if (this._func) return this._params[0] = a, this._func.apply(null, this._params); var b = this._type, d = this._power, c = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a); return 1 === d ? c *= c : 2 === d ? c *= c * c : 3 === d ? c *= c * c * c : 4 === d && (c *= c * c * c * c), 1 === b ? 1 - c : 2 === b ? c : .5 > a ? c / 2 : 1 - c / 2 }; var C = ["Linear",
            "Quad", "Cubic", "Quart", "Quint,Strong"]; for (a = C.length; -1 < --a;)g = C[a] + ",Power" + a, z(new d(null, null, 1, a), g, "easeOut", !0), z(new d(null, null, 2, a), g, "easeIn" + (0 === a ? ",easeNone" : "")), z(new d(null, null, 3, a), g, "easeInOut"); w.linear = b.easing.Linear.easeIn; w.swing = b.easing.Quad.easeInOut; var Q = u("events.EventDispatcher", function (a) { this._listeners = {}; this._eventTarget = a || this }); g = Q.prototype; g.addEventListener = function (a, b, d, c, e) {
                e = e || 0; var f, p = this._listeners[a], g = 0; this !== E || ha || E.wake(); null == p && (this._listeners[a] =
                    p = []); for (f = p.length; -1 < --f;)a = p[f], a.c === b && a.s === d ? p.splice(f, 1) : 0 === g && a.pr < e && (g = f + 1); p.splice(g, 0, { c: b, s: d, up: c, pr: e })
            }; g.removeEventListener = function (a, b) { var d, c = this._listeners[a]; if (c) for (d = c.length; -1 < --d;)if (c[d].c === b) return void c.splice(d, 1) }; g.dispatchEvent = function (a) { var b, d, c = this._listeners[a]; if (c) { var e = c.length; 1 < e && (c = c.slice(0)); for (b = this._eventTarget; -1 < --e;)(d = c[e]) && (d.up ? d.c.call(d.s || b, { type: a, target: b }) : d.c.call(d.s || b)) } }; var S = h.requestAnimationFrame, R = h.cancelAnimationFrame,
                O = Date.now || function () { return (new Date).getTime() }, J = O(); C = ["ms", "moz", "webkit", "o"]; for (a = C.length; -1 < --a && !S;)S = h[C[a] + "RequestAnimationFrame"], R = h[C[a] + "CancelAnimationFrame"] || h[C[a] + "CancelRequestAnimationFrame"]; u("Ticker", function (a, b) {
                    var d, c, e, f, p, g = this, k = O(), l = !1 !== b && S ? "auto" : !1, x = 500, m = 33, w = function (a) { var b; var l = O() - J; l > x && (k += l - m); J += l; g.time = (J - k) / 1E3; l = g.time - p; (!d || 0 < l || !0 === a) && (g.frame++ , p += l + (l >= f ? .004 : f - l), b = !0); !0 !== a && (e = c(w)); b && g.dispatchEvent("tick") }; Q.call(g); g.time =
                        g.frame = 0; g.tick = function () { w(!0) }; g.lagSmoothing = function (a, b) { x = a || 1E10; m = Math.min(b, x, 0) }; g.sleep = function () { null != e && (l && R ? R(e) : clearTimeout(e), c = q, e = null, g === E && (ha = !1)) }; g.wake = function (a) { null !== e ? g.sleep() : a ? k += -J + (J = O()) : 10 < g.frame && (J = O() - x + 5); c = 0 === d ? q : l && S ? S : function (a) { return setTimeout(a, 1E3 * (p - g.time) + 1 | 0) }; g === E && (ha = !0); w(2) }; g.fps = function (a) { return arguments.length ? (d = a, f = 1 / (d || 60), p = this.time + f, void g.wake()) : d }; g.useRAF = function (a) {
                            return arguments.length ? (g.sleep(), l = a, void g.fps(d)) :
                                l
                        }; g.fps(a); setTimeout(function () { "auto" === l && 5 > g.frame && "hidden" !== document.visibilityState && g.useRAF(!1) }, 1500)
                }); g = b.Ticker.prototype = new b.events.EventDispatcher; g.constructor = b.Ticker; var G = u("core.Animation", function (a, b) {
                    if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = !0 === b.immediateRender, this.data = b.data, this._reversed = !0 === b.reversed, ea) {
                        ha || E.wake(); var d = this.vars.useFrames ? ka : ea; d.add(this, d._time); this.vars.paused &&
                            this.paused(!0)
                    }
                }); var E = G.ticker = new b.Ticker; g = G.prototype; g._dirty = g._gc = g._initted = g._paused = !1; g._totalTime = g._time = 0; g._rawPrevTime = -1; g._next = g._last = g._onUpdate = g._timeline = g.timeline = null; g._paused = !1; var P = function () { ha && 2E3 < O() - J && E.wake(); setTimeout(P, 2E3) }; P(); g.play = function (a, b) { return null != a && this.seek(a, b), this.reversed(!1).paused(!1) }; g.pause = function (a, b) { return null != a && this.seek(a, b), this.paused(!0) }; g.resume = function (a, b) { return null != a && this.seek(a, b), this.paused(!1) }; g.seek =
                    function (a, b) { return this.totalTime(Number(a), !1 !== b) }; g.restart = function (a, b) { return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, !1 !== b, !0) }; g.reverse = function (a, b) { return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1) }; g.render = function (a, b, d) { }; g.invalidate = function () { return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this }; g.isActive = function () {
                        var a, b = this._timeline, d = this._startTime;
                        return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime()) >= d && a < d + this.totalDuration() / this._timeScale
                    }; g._enabled = function (a, b) { return ha || E.wake(), this._gc = !a, this._active = this.isActive(), !0 !== b && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1 }; g._kill = function (a, b) { return this._enabled(!1, !1) }; g.kill = function (a, b) { return this._kill(a, b), this }; g._uncache = function (a) {
                        for (a = a ? this : this.timeline; a;)a._dirty = !0, a =
                            a.timeline; return this
                    }; g._swapSelfInParams = function (a) { for (var b = a.length, d = a.concat(); -1 < --b;)"{self}" === a[b] && (d[b] = this); return d }; g._callback = function (a) { var b = this.vars, d = b[a], c = b[a + "Params"]; a = b[a + "Scope"] || b.callbackScope || this; switch (c ? c.length : 0) { case 0: d.call(a); break; case 1: d.call(a, c[0]); break; case 2: d.call(a, c[0], c[1]); break; default: d.apply(a, c) } }; g.eventCallback = function (a, b, d, c) {
                        if ("on" === (a || "").substr(0, 2)) {
                            var f = this.vars; if (1 === arguments.length) return f[a]; null == b ? delete f[a] :
                                (f[a] = b, f[a + "Params"] = e(d) && -1 !== d.join("").indexOf("{self}") ? this._swapSelfInParams(d) : d, f[a + "Scope"] = c); "onUpdate" === a && (this._onUpdate = b)
                        } return this
                    }; g.delay = function (a) { return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay }; g.duration = function (a) {
                        return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== a && this.totalTime(a /
                            this._duration * this._totalTime, !0), this) : (this._dirty = !1, this._duration)
                    }; g.totalDuration = function (a) { return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration }; g.time = function (a, b) { return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time }; g.totalTime = function (a, b, d) {
                        if (ha || E.wake(), !arguments.length) return this._totalTime; if (this._timeline) {
                            if (0 > a && !d && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
                            this._dirty &&
                                this.totalDuration(); var c = this._totalDuration, e = this._timeline; if (a > c && !d && (a = c), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? c - a : a) / this._timeScale, e._dirty || this._uncache(!1), e._timeline) for (; e._timeline;)e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), e = e._timeline
                            } this._gc && this._enabled(!0, !1); (this._totalTime !== a || 0 === this._duration) && (I.length && na(), this.render(a, b, !1), I.length && na())
                        } return this
                    }; g.progress = g.totalProgress =
                        function (a, b) { var d = this.duration(); return arguments.length ? this.totalTime(d * a, b) : d ? this._time / d : this.ratio }; g.startTime = function (a) { return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime }; g.endTime = function (a) { return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale }; g.timeScale = function (a) {
                            if (!arguments.length) return this._timeScale; if (a = a || 1E-10, this._timeline &&
                                this._timeline.smoothChildTiming) { var b = this._pauseTime; b = b || 0 === b ? b : this._timeline.totalTime(); this._startTime = b - (b - this._startTime) * this._timeScale / a } return this._timeScale = a, this._uncache(!1)
                        }; g.reversed = function (a) { return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed }; g.paused = function (a) {
                            if (!arguments.length) return this._paused; var b, d, c = this._timeline;
                            return a != this._paused && c && (ha || a || E.wake(), b = c.rawTime(), d = b - this._pauseTime, !a && c.smoothChildTiming && (this._startTime += d, this._uncache(!1)), this._pauseTime = a ? b : null, this._paused = a, this._active = this.isActive(), !a && 0 !== d && this._initted && this.duration() && (b = c.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale, this.render(b, b === this._totalTime, !0))), this._gc && !a && this._enabled(!0, !1), this
                        }; C = u("core.SimpleTimeline", function (a) {
                            G.call(this, 0, a); this.autoRemoveChildren = this.smoothChildTiming =
                                !0
                        }); g = C.prototype = new G; g.constructor = C; g.kill()._gc = !1; g._first = g._last = g._recent = null; g._sortChildren = !1; g.add = g.insert = function (a, b, d, c) {
                            if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), b = this._last, this._sortChildren) for (d = a._startTime; b && b._startTime > d;)b = b._prev; return b ? (a._next = b._next, b._next = a) : (a._next = this._first,
                                this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = b, this._recent = a, this._timeline && this._uncache(!0), this
                        }; g._remove = function (a, b) { return a.timeline === this && (b || a._enabled(!1, !0), a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), a._next = a._prev = a.timeline = null, a === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this }; g.render = function (a, b, d) {
                            var c = this._first; for (this._totalTime =
                                this._time = this._rawPrevTime = a; c;) { var e = c._next; (c._active || a >= c._startTime && !c._paused) && (c._reversed ? c.render((c._dirty ? c.totalDuration() : c._totalDuration) - (a - c._startTime) * c._timeScale, b, d) : c.render((a - c._startTime) * c._timeScale, b, d)); c = e }
                        }; g.rawTime = function () { return ha || E.wake(), this._totalTime }; var B = u("TweenLite", function (a, b, d) {
                            if (G.call(this, b, d), this.render = B.prototype.render, null == a) throw "Cannot tween a null target."; this.target = a = "string" != typeof a ? a : B.selector(a) || a; var c; var f = a.jquery ||
                                a.length && a !== h && a[0] && (a[0] === h || a[0].nodeType && a[0].style && !a.nodeType); d = this.vars.overwrite; if (this._overwrite = d = null == d ? ua[B.defaultOverwrite] : "number" == typeof d ? d >> 0 : ua[d], (f || a instanceof Array || a.push && e(a)) && "number" != typeof a[0]) for (this._targets = c = y(a), this._propLookup = [], this._siblings = [], a = 0; a < c.length; a++)(f = c[a]) ? "string" != typeof f ? f.length && f !== h && f[0] && (f[0] === h || f[0].nodeType && f[0].style && !f.nodeType) ? (c.splice(a--, 1), this._targets = c = c.concat(y(f))) : (this._siblings[a] = va(f, this,
                                    !1), 1 === d && 1 < this._siblings[a].length && xa(f, this, null, 1, this._siblings[a])) : (f = c[a--] = B.selector(f), "string" == typeof f && c.splice(a + 1, 1)) : c.splice(a--, 1); else this._propLookup = {}, this._siblings = va(a, this, !1), 1 === d && 1 < this._siblings.length && xa(a, this, null, 1, this._siblings); (this.vars.immediateRender || 0 === b && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1E-10, this.render(Math.min(0, -this._delay)))
                        }, !0), L = function (a) {
                            return a && a.length && a !== h && a[0] && (a[0] === h || a[0].nodeType && a[0].style &&
                                !a.nodeType)
                        }; g = B.prototype = new G; g.constructor = B; g.kill()._gc = !1; g.ratio = 0; g._firstPT = g._targets = g._overwrittenProps = g._startAt = null; g._notifyPluginsOfEnabled = g._lazy = !1; B.version = "1.19.0"; B.defaultEase = g._ease = new d(null, null, 1, 1); B.defaultOverwrite = "auto"; B.ticker = E; B.autoSleep = 120; B.lagSmoothing = function (a, b) { E.lagSmoothing(a, b) }; B.selector = h.$ || h.jQuery || function (a) {
                            var b = h.$ || h.jQuery; return b ? (B.selector = b, b(a)) : "undefined" == typeof document ? a : document.querySelectorAll ? document.querySelectorAll(a) :
                                document.getElementById("#" === a.charAt(0) ? a.substr(1) : a)
                        }; var I = [], T = {}, ba = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, ja = function (a) { for (var b, d = this._firstPT; d;)b = d.blob ? a ? this.join("") : this.start : d.c * a + d.s, d.m ? b = d.m(b, this._target || d.t) : 1E-6 > b && -1E-6 < b && (b = 0), d.f ? d.fp ? d.t[d.p](d.fp, b) : d.t[d.p](b) : d.t[d.p] = b, d = d._next }, U = function (a, b, d, c) {
                            var e, f = [a, b], g = 0, p = "", k = 0; f.start = a; d && (d(f), a = f[0], b = f[1]); f.length = 0; a = a.match(ba) || []; d = b.match(ba) || []; c && (c._next = null, c.blob = 1, f._firstPT = f._applyPT =
                                c); var l = d.length; for (c = 0; l > c; c++) { var m = d[c]; var x = b.substr(g, b.indexOf(m, g) - g); p += x || !c ? x : ","; g += x.length; k ? k = (k + 1) % 5 : "rgba(" === x.substr(-5) && (k = 1); m === a[c] || a.length <= c ? p += m : (p && (f.push(p), p = ""), e = parseFloat(a[c]), f.push(e), f._firstPT = { _next: f._firstPT, t: f, p: f.length - 1, s: e, c: ("=" === m.charAt(1) ? parseInt(m.charAt(0) + "1", 10) * parseFloat(m.substr(2)) : parseFloat(m) - e) || 0, f: 0, m: k && 4 > k ? Math.round : 0 }); g += m.length } return p += b.substr(g), p && f.push(p), f.setRatio = ja, f
                        }, ma = function (a, b, d, c, e, f, g, k, m) {
                        "function" ==
                            typeof c && (c = c(m || 0, a)); var p, x; m = "get" === d ? a[b] : d; var w = typeof a[b], h = "string" == typeof c && "=" === c.charAt(1); f = { t: a, p: b, s: m, f: "function" === w, pg: 0, n: e || b, m: f ? "function" == typeof f ? f : Math.round : 0, pr: 0, c: h ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - m || 0 }; return "number" !== w && ("function" === w && "get" === d && (x = b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3), f.s = m = g ? a[x](g) : a[x]()), "string" == typeof m && (g || isNaN(m)) ? (f.fp = g, p = U(m, c, k || B.defaultStringFilter,
                                f), f = { t: p, p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: e || b, pr: 0, m: 0 }) : h || (f.s = parseFloat(m), f.c = parseFloat(c) - f.s || 0)), f.c ? ((f._next = this._firstPT) && (f._next._prev = f), this._firstPT = f, f) : void 0
                        }; a = B._internals = { isArray: e, isSelector: L, lazyTweens: I, blobDif: U }; var W = B._plugins = {}, V = a.tweenLookup = {}, aa = 0, da = a.reservedProps = {
                            ease: 1, delay: 1, overwrite: 1, onComplete: 1, onCompleteParams: 1, onCompleteScope: 1, useFrames: 1, runBackwards: 1, startAt: 1, onUpdate: 1, onUpdateParams: 1, onUpdateScope: 1, onStart: 1, onStartParams: 1, onStartScope: 1,
                            onReverseComplete: 1, onReverseCompleteParams: 1, onReverseCompleteScope: 1, onRepeat: 1, onRepeatParams: 1, onRepeatScope: 1, easeParams: 1, yoyo: 1, immediateRender: 1, repeat: 1, repeatDelay: 1, data: 1, paused: 1, reversed: 1, autoCSS: 1, lazy: 1, onOverwrite: 1, callbackScope: 1, stringFilter: 1, id: 1
                        }, ua = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, "true": 1, "false": 0 }, ka = G._rootFramesTimeline = new C, ea = G._rootTimeline = new C, za = 30, na = a.lazyRender = function () {
                            var a, b = I.length; for (T = {}; -1 < --b;)(a = I[b]) && !1 !== a._lazy &&
                                (a.render(a._lazy[0], a._lazy[1], !0), a._lazy = !1); I.length = 0
                        }; ea._startTime = E.time; ka._startTime = E.frame; ea._active = ka._active = !0; setTimeout(na, 1); G._updateRoot = B.render = function () {
                            var a, b; if (I.length && na(), ea.render((E.time - ea._startTime) * ea._timeScale, !1, !1), ka.render((E.frame - ka._startTime) * ka._timeScale, !1, !1), I.length && na(), E.frame >= za) {
                                za = E.frame + (parseInt(B.autoSleep, 10) || 120); for (b in V) { var d = V[b].tweens; for (a = d.length; -1 < --a;)d[a]._gc && d.splice(a, 1); 0 === d.length && delete V[b] } if (b = ea._first,
                                    (!b || b._paused) && B.autoSleep && !ka._first && 1 === E._listeners.tick.length) { for (; b && b._paused;)b = b._next; b || E.sleep() }
                            }
                        }; E.addEventListener("tick", G._updateRoot); var va = function (a, b, d) { var c, e, f = a._gsTweenID; if (V[f || (a._gsTweenID = f = "t" + aa++)] || (V[f] = { target: a, tweens: [] }), b && (c = V[f].tweens, c[e = c.length] = b, d)) for (; -1 < --e;)c[e] === b && c.splice(e, 1); return V[f].tweens }, ra = function (a, b, d, c) { var e, f, g = a.vars.onOverwrite; return g && (e = g(a, b, d, c)), g = B.onOverwrite, g && (f = g(a, b, d, c)), !1 !== e && !1 !== f }, xa = function (a,
                            b, d, c, e) {
                                var f, g, p; if (1 === c || 4 <= c) { d = e.length; for (f = 0; d > f; f++)if ((p = e[f]) !== b) p._gc || p._kill(null, a, b) && (g = !0); else if (5 === c) break; return g } var k, l = b._startTime + 1E-10, m = [], w = 0, x = 0 === b._duration; for (f = e.length; -1 < --f;)(p = e[f]) === b || p._gc || p._paused || (p._timeline !== b._timeline ? (k = k || Y(b, 0, x), 0 === Y(p, k, x) && (m[w++] = p)) : p._startTime <= l && p._startTime + p.totalDuration() / p._timeScale > l && ((x || !p._initted) && 2E-10 >= l - p._startTime || (m[w++] = p))); for (f = w; -1 < --f;)(p = m[f], 2 === c && p._kill(d, a, b) && (g = !0), 2 !== c || !p._firstPT &&
                                    p._initted) && (2 === c || ra(p, b)) && p._enabled(!1, !1) && (g = !0); return g
                        }, Y = function (a, b, d) { for (var c = a._timeline, e = c._timeScale, f = a._startTime; c._timeline;) { if (f += c._startTime, e *= c._timeScale, c._paused) return -100; c = c._timeline } return f /= e, f > b ? f - b : d && f === b || !a._initted && 2E-10 > f - b ? 1E-10 : (f += a.totalDuration() / a._timeScale / e) > b + 1E-10 ? 0 : f - b - 1E-10 }; g._init = function () {
                            var a, b, c = this.vars, e = this._overwrittenProps, f = this._duration; var g = !!c.immediateRender; var k = c.ease; if (c.startAt) {
                            this._startAt && (this._startAt.render(-1,
                                !0), this._startAt.kill()); var m = {}; for (a in c.startAt) m[a] = c.startAt[a]; if (m.overwrite = !1, m.immediateRender = !0, m.lazy = g && !1 !== c.lazy, m.startAt = m.delay = null, this._startAt = B.to(this.target, 0, m), g) if (0 < this._time) this._startAt = null; else if (0 !== f) return
                            } else if (c.runBackwards && 0 !== f) if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null; else {
                            0 !== this._time && (g = !1); m = {}; for (a in c) da[a] && "autoCSS" !== a || (m[a] = c[a]); if (m.overwrite = 0, m.data = "isFromStart", m.lazy = g && !1 !== c.lazy,
                                m.immediateRender = g, this._startAt = B.to(this.target, 0, m), g) { if (0 === this._time) return } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                            } if (this._ease = k = k ? k instanceof d ? k : "function" == typeof k ? new d(k, c.easeParams) : w[k] || B.defaultEase : B.defaultEase, c.easeParams instanceof Array && k.config && (this._ease = k.config.apply(k, c.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) for (g = this._targets.length,
                                a = 0; g > a; a++)this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], e ? e[a] : null, a) && (b = !0); else b = this._initProps(this.target, this._propLookup, this._siblings, e, 0); if (b && B._onPluginEvent("_onInitAllProps", this), e && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), c.runBackwards) for (m = this._firstPT; m;)m.s += m.c, m.c = -m.c, m = m._next; this._onUpdate = c.onUpdate; this._initted = !0
                        }; g._initProps = function (a, b, d, c, f) {
                            var g, p, k, m; if (null == a) return !1; T[a._gsTweenID] && na(); if (!this.vars.css &&
                                a.style && a !== h && a.nodeType && W.css && !1 !== this.vars.autoCSS) { var l = this.vars; var w = {}; for (m in l) da[m] || m in a && "transform" !== m && "x" !== m && "y" !== m && "width" !== m && "height" !== m && "className" !== m && "border" !== m || !(!W[m] || W[m] && W[m]._autoCSS) || (w[m] = l[m], delete l[m]); l.css = w } for (g in this.vars) if (l = this.vars[g], da[g]) l && (l instanceof Array || l.push && e(l)) && -1 !== l.join("").indexOf("{self}") && (this.vars[g] = this._swapSelfInParams(l, this)); else if (W[g] && (k = new W[g])._onInitTween(a, this.vars[g], this, f)) {
                                this._firstPT =
                                    m = { _next: this._firstPT, t: k, p: "setRatio", s: 0, c: 1, f: 1, n: g, pg: 1, pr: k._priority, m: 0 }; for (l = k._overwriteProps.length; -1 < --l;)b[k._overwriteProps[l]] = this._firstPT; (k._priority || k._onInitAllProps) && (p = !0); (k._onDisable || k._onEnable) && (this._notifyPluginsOfEnabled = !0); m._next && (m._next._prev = m)
                                } else b[g] = ma.call(this, a, g, "get", l, g, 0, null, this.vars.stringFilter, f); return c && this._kill(c, a) ? this._initProps(a, b, d, c, f) : 1 < this._overwrite && this._firstPT && 1 < d.length && xa(a, this, b, this._overwrite, d) ? (this._kill(b,
                                    a), this._initProps(a, b, d, c, f)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (T[a._gsTweenID] = !0), p)
                        }; g.render = function (a, b, d) {
                            var c, e, f, g = this._time, p = this._duration; var k = this._rawPrevTime; if (a >= p - 1E-7) this._totalTime = this._time = p, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (c = !0, e = "onComplete", d = d || this._timeline.autoRemoveChildren), 0 === p && (this._initted || !this.vars.lazy || d) && (this._startTime === this._timeline._duration && (a = 0),
                                (0 > k || 0 >= a && -1E-7 <= a || 1E-10 === k && "isPause" !== this.data) && k !== a && (d = !0, 1E-10 < k && (e = "onReverseComplete")), this._rawPrevTime = f = !b || a || k === a ? a : 1E-10); else if (1E-7 > a) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== g || 0 === p && 0 < k) && (e = "onReverseComplete", c = this._reversed), 0 > a && (this._active = !1, 0 === p && (this._initted || !this.vars.lazy || d) && (0 <= k && (1E-10 !== k || "isPause" !== this.data) && (d = !0), this._rawPrevTime = f = !b || a || k === a ? a : 1E-10)), this._initted || (d = !0); else if (this._totalTime =
                                    this._time = a, this._easeType) { var l = a / p, m = this._easeType, w = this._easePower; (1 === m || 3 === m && .5 <= l) && (l = 1 - l); 3 === m && (l *= 2); 1 === w ? l *= l : 2 === w ? l *= l * l : 3 === w ? l *= l * l * l : 4 === w && (l *= l * l * l * l); 1 === m ? this.ratio = 1 - l : 2 === m ? this.ratio = l : .5 > a / p ? this.ratio = l / 2 : this.ratio = 1 - l / 2 } else this.ratio = this._ease.getRatio(a / p); if (this._time !== g || d) {
                                        if (!this._initted) {
                                            if (this._init(), !this._initted || this._gc) return; if (!d && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime =
                                                g, this._rawPrevTime = k, I.push(this), void (this._lazy = [a, b]); this._time && !c ? this.ratio = this._ease.getRatio(this._time / p) : c && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                                        } !1 !== this._lazy && (this._lazy = !1); this._active || !this._paused && this._time !== g && 0 <= a && (this._active = !0); 0 !== g || (this._startAt && (0 <= a ? this._startAt.render(a, b, d) : e || (e = "_dummyGS")), !this.vars.onStart || 0 === this._time && 0 !== p || !b && this._callback("onStart")); for (k = this._firstPT; k;)k.f ? k.t[k.p](k.c * this.ratio + k.s) :
                                            k.t[k.p] = k.c * this.ratio + k.s, k = k._next; this._onUpdate && (0 > a && this._startAt && -1E-4 !== a && this._startAt.render(a, b, d), b || (this._time !== g || c || d) && this._callback("onUpdate")); e && (!this._gc || d) && (0 > a && this._startAt && !this._onUpdate && -1E-4 !== a && this._startAt.render(a, b, d), c && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this._callback(e), 0 === p && 1E-10 === this._rawPrevTime && 1E-10 !== f && (this._rawPrevTime = 0))
                                    }
                        }; g._kill = function (a, b, d) {
                            if ("all" === a && (a = null), null ==
                                a && (null == b || b === this.target)) return this._lazy = !1, this._enabled(!1, !1); b = "string" != typeof b ? b || this._targets || this.target : B.selector(b) || b; var c, f, g, p, k, m, l = d && this._time && d._startTime === this._startTime && this._timeline === d._timeline; if ((e(b) || L(b)) && "number" != typeof b[0]) for (c = b.length; -1 < --c;)this._kill(a, b[c], d) && (p = !0); else {
                                    if (this._targets) for (c = this._targets.length; -1 < --c;) {
                                        if (b === this._targets[c]) {
                                            var w = this._propLookup[c] || {}; this._overwrittenProps = this._overwrittenProps || []; var h = this._overwrittenProps[c] =
                                                a ? this._overwrittenProps[c] || {} : "all"; break
                                        }
                                    } else { if (b !== this.target) return !1; w = this._propLookup; h = this._overwrittenProps = a ? this._overwrittenProps || {} : "all" } if (w) {
                                        if (c = a || w, k = a !== h && "all" !== h && a !== w && ("object" != typeof a || !a._tempKill), d && (B.onOverwrite || this.vars.onOverwrite)) { for (f in c) w[f] && (m || (m = []), m.push(f)); if ((m || !a) && !ra(this, d, b, m)) return !1 } for (f in c) (g = w[f]) && (l && (g.f ? g.t[g.p](g.s) : g.t[g.p] = g.s, p = !0), g.pg && g.t._kill(c) && (p = !0), g.pg && 0 !== g.t._overwriteProps.length || (g._prev ? g._prev._next =
                                            g._next : g === this._firstPT && (this._firstPT = g._next), g._next && (g._next._prev = g._prev), g._next = g._prev = null), delete w[f]), k && (h[f] = 1); !this._firstPT && this._initted && this._enabled(!1, !1)
                                    }
                                } return p
                        }; g.invalidate = function () {
                            return this._notifyPluginsOfEnabled && B._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], G.prototype.invalidate.call(this), this.vars.immediateRender &&
                                (this._time = -1E-10, this.render(Math.min(0, -this._delay))), this
                        }; g._enabled = function (a, b) { if (ha || E.wake(), a && this._gc) { var d, c = this._targets; if (c) for (d = c.length; -1 < --d;)this._siblings[d] = va(c[d], this, !0); else this._siblings = va(this.target, this, !0) } return G.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? B._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1 }; B.to = function (a, b, d) { return new B(a, b, d) }; B.from = function (a, b, d) {
                            return d.runBackwards = !0, d.immediateRender = 0 != d.immediateRender,
                                new B(a, b, d)
                        }; B.fromTo = function (a, b, d, c) { return c.startAt = d, c.immediateRender = 0 != c.immediateRender && 0 != d.immediateRender, new B(a, b, c) }; B.delayedCall = function (a, b, d, c, e) { return new B(b, 0, { delay: a, onComplete: b, onCompleteParams: d, callbackScope: c, onReverseComplete: b, onReverseCompleteParams: d, immediateRender: !1, lazy: !1, useFrames: e, overwrite: 0 }) }; B.set = function (a, b) { return new B(a, 0, b) }; B.getTweensOf = function (a, b) {
                            if (null == a) return []; a = "string" != typeof a ? a : B.selector(a) || a; var d, c; if ((e(a) || L(a)) && "number" !=
                                typeof a[0]) { var f = a.length; for (d = []; -1 < --f;)d = d.concat(B.getTweensOf(a[f], b)); for (f = d.length; -1 < --f;) { var g = d[f]; for (c = f; -1 < --c;)g === d[c] && d.splice(f, 1) } } else for (d = va(a).concat(), f = d.length; -1 < --f;)(d[f]._gc || b && !d[f].isActive()) && d.splice(f, 1); return d
                        }; B.killTweensOf = B.killDelayedCallsTo = function (a, b, d) { "object" == typeof b && (d = b, b = !1); b = B.getTweensOf(a, b); for (var c = b.length; -1 < --c;)b[c]._kill(d, a) }; var oa = u("plugins.TweenPlugin", function (a, b) {
                        this._overwriteProps = (a || "").split(","); this._propName =
                            this._overwriteProps[0]; this._priority = b || 0; this._super = oa.prototype
                        }, !0); if (g = oa.prototype, oa.version = "1.19.0", oa.API = 2, g._firstPT = null, g._addTween = ma, g.setRatio = ja, g._kill = function (a) { var b, d = this._overwriteProps, c = this._firstPT; if (null != a[this._propName]) this._overwriteProps = []; else for (b = d.length; -1 < --b;)null != a[d[b]] && d.splice(b, 1); for (; c;)null != a[c.n] && (c._next && (c._next._prev = c._prev), c._prev ? (c._prev._next = c._next, c._prev = null) : this._firstPT === c && (this._firstPT = c._next)), c = c._next; return !1 },
                            g._mod = g._roundProps = function (a) { for (var b, d = this._firstPT; d;)(b = a[this._propName] || null != d.n && a[d.n.split(this._propName + "_").join("")]) && "function" == typeof b && (2 === d.f ? d.t._applyPT.m = b : d.m = b), d = d._next }, B._onPluginEvent = function (a, b) { var d, c, e, f, g = b._firstPT; if ("_onInitAllProps" === a) { for (; g;) { var k = g._next; for (c = e; c && c.pr > g.pr;)c = c._next; (g._prev = c ? c._prev : f) ? g._prev._next = g : e = g; (g._next = c) ? c._prev = g : f = g; g = k } g = b._firstPT = e } for (; g;)g.pg && "function" == typeof g.t[a] && g.t[a]() && (d = !0), g = g._next; return d },
                            oa.activate = function (a) { for (var b = a.length; -1 < --b;)a[b].API === oa.API && (W[(new a[b])._propName] = a[b]); return !0 }, m.plugin = function (a) {
                                if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition."; var b, d = a.propName, c = a.priority || 0, e = a.overwriteProps, f = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_mod", mod: "_mod", initAll: "_onInitAllProps" }, g = u("plugins." + d.charAt(0).toUpperCase() + d.substr(1) + "Plugin", function () { oa.call(this, d, c); this._overwriteProps = e || [] }, !0 === a.global), k = g.prototype =
                                    new oa(d); k.constructor = g; g.API = a.API; for (b in f) "function" == typeof a[b] && (k[f[b]] = a[b]); return g.version = a.version, oa.activate([g]), g
                            }, C = h._gsQueue) { for (a = 0; a < C.length; a++)C[a](); for (g in r) r[g].func || h.console.log("GSAP encountered missing dependency: " + g) } var ha = !1
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite");/*
 VERSION: 1.19.0
 DATE: 2016-07-14
 UPDATES AND DOCS AT: http://greensock.com

 Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin

 @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 This work is subject to the terms at http://greensock.com/standard-license or for
 Club GreenSock members, the software agreement that was issued with your membership.

 @author: Jack Doyle, jack@greensock.com
*/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (h, c, n) {
        var v = function (a) { var b, c = [], e = a.length; for (b = 0; b !== e; c.push(a[b++])); return c }, a = function (a, b, c) { var d, e = a.cycle; for (d in e) { var f = e[d]; a[d] = "function" == typeof f ? f(c, b[c]) : f[c % f.length] } delete a.cycle }, t = function (a, b, c) {
            n.call(this, a, b, c); this._cycle = 0; this._yoyo = !0 === this.vars.yoyo; this._repeat = this.vars.repeat || 0; this._repeatDelay = this.vars.repeatDelay ||
                0; this._dirty = !0; this.render = t.prototype.render
        }, b = n._internals, y = b.isSelector, q = b.isArray, e = t.prototype = n.to({}, .1, {}), r = []; t.version = "1.19.0"; e.constructor = t; e.kill()._gc = !1; t.killTweensOf = t.killDelayedCallsTo = n.killTweensOf; t.getTweensOf = n.getTweensOf; t.lagSmoothing = n.lagSmoothing; t.ticker = n.ticker; t.render = n.render; e.invalidate = function () { return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), n.prototype.invalidate.call(this) };
        e.updateTo = function (a, b) {
            var d = this.ratio, c = this.vars.immediateRender || a.immediateRender; b && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)); for (e in a) this.vars[e] = a[e]; if (this._initted || c) if (b) this._initted = !1, c && this.render(0, !0, !0); else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && n._onPluginEvent("_onDisable", this), .998 < this._time /
                this._duration) { var e = this._totalTime; this.render(0, !0, !1); this._initted = !1; this.render(e, !0, !1) } else if (this._initted = !1, this._init(), 0 < this._time || c) for (d = 1 / (1 - d), c = this._firstPT; c;)e = c.s + c.c, c.c *= d, c.s = e - c.c, c = c._next; return this
        }; e.render = function (a, d, c) {
        this._initted || 0 === this._duration && this.vars.repeat && this.invalidate(); var e, f, k, m, w, h, n, r = this._dirty ? this.totalDuration() : this._totalDuration, q = this._time, u = this._totalTime, t = this._cycle, v = this._duration, y = this._rawPrevTime; if (a >= r - 1E-7 ? (this._totalTime =
            r, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (e = !0, f = "onComplete", c = c || this._timeline.autoRemoveChildren), 0 === v && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0), (0 > y || 0 >= a && -1E-7 <= a || 1E-10 === y && "isPause" !== this.data) && y !== a && (c = !0, 1E-10 < y && (f = "onReverseComplete")), this._rawPrevTime = n = !d ||
                a || y === a ? a : 1E-10)) : 1E-7 > a ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== u || 0 === v && 0 < y) && (f = "onReverseComplete", e = this._reversed), 0 > a && (this._active = !1, 0 === v && (this._initted || !this.vars.lazy || c) && (0 <= y && (c = !0), this._rawPrevTime = n = !d || a || y === a ? a : 1E-10)), this._initted || (c = !0)) : (this._totalTime = this._time = a, 0 !== this._repeat && (k = v + this._repeatDelay, this._cycle = this._totalTime / k >> 0, 0 !== this._cycle && this._cycle === this._totalTime / k && a >= u && this._cycle-- ,
                    this._time = this._totalTime - this._cycle * k, this._yoyo && 0 !== (1 & this._cycle) && (this._time = v - this._time), this._time > v ? this._time = v : 0 > this._time && (this._time = 0)), this._easeType ? (m = this._time / v, w = this._easeType, h = this._easePower, (1 === w || 3 === w && .5 <= m) && (m = 1 - m), 3 === w && (m *= 2), 1 === h ? m *= m : 2 === h ? m *= m * m : 3 === h ? m *= m * m * m : 4 === h && (m *= m * m * m * m), 1 === w ? this.ratio = 1 - m : 2 === w ? this.ratio = m : .5 > this._time / v ? this.ratio = m / 2 : this.ratio = 1 - m / 2) : this.ratio = this._ease.getRatio(this._time / v)), q === this._time && !c && t === this._cycle) return void (u !==
                        this._totalTime && this._onUpdate && (d || this._callback("onUpdate"))); if (!this._initted) { if (this._init(), !this._initted || this._gc) return; if (!c && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = q, this._totalTime = u, this._rawPrevTime = y, this._cycle = t, b.lazyTweens.push(this), void (this._lazy = [a, d]); this._time && !e ? this.ratio = this._ease.getRatio(this._time / v) : e && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) } !1 !== this._lazy && (this._lazy =
                            !1); this._active || !this._paused && this._time !== q && 0 <= a && (this._active = !0); 0 !== u || (2 === this._initted && 0 < a && this._init(), this._startAt && (0 <= a ? this._startAt.render(a, d, c) : f || (f = "_dummyGS")), !this.vars.onStart || 0 === this._totalTime && 0 !== v || !d && this._callback("onStart")); for (k = this._firstPT; k;)k.f ? k.t[k.p](k.c * this.ratio + k.s) : k.t[k.p] = k.c * this.ratio + k.s, k = k._next; this._onUpdate && (0 > a && this._startAt && this._startTime && this._startAt.render(a, d, c), d || (this._totalTime !== u || f) && this._callback("onUpdate")); this._cycle !==
                                t && (d || this._gc || this.vars.onRepeat && this._callback("onRepeat")); f && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(a, d, c), e && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !d && this.vars[f] && this._callback(f), 0 === v && 1E-10 === this._rawPrevTime && 1E-10 !== n && (this._rawPrevTime = 0))
        }; t.to = function (a, b, c) { return new t(a, b, c) }; t.from = function (a, b, c) { return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new t(a, b, c) }; t.fromTo =
            function (a, b, c, e) { return e.startAt = c, e.immediateRender = 0 != e.immediateRender && 0 != c.immediateRender, new t(a, b, e) }; t.staggerTo = t.allTo = function (b, d, c, e, g, k, m) {
                e = e || 0; var f, w, h = 0, z = [], u = function () { c.onComplete && c.onComplete.apply(c.onCompleteScope || this, arguments); g.apply(m || c.callbackScope || this, k || r) }, C = c.cycle, Q = c.startAt && c.startAt.cycle; q(b) || ("string" == typeof b && (b = n.selector(b) || b), y(b) && (b = v(b))); b = b || []; 0 > e && (b = v(b), b.reverse(), e *= -1); var B = b.length - 1; for (f = 0; B >= f; f++) {
                    var L = {}; for (w in c) L[w] =
                        c[w]; if (C && (a(L, b, f), null != L.duration && (d = L.duration, delete L.duration)), Q) { Q = L.startAt = {}; for (w in c.startAt) Q[w] = c.startAt[w]; a(L.startAt, b, f) } L.delay = h + (L.delay || 0); f === B && g && (L.onComplete = u); z[f] = new t(b[f], d, L); h += e
                } return z
            }; t.staggerFrom = t.allFrom = function (a, b, c, e, g, k, m) { return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, t.staggerTo(a, b, c, e, g, k, m) }; t.staggerFromTo = t.allFromTo = function (a, b, c, e, g, k, m, h) {
                return e.startAt = c, e.immediateRender = 0 != e.immediateRender && 0 != c.immediateRender,
                    t.staggerTo(a, b, e, g, k, m, h)
            }; t.delayedCall = function (a, b, c, e, g) { return new t(b, 0, { delay: a, onComplete: b, onCompleteParams: c, callbackScope: e, onReverseComplete: b, onReverseCompleteParams: c, immediateRender: !1, useFrames: g, overwrite: 0 }) }; t.set = function (a, b) { return new t(a, 0, b) }; t.isTweening = function (a) { return 0 < n.getTweensOf(a, !0).length }; var k = function (a, b) { for (var d = [], c = 0, e = a._first; e;)e instanceof n ? d[c++] = e : (b && (d[c++] = e), d = d.concat(k(e, b)), c = d.length), e = e._next; return d }, m = t.getAllTweens = function (a) {
                return k(h._rootTimeline,
                    a).concat(k(h._rootFramesTimeline, a))
            }; t.killAll = function (a, b, e, k) { null == b && (b = !0); null == e && (e = !0); var d, f, w = m(0 != k), h = w.length, n = b && e && k; for (f = 0; h > f; f++)k = w[f], (n || k instanceof c || (d = k.target === k.vars.onComplete) && e || b && !d) && (a ? k.totalTime(k._reversed ? 0 : k.totalDuration()) : k._enabled(!1, !1)) }; t.killChildTweensOf = function (a, d) {
                if (null != a) {
                    var c, e = b.tweenLookup; if ("string" == typeof a && (a = n.selector(a) || a), y(a) && (a = v(a)), q(a)) for (c = a.length; -1 < --c;)t.killChildTweensOf(a[c], d); else {
                        var f = []; for (k in e) for (c =
                            e[k].target.parentNode; c;)c === a && (f = f.concat(e[k].tweens)), c = c.parentNode; var k = f.length; for (c = 0; k > c; c++)d && f[c].totalTime(f[c].totalDuration()), f[c]._enabled(!1, !1)
                    }
                }
            }; var u = function (a, b, e, k) { b = !1 !== b; e = !1 !== e; k = !1 !== k; for (var d, f = m(k), h = b && e && k, w = f.length; -1 < --w;)k = f[w], (h || k instanceof c || (d = k.target === k.vars.onComplete) && e || b && !d) && k.paused(a) }; return t.pauseAll = function (a, b, c) { u(!0, a, b, c) }, t.resumeAll = function (a, b, c) { u(!1, a, b, c) }, t.globalTimeScale = function (a) {
                var b = h._rootTimeline, c = n.ticker.time;
                return arguments.length ? (a = a || 1E-10, b._startTime = c - (c - b._startTime) * b._timeScale / a, b = h._rootFramesTimeline, c = n.ticker.frame, b._startTime = c - (c - b._startTime) * b._timeScale / a, b._timeScale = h._rootTimeline._timeScale = a, a) : b._timeScale
            }, e.progress = function (a, b) { return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration() }, e.totalProgress = function (a, b) {
                return arguments.length ? this.totalTime(this.totalDuration() *
                    a, b) : this._totalTime / this.totalDuration()
            }, e.time = function (a, b) { return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, b)) : this._time }, e.duration = function (a) { return arguments.length ? h.prototype.duration.call(this, a) : this._duration }, e.totalDuration = function (a) {
                return arguments.length ?
                    -1 === this._repeat ? this : this.duration((a - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
            }, e.repeat = function (a) { return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat }, e.repeatDelay = function (a) { return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay }, e.yoyo = function (a) {
                return arguments.length ?
                    (this._yoyo = a, this) : this._yoyo
            }, t
    }, !0); _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (h, c, n) {
        var v = function (a) {
            c.call(this, a); this._labels = {}; this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren; this.smoothChildTiming = !0 === this.vars.smoothChildTiming; this._sortChildren = !0; this._onUpdate = this.vars.onUpdate; var b, d = this.vars; for (b in d) a = d[b], y(a) && -1 !== a.join("").indexOf("{self}") && (d[b] = this._swapSelfInParams(a)); y(d.tweens) && this.add(d.tweens,
                0, d.align, d.stagger)
        }, a = n._internals, t = v._internals = {}, b = a.isSelector, y = a.isArray, q = a.lazyTweens, e = a.lazyRender, r = _gsScope._gsDefine.globals, k = function (a) { var b, d = {}; for (b in a) d[b] = a[b]; return d }, m = function (a, b, c) { var d, e = a.cycle; for (d in e) { var f = e[d]; a[d] = "function" == typeof f ? f.call(b[c], c) : f[c % f.length] } delete a.cycle }, u = t.pauseCallback = function () { }, f = function (a) { var b, d = [], c = a.length; for (b = 0; b !== c; d.push(a[b++])); return d }; a = v.prototype = new c; return v.version = "1.19.0", a.constructor = v, a.kill()._gc =
            a._forcingPlayhead = a._hasPause = !1, a.to = function (a, b, c, e) { var d = c.repeat && r.TweenMax || n; return b ? this.add(new d(a, b, c), e) : this.set(a, c, e) }, a.from = function (a, b, c, e) { return this.add((c.repeat && r.TweenMax || n).from(a, b, c), e) }, a.fromTo = function (a, b, c, e, f) { var d = e.repeat && r.TweenMax || n; return b ? this.add(d.fromTo(a, b, c, e), f) : this.set(a, e, f) }, a.staggerTo = function (a, c, e, g, h, r, u, q) {
                q = new v({ onComplete: r, onCompleteParams: u, callbackScope: q, smoothChildTiming: this.smoothChildTiming }); var d = e.cycle; "string" == typeof a &&
                    (a = n.selector(a) || a); a = a || []; b(a) && (a = f(a)); g = g || 0; 0 > g && (a = f(a), a.reverse(), g *= -1); for (u = 0; u < a.length; u++)r = k(e), r.startAt && (r.startAt = k(r.startAt), r.startAt.cycle && m(r.startAt, a, u)), d && (m(r, a, u), null != r.duration && (c = r.duration, delete r.duration)), q.to(a[u], c, r, u * g); return this.add(q, h)
            }, a.staggerFrom = function (a, b, c, e, f, k, m, h) { return c.immediateRender = 0 != c.immediateRender, c.runBackwards = !0, this.staggerTo(a, b, c, e, f, k, m, h) }, a.staggerFromTo = function (a, b, c, e, f, k, m, h, n) {
                return e.startAt = c, e.immediateRender =
                    0 != e.immediateRender && 0 != c.immediateRender, this.staggerTo(a, b, e, f, k, m, h, n)
            }, a.call = function (a, b, c, e) { return this.add(n.delayedCall(0, a, b, c), e) }, a.set = function (a, b, c) { return c = this._parseTimeOrLabel(c, 0, !0), null == b.immediateRender && (b.immediateRender = c === this._time && !this._paused), this.add(new n(a, 0, b), c) }, v.exportRoot = function (a, b) {
                a = a || {}; null == a.smoothChildTiming && (a.smoothChildTiming = !0); var d, c = new v(a), e = c._timeline; null == b && (b = !0); e._remove(c, !0); c._startTime = 0; c._rawPrevTime = c._time = c._totalTime =
                    e._time; for (d = e._first; d;) { var f = d._next; b && d instanceof n && d.target === d.vars.onComplete || c.add(d, d._startTime - d._delay); d = f } return e.add(c, 0), c
            }, a.add = function (a, b, e, f) {
                var d, g; if ("number" != typeof b && (b = this._parseTimeOrLabel(b, 0, !0, a)), !(a instanceof h)) {
                    if (a instanceof Array || a && a.push && y(a)) {
                        e = e || "normal"; f = f || 0; var k = a.length; for (d = 0; k > d; d++)y(g = a[d]) && (g = new v({ tweens: g })), this.add(g, b), "string" != typeof g && "function" != typeof g && ("sequence" === e ? b = g._startTime + g.totalDuration() / g._timeScale : "start" ===
                            e && (g._startTime -= g.delay())), b += f; return this._uncache(!0)
                    } if ("string" == typeof a) return this.addLabel(a, b); if ("function" != typeof a) throw "Cannot add " + a + " into the timeline; it is not a tween, timeline, function, or string."; a = n.delayedCall(0, a)
                } if (c.prototype.add.call(this, a, b), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()) for (e = this, a = e.rawTime() > a._startTime; e._timeline;)a && e._timeline.smoothChildTiming ? e.totalTime(e._totalTime, !0) : e._gc && e._enabled(!0,
                    !1), e = e._timeline; return this
            }, a.remove = function (a) { if (a instanceof h) { this._remove(a, !1); var b = a._timeline = a.vars.useFrames ? h._rootFramesTimeline : h._rootTimeline; return a._startTime = (a._paused ? a._pauseTime : b._time) - (a._reversed ? a.totalDuration() - a._totalTime : a._totalTime) / a._timeScale, this } if (a instanceof Array || a && a.push && y(a)) { for (b = a.length; -1 < --b;)this.remove(a[b]); return this } return "string" == typeof a ? this.removeLabel(a) : this.kill(null, a) }, a._remove = function (a, b) {
                c.prototype._remove.call(this,
                    a, b); var d = this._last; return d ? this._time > d._startTime + d._totalDuration / d._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
            }, a.append = function (a, b) { return this.add(a, this._parseTimeOrLabel(null, b, !0, a)) }, a.insert = a.insertMultiple = function (a, b, c, e) { return this.add(a, b || 0, c, e) }, a.appendMultiple = function (a, b, c, e) { return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, e) }, a.addLabel = function (a, b) {
                return this._labels[a] =
                    this._parseTimeOrLabel(b), this
            }, a.addPause = function (a, b, c, e) { c = n.delayedCall(0, u, c, e || this); return c.vars.onComplete = c.vars.onReverseComplete = b, c.data = "isPause", this._hasPause = !0, this.add(c, a) }, a.removeLabel = function (a) { return delete this._labels[a], this }, a.getLabelTime = function (a) { return null != this._labels[a] ? this._labels[a] : -1 }, a._parseTimeOrLabel = function (a, b, c, e) {
                var d; if (e instanceof h && e.timeline === this) this.remove(e); else if (e && (e instanceof Array || e.push && y(e))) for (d = e.length; -1 < --d;)e[d] instanceof
                    h && e[d].timeline === this && this.remove(e[d]); if ("string" == typeof b) return this._parseTimeOrLabel(b, c && "number" == typeof a && null == this._labels[b] ? a - this.duration() : 0, c); if (b = b || 0, "string" != typeof a || !isNaN(a) && null == this._labels[a]) null == a && (a = this.duration()); else { if (d = a.indexOf("="), -1 === d) return null == this._labels[a] ? c ? this._labels[a] = this.duration() + b : b : this._labels[a] + b; b = parseInt(a.charAt(d - 1) + "1", 10) * Number(a.substr(d + 1)); a = 1 < d ? this._parseTimeOrLabel(a.substr(0, d - 1), 0, c) : this.duration() } return Number(a) +
                        b
            }, a.seek = function (a, b) { return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), !1 !== b) }, a.stop = function () { return this.paused(!0) }, a.gotoAndPlay = function (a, b) { return this.play(a, b) }, a.gotoAndStop = function (a, b) { return this.pause(a, b) }, a.render = function (a, b, c) {
            this._gc && this._enabled(!0, !1); var d, f, k, m, h, n, w, r = this._dirty ? this.totalDuration() : this._totalDuration, u = this._time, z = this._startTime, t = this._timeScale, v = this._paused; if (a >= r - 1E-7) this._totalTime = this._time = r, this._reversed || this._hasPausedChild() ||
                (f = !0, m = "onComplete", h = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= a && -1E-7 <= a || 0 > this._rawPrevTime || 1E-10 === this._rawPrevTime) && this._rawPrevTime !== a && this._first && (h = !0, 1E-10 < this._rawPrevTime && (m = "onReverseComplete"))), this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : 1E-10, a = r + 1E-4; else if (1E-7 > a) if (this._totalTime = this._time = 0, (0 !== u || 0 === this._duration && 1E-10 !== this._rawPrevTime && (0 < this._rawPrevTime || 0 > a && 0 <= this._rawPrevTime)) && (m = "onReverseComplete", f = this._reversed),
                    0 > a) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (h = f = !0, m = "onReverseComplete") : 0 <= this._rawPrevTime && this._first && (h = !0), this._rawPrevTime = a; else { if (this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : 1E-10, 0 === a && f) for (d = this._first; d && 0 === d._startTime;)d._duration || (f = !1), d = d._next; a = 0; this._initted || (h = !0) } else {
                        if (this._hasPause && !this._forcingPlayhead && !b) {
                            if (a >= u) for (d = this._first; d && d._startTime <= a && !n;)d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime &&
                                0 === this._rawPrevTime || (n = d), d = d._next; else for (d = this._last; d && d._startTime >= a && !n;)d._duration || "isPause" === d.data && 0 < d._rawPrevTime && (n = d), d = d._prev; n && (this._time = a = n._startTime, this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay))
                        } this._totalTime = this._time = this._rawPrevTime = a
            } if (this._time !== u && this._first || c || h || n) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== u && 0 < a && (this._active = !0), 0 === u && this.vars.onStart && (0 === this._time && this._duration ||
                    b || this._callback("onStart")), w = this._time, w >= u) for (d = this._first; d && (k = d._next, w === this._time && (!this._paused || v));)(d._active || d._startTime <= w && !d._paused && !d._gc) && (n === d && this.pause(), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = k; else for (d = this._last; d && (k = d._prev, w === this._time && (!this._paused || v));) {
                        if (d._active || d._startTime <= u && !d._paused && !d._gc) {
                            if (n === d) {
                                for (n = d._prev; n && n.endTime() >
                                    this._time;)n.render(n._reversed ? n.totalDuration() - (a - n._startTime) * n._timeScale : (a - n._startTime) * n._timeScale, b, c), n = n._prev; n = null; this.pause()
                            } d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)
                        } d = k
                    } this._onUpdate && (b || (q.length && e(), this._callback("onUpdate"))); m && (this._gc || (z === this._startTime || t !== this._timeScale) && (0 === this._time || r >= this.totalDuration()) && (f && (q.length && e(), this._timeline.autoRemoveChildren &&
                        this._enabled(!1, !1), this._active = !1), !b && this.vars[m] && this._callback(m)))
            }
            }, a._hasPausedChild = function () { for (var a = this._first; a;) { if (a._paused || a instanceof v && a._hasPausedChild()) return !0; a = a._next } return !1 }, a.getChildren = function (a, b, c, e) { e = e || -9999999999; for (var d = [], f = this._first, g = 0; f;)f._startTime < e || (f instanceof n ? !1 !== b && (d[g++] = f) : (!1 !== c && (d[g++] = f), !1 !== a && (d = d.concat(f.getChildren(!0, b, c)), g = d.length))), f = f._next; return d }, a.getTweensOf = function (a, b) {
                var d, c = this._gc, e = [], f = 0; c && this._enabled(!0,
                    !0); var k = n.getTweensOf(a); for (d = k.length; -1 < --d;)(k[d].timeline === this || b && this._contains(k[d])) && (e[f++] = k[d]); return c && this._enabled(!1, !0), e
            }, a.recent = function () { return this._recent }, a._contains = function (a) { for (a = a.timeline; a;) { if (a === this) return !0; a = a.timeline } return !1 }, a.shiftChildren = function (a, b, c) { c = c || 0; for (var d, e = this._first, f = this._labels; e;)e._startTime >= c && (e._startTime += a), e = e._next; if (b) for (d in f) f[d] >= c && (f[d] += a); return this._uncache(!0) }, a._kill = function (a, b) {
                if (!a && !b) return this._enabled(!1,
                    !1); for (var d = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), c = d.length, e = !1; -1 < --c;)d[c]._kill(a, b) && (e = !0); return e
            }, a.clear = function (a) { var b = this.getChildren(!1, !0, !0), d = b.length; for (this._time = this._totalTime = 0; -1 < --d;)b[d]._enabled(!1, !1); return !1 !== a && (this._labels = {}), this._uncache(!0) }, a.invalidate = function () { for (var a = this._first; a;)a.invalidate(), a = a._next; return h.prototype.invalidate.call(this) }, a._enabled = function (a, b) {
                if (a === this._gc) for (var d = this._first; d;)d._enabled(a, !0), d = d._next;
                return c.prototype._enabled.call(this, a, b)
            }, a.totalTime = function (a, b, c) { this._forcingPlayhead = !0; var d = h.prototype.totalTime.apply(this, arguments); return this._forcingPlayhead = !1, d }, a.duration = function (a) { return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a), this) : (this._dirty && this.totalDuration(), this._duration) }, a.totalDuration = function (a) {
                if (!arguments.length) {
                    if (this._dirty) {
                        var b = 0; var c = this._last; for (var d = 999999999999; c;) {
                            var e = c._prev; c._dirty && c.totalDuration();
                            c._startTime > d && this._sortChildren && !c._paused ? this.add(c, c._startTime - c._delay) : d = c._startTime; 0 > c._startTime && !c._paused && (b -= c._startTime, this._timeline.smoothChildTiming && (this._startTime += c._startTime / this._timeScale), this.shiftChildren(-c._startTime, !1, -9999999999), d = 0); c = c._startTime + c._totalDuration / c._timeScale; c > b && (b = c); c = e
                        } this._duration = this._totalDuration = b; this._dirty = !1
                    } return this._totalDuration
                } return a && this.totalDuration() ? this.timeScale(this._totalDuration / a) : this
            }, a.paused = function (a) {
                if (!a) for (var b =
                    this._first, c = this._time; b;)b._startTime === c && "isPause" === b.data && (b._rawPrevTime = 0), b = b._next; return h.prototype.paused.apply(this, arguments)
            }, a.usesFrames = function () { for (var a = this._timeline; a._timeline;)a = a._timeline; return a === h._rootFramesTimeline }, a.rawTime = function () { return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale }, v
    }, !0); _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (h, c, n) {
        var v = function (a) {
            h.call(this, a);
            this._repeat = this.vars.repeat || 0; this._repeatDelay = this.vars.repeatDelay || 0; this._cycle = 0; this._yoyo = !0 === this.vars.yoyo; this._dirty = !0
        }, a = c._internals, t = a.lazyTweens, b = a.lazyRender, y = _gsScope._gsDefine.globals, q = new n(null, null, 1, 0); n = v.prototype = new h; return n.constructor = v, n.kill()._gc = !1, v.version = "1.19.0", n.invalidate = function () { return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), h.prototype.invalidate.call(this) },
            n.addCallback = function (a, b, k, m) { return this.add(c.delayedCall(0, a, k, m), b) }, n.removeCallback = function (a, b) { if (a) if (null == b) this._kill(null, a); else for (var c = this.getTweensOf(a, !1), e = c.length, h = this._parseTimeOrLabel(b); -1 < --e;)c[e]._startTime === h && c[e]._enabled(!1, !1); return this }, n.removePause = function (a) { return this.removeCallback(h._internals.pauseCallback, a) }, n.tweenTo = function (a, b) {
                b = b || {}; var e, m, h, f = { ease: q, useFrames: this.usesFrames(), immediateRender: !1 }, d = b.repeat && y.TweenMax || c; for (m in b) f[m] =
                    b[m]; return f.time = this._parseTimeOrLabel(a), e = Math.abs(Number(f.time) - this._time) / this._timeScale || .001, h = new d(this, e, f), f.onStart = function () { h.target.paused(!0); h.vars.time !== h.target.time() && e === h.duration() && h.duration(Math.abs(h.vars.time - h.target.time()) / h.target._timeScale); b.onStart && h._callback("onStart") }, h
            }, n.tweenFromTo = function (a, b, c) {
                c = c || {}; a = this._parseTimeOrLabel(a); c.startAt = { onComplete: this.seek, onCompleteParams: [a], callbackScope: this }; c.immediateRender = !1 !== c.immediateRender;
                b = this.tweenTo(b, c); return b.duration(Math.abs(b.vars.time - a) / this._timeScale || .001)
            }, n.render = function (a, c, k) {
            this._gc && this._enabled(!0, !1); var e, h, f, d, n, q, g, r = this._dirty ? this.totalDuration() : this._totalDuration, v = this._duration, y = this._time, R = this._totalTime, O = this._startTime, J = this._timeScale, G = this._rawPrevTime, E = this._paused, P = this._cycle; if (a >= r - 1E-7) this._locked || (this._totalTime = r, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (h = !0, d = "onComplete", n = !!this._timeline.autoRemoveChildren,
                0 === this._duration && (0 >= a && -1E-7 <= a || 0 > G || 1E-10 === G) && G !== a && this._first && (n = !0, 1E-10 < G && (d = "onReverseComplete"))), this._rawPrevTime = this._duration || !c || a || this._rawPrevTime === a ? a : 1E-10, this._yoyo && 0 !== (1 & this._cycle) ? this._time = a = 0 : (this._time = v, a = v + 1E-4); else if (1E-7 > a) if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== y || 0 === v && 1E-10 !== G && (0 < G || 0 > a && 0 <= G) && !this._locked) && (d = "onReverseComplete", h = this._reversed), 0 > a) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ?
                    (n = h = !0, d = "onReverseComplete") : 0 <= G && this._first && (n = !0), this._rawPrevTime = a; else { if (this._rawPrevTime = v || !c || a || this._rawPrevTime === a ? a : 1E-10, 0 === a && h) for (e = this._first; e && 0 === e._startTime;)e._duration || (h = !1), e = e._next; a = 0; this._initted || (n = !0) } else if (0 === v && 0 > G && (n = !0), this._time = this._rawPrevTime = a, this._locked || (this._totalTime = a, 0 !== this._repeat && (e = v + this._repeatDelay, this._cycle = this._totalTime / e >> 0, 0 !== this._cycle && this._cycle === this._totalTime / e && a >= R && this._cycle-- , this._time = this._totalTime -
                        this._cycle * e, this._yoyo && 0 !== (1 & this._cycle) && (this._time = v - this._time), this._time > v ? (this._time = v, a = v + 1E-4) : 0 > this._time ? this._time = a = 0 : a = this._time)), this._hasPause && !this._forcingPlayhead && !c) {
                            if (a = this._time, a >= y) for (e = this._first; e && e._startTime <= a && !q;)e._duration || "isPause" !== e.data || e.ratio || 0 === e._startTime && 0 === this._rawPrevTime || (q = e), e = e._next; else for (e = this._last; e && e._startTime >= a && !q;)e._duration || "isPause" === e.data && 0 < e._rawPrevTime && (q = e), e = e._prev; q && (this._time = a = q._startTime,
                                this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay))
            } if (this._cycle !== P && !this._locked) {
                e = this._yoyo && 0 !== (1 & P); var B = e === (this._yoyo && 0 !== (1 & this._cycle)), L = this._totalTime, I = this._cycle, T = this._rawPrevTime, ba = this._time; if ((this._totalTime = P * v, this._cycle < P ? e = !e : this._totalTime += v, this._time = y, this._rawPrevTime = 0 === v ? G - 1E-4 : G, this._cycle = P, this._locked = !0, y = e ? 0 : v, this.render(y, c, 0 === v), c || this._gc || this.vars.onRepeat && this._callback("onRepeat"), y !== this._time) || (B && (y = e ? v + 1E-4 :
                    -1E-4, this.render(y, !0, !1)), this._locked = !1, this._paused && !E)) return; this._time = ba; this._totalTime = L; this._cycle = I; this._rawPrevTime = T
            } if (!(this._time !== y && this._first || k || n || q)) return void (R !== this._totalTime && this._onUpdate && (c || this._callback("onUpdate"))); if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== R && 0 < a && (this._active = !0), 0 === R && this.vars.onStart && (0 === this._totalTime && this._totalDuration || c || this._callback("onStart")), g = this._time, g >= y) for (e = this._first; e &&
                (f = e._next, g === this._time && (!this._paused || E));)(e._active || e._startTime <= this._time && !e._paused && !e._gc) && (q === e && this.pause(), e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, c, k) : e.render((a - e._startTime) * e._timeScale, c, k)), e = f; else for (e = this._last; e && (f = e._prev, g === this._time && (!this._paused || E));) {
                    if (e._active || e._startTime <= y && !e._paused && !e._gc) {
                        if (q === e) {
                            for (q = e._prev; q && q.endTime() > this._time;)q.render(q._reversed ? q.totalDuration() - (a - q._startTime) *
                                q._timeScale : (a - q._startTime) * q._timeScale, c, k), q = q._prev; q = null; this.pause()
                        } e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, c, k) : e.render((a - e._startTime) * e._timeScale, c, k)
                    } e = f
                } this._onUpdate && (c || (t.length && b(), this._callback("onUpdate"))); d && (this._locked || this._gc || (O === this._startTime || J !== this._timeScale) && (0 === this._time || r >= this.totalDuration()) && (h && (t.length && b(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !c &&
                    this.vars[d] && this._callback(d)))
            }, n.getActive = function (a, b, c) { null == a && (a = !0); null == b && (b = !0); null == c && (c = !1); var e = []; c = this.getChildren(a, b, c); var k = 0, f = c.length; for (a = 0; f > a; a++)b = c[a], b.isActive() && (e[k++] = b); return e }, n.getLabelAfter = function (a) { a || 0 !== a && (a = this._time); var b, c = this.getLabelsArray(), e = c.length; for (b = 0; e > b; b++)if (c[b].time > a) return c[b].name; return null }, n.getLabelBefore = function (a) {
            null == a && (a = this._time); for (var b = this.getLabelsArray(), c = b.length; -1 < --c;)if (b[c].time < a) return b[c].name;
                return null
            }, n.getLabelsArray = function () { var a, b = [], c = 0; for (a in this._labels) b[c++] = { time: this._labels[a], name: a }; return b.sort(function (a, b) { return a.time - b.time }), b }, n.progress = function (a, b) { return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration() }, n.totalProgress = function (a, b) { return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration() }, n.totalDuration =
            function (a) { return arguments.length ? -1 !== this._repeat && a ? this.timeScale(this.totalDuration() / a) : this : (this._dirty && (h.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration) }, n.time = function (a, b) {
                return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) :
                    0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, b)) : this._time
            }, n.repeat = function (a) { return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat }, n.repeatDelay = function (a) { return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay }, n.yoyo = function (a) { return arguments.length ? (this._yoyo = a, this) : this._yoyo }, n.currentLabel = function (a) { return arguments.length ? this.seek(a, !0) : this.getLabelBefore(this._time + 1E-8) }, v
    }, !0); (function () {
        var h =
            180 / Math.PI, c = [], n = [], v = [], a = {}, t = _gsScope._gsDefine.globals, b = function (a, b, c, e) { c === e && (c = e - (e - b) / 1E6); a === b && (b = a + (c - a) / 1E6); this.a = a; this.b = b; this.c = c; this.d = e; this.da = e - a; this.ca = c - a; this.ba = b - a }, y = function (a, b, c, e) { var d = { a: a }, f = {}, k = {}, g = { c: e }, m = (a + b) / 2, h = (b + c) / 2; c = (c + e) / 2; b = (m + h) / 2; h = (h + c) / 2; var n = (h - b) / 8; return d.b = m + (a - m) / 4, f.b = b + n, d.c = f.a = (d.b + f.b) / 2, f.c = k.a = (b + h) / 2, k.b = h - n, g.b = c + (e - c) / 4, k.c = g.a = (k.b + g.b) / 2, [d, f, k, g] }, q = function (e, m, h, f, d, q) {
                var k, g, w = {}, r = [], u = q || e[0]; d = "string" == typeof d ?
                    "," + d + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,"; null == m && (m = 1); for (g in e[0]) r.push(g); if (1 < e.length) { var t = e[e.length - 1]; var O = !0; for (k = r.length; -1 < --k;)if (g = r[k], .05 < Math.abs(u[g] - t[g])) { O = !1; break } O && (e = e.concat(), q && e.unshift(q), e.push(e[1]), q = e[e.length - 3]) } c.length = n.length = v.length = 0; for (k = r.length; -1 < --k;) {
                        g = r[k]; a[g] = -1 !== d.indexOf("," + g + ","); t = g; var J = void 0;
                        u = void 0; var G, E = void 0, P = e, B = g, L = a[g]; var I = q; var T = []; if (I) for (P = [I].concat(P), G = P.length; -1 < --G;)"string" == typeof (J = P[G][B]) && "=" === J.charAt(1) && (P[G][B] = I[B] + Number(J.charAt(0) + J.substr(2))); if (E = P.length - 2, 0 > E) u = (T[0] = new b(P[0][B], 0, 0, P[-1 > E ? 0 : 1][B]), T); else { for (G = 0; E > G; G++)I = P[G][B], J = P[G + 1][B], T[G] = new b(I, 0, 0, J), L && (u = P[G + 2][B], c[G] = (c[G] || 0) + (J - I) * (J - I), n[G] = (n[G] || 0) + (u - J) * (u - J)); u = (T[G] = new b(P[G][B], 0, 0, P[G + 1][B]), T) } w[t] = u
                    } for (k = c.length; -1 < --k;)c[k] = Math.sqrt(c[k]), n[k] = Math.sqrt(n[k]);
                if (!f) { for (k = r.length; -1 < --k;)if (a[g]) for (e = w[r[k]], t = e.length - 1, d = 0; t > d; d++)q = e[d + 1].da / n[d] + e[d].da / c[d] || 0, v[d] = (v[d] || 0) + q * q; for (k = v.length; -1 < --k;)v[k] = Math.sqrt(v[k]) } k = r.length; for (d = h ? 4 : 1; -1 < --k;) {
                    g = r[k]; e = w[g]; G = u = t = q = void 0; B = P = E = void 0; var ba; L = e; T = m; J = h; I = f; var ja = a[g], U = L.length - 1, ma = 0, W = L[0].a; for (ba = 0; U > ba; ba++) {
                        g = L[ma]; var V = g.a; var aa = g.d; var da = L[ma + 1].d; ja ? (u = c[ba], t = n[ba], q = (t + u) * T * .25 / (I ? .5 : v[ba] || .5), B = aa - (aa - V) * (I ? .5 * T : 0 !== u ? q / u : 0), P = aa + (da - aa) * (I ? .5 * T : 0 !== t ? q / t : 0), E = aa - (B +
                            ((P - B) * (3 * u / (u + t) + .5) / 4 || 0))) : (B = aa - (aa - V) * T * .5, P = aa + (da - aa) * T * .5, E = aa - (B + P) / 2); B += E; P += E; g.c = da = B; 0 !== ba ? g.b = W : g.b = W = g.a + .6 * (g.c - g.a); g.da = aa - V; g.ca = da - V; g.ba = W - V; J ? (G = y(V, W, da, aa), L.splice(ma, 1, G[0], G[1], G[2], G[3]), ma += 4) : ma++; W = P
                    } g = L[ma]; g.b = W; g.c = W + .4 * (g.d - W); g.da = g.d - g.a; g.ca = g.c - g.a; g.ba = W - g.a; J && (G = y(g.a, W, g.c, g.d), L.splice(ma, 1, G[0], G[1], G[2], G[3])); O && (e.splice(0, d), e.splice(e.length - d, d))
                } return w
            }, e = _gsScope._gsDefine.plugin({
                propName: "bezier", priority: -1, version: "1.3.7", API: 2, global: !0,
                init: function (a, c, e) {
                this._target = a; c instanceof Array && (c = { values: c }); this._func = {}; this._mod = {}; this._props = []; this._timeRes = null == c.timeResolution ? 6 : parseInt(c.timeResolution, 10); var f, d, k, m = c.values || [], g = {}; var h = m[0]; this._autoRotate = (f = c.autoRotate || e.vars.orientToBezier) ? f instanceof Array ? f : [["x", "y", "rotation", !0 === f ? 0 : Number(f) || 0]] : null; for (n in h) this._props.push(n); for (h = this._props.length; -1 < --h;) {
                    var n = this._props[h]; this._overwriteProps.push(n); f = this._func[n] = "function" == typeof a[n];
                    g[n] = f ? a[n.indexOf("set") || "function" != typeof a["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(a[n]); k || g[n] !== m[0][n] && (k = g)
                } if ("cubic" !== c.type && "quadratic" !== c.type && "soft" !== c.type) g = q(m, isNaN(c.curviness) ? 1 : c.curviness, !1, "thruBasic" === c.type, c.correlate, k); else {
                    h = m; m = (m = c.type) || "soft"; var u, r, t; c = {}; k = "cubic" === m ? 3 : 2; var v = "soft" === m, y = []; if (v && g && (h = [g].concat(h)), null == h || h.length < k + 1) throw "invalid Bezier data"; for (E in h[0]) y.push(E); for (r = y.length; -1 < --r;) {
                        var E = y[r]; c[E] = f = []; var P =
                            0; var B = h.length; for (t = 0; B > t; t++)m = null == g ? h[t][E] : "string" == typeof (u = h[t][E]) && "=" === u.charAt(1) ? g[E] + Number(u.charAt(0) + u.substr(2)) : Number(u), v && 1 < t && B - 1 > t && (f[P++] = (m + f[P - 2]) / 2), f[P++] = m; B = P - k + 1; for (t = P = 0; B > t; t += k) { m = f[t]; E = f[t + 1]; u = f[t + 2]; var L = 2 === k ? 0 : f[t + 3]; f[P++] = u = 3 === k ? new b(m, E, u, L) : new b(m, (2 * E + m) / 3, (2 * E + u) / 3, u) } f.length = P
                    } g = c
                } if (this._beziers = g, this._segCount = this._beziers[n].length, this._timeRes) {
                    f = this._beziers; n = this._timeRes; n = n >> 0 || 6; g = []; E = []; h = u = 0; c = n - 1; k = []; m = []; for (d in f) for (B =
                        f[d], P = g, v = n, y = 1 / v, L = B.length; -1 < --L;) { var I = B[L]; var T = I.a; t = I.d - T; r = I.c - T; T = I.b - T; var ba = 0; for (I = 1; v >= I; I++) { var ja = y * I; var U = 1 - ja; ja = ba - (ba = (ja * ja * t + 3 * U * (ja * r + U * T)) * ja); U = L * v + I - 1; P[U] = (P[U] || 0) + ja * ja } } f = g.length; for (d = 0; f > d; d++)u += Math.sqrt(g[d]), r = d % n, m[r] = u, r === c && (h += u, r = d / n >> 0, k[r] = m, E[r] = h, u = 0, m = []); this._length = h; this._lengths = E; this._segments = k; this._l1 = this._li = this._s1 = this._si = 0; this._l2 = this._lengths[0]; this._curSeg = this._segments[0]; this._s2 = this._curSeg[0]; this._prec = 1 / this._curSeg.length
                } if (f =
                    this._autoRotate) for (this._initialRotations = [], f[0] instanceof Array || (this._autoRotate = f = [f]), h = f.length; -1 < --h;) { for (d = 0; 3 > d; d++)n = f[h][d], this._func[n] = "function" == typeof a[n] ? a[n.indexOf("set") || "function" != typeof a["get" + n.substr(3)] ? n : "get" + n.substr(3)] : !1; n = f[h][2]; this._initialRotations[h] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0; this._overwriteProps.push(n) } return this._startRatio = e.vars.runBackwards ? 1 : 0, !0
                }, set: function (a) {
                    var b, c, e; var d = this._segCount; var k = this._func,
                        n = this._target, g = a !== this._startRatio; if (this._timeRes) {
                            if (b = this._lengths, e = this._curSeg, a *= this._length, c = this._li, a > this._l2 && d - 1 > c) { for (--d; d > c && (this._l2 = b[++c]) <= a;); this._l1 = b[c - 1]; this._li = c; this._curSeg = e = this._segments[c]; this._s2 = e[this._s1 = this._si = 0] } else if (a < this._l1 && 0 < c) { for (; 0 < c && (this._l1 = b[--c]) >= a;); 0 === c && a < this._l1 ? this._l1 = 0 : c++; this._l2 = b[c]; this._li = c; this._curSeg = e = this._segments[c]; this._s1 = e[(this._si = e.length - 1) - 1] || 0; this._s2 = e[this._si] } if (b = c, a -= this._l1, c = this._si,
                                a > this._s2 && c < e.length - 1) { for (d = e.length - 1; d > c && (this._s2 = e[++c]) <= a;); this._s1 = e[c - 1]; this._si = c } else if (a < this._s1 && 0 < c) { for (; 0 < c && (this._s1 = e[--c]) >= a;); 0 === c && a < this._s1 ? this._s1 = 0 : c++; this._s2 = e[c]; this._si = c } d = (c + (a - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                        } else b = 0 > a ? 0 : 1 <= a ? d - 1 : d * a >> 0, d *= a - 1 / d * b; var q = 1 - d; for (c = this._props.length; -1 < --c;) { a = this._props[c]; e = this._beziers[a][b]; var r = (d * d * e.da + 3 * q * (d * e.ca + q * e.ba)) * d + e.a; this._mod[a] && (r = this._mod[a](r, n)); k[a] ? n[a](r) : n[a] = r } if (this._autoRotate) {
                            var t,
                            v, y, J, G = this._autoRotate; for (c = G.length; -1 < --c;) { a = G[c][2]; var E = G[c][3] || 0; var P = !0 === G[c][4] ? 1 : h; e = this._beziers[G[c][0]]; q = this._beziers[G[c][1]]; e && q && (e = e[b], q = q[b], t = e.a + (e.b - e.a) * d, y = e.b + (e.c - e.b) * d, t += (y - t) * d, y += (e.c + (e.d - e.c) * d - y) * d, v = q.a + (q.b - q.a) * d, J = q.b + (q.c - q.b) * d, v += (J - v) * d, J += (q.c + (q.d - q.c) * d - J) * d, r = g ? Math.atan2(J - v, y - t) * P + E : this._initialRotations[c], this._mod[a] && (r = this._mod[a](r, n)), k[a] ? n[a](r) : n[a] = r) }
                        }
                }
            }), r = e.prototype; e.bezierThrough = q; e.cubicToQuadratic = y; e._autoCSS = !0; e.quadraticToCubic =
                function (a, c, e) { return new b(a, (2 * c + a) / 3, (2 * c + e) / 3, e) }; e._cssRegister = function () {
                    var a = t.CSSPlugin; if (a) {
                        a = a._internals; var b = a._parseToProxy, c = a._setPluginRatio, f = a.CSSPropTween; a._registerComplexSpecialProp("bezier", {
                            parser: function (a, k, h, g, m, n) {
                            k instanceof Array && (k = { values: k }); n = new e; var d, q = k.values, r = q.length - 1, w = [], t = {}; if (0 > r) return m; for (h = 0; r >= h; h++) { var u = b(a, q[h], g, m, n, r !== h); w[h] = u.end } for (d in k) t[d] = k[d]; return t.values = w, m = new f(a, "bezier", 0, 0, u.pt, 2), m.data = u, m.plugin = n, m.setRatio =
                                c, 0 === t.autoRotate && (t.autoRotate = !0), !t.autoRotate || t.autoRotate instanceof Array || (h = !0 === t.autoRotate ? 0 : Number(t.autoRotate), t.autoRotate = null != u.end.left ? [["left", "top", "rotation", h, !1]] : null != u.end.x ? [["x", "y", "rotation", h, !1]] : !1), t.autoRotate && (g._transform || g._enableTransforms(!1), u.autoRotate = g._target._gsTransform, u.proxy.rotation = u.autoRotate.rotation || 0, g._overwriteProps.push("rotation")), n._onInitTween(u.proxy, t, g._tween), m
                            }
                        })
                    }
                }; r._mod = function (a) {
                    for (var b, c = this._overwriteProps, e = c.length; -1 <
                        --e;)(b = a[c[e]]) && "function" == typeof b && (this._mod[c[e]] = b)
                }; r._kill = function (a) { var b, c, e = this._props; for (b in this._beziers) if (b in a) for (delete this._beziers[b], delete this._func[b], c = e.length; -1 < --c;)e[c] === b && e.splice(c, 1); if (e = this._autoRotate) for (c = e.length; -1 < --c;)a[e[c][2]] && e.splice(c, 1); return this._super._kill.call(this, a) }
    })(); _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (h, c) {
        var n, v, a, t, b = function () {
            h.call(this, "css"); this._overwriteProps.length =
                0; this.setRatio = b.prototype.setRatio
        }, y = _gsScope._gsDefine.globals, q = {}, e = b.prototype = new h("css"); e.constructor = b; b.version = "1.19.0"; b.API = 2; b.defaultTransformPerspective = 0; b.defaultSkewType = "compensated"; b.defaultSmoothOrigin = !0; e = "px"; b.suffixMap = { top: e, right: e, bottom: e, left: e, width: e, height: e, fontSize: e, padding: e, margin: e, perspective: e, lineHeight: "" }; var r, k, m, u, f, d, w, z, g = /(?:\-|\.|\b)(\d|\.|e\-)+/g, C = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, Q = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
            S = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, R = /(?:\d|\-|\+|=|#|\.)*/g, O = /opacity *= *([^)]*)/i, J = /opacity:([^;]*)/i, G = /alpha\(opacity *=.+?\)/i, E = /^(rgb|hsl)/, P = /([A-Z])/g, B = /-([a-z])/gi, L = /(^(?:url\("|url\())|(?:("\))$|\)$)/gi, I = function (a, b) { return b.toUpperCase() }, T = /(?:Left|Right|Width)/i, ba = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, ja = /progid:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, U = /,(?=[^\)]*(?:\(|$))/gi, ma = /[\s,\(]/i, W = Math.PI / 180, V = 180 / Math.PI, aa = {}, da = document, ua = function (a) {
                return da.createElementNS ?
                    da.createElementNS("http://www.w3.org/1999/xhtml", a) : da.createElement(a)
            }, ka = ua("div"), ea = ua("img"), za = b._internals = { _specialProps: q }, na = navigator.userAgent, va = function () {
                var a = na.indexOf("Android"), b = ua("a"); return m = -1 !== na.indexOf("Safari") && -1 === na.indexOf("Chrome") && (-1 === a || 3 < Number(na.substr(a + 8, 1))), f = m && 6 > Number(na.substr(na.indexOf("Version/") + 8, 1)), u = -1 !== na.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(na) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(na)) && (d = parseFloat(RegExp.$1)),
                    b ? (b.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(b.style.opacity)) : !1
            }(), ra = function (a) { return O.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1 }, xa = "", Y = "", oa = function (a, b) { b = b || ka; var c, d = b.style; if (void 0 !== d[a]) return a; a = a.charAt(0).toUpperCase() + a.substr(1); var e = ["O", "Moz", "ms", "Ms", "Webkit"]; for (c = 5; -1 < --c && void 0 === d[e[c] + a];); return 0 <= c ? (Y = 3 === c ? "ms" : e[c], xa = "-" + Y.toLowerCase() + "-", Y + a) : null }, ha = da.defaultView ? da.defaultView.getComputedStyle :
                function () { }, p = b.getStyle = function (a, b, c, d, e) { var f; return va || "opacity" !== b ? (!d && a.style[b] ? f = a.style[b] : (c = c || ha(a)) ? f = c[b] || c.getPropertyValue(b) || c.getPropertyValue(b.replace(P, "-$1").toLowerCase()) : a.currentStyle && (f = a.currentStyle[b]), null == e || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : e) : ra(a) }, x = za.convertToPixels = function (a, d, e, f, g) {
                    if ("px" === f || !f) return e; if ("auto" === f || !e) return 0; var k, l, h = T.test(d), m = a; var n = ka.style; var q = 0 > e, r = 1 === e; if (q && (e = -e), r && (e *= 100), "%" === f && -1 !== d.indexOf("border")) n =
                        e / 100 * (h ? a.clientWidth : a.clientHeight); else {
                            if (n.cssText = "border:0 solid red;position:" + p(a, "position") + ";line-height:0;", "%" !== f && m.appendChild && "v" !== f.charAt(0) && "rem" !== f) n[h ? "borderLeftWidth" : "borderTopWidth"] = e + f; else { if (m = a.parentNode || da.body, k = m._gsCache, l = c.ticker.frame, k && h && k.time === l) return k.width * e / 100; n[h ? "width" : "height"] = e + f } m.appendChild(ka); n = parseFloat(ka[h ? "offsetWidth" : "offsetHeight"]); m.removeChild(ka); h && "%" === f && !1 !== b.cacheWidths && (k = m._gsCache = m._gsCache || {}, k.time = l, k.width =
                                n / e * 100); 0 !== n || g || (n = x(a, d, e, f, !0))
                    } return r && (n /= 100), q ? -n : n
                }, D = za.calculateOffset = function (a, b, c) { if ("absolute" !== p(a, "position", c)) return 0; var d = "left" === b ? "Left" : "Top"; c = p(a, "margin" + d, c); return a["offset" + d] - (x(a, b, parseFloat(c), c.replace(R, "")) || 0) }, H = function (a, b) {
                    var c, d, e = {}; if (b = b || ha(a, null)) if (c = b.length) for (; -1 < --c;) { var f = b[c]; -1 !== f.indexOf("-transform") && M !== f || (e[f.replace(B, I)] = b.getPropertyValue(f)) } else for (c in b) -1 !== c.indexOf("Transform") && sa !== c || (e[c] = b[c]); else if (b = a.currentStyle ||
                        a.style) for (c in b) "string" == typeof c && void 0 === e[c] && (e[c.replace(B, I)] = b[c]); return va || (e.opacity = ra(a)), d = $a(a, b, !1), e.rotation = d.rotation, e.skewX = d.skewX, e.scaleX = d.scaleX, e.scaleY = d.scaleY, e.x = d.x, e.y = d.y, Oa && (e.z = d.z, e.rotationX = d.rotationX, e.rotationY = d.rotationY, e.scaleZ = d.scaleZ), e.filters && delete e.filters, e
                }, pa = function (a, b, c, d, e) {
                    var f, g, k, p = {}, l = a.style; for (g in c) "cssText" !== g && "length" !== g && isNaN(g) && (b[g] !== (f = c[g]) || e && e[g]) && -1 === g.indexOf("Origin") && ("number" == typeof f || "string" ==
                        typeof f) && (p[g] = "auto" !== f || "left" !== g && "top" !== g ? "" !== f && "auto" !== f && "none" !== f || "string" != typeof b[g] || "" === b[g].replace(S, "") ? f : 0 : D(a, g), void 0 !== l[g] && (k = new Qa(l, g, l[g], k))); if (d) for (g in d) "className" !== g && (p[g] = d[g]); return { difs: p, firstMPT: k }
                }, ca = { width: ["Left", "Right"], height: ["Top", "Bottom"] }, Ja = ["marginLeft", "marginRight", "marginTop", "marginBottom"], ta = function (a, b) {
                    if ("contain" === a || "auto" === a || "auto auto" === a) return a + " "; null != a && "" !== a || (a = "0 0"); var c = a.split(" "); var d = -1 !== a.indexOf("left") ?
                        "0%" : -1 !== a.indexOf("right") ? "100%" : c[0]; var e = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : c[1]; if (3 < c.length && !b) { c = a.split(", ").join(",").split(","); a = []; for (d = 0; d < c.length; d++)a.push(ta(c[d])); return a.join(",") } return null == e ? e = "center" === d ? "50%" : "0" : "center" === e && (e = "50%"), ("center" === d || isNaN(parseFloat(d)) && -1 === (d + "").indexOf("=")) && (d = "50%"), a = d + " " + e + (2 < c.length ? " " + c[2] : ""), b && (b.oxp = -1 !== d.indexOf("%"), b.oyp = -1 !== e.indexOf("%"), b.oxr = "=" === d.charAt(1), b.oyr = "=" === e.charAt(1),
                            b.ox = parseFloat(d.replace(S, "")), b.oy = parseFloat(e.replace(S, "")), b.v = a), b || a
                }, la = function (a, b) { return "function" == typeof a && (a = a(z, w)), "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b) || 0 }, l = function (a, b) { return "function" == typeof a && (a = a(z, w)), null == a ? b : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b : parseFloat(a) || 0 }, Ga = function (a, b, c, d) {
                    var e, f, g, k; return "function" == typeof a && (a = a(z,
                        w)), null == a ? g = b : "number" == typeof a ? g = a : (e = a.split("_"), k = "=" === a.charAt(1), f = (k ? parseInt(a.charAt(0) + "1", 10) * parseFloat(e[0].substr(2)) : parseFloat(e[0])) * (-1 === a.indexOf("rad") ? 1 : V) - (k ? 0 : b), e.length && (d && (d[c] = b + f), -1 !== a.indexOf("short") && (f %= 360, f !== f % 180 && (f = 0 > f ? f + 360 : f - 360)), -1 !== a.indexOf("_cw") && 0 > f ? f = (f + 3599999999640) % 360 - 360 * (f / 360 | 0) : -1 !== a.indexOf("ccw") && 0 < f && (f = (f - 3599999999640) % 360 - 360 * (f / 360 | 0))), g = b + f), 1E-6 > g && -1E-6 < g && (g = 0), g
                }, Fa = {
                    aqua: [0, 255, 255], lime: [0, 255, 0], silver: [192, 192, 192],
                    black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, 255], navy: [0, 0, 128], white: [255, 255, 255], fuchsia: [255, 0, 255], olive: [128, 128, 0], yellow: [255, 255, 0], orange: [255, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [255, 0, 0], pink: [255, 192, 203], cyan: [0, 255, 255], transparent: [255, 255, 255, 0]
                }, Wa = function (a, b, c) { return a = 0 > a ? a + 1 : 1 < a ? a - 1 : a, 255 * (1 > 6 * a ? b + (c - b) * a * 6 : .5 > a ? c : 2 > 3 * a ? b + (c - b) * (2 / 3 - a) * 6 : b) + .5 | 0 }, ab = b.parseColor = function (a, b) {
                    var c, d, e, f, k, p, l; if (a) if ("number" == typeof a) var h = [a >>
                        16, a >> 8 & 255, 255 & a]; else {
                            if ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), Fa[a]) h = Fa[a]; else if ("#" === a.charAt(0)) 4 === a.length && (c = a.charAt(1), d = a.charAt(2), e = a.charAt(3), a = "#" + c + c + d + d + e + e), a = parseInt(a.substr(1), 16), h = [a >> 16, a >> 8 & 255, 255 & a]; else if ("hsl" === a.substr(0, 3)) if (h = l = a.match(g), b) { if (-1 !== a.indexOf("=")) return a.match(C) } else {
                                var m = Number(h[0]) % 360 / 360; var n = Number(h[1]) / 100; var x = Number(h[2]) / 100; d = .5 >= x ? x * (n + 1) : x + n - x * n; c = 2 * x - d; 3 < h.length && (h[3] = Number(a[3])); h[0] = Wa(m + 1 / 3, c, d);
                                h[1] = Wa(m, c, d); h[2] = Wa(m - 1 / 3, c, d)
                            } else h = a.match(g) || Fa.transparent; h[0] = Number(h[0]); h[1] = Number(h[1]); h[2] = Number(h[2]); 3 < h.length && (h[3] = Number(h[3]))
                    } else h = Fa.black; return b && !l && (c = h[0] / 255, d = h[1] / 255, e = h[2] / 255, f = Math.max(c, d, e), k = Math.min(c, d, e), x = (f + k) / 2, f === k ? m = n = 0 : (p = f - k, n = .5 < x ? p / (2 - f - k) : p / (f + k), m = f === c ? (d - e) / p + (e > d ? 6 : 0) : f === d ? (e - c) / p + 2 : (c - d) / p + 4, m *= 60), h[0] = m + .5 | 0, h[1] = 100 * n + .5 | 0, h[2] = 100 * x + .5 | 0), h
                }, La = function (a, b) {
                    var c, d = a.match(Aa) || [], e = 0, f = d.length ? "" : a; for (c = 0; c < d.length; c++) {
                        var g =
                            d[c]; var k = a.substr(e, a.indexOf(g, e) - e); e += k.length + g.length; g = ab(g, b); 3 === g.length && g.push(1); f += k + (b ? "hsla(" + g[0] + "," + g[1] + "%," + g[2] + "%," + g[3] : "rgba(" + g.join(",")) + ")"
                    } return f + a.substr(e)
                }, Aa = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b"; for (e in Fa) Aa += "|" + e + "\\b"; Aa = new RegExp(Aa + ")", "gi"); b.colorStringFilter = function (a) { var b, c = a[0] + a[1]; Aa.test(c) && (b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla("), a[0] = La(a[0], b), a[1] = La(a[1], b)); Aa.lastIndex = 0 }; c.defaultStringFilter ||
                    (c.defaultStringFilter = b.colorStringFilter); var Ma = function (a, b, c, d) {
                        if (null == a) return function (a) { return a }; var e, f = b ? (a.match(Aa) || [""])[0] : "", k = a.split(f).join("").match(Q) || [], p = a.substr(0, a.indexOf(k[0])), l = ")" === a.charAt(a.length - 1) ? ")" : "", h = -1 !== a.indexOf(" ") ? " " : ",", m = k.length, n = 0 < m ? k[0].replace(g, "") : ""; return m ? e = b ? function (a) {
                            var b, g, x; if ("number" == typeof a) a += n; else if (d && U.test(a)) { a = a.replace(U, "|").split("|"); for (x = 0; x < a.length; x++)a[x] = e(a[x]); return a.join(",") } if (b = (a.match(Aa) ||
                                [f])[0], g = a.split(b).join("").match(Q) || [], x = g.length, m > x--) for (; ++x < m;)g[x] = c ? g[(x - 1) / 2 | 0] : k[x]; return p + g.join(h) + h + b + l + (-1 !== a.indexOf("inset") ? " inset" : "")
                        } : function (a) { var b, f; if ("number" == typeof a) a += n; else if (d && U.test(a)) { a = a.replace(U, "|").split("|"); for (f = 0; f < a.length; f++)a[f] = e(a[f]); return a.join(",") } if (b = a.match(Q) || [], f = b.length, m > f--) for (; ++f < m;)b[f] = c ? b[(f - 1) / 2 | 0] : k[f]; return p + b.join(h) + l } : function (a) { return a }
                    }, Xa = function (a) {
                        return a = a.split(","), function (b, c, d, e, f, g, k) {
                            d = (c + "").split(" ");
                            k = {}; for (c = 0; 4 > c; c++)k[a[c]] = d[c] = d[c] || d[(c - 1) / 2 >> 0]; return e.parse(b, k, f, g)
                        }
                    }, Qa = (za._setPluginRatio = function (a) {
                        this.plugin.setRatio(a); var b; var c = this.data; for (var d = c.proxy, e = c.firstMPT; e;) { var f = d[e.v]; e.r ? f = Math.round(f) : 1E-6 > f && -1E-6 < f && (f = 0); e.t[e.p] = f; e = e._next } if (c.autoRotate && (c.autoRotate.rotation = c.mod ? c.mod(d.rotation, this.t) : d.rotation), 1 === a || 0 === a) for (e = c.firstMPT, c = 1 === a ? "e" : "b"; e;) {
                            if (b = e.t, b.type) {
                                if (1 === b.type) {
                                    f = b.xs0 + b.s + b.xs1; for (a = 1; a < b.l; a++)f += b["xn" + a] + b["xs" + (a + 1)];
                                    b[c] = f
                                }
                            } else b[c] = b.s + b.xs0; e = e._next
                        }
                    }, function (a, b, c, d, e) { this.t = a; this.p = b; this.v = c; this.r = e; d && (d._prev = this, this._next = d) }), wa = (za._parseToProxy = function (a, b, c, d, e, f) {
                        var g, k, p = d, l = {}, h = {}; var m = c._transform; var n = aa; c._transform = null; aa = b; d = a = c.parse(a, b, d, e); aa = n; for (f && (c._transform = m, p && (p._prev = null, p._prev && (p._prev._next = null))); d && d !== p;) {
                            if (1 >= d.type && (g = d.p, h[g] = d.s + d.c, l[g] = d.s, f || (k = new Qa(d, "s", g, k, d.r), d.c = 0), 1 === d.type)) for (c = d.l; 0 < --c;)m = "xn" + c, g = d.p + "_" + m, h[g] = d.data[m], l[g] =
                                d[m], f || (k = new Qa(d, m, g, k, d.rxp[m])); d = d._next
                        } return { proxy: l, end: h, firstMPT: k, pt: a }
                    }, za.CSSPropTween = function (a, b, c, d, e, f, g, k, p, l, h) { this.t = a; this.p = b; this.s = c; this.c = d; this.n = g || b; a instanceof wa || t.push(this.n); this.r = k; this.type = f || 0; p && (this.pr = p, n = !0); this.b = void 0 === l ? c : l; this.e = void 0 === h ? c + d : h; e && (this._next = e, e._prev = this) }), Ya = function (a, b, c, d, e, f) { a = new wa(a, b, c, d - c, e, -1, f); return a.b = c, a.e = a.xs0 = d, a }, Na = b.parseComplex = function (a, c, d, e, f, k, p, l, h, m) {
                        d = d || k || ""; "function" == typeof e && (e =
                            e(z, w)); p = new wa(a, c, 0, 0, p, m ? 2 : 1, null, !1, l, d, e); e += ""; f && Aa.test(e + d) && (e = [d, e], b.colorStringFilter(e), d = e[0], e = e[1]); var n, x, q; a = d.split(", ").join(",").split(" "); c = e.split(", ").join(",").split(" "); l = a.length; var t = !1 !== r; (-1 !== e.indexOf(",") || -1 !== d.indexOf(",")) && (a = a.join(" ").replace(U, ", ").split(" "), c = c.join(" ").replace(U, ", ").split(" "), l = a.length); l !== c.length && (a = (k || "").split(" "), l = a.length); p.plugin = h; p.setRatio = m; for (d = Aa.lastIndex = 0; l > d; d++)if (n = a[d], h = c[d], q = parseFloat(n), q ||
                                0 === q) p.appendXtra("", q, la(h, q), h.replace(C, ""), t && -1 !== h.indexOf("px"), !0); else if (f && Aa.test(n)) {
                                    m = h.indexOf(")") + 1; m = ")" + (m ? h.substr(m) : ""); var u = -1 !== h.indexOf("hsl") && va; n = ab(n, u); h = ab(h, u); (k = 6 < n.length + h.length) && !va && 0 === h[3] ? (p["xs" + p.l] += p.l ? " transparent" : "transparent", p.e = p.e.split(c[d]).join("transparent")) : (va || (k = !1), u ? p.appendXtra(k ? "hsla(" : "hsl(", n[0], la(h[0], n[0]), ",", !1, !0).appendXtra("", n[1], la(h[1], n[1]), "%,", !1).appendXtra("", n[2], la(h[2], n[2]), k ? "%," : "%" + m, !1) : p.appendXtra(k ?
                                        "rgba(" : "rgb(", n[0], h[0] - n[0], ",", !0, !0).appendXtra("", n[1], h[1] - n[1], ",", !0).appendXtra("", n[2], h[2] - n[2], k ? "," : m, !0), k && (n = 4 > n.length ? 1 : n[3], p.appendXtra("", n, (4 > h.length ? 1 : h[3]) - n, m, !1))); Aa.lastIndex = 0
                                } else if (k = n.match(g)) { if (x = h.match(C), !x || x.length !== k.length) return p; for (h = m = 0; h < k.length; h++) { var v = k[h]; u = n.indexOf(v, m); p.appendXtra(n.substr(m, u - m), Number(v), la(x[h], v), "", t && "px" === n.substr(u + v.length, 2), 0 === h); m = u + v.length } p["xs" + p.l] += n.substr(m) } else p["xs" + p.l] += p.l || p["xs" + p.l] ? " " +
                                    h : h; if (-1 !== e.indexOf("=") && p.data) { m = p.xs0 + p.data.s; for (d = 1; d < p.l; d++)m += p["xs" + d] + p.data["xn" + d]; p.e = m + p["xs" + d] } return p.l || (p.type = -1, p.xs0 = p.e), p.xfirst || p
                    }, Ba = 9; e = wa.prototype; for (e.l = e.pr = 0; 0 < --Ba;)e["xn" + Ba] = 0, e["xs" + Ba] = ""; e.xs0 = ""; e._next = e._prev = e.xfirst = e.data = e.plugin = e.setRatio = e.rxp = null; e.appendXtra = function (a, b, c, d, e, f) {
                        var g = this.l; return this["xs" + g] += f && (g || this["xs" + g]) ? " " + a : a || "", c || 0 === g || this.plugin ? (this.l++ , this.type = this.setRatio ? 2 : 1, this["xs" + this.l] = d || "", 0 < g ? (this.data["xn" +
                            g] = b + c, this.rxp["xn" + g] = e, this["xn" + g] = b, this.plugin || (this.xfirst = new wa(this, "xn" + g, b, c, this.xfirst || this, 0, this.n, e, this.pr), this.xfirst.xs0 = 0), this) : (this.data = { s: b + c }, this.rxp = {}, this.s = b, this.c = c, this.r = e, this)) : (this["xs" + g] += b + (d || ""), this)
                    }; var eb = function (a, b) {
                        b = b || {}; this.p = b.prefix ? oa(a) || a : a; q[a] = q[this.p] = this; this.format = b.formatter || Ma(b.defaultValue, b.color, b.collapsible, b.multi); b.parser && (this.parse = b.parser); this.clrs = b.color; this.multi = b.multi; this.keyword = b.keyword; this.dflt =
                            b.defaultValue; this.pr = b.priority || 0
                    }, fa = za._registerComplexSpecialProp = function (a, b, c) { "object" != typeof b && (b = { parser: c }); var d = a.split(","), e = b.defaultValue; c = c || [e]; for (a = 0; a < d.length; a++)b.prefix = 0 === a && b.prefix, b.defaultValue = c[a] || e, new eb(d[a], b) }, Ra = za._registerPluginProp = function (a) {
                        if (!q[a]) {
                            var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin"; fa(a, {
                                parser: function (a, c, d, e, f, g, k) {
                                    var p = y.com.greensock.plugins[b]; p ? a = (p._cssRegister(), q[d].parse(a, c, d, e, f, g, k)) : (window.console && console.log("Error: " +
                                        b + " js file not loaded."), a = f); return a
                                }
                            })
                        }
                    }; e = eb.prototype; e.parseComplex = function (a, b, c, d, e, f) {
                        var g, k, p, l, h, m = this.keyword; if (this.multi && (U.test(c) || U.test(b) ? (k = b.replace(U, "|").split("|"), p = c.replace(U, "|").split("|")) : m && (k = [b], p = [c])), p) { var n = p.length > k.length ? p.length : k.length; for (g = 0; n > g; g++)b = k[g] = k[g] || this.dflt, c = p[g] = p[g] || this.dflt, m && (l = b.indexOf(m), h = c.indexOf(m), l !== h && (-1 === h ? k[g] = k[g].split(m).join("") : -1 === l && (k[g] += " " + m))); b = k.join(", "); c = p.join(", ") } return Na(a, this.p, b,
                            c, this.clrs, this.dflt, d, this.pr, e, f)
                    }; e.parse = function (b, c, d, e, f, g, k) { return this.parseComplex(b.style, this.format(p(b, this.p, a, !1, this.dflt)), this.format(c), f, g) }; b.registerSpecialProp = function (a, b, c) { fa(a, { parser: function (a, d, e, f, g, k, p) { g = new wa(a, e, 0, 0, g, 2, e, !1, c); return g.plugin = k, g.setRatio = b(a, d, f._tween, e), g }, priority: c }) }; b.useSVGTransformAttr = m || u; var Ea, Ia = "scaleX scaleY scaleZ x y z skewX skewY rotation rotationX rotationY perspective xPercent yPercent".split(" "), sa = oa("transform"), M =
                        xa + "transform", Da = oa("transformOrigin"), Oa = null !== oa("perspective"), fb = za.Transform = function () { this.perspective = parseFloat(b.defaultTransformPerspective) || 0; this.force3D = !1 !== b.defaultForce3D && Oa ? b.defaultForce3D || "auto" : !1 }, qb = window.SVGElement, Za = function (a, b, c) { var d; a = da.createElementNS("http://www.w3.org/2000/svg", a); var e = /([a-z])([A-Z])/g; for (d in c) a.setAttributeNS(null, d.replace(e, "$1-$2").toLowerCase(), c[d]); return b.appendChild(a), a }, Pa = da.documentElement, gb = function () {
                            var a, b, c, e = d || /Android/i.test(na) &&
                                !window.chrome; return da.createElementNS && !e && (a = Za("svg", Pa), b = Za("rect", a, { width: 100, height: 50, x: 100 }), c = b.getBoundingClientRect().width, b.style[Da] = "50% 50%", b.style[sa] = "scaleX(0.5)", e = c === b.getBoundingClientRect().width && !(u && Oa), Pa.removeChild(a)), e
                        }(), hb = function (a, c, d, e, f, g) {
                            var k, p, l, h, m, n, x, q, r, t, w, u, v, y = a._gsTransform, z = kb(a, !0); y && (u = y.xOrigin, v = y.yOrigin); (!e || 2 > (k = e.split(" ")).length) && (n = a.getBBox(), c = ta(c).split(" "), k = [(-1 !== c[0].indexOf("%") ? parseFloat(c[0]) / 100 * n.width : parseFloat(c[0])) +
                                n.x, (-1 !== c[1].indexOf("%") ? parseFloat(c[1]) / 100 * n.height : parseFloat(c[1])) + n.y]); d.xOrigin = c = parseFloat(k[0]); d.yOrigin = h = parseFloat(k[1]); e && z !== jb && (m = z[0], n = z[1], x = z[2], q = z[3], r = z[4], t = z[5], w = m * q - n * x, p = q / w * c + -x / w * h + (x * t - q * r) / w, l = -n / w * c + m / w * h - (m * t - n * r) / w, c = d.xOrigin = k[0] = p, h = d.yOrigin = k[1] = l); y && (g && (d.xOffset = y.xOffset, d.yOffset = y.yOffset, y = d), f || !1 !== f && !1 !== b.defaultSmoothOrigin ? (p = c - u, l = h - v, y.xOffset += p * z[0] + l * z[2] - p, y.yOffset += p * z[1] + l * z[3] - l) : y.xOffset = y.yOffset = 0); g || a.setAttribute("data-svg-origin",
                                    k.join(" "))
                        }, ib = function (a) { var b; if (b = qb && a.getBBox && a.getCTM) a: { try { b = a.getBBox(); break a } catch (qa) { } b = void 0 } return !(!b || !(!a.parentNode || a.parentNode.getBBox && a.parentNode.getCTM)) }, jb = [1, 0, 0, 1, 0, 0], kb = function (a, b) {
                            var c, d, e, f, k, l, h = a._gsTransform || new fb, m = a.style; if (sa ? d = p(a, M, null, !0) : a.currentStyle && (d = a.currentStyle.filter.match(ba), d = d && 4 === d.length ? [d[0].substr(4), Number(d[2].substr(4)), Number(d[1].substr(4)), d[3].substr(4), h.x || 0, h.y || 0].join() : ""), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" ===
                                d, c && sa && ((l = "none" === ha(a).display) || !a.parentNode) && (l && (f = m.display, m.display = "block"), a.parentNode || (k = 1, Pa.appendChild(a)), d = p(a, M, null, !0), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, f ? m.display = f : l && db(m, "display"), k && Pa.removeChild(a)), (h.svg || a.getBBox && ib(a)) && (c && -1 !== (m[sa] + "").indexOf("matrix") && (d = m[sa], c = 0), e = a.getAttribute("transform"), c && e && (-1 !== e.indexOf("matrix") ? (d = e, c = 0) : -1 !== e.indexOf("translate") && (d = "matrix(1,0,0,1," + e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", c =
                                    0))), c) return jb; e = (d || "").match(g) || []; for (Ba = e.length; -1 < --Ba;)f = Number(e[Ba]), e[Ba] = (k = f - (f |= 0)) ? (1E5 * k + (0 > k ? -.5 : .5) | 0) / 1E5 + f : f; return b && 6 < e.length ? [e[0], e[1], e[4], e[5], e[12], e[13]] : e
                        }, $a = za.getTransform = function (a, d, e, f) {
                            if (a._gsTransform && e && !f) return a._gsTransform; var g, k, l, h = e ? a._gsTransform || new fb : new fb, m = 0 > h.scaleX, n = Oa ? parseFloat(p(a, Da, d, !1, "0 0 0").split(" ")[2]) || h.zOrigin || 0 : 0, x = parseFloat(b.defaultTransformPerspective) || 0; if (h.svg = !(!a.getBBox || !ib(a)), h.svg && (hb(a, p(a, Da, d, !1,
                                "50% 50%") + "", h, a.getAttribute("data-svg-origin")), Ea = b.useSVGTransformAttr || gb), g = kb(a), g !== jb) {
                                    if (16 === g.length) {
                                        var q, r, w, t; x = g[0]; d = g[1]; f = g[2]; var u = g[3], v = g[4], y = g[5], z = g[6], D = g[7], F = g[8], H = g[9], K = g[10], Z = g[12], C = g[13], B = g[14], ca = g[11], qa = Math.atan2(z, K); h.zOrigin && (B = -h.zOrigin, Z = F * B - g[12], C = H * B - g[13], B = K * B + h.zOrigin - g[14]); h.rotationX = qa * V; qa && (t = Math.cos(-qa), l = Math.sin(-qa), q = v * t + F * l, r = y * t + H * l, w = z * t + K * l, F = v * -l + F * t, H = y * -l + H * t, K = z * -l + K * t, ca = D * -l + ca * t, v = q, y = r, z = w); qa = Math.atan2(-f, K); h.rotationY =
                                            qa * V; qa && (t = Math.cos(-qa), l = Math.sin(-qa), q = x * t - F * l, r = d * t - H * l, w = f * t - K * l, H = d * l + H * t, K = f * l + K * t, ca = u * l + ca * t, x = q, d = r, f = w); qa = Math.atan2(d, x); h.rotation = qa * V; qa && (t = Math.cos(-qa), l = Math.sin(-qa), x = x * t + v * l, r = d * t + y * l, y = d * -l + y * t, z = f * -l + z * t, d = r); h.rotationX && 359.9 < Math.abs(h.rotationX) + Math.abs(h.rotation) && (h.rotationX = h.rotation = 0, h.rotationY = 180 - h.rotationY); h.scaleX = (1E5 * Math.sqrt(x * x + d * d) + .5 | 0) / 1E5; h.scaleY = (1E5 * Math.sqrt(y * y + H * H) + .5 | 0) / 1E5; h.scaleZ = (1E5 * Math.sqrt(z * z + K * K) + .5 | 0) / 1E5; h.rotationX || h.rotationY ?
                                                h.skewX = 0 : (h.skewX = v || y ? Math.atan2(v, y) * V + h.rotation : h.skewX || 0, 90 < Math.abs(h.skewX) && 270 > Math.abs(h.skewX) && (m ? (h.scaleX *= -1, h.skewX += 0 >= h.rotation ? 180 : -180, h.rotation += 0 >= h.rotation ? 180 : -180) : (h.scaleY *= -1, h.skewX += 0 >= h.skewX ? 180 : -180))); h.perspective = ca ? 1 / (0 > ca ? -ca : ca) : 0; h.x = Z; h.y = C; h.z = B; h.svg && (h.x -= h.xOrigin - (h.xOrigin * x - h.yOrigin * v), h.y -= h.yOrigin - (h.yOrigin * d - h.xOrigin * y))
                                    } else Oa && !f && g.length && h.x === g[4] && h.y === g[5] && (h.rotationX || h.rotationY) || (q = (t = 6 <= g.length) ? g[0] : 1, r = g[1] || 0, w = g[2] ||
                                        0, t = t ? g[3] : 1, h.x = g[4] || 0, h.y = g[5] || 0, g = Math.sqrt(q * q + r * r), l = Math.sqrt(t * t + w * w), d = q || r ? Math.atan2(r, q) * V : h.rotation || 0, f = w || t ? Math.atan2(w, t) * V + d : h.skewX || 0, 90 < Math.abs(f) && 270 > Math.abs(f) && (m ? (g *= -1, f += 0 >= d ? 180 : -180, d += 0 >= d ? 180 : -180) : (l *= -1, f += 0 >= f ? 180 : -180)), h.scaleX = g, h.scaleY = l, h.rotation = d, h.skewX = f, Oa && (h.rotationX = h.rotationY = h.z = 0, h.perspective = x, h.scaleZ = 1), h.svg && (h.x -= h.xOrigin - (h.xOrigin * q + h.yOrigin * w), h.y -= h.yOrigin - (h.xOrigin * r + h.yOrigin * t))); h.zOrigin = n; for (k in h) 2E-5 > h[k] && -2E-5 < h[k] &&
                                            (h[k] = 0)
                            } return e && (a._gsTransform = h, h.svg && (Ea && a.style[sa] ? c.delayedCall(.001, function () { db(a.style, sa) }) : !Ea && a.getAttribute("transform") && c.delayedCall(.001, function () { a.removeAttribute("transform") }))), h
                        }, Ka = function (a) {
                            var b = this.data, c = -b.rotation * W, e = c + b.skewX * W, f = (Math.cos(c) * b.scaleX * 1E5 | 0) / 1E5, g = (Math.sin(c) * b.scaleX * 1E5 | 0) / 1E5, k = (Math.sin(e) * -b.scaleY * 1E5 | 0) / 1E5, p = (Math.cos(e) * b.scaleY * 1E5 | 0) / 1E5; e = this.t.style; if (c = this.t.currentStyle) {
                                var l = g; g = -k; k = -l; var h = c.filter; e.filter = ""; var m,
                                    n; l = this.t.offsetWidth; var q = this.t.offsetHeight, r = "absolute" !== c.position, t = "progid:DXImageTransform.Microsoft.Matrix(M11=" + f + ", M12=" + g + ", M21=" + k + ", M22=" + p, w = b.x + l * b.xPercent / 100, u = b.y + q * b.yPercent / 100; if (null != b.ox && (m = (b.oxp ? l * b.ox * .01 : b.ox) - l / 2, n = (b.oyp ? q * b.oy * .01 : b.oy) - q / 2, w += m - (m * f + n * g), u += n - (m * k + n * p)), r ? (m = l / 2, n = q / 2, t += ", Dx=" + (m - (m * f + n * g) + w) + ", Dy=" + (n - (m * k + n * p) + u) + ")") : t += ", sizingMethod='auto expand')", -1 !== h.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.filter = h.replace(ja, t) : e.filter =
                                        t + " " + h, (0 === a || 1 === a) && 1 === f && 0 === g && 0 === k && 1 === p && (r && -1 === t.indexOf("Dx=0, Dy=0") || O.test(h) && 100 !== parseFloat(RegExp.$1) || -1 === h.indexOf(h.indexOf("Alpha")) && e.removeAttribute("filter")), !r) for (a = 8 > d ? 1 : -1, m = b.ieOffsetX || 0, n = b.ieOffsetY || 0, b.ieOffsetX = Math.round((l - ((0 > f ? -f : f) * l + (0 > g ? -g : g) * q)) / 2 + w), b.ieOffsetY = Math.round((q - ((0 > p ? -p : p) * q + (0 > k ? -k : k) * l)) / 2 + u), Ba = 0; 4 > Ba; Ba++)f = Ja[Ba], g = c[f], l = -1 !== g.indexOf("px") ? parseFloat(g) : x(this.t, f, parseFloat(g), g.replace(R, "")) || 0, g = l !== b[f] ? 2 > Ba ? -b.ieOffsetX :
                                            -b.ieOffsetY : 2 > Ba ? m - b.ieOffsetX : n - b.ieOffsetY, e[f] = (b[f] = Math.round(l - g * (0 === Ba || 2 === Ba ? 1 : a))) + "px"
                            }
                        }, vb = za.set3DTransformRatio = za.setTransformRatio = function (a) {
                            var b, c, d, e, f, g, k, p, l, h, m, n, x = this.data, q = this.t.style, r = x.rotation, t = x.rotationX, w = x.rotationY, v = x.scaleX, y = x.scaleY, z = x.scaleZ, D = x.x, H = x.y, K = x.z, C = x.svg, B = x.perspective; var ca = x.force3D; if (!((1 !== a && 0 !== a || "auto" !== ca || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && ca || K || B || w || t) && 1 === z || Ea && C || !Oa) return void (r ||
                                x.skewX || C ? (r *= W, f = x.skewX * W, b = Math.cos(r) * v, d = Math.sin(r) * v, c = Math.sin(r - f) * -y, e = Math.cos(r - f) * y, f && "simple" === x.skewType && (m = Math.tan(f - x.skewY * W), m = Math.sqrt(1 + m * m), c *= m, e *= m, x.skewY && (m = Math.tan(x.skewY * W), m = Math.sqrt(1 + m * m), b *= m, d *= m)), C && (D += x.xOrigin - (x.xOrigin * b + x.yOrigin * c) + x.xOffset, H += x.yOrigin - (x.xOrigin * d + x.yOrigin * e) + x.yOffset, Ea && (x.xPercent || x.yPercent) && (h = this.t.getBBox(), D += .01 * x.xPercent * h.width, H += .01 * x.yPercent * h.height), h = 1E-6, h > D && D > -h && (D = 0), h > H && H > -h && (H = 0)), l = (1E5 * b | 0) /
                                    1E5 + "," + (1E5 * d | 0) / 1E5 + "," + (1E5 * c | 0) / 1E5 + "," + (1E5 * e | 0) / 1E5 + "," + D + "," + H + ")", C && Ea ? this.t.setAttribute("transform", "matrix(" + l) : q[sa] = (x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) matrix(" : "matrix(") + l) : q[sa] = (x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) matrix(" : "matrix(") + v + ",0,0," + y + "," + D + "," + H + ")"); if (u && (h = 1E-4, h > v && v > -h && (v = z = 2E-5), h > y && y > -h && (y = z = 2E-5), !B || x.z || x.rotationX || x.rotationY || (B = 0)), r || x.skewX) {
                                        r *= W; var pa = b = Math.cos(r); var ta = d = Math.sin(r);
                                        x.skewX && (r -= x.skewX * W, pa = Math.cos(r), ta = Math.sin(r), "simple" === x.skewType && (m = Math.tan((x.skewX - x.skewY) * W), m = Math.sqrt(1 + m * m), pa *= m, ta *= m, x.skewY && (m = Math.tan(x.skewY * W), m = Math.sqrt(1 + m * m), b *= m, d *= m))); c = -ta; e = pa
                                    } else { if (!(w || t || 1 !== z || B || C)) return void (q[sa] = (x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) translate3d(" : "translate3d(") + D + "px," + H + "px," + K + "px)" + (1 !== v || 1 !== y ? " scale(" + v + "," + y + ")" : "")); b = e = 1; c = d = 0 } var E = 1; a = f = ca = g = k = p = 0; var aa = B ? -1 / B : 0; l = x.zOrigin; h = 1E-6; (r = w * W) &&
                                        (pa = Math.cos(r), ta = Math.sin(r), ca = -ta, k = aa * -ta, a = b * ta, f = d * ta, E = pa, aa *= pa, b *= pa, d *= pa); (r = t * W) && (pa = Math.cos(r), ta = Math.sin(r), m = c * pa + a * ta, n = e * pa + f * ta, g = E * ta, p = aa * ta, a = c * -ta + a * pa, f = e * -ta + f * pa, E *= pa, aa *= pa, c = m, e = n); 1 !== z && (a *= z, f *= z, E *= z, aa *= z); 1 !== y && (c *= y, e *= y, g *= y, p *= y); 1 !== v && (b *= v, d *= v, ca *= v, k *= v); (l || C) && (l && (D += a * -l, H += f * -l, K += E * -l + l), C && (D += x.xOrigin - (x.xOrigin * b + x.yOrigin * c) + x.xOffset, H += x.yOrigin - (x.xOrigin * d + x.yOrigin * e) + x.yOffset), h > D && D > -h && (D = "0"), h > H && H > -h && (H = "0"), h > K && K > -h && (K = 0));
                            l = x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) matrix3d(" : "matrix3d("; l = l + ((h > b && b > -h ? "0" : b) + "," + (h > d && d > -h ? "0" : d) + "," + (h > ca && ca > -h ? "0" : ca)) + ("," + (h > k && k > -h ? "0" : k) + "," + (h > c && c > -h ? "0" : c) + "," + (h > e && e > -h ? "0" : e)); t || w || 1 !== z ? (l += "," + (h > g && g > -h ? "0" : g) + "," + (h > p && p > -h ? "0" : p) + "," + (h > a && a > -h ? "0" : a), l += "," + (h > f && f > -h ? "0" : f) + "," + (h > E && E > -h ? "0" : E) + "," + (h > aa && aa > -h ? "0" : aa) + ",") : l += ",0,0,0,0,1,0,"; l += D + "," + H + "," + K + "," + (B ? 1 + -K / B : 1) + ")"; q[sa] = l
                        }; e = fb.prototype; e.x = e.y = e.z = e.skewX = e.skewY = e.rotation =
                            e.rotationX = e.rotationY = e.zOrigin = e.xPercent = e.yPercent = e.xOffset = e.yOffset = 0; e.scaleX = e.scaleY = e.scaleZ = 1; fa("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                                parser: function (c, d, e, f, g, k, h) {
                                    if (f._lastParsedTransform === h) return g; f._lastParsedTransform = h; var m; "function" ==
                                        typeof h[e] && (m = h[e], h[e] = d); var n, x, q, r, t; d = c._gsTransform; var v = c.style, u = Ia.length, y = {}, D = $a(c, a, !0, h.parseTransform), H = h.transform && ("function" == typeof h.transform ? h.transform(z, w) : h.transform); if (f._transform = D, H && "string" == typeof H && sa) {
                                            var K = ka.style; K[sa] = H; K.display = "block"; K.position = "absolute"; da.body.appendChild(ka); var F = $a(ka, null, !1); D.svg && (q = D.xOrigin, r = D.yOrigin, F.x -= D.xOffset, F.y -= D.yOffset, (h.transformOrigin || h.svgOrigin) && (H = {}, hb(c, ta(h.transformOrigin), H, h.svgOrigin, h.smoothOrigin,
                                                !0), q = H.xOrigin, r = H.yOrigin, F.x -= H.xOffset - D.xOffset, F.y -= H.yOffset - D.yOffset), (q || r) && (t = kb(ka, !0), F.x -= q - (q * t[0] + r * t[2]), F.y -= r - (q * t[1] + r * t[3]))); da.body.removeChild(ka); F.perspective || (F.perspective = D.perspective); null != h.xPercent && (F.xPercent = l(h.xPercent, D.xPercent)); null != h.yPercent && (F.yPercent = l(h.yPercent, D.yPercent))
                                        } else if ("object" == typeof h) {
                                            if (F = {
                                                scaleX: l(null != h.scaleX ? h.scaleX : h.scale, D.scaleX), scaleY: l(null != h.scaleY ? h.scaleY : h.scale, D.scaleY), scaleZ: l(h.scaleZ, D.scaleZ), x: l(h.x,
                                                    D.x), y: l(h.y, D.y), z: l(h.z, D.z), xPercent: l(h.xPercent, D.xPercent), yPercent: l(h.yPercent, D.yPercent), perspective: l(h.transformPerspective, D.perspective)
                                            }, n = h.directionalRotation, null != n) if ("object" == typeof n) for (K in n) h[K] = n[K]; else h.rotation = n; "string" == typeof h.x && -1 !== h.x.indexOf("%") && (F.x = 0, F.xPercent = l(h.x, D.xPercent)); "string" == typeof h.y && -1 !== h.y.indexOf("%") && (F.y = 0, F.yPercent = l(h.y, D.yPercent)); F.rotation = Ga("rotation" in h ? h.rotation : "shortRotation" in h ? h.shortRotation + "_short" : "rotationZ" in
                                                h ? h.rotationZ : D.rotation - D.skewY, D.rotation - D.skewY, "rotation", y); Oa && (F.rotationX = Ga("rotationX" in h ? h.rotationX : "shortRotationX" in h ? h.shortRotationX + "_short" : D.rotationX || 0, D.rotationX, "rotationX", y), F.rotationY = Ga("rotationY" in h ? h.rotationY : "shortRotationY" in h ? h.shortRotationY + "_short" : D.rotationY || 0, D.rotationY, "rotationY", y)); F.skewX = Ga(h.skewX, D.skewX - D.skewY); (F.skewY = Ga(h.skewY, D.skewY)) && (F.skewX += F.skewY, F.rotation += F.skewY)
                                        } Oa && null != h.force3D && (D.force3D = h.force3D, x = !0); D.skewType =
                                            h.skewType || D.skewType || b.defaultSkewType; for ((n = D.force3D || D.z || D.rotationX || D.rotationY || F.z || F.rotationX || F.rotationY || F.perspective) || null == h.scale || (F.scaleZ = 1); -1 < --u;) { var Z = Ia[u]; H = F[Z] - D[Z]; (1E-6 < H || -1E-6 > H || null != h[Z] || null != aa[Z]) && (x = !0, g = new wa(D, Z, D[Z], H, g), Z in y && (g.e = y[Z]), g.xs0 = 0, g.plugin = k, f._overwriteProps.push(g.n)) } return H = h.transformOrigin, D.svg && (H || h.svgOrigin) && (q = D.xOffset, r = D.yOffset, hb(c, ta(H), F, h.svgOrigin, h.smoothOrigin), g = Ya(D, "xOrigin", (d ? D : F).xOrigin, F.xOrigin, g,
                                                "transformOrigin"), g = Ya(D, "yOrigin", (d ? D : F).yOrigin, F.yOrigin, g, "transformOrigin"), (q !== D.xOffset || r !== D.yOffset) && (g = Ya(D, "xOffset", d ? q : D.xOffset, D.xOffset, g, "transformOrigin"), g = Ya(D, "yOffset", d ? r : D.yOffset, D.yOffset, g, "transformOrigin")), H = Ea ? null : "0px 0px"), (H || Oa && n && D.zOrigin) && (sa ? (x = !0, Z = Da, H = (H || p(c, Z, a, !1, "50% 50%")) + "", g = new wa(v, Z, 0, 0, g, -1, "transformOrigin"), g.b = v[Z], g.plugin = k, Oa ? (K = D.zOrigin, H = H.split(" "), D.zOrigin = (2 < H.length && (0 === K || "0px" !== H[2]) ? parseFloat(H[2]) : K) || 0, g.xs0 = g.e =
                                                    H[0] + " " + (H[1] || "50%") + " 0px", g = new wa(D, "zOrigin", 0, 0, g, -1, g.n), g.b = K, g.xs0 = g.e = D.zOrigin) : g.xs0 = g.e = H) : ta(H + "", D)), x && (f._transformType = D.svg && Ea || !n && 3 !== this._transformType ? 2 : 3), m && (h[e] = m), g
                                }, prefix: !0
                            }); fa("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }); fa("borderRadius", {
                                defaultValue: "0px", parser: function (b, c, d, e, f, g) {
                                    c = this.format(c); var k, h, l, m, n, q, r, t, w, u = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                                        y = b.style; e = parseFloat(b.offsetWidth); g = parseFloat(b.offsetHeight); c = c.split(" "); for (k = 0; k < u.length; k++) {
                                            this.p.indexOf("border") && (u[k] = oa(u[k])); var D = l = p(b, u[k], a, !1, "0px"); -1 !== D.indexOf(" ") && (l = D.split(" "), D = l[0], l = l[1]); var z = h = c[k]; var H = parseFloat(D); var F = D.substr((H + "").length); (q = "=" === z.charAt(1)) ? (m = parseInt(z.charAt(0) + "1", 10), z = z.substr(2), m *= parseFloat(z), n = z.substr((m + "").length - (0 > m ? 1 : 0)) || "") : (m = parseFloat(z), n = z.substr((m + "").length)); "" === n && (n = v[d] || F); n !== F && (r = x(b, "borderLeft",
                                                H, F), t = x(b, "borderTop", H, F), "%" === n ? (D = r / e * 100 + "%", l = t / g * 100 + "%") : "em" === n ? (w = x(b, "borderLeft", 1, "em"), D = r / w + "em", l = t / w + "em") : (D = r + "px", l = t + "px"), q && (z = parseFloat(D) + m + n, h = parseFloat(l) + m + n)); f = Na(y, u[k], D + " " + l, z + " " + h, !1, "0px", f)
                                        } return f
                                }, prefix: !0, formatter: Ma("0px 0px 0px 0px", !1, !0)
                            }); fa("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                                defaultValue: "0px", parser: function (b, c, d, e, f, g) {
                                    return Na(b.style, d, this.format(p(b, d, a, !1, "0px 0px")), this.format(c),
                                        !1, "0px", f)
                                }, prefix: !0, formatter: Ma("0px 0px", !1, !0)
                            }); fa("backgroundPosition", {
                                defaultValue: "0 0", parser: function (b, c, e, f, g, k) {
                                    var h, l; e = a || ha(b, null); e = this.format((e ? d ? e.getPropertyValue("background-position-x") + " " + e.getPropertyValue("background-position-y") : e.getPropertyValue("background-position") : b.currentStyle.backgroundPositionX + " " + b.currentStyle.backgroundPositionY) || "0 0"); var m = this.format(c); if (-1 !== e.indexOf("%") != (-1 !== m.indexOf("%")) && 2 > m.split(",").length && (h = p(b, "backgroundImage").replace(L,
                                        ""), h && "none" !== h)) { c = e.split(" "); f = m.split(" "); ea.setAttribute("src", h); for (h = 2; -1 < --h;) { e = c[h]; var n = -1 !== e.indexOf("%"); n !== (-1 !== f[h].indexOf("%")) && (l = 0 === h ? b.offsetWidth - ea.width : b.offsetHeight - ea.height, c[h] = n ? parseFloat(e) / 100 * l + "px" : parseFloat(e) / l * 100 + "%") } e = c.join(" ") } return this.parseComplex(b.style, e, m, g, k)
                                }, formatter: ta
                            }); fa("backgroundSize", { defaultValue: "0 0", formatter: function (a) { return a += "", ta(-1 === a.indexOf(" ") ? a + " " + a : a) } }); fa("perspective", { defaultValue: "0px", prefix: !0 });
        fa("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }); fa("transformStyle", { prefix: !0 }); fa("backfaceVisibility", { prefix: !0 }); fa("userSelect", { prefix: !0 }); fa("margin", { parser: Xa("marginTop,marginRight,marginBottom,marginLeft") }); fa("padding", { parser: Xa("paddingTop,paddingRight,paddingBottom,paddingLeft") }); fa("clip", {
            defaultValue: "rect(0px,0px,0px,0px)", parser: function (b, c, e, f, g, k) {
                var h, l, m; return 9 > d ? (l = b.currentStyle, m = 8 > d ? " " : ",", h = "rect(" + l.clipTop + m + l.clipRight + m + l.clipBottom + m + l.clipLeft +
                    ")", c = this.format(c).split(",").join(m)) : (h = this.format(p(b, this.p, a, !1, this.dflt)), c = this.format(c)), this.parseComplex(b.style, h, c, g, k)
            }
        }); fa("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }); fa("autoRound,strictUnits", { parser: function (a, b, c, d, e) { return e } }); fa("border", {
            defaultValue: "0px solid #000", parser: function (b, c, d, e, f, g) {
                d = p(b, "borderTopWidth", a, !1, "0px"); c = this.format(c).split(" "); e = c[0].replace(R, ""); return "px" !== e && (d = parseFloat(d) / x(b, "borderTopWidth", 1, e) + e), this.parseComplex(b.style,
                    this.format(d + " " + p(b, "borderTopStyle", a, !1, "solid") + " " + p(b, "borderTopColor", a, !1, "#000")), c.join(" "), f, g)
            }, color: !0, formatter: function (a) { var b = a.split(" "); return b[0] + " " + (b[1] || "solid") + " " + (a.match(Aa) || ["#000"])[0] }
        }); fa("borderWidth", { parser: Xa("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }); fa("float,cssFloat,styleFloat", { parser: function (a, b, c, d, e, f) { a = a.style; d = "cssFloat" in a ? "cssFloat" : "styleFloat"; return new wa(a, d, 0, 0, e, -1, c, !1, 0, a[d], b) } }); var lb = function (a) {
            var b,
            c = this.t, d = c.filter || p(this.data, "filter") || ""; a = this.s + this.c * a | 0; 100 === a && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (c.removeAttribute("filter"), b = !p(this.data, "filter")) : (c.filter = d.replace(G, ""), b = !0)); b || (this.xn1 && (c.filter = d = d || "alpha(opacity=" + a + ")"), -1 === d.indexOf("pacity") ? 0 === a && this.xn1 || (c.filter = d + " alpha(opacity=" + a + ")") : c.filter = d.replace(O, "opacity=" + a))
        }; fa("opacity,alpha,autoAlpha", {
            defaultValue: "1", parser: function (b, c, d, e, f, g) {
                var k = parseFloat(p(b,
                    "opacity", a, !1, "1")), h = b.style, l = "autoAlpha" === d; return "string" == typeof c && "=" === c.charAt(1) && (c = ("-" === c.charAt(0) ? -1 : 1) * parseFloat(c.substr(2)) + k), l && 1 === k && "hidden" === p(b, "visibility", a) && 0 !== c && (k = 0), va ? f = new wa(h, "opacity", k, c - k, f) : (f = new wa(h, "opacity", 100 * k, 100 * (c - k), f), f.xn1 = l ? 1 : 0, h.zoom = 1, f.type = 2, f.b = "alpha(opacity=" + f.s + ")", f.e = "alpha(opacity=" + (f.s + f.c) + ")", f.data = b, f.plugin = g, f.setRatio = lb), l && (f = new wa(h, "visibility", 0, 0, f, -1, null, !1, 0, 0 !== k ? "inherit" : "hidden", 0 === c ? "hidden" : "inherit"),
                        f.xs0 = "inherit", e._overwriteProps.push(f.n), e._overwriteProps.push(d)), f
            }
        }); var db = function (a, b) { b && (a.removeProperty ? (("ms" === b.substr(0, 2) || "webkit" === b.substr(0, 6)) && (b = "-" + b), a.removeProperty(b.replace(P, "-$1").toLowerCase())) : a.removeAttribute(b)) }, wb = function (a) {
            if (this.t._gsClassPT = this, 1 === a || 0 === a) { this.t.setAttribute("class", 0 === a ? this.b : this.e); for (var b = this.data, c = this.t.style; b;)b.v ? c[b.p] = b.v : db(c, b.p), b = b._next; 1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null) } else this.t.getAttribute("class") !==
                this.e && this.t.setAttribute("class", this.e)
        }; fa("className", {
            parser: function (b, c, d, e, f, g, k) {
                var h, p, l, m = b.getAttribute("class") || "", x = b.style.cssText; if (f = e._classNamePT = new wa(b, d, 0, 0, f, 2), f.setRatio = wb, f.pr = -11, n = !0, f.b = m, d = H(b, a), p = b._gsClassPT) { var q = {}; for (l = p.data; l;)q[l.p] = 1, l = l._next; p.setRatio(1) } return b._gsClassPT = f, f.e = "=" !== c.charAt(1) ? c : m.replace(new RegExp("(?:\\s|^)" + c.substr(2) + "(?![\\w-])"), "") + ("+" === c.charAt(0) ? " " + c.substr(2) : ""), b.setAttribute("class", f.e), h = pa(b, d, H(b), k, q),
                    b.setAttribute("class", m), f.data = h.firstMPT, b.style.cssText = x, f.xfirst = e.parse(b, h.difs, f, g)
            }
        }); var rb = function (a) {
            if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var b, c, d = this.t.style, e = q.transform.parse; if ("all" === this.e) { d.cssText = ""; var f = !0 } else for (a = this.e.split(" ").join("").split(","), b = a.length; -1 < --b;) { var g = a[b]; q[g] && (q[g].parse === e ? f = !0 : g = "transformOrigin" === g ? Da : q[g].p); db(d, g) } f && (db(d, sa), c = this.t._gsTransform, c && (c.svg && (this.t.removeAttribute("data-svg-origin"),
                    this.t.removeAttribute("transform")), delete this.t._gsTransform))
            }
        }; fa("clearProps", { parser: function (a, b, c, d, e) { return e = new wa(a, c, 0, 0, e, 2), e.setRatio = rb, e.e = b, e.pr = -10, e.data = d._tween, n = !0, e } }); e = ["bezier", "throwProps", "physicsProps", "physics2D"]; for (Ba = e.length; Ba--;)Ra(e[Ba]); e = b.prototype; e._firstPT = e._lastParsedTransform = e._transform = null; e._onInitTween = function (c, d, e, g) {
            if (!c.nodeType) return !1; this._target = w = c; this._tween = e; this._vars = d; z = g; r = d.autoRound; n = !1; v = d.suffixMap || b.suffixMap; a = ha(c,
                ""); t = this._overwriteProps; var h, l, x, u, y; g = c.style; if (k && "" === g.zIndex && (h = p(c, "zIndex", a), ("auto" === h || "" === h) && this._addLazySet(g, "zIndex", 0)), "string" == typeof d && (u = g.cssText, h = H(c, a), g.cssText = u + ";" + d, h = pa(c, h, H(c)).difs, !va && J.test(d) && (h.opacity = parseFloat(RegExp.$1)), d = h, g.cssText = u), d.className ? this._firstPT = l = q.className.parse(c, d.className, "className", this, null, null, d) : this._firstPT = l = this.parse(c, d, null), this._transformType) {
                    d = 3 === this._transformType; sa ? m && (k = !0, "" === g.zIndex && (x = p(c, "zIndex",
                        a), ("auto" === x || "" === x) && this._addLazySet(g, "zIndex", 0)), f && this._addLazySet(g, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (d ? "visible" : "hidden"))) : g.zoom = 1; for (x = l; x && x._next;)x = x._next; d = new wa(c, "transform", 0, 0, null, 2); this._linkCSSP(d, null, x); d.setRatio = sa ? vb : Ka; d.data = this._transform || $a(c, a, !0); d.tween = e; d.pr = -1; t.pop()
                } if (n) { for (; l;) { c = l._next; for (x = u; x && x.pr > l.pr;)x = x._next; (l._prev = x ? x._prev : y) ? l._prev._next = l : u = l; (l._next = x) ? x._prev = l : y = l; l = c } this._firstPT = u } return !0
        };
        e.parse = function (b, c, d, e) {
            var f, g, h, k, l, m = b.style; for (f in c) {
                var n = c[f]; "function" == typeof n && (n = n(z, w)); if (g = q[f]) d = g.parse(b, n, f, this, d, e, c); else {
                    g = p(b, f, a) + ""; var t = "string" == typeof n; if ("color" === f || "fill" === f || "stroke" === f || -1 !== f.indexOf("Color") || t && E.test(n)) t || (n = ab(n), n = (3 < n.length ? "rgba(" : "rgb(") + n.join(",") + ")"), d = Na(m, f, g, n, !0, "transparent", d, 0, e); else if (t && ma.test(n)) d = Na(m, f, g, n, !0, null, d, 0, e); else {
                        var u = (h = parseFloat(g)) || 0 === h ? g.substr((h + "").length) : ""; if ("" === g || "auto" === g) if ("width" ===
                            f || "height" === f) { h = b; var y = f; u = a; if ("svg" === (h.nodeName + "").toLowerCase()) h = (u || ha(h))[y] || 0; else if (h.getBBox && ib(h)) h = h.getBBox()[y] || 0; else { var H = parseFloat("width" === y ? h.offsetWidth : h.offsetHeight); y = ca[y]; var C = y.length; for (u = u || ha(h, null); -1 < --C;)H -= parseFloat(p(h, "padding" + y[C], u, !0)) || 0, H -= parseFloat(p(h, "border" + y[C] + "Width", u, !0)) || 0; h = H } u = "px" } else "left" === f || "top" === f ? (h = D(b, f, a), u = "px") : (h = "opacity" !== f ? 0 : 1, u = ""); (H = t && "=" === n.charAt(1)) ? (k = parseInt(n.charAt(0) + "1", 10), n = n.substr(2),
                                k *= parseFloat(n), l = n.replace(R, "")) : (k = parseFloat(n), l = t ? n.replace(R, "") : ""); "" === l && (l = f in v ? v[f] : u); n = k || 0 === k ? (H ? k + h : k) + l : c[f]; u !== l && "" !== l && (k || 0 === k) && h && (h = x(b, f, h, u), "%" === l ? (h /= x(b, f, 100, "%") / 100, !0 !== c.strictUnits && (g = h + "%")) : "em" === l || "rem" === l || "vw" === l || "vh" === l ? h /= x(b, f, 1, l) : "px" !== l && (k = x(b, f, k, l), l = "px"), H && (k || 0 === k) && (n = k + h + l)); H && (k += h); !h && 0 !== h || !k && 0 !== k ? void 0 !== m[f] && (n || "NaN" != n + "" && null != n) ? (d = new wa(m, f, k || h || 0, 0, d, -1, f, !1, 0, g, n), d.xs0 = "none" !== n || "display" !== f && -1 === f.indexOf("Style") ?
                                    n : g) : window.console && console.log("invalid " + f + " tween value: " + c[f]) : (d = new wa(m, f, h, k - h, d, 0, f, !1 !== r && ("px" === l || "zIndex" === f), 0, g, n), d.xs0 = l)
                    }
                } e && d && !d.plugin && (d.plugin = e)
            } return d
        }; e.setRatio = function (a) {
            var b, c, d = this._firstPT; if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time) if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1E-6 === this._tween._rawPrevTime) for (; d;) {
                if (b = d.c * a + d.s, d.r ? b = Math.round(b) : 1E-6 > b && -1E-6 < b && (b = 0), d.type) if (1 === d.type) if (c =
                    d.l, 2 === c) d.t[d.p] = d.xs0 + b + d.xs1 + d.xn1 + d.xs2; else if (3 === c) d.t[d.p] = d.xs0 + b + d.xs1 + d.xn1 + d.xs2 + d.xn2 + d.xs3; else if (4 === c) d.t[d.p] = d.xs0 + b + d.xs1 + d.xn1 + d.xs2 + d.xn2 + d.xs3 + d.xn3 + d.xs4; else if (5 === c) d.t[d.p] = d.xs0 + b + d.xs1 + d.xn1 + d.xs2 + d.xn2 + d.xs3 + d.xn3 + d.xs4 + d.xn4 + d.xs5; else { var e = d.xs0 + b + d.xs1; for (c = 1; c < d.l; c++)e += d["xn" + c] + d["xs" + (c + 1)]; d.t[d.p] = e } else -1 === d.type ? d.t[d.p] = d.xs0 : d.setRatio && d.setRatio(a); else d.t[d.p] = b + d.xs0; d = d._next
            } else for (; d;)2 !== d.type ? d.t[d.p] = d.b : d.setRatio(a), d = d._next; else for (; d;) {
                if (2 !==
                    d.type) if (d.r && -1 !== d.type) if (b = Math.round(d.s + d.c), d.type) { if (1 === d.type) { e = d.xs0 + b + d.xs1; for (c = 1; c < d.l; c++)e += d["xn" + c] + d["xs" + (c + 1)]; d.t[d.p] = e } } else d.t[d.p] = b + d.xs0; else d.t[d.p] = d.e; else d.setRatio(a); d = d._next
            }
        }; e._enableTransforms = function (b) { this._transform = this._transform || $a(this._target, a, !0); this._transformType = this._transform.svg && Ea || !b && 3 !== this._transformType ? 2 : 3 }; var xb = function (a) { this.t[this.p] = this.e; this.data._linkCSSP(this, this._next, null, !0) }; e._addLazySet = function (a, b, c) {
            a =
            this._firstPT = new wa(a, b, 0, 0, this._firstPT, 2); a.e = c; a.setRatio = xb; a.data = this
        }; e._linkCSSP = function (a, b, c, d) { return a && (b && (b._prev = a), a._next && (a._next._prev = a._prev), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next, d = !0), c ? c._next = a : d || null !== this._firstPT || (this._firstPT = a), a._next = b, a._prev = c), a }; e._mod = function (a) { for (var b = this._firstPT; b;)"function" == typeof a[b.p] && a[b.p] === Math.round && (b.r = 1), b = b._next }; e._kill = function (a) {
            var b, c, d, e = a; if (a.autoAlpha || a.alpha) {
                e = {};
                for (c in a) e[c] = a[c]; e.opacity = 1; e.autoAlpha && (e.visibility = 1)
            } a.className && (b = this._classNamePT) && (d = b.xfirst, d && d._prev ? this._linkCSSP(d._prev, b._next, d._prev._prev) : d === this._firstPT && (this._firstPT = b._next), b._next && this._linkCSSP(b._next, b._next._next, d._prev), this._classNamePT = null); for (b = this._firstPT; b;)b.plugin && b.plugin !== c && b.plugin._kill && (b.plugin._kill(a), c = b.plugin), b = b._next; return h.prototype._kill.call(this, e)
        }; var mb = function (a, b, c) {
            var d; if (a.slice) for (d = a.length; -1 < --d;)mb(a[d],
                b, c); else for (a = a.childNodes, d = a.length; -1 < --d;) { var e = a[d]; var f = e.type; e.style && (b.push(H(e)), c && c.push(e)); 1 !== f && 9 !== f && 11 !== f || !e.childNodes.length || mb(e, b, c) }
        }; return b.cascadeTo = function (a, b, d) {
            var e, f; var g = c.to(a, b, d); var h = [g], k = [], l = [], p = [], m = c._internals.reservedProps; a = g._targets || g.target; mb(a, k, p); g.render(b, !0, !0); mb(a, l); g.render(0, !0, !0); g._enabled(!0); for (a = p.length; -1 < --a;)if (e = pa(p[a], k[a], l[a]), e.firstMPT) {
                e = e.difs; for (f in d) m[f] && (e[f] = d[f]); g = {}; for (f in e) g[f] = k[a][f]; h.push(c.fromTo(p[a],
                    b, g, e))
            } return h
        }, h.activate([b]), b
    }, !0); (function () {
        var h = _gsScope._gsDefine.plugin({ propName: "roundProps", version: "1.6.0", priority: -1, API: 2, init: function (c, h, v) { return this._tween = v, !0 } }).prototype; h._onInitAllProps = function () {
            for (var c, h, v, a = this._tween, t = a.vars.roundProps.join ? a.vars.roundProps : a.vars.roundProps.split(","), b = t.length, y = {}, q = a._propLookup.roundProps; -1 < --b;)y[t[b]] = Math.round; for (b = t.length; -1 < --b;)for (c = t[b], h = a._firstPT; h;) {
                v = h._next; if (h.pg) h.t._mod(y); else if (h.n === c) if (2 ===
                    h.f && h.t) for (h = h.t._firstPT; h;)h.f || h.blob || (h.m = Math.round), h = h._next; else this._add(h.t, c, h.s, h.c), v && (v._prev = h._prev), h._prev ? h._prev._next = v : a._firstPT === h && (a._firstPT = v), h._next = h._prev = null, a._propLookup[c] = q; h = v
            } return !1
        }; h._add = function (c, h, v, a) { this._addTween(c, h, v, v + a, h, Math.round); this._overwriteProps.push(h) }
    })(); (function () {
        _gsScope._gsDefine.plugin({
            propName: "attr", API: 2, version: "0.6.0", init: function (h, c, n, v) {
                var a; if ("function" != typeof h.setAttribute) return !1; for (a in c) n = c[a], "function" ==
                    typeof n && (n = n(v, h)), this._addTween(h, "setAttribute", h.getAttribute(a) + "", n + "", a, !1, a), this._overwriteProps.push(a); return !0
            }
        })
    })(); _gsScope._gsDefine.plugin({
        propName: "directionalRotation", version: "0.3.0", API: 2, init: function (h, c, n, v) {
        "object" != typeof c && (c = { rotation: c }); this.finals = {}; var a, t, b, y, q, e; n = !0 === c.useRadians ? 2 * Math.PI : 360; for (a in c) "useRadians" !== a && (y = c[a], "function" == typeof y && (y = y(v, h)), e = (y + "").split("_"), t = e[0], b = parseFloat("function" != typeof h[a] ? h[a] : h[a.indexOf("set") || "function" !=
            typeof h["get" + a.substr(3)] ? a : "get" + a.substr(3)]()), y = this.finals[a] = "string" == typeof t && "=" === t.charAt(1) ? b + parseInt(t.charAt(0) + "1", 10) * Number(t.substr(2)) : Number(t) || 0, q = y - b, e.length && (t = e.join("_"), -1 !== t.indexOf("short") && (q %= n, q !== q % (n / 2) && (q = 0 > q ? q + n : q - n)), -1 !== t.indexOf("_cw") && 0 > q ? q = (q + 9999999999 * n) % n - (q / n | 0) * n : -1 !== t.indexOf("ccw") && 0 < q && (q = (q - 9999999999 * n) % n - (q / n | 0) * n)), (1E-6 < q || -1E-6 > q) && (this._addTween(h, a, b, b + q, a), this._overwriteProps.push(a))); return !0
        }, set: function (h) {
            if (1 !== h) this._super.setRatio.call(this,
                h); else for (h = this._firstPT; h;)h.f ? h.t[h.p](this.finals[h.p]) : h.t[h.p] = this.finals[h.p], h = h._next
        }
    })._autoCSS = !0; _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (h) {
        var c, n, v, a = _gsScope.GreenSockGlobals || _gsScope, t = 2 * Math.PI, b = Math.PI / 2, y = a.com.greensock._class, q = function (a, b) { var c = y("easing." + a, function () { }, !0), d = c.prototype = new h; return d.constructor = c, d.getRatio = b, c }, e = h.register || function () { }, r = function (a, b, c, f, h) {
            b = y("easing." + a, { easeOut: new b, easeIn: new c, easeInOut: new f }, !0); return e(b,
                a), b
        }, k = function (a, b, c) { this.t = a; this.v = b; c && (this.next = c, c.prev = this, this.c = c.v - b, this.gap = c.t - a) }, m = function (a, b) { var c = y("easing." + a, function (a) { this._p1 = a || 0 === a ? a : 1.70158; this._p2 = 1.525 * this._p1 }, !0), d = c.prototype = new h; return d.constructor = c, d.getRatio = b, d.config = function (a) { return new c(a) }, c }; m = r("Back", m("BackOut", function (a) { return --a * a * ((this._p1 + 1) * a + this._p1) + 1 }), m("BackIn", function (a) { return a * a * ((this._p1 + 1) * a - this._p1) }), m("BackInOut", function (a) {
            return 1 > (a *= 2) ? .5 * a * a * ((this._p2 +
                1) * a - this._p2) : .5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2)
        })); var u = y("easing.SlowMo", function (a, b, c) { null == a ? a = .7 : 1 < a && (a = 1); this._p = 1 !== a ? b || 0 === b ? b : .7 : 0; this._p1 = (1 - a) / 2; this._p2 = a; this._p3 = this._p1 + this._p2; this._calcEnd = !0 === c }, !0), f = u.prototype = new h; return f.constructor = u, f.getRatio = function (a) {
            var b = a + (.5 - a) * this._p; return a < this._p1 ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ?
                1 : b
        }, u.ease = new u(.7, .7), f.config = u.config = function (a, b, c) { return new u(a, b, c) }, c = y("easing.SteppedEase", function (a) { a = a || 1; this._p1 = 1 / a; this._p2 = a + 1 }, !0), f = c.prototype = new h, f.constructor = c, f.getRatio = function (a) { return 0 > a ? a = 0 : 1 <= a && (a = .999999999), (this._p2 * a >> 0) * this._p1 }, f.config = c.config = function (a) { return new c(a) }, n = y("easing.RoughEase", function (a) {
            a = a || {}; for (var b, c, d, e, f = a.taper || "none", m = [], n = 0, q = e = 0 | (a.points || 20), r = !1 !== a.randomize, t = !0 === a.clamp, u = a.template instanceof h ? a.template :
                null, v = "number" == typeof a.strength ? .4 * a.strength : .4; -1 < --q;)a = r ? Math.random() : 1 / e * q, b = u ? u.getRatio(a) : a, "none" === f ? c = v : "out" === f ? (d = 1 - a, c = d * d * v) : "in" === f ? c = a * a * v : .5 > a ? (d = 2 * a, c = d * d * .5 * v) : (d = 2 * (1 - a), c = d * d * .5 * v), r ? b += Math.random() * c - .5 * c : q % 2 ? b += .5 * c : b -= .5 * c, t && (1 < b ? b = 1 : 0 > b && (b = 0)), m[n++] = { x: a, y: b }; m.sort(function (a, b) { return a.x - b.x }); c = new k(1, 1, null); for (q = e; -1 < --q;)e = m[q], c = new k(e.x, e.y, c); this._prev = new k(0, 0, 0 !== c.t ? c : c.next)
        }, !0), f = n.prototype = new h, f.constructor = n, f.getRatio = function (a) {
            var b =
                this._prev; if (a > b.t) { for (; b.next && a >= b.t;)b = b.next; b = b.prev } else for (; b.prev && a <= b.t;)b = b.prev; return this._prev = b, b.v + (a - b.t) / b.gap * b.c
        }, f.config = function (a) { return new n(a) }, n.ease = new n, r("Bounce", q("BounceOut", function (a) { return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375 }), q("BounceIn", function (a) {
            return (a = 1 - a) < 1 / 2.75 ? 1 - 7.5625 * a * a : 2 / 2.75 > a ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a +
                .9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375)
        }), q("BounceInOut", function (a) { var b = .5 > a; return a = b ? 1 - 2 * a : 2 * a - 1, a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375, b ? .5 * (1 - a) : .5 * a + .5 })), r("Circ", q("CircOut", function (a) { return Math.sqrt(1 - --a * a) }), q("CircIn", function (a) { return -(Math.sqrt(1 - a * a) - 1) }), q("CircInOut", function (a) { return 1 > (a *= 2) ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1) })), v = function (a, b, c) {
            var d = y("easing." +
                a, function (a, b) { this._p1 = 1 <= a ? a : 1; this._p2 = (b || c) / (1 > a ? a : 1); this._p3 = this._p2 / t * (Math.asin(1 / this._p1) || 0); this._p2 = t / this._p2 }, !0); a = d.prototype = new h; return a.constructor = d, a.getRatio = b, a.config = function (a, b) { return new d(a, b) }, d
        }, r("Elastic", v("ElasticOut", function (a) { return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * this._p2) + 1 }, .3), v("ElasticIn", function (a) { return -(this._p1 * Math.pow(2, 10 * --a) * Math.sin((a - this._p3) * this._p2)) }, .3), v("ElasticInOut", function (a) {
            return 1 > (a *= 2) ? -.5 * this._p1 *
                Math.pow(2, 10 * --a) * Math.sin((a - this._p3) * this._p2) : this._p1 * Math.pow(2, -10 * --a) * Math.sin((a - this._p3) * this._p2) * .5 + 1
        }, .45)), r("Expo", q("ExpoOut", function (a) { return 1 - Math.pow(2, -10 * a) }), q("ExpoIn", function (a) { return Math.pow(2, 10 * (a - 1)) - .001 }), q("ExpoInOut", function (a) { return 1 > (a *= 2) ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (2 - Math.pow(2, -10 * (a - 1))) })), r("Sine", q("SineOut", function (a) { return Math.sin(a * b) }), q("SineIn", function (a) { return -Math.cos(a * b) + 1 }), q("SineInOut", function (a) {
            return -.5 * (Math.cos(Math.PI * a) -
                1)
        })), y("easing.EaseLookup", { find: function (a) { return h.map[a] } }, !0), e(a.SlowMo, "SlowMo", "ease,"), e(n, "RoughEase", "ease,"), e(c, "SteppedEase", "ease,"), m
    }, !0)
}); _gsScope._gsDefine && _gsScope._gsQueue.pop()();
(function (h, c) {
    var n = {}, v = h.GreenSockGlobals = h.GreenSockGlobals || h; if (!v.TweenLite) {
        var a, t = function (a) { var b = a.split("."), c = v; for (a = 0; a < b.length; a++)c[b[a]] = c = c[b[a]] || {}; return c }, b = t("com.greensock"), y = function (a) { var b, c = [], d = a.length; for (b = 0; b !== d; c.push(a[b++])); return c }, q = function () { }, e = function () { var a = Object.prototype.toString, b = a.call([]); return function (c) { return null != c && (c instanceof Array || "object" == typeof c && !!c.push && a.call(c) === b) } }(), r = {}, k = function (a, b, d, e) {
        this.sc = r[a] ? r[a].sc :
            []; r[a] = this; this.gsClass = null; this.func = d; var f = []; this.check = function (g) {
                for (var p, m, x, l, q, u = b.length, w = u; -1 < --u;)(p = r[b[u]] || new k(b[u], [])).gsClass ? (f[u] = p.gsClass, w--) : g && p.sc.push(this); if (0 === w && d) {
                    if (m = ("com.greensock." + a).split("."), x = m.pop(), l = t(m.join("."))[x] = this.gsClass = d.apply(d, f), e) if (v[x] = n[x] = l, q = "undefined" != typeof module && module.exports, !q && "function" == typeof define && define.amd) define((h.GreenSockAMDPath ? h.GreenSockAMDPath + "/" : "") + a.split(".").pop(), [], function () { return l }); else if (q) if (a ===
                        c) for (u in module.exports = n[c] = l, n) l[u] = n[u]; else n[c] && (n[c][x] = l); for (u = 0; u < this.sc.length; u++)this.sc[u].check()
                }
            }; this.check(!0)
        }, m = h._gsDefine = function (a, b, c, d) { return new k(a, b, c, d) }, u = b._class = function (a, b, c) { return b = b || function () { }, m(a, [], function () { return b }, c), b }; m.globals = v; var f = [0, 0, 1, 1], d = u("easing.Ease", function (a, b, c, d) { this._func = a; this._type = c || 0; this._power = d || 0; this._params = b ? f.concat(b) : f }, !0), w = d.map = {}, z = d.register = function (a, c, d, e) {
            var f; c = c.split(","); for (var g = c.length,
                h = (d || "easeIn,easeOut,easeInOut").split(","); -1 < --g;) { var k = c[g]; d = e ? u("easing." + k, null, !0) : b.easing[k] || {}; for (f = h.length; -1 < --f;) { var p = h[f]; w[k + "." + p] = w[p + k] = d[p] = a.getRatio ? a : a[p] || new a } }
        }; var g = d.prototype; g._calcEnd = !1; g.getRatio = function (a) { if (this._func) return this._params[0] = a, this._func.apply(null, this._params); var b = this._type, c = this._power, d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a); return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2 }; var C = ["Linear",
            "Quad", "Cubic", "Quart", "Quint,Strong"]; for (a = C.length; -1 < --a;)g = C[a] + ",Power" + a, z(new d(null, null, 1, a), g, "easeOut", !0), z(new d(null, null, 2, a), g, "easeIn" + (0 === a ? ",easeNone" : "")), z(new d(null, null, 3, a), g, "easeInOut"); w.linear = b.easing.Linear.easeIn; w.swing = b.easing.Quad.easeInOut; var Q = u("events.EventDispatcher", function (a) { this._listeners = {}; this._eventTarget = a || this }); g = Q.prototype; g.addEventListener = function (a, b, c, d, e) {
                e = e || 0; var f, g = this._listeners[a], h = 0; this !== E || ha || E.wake(); null == g && (this._listeners[a] =
                    g = []); for (f = g.length; -1 < --f;)a = g[f], a.c === b && a.s === c ? g.splice(f, 1) : 0 === h && a.pr < e && (h = f + 1); g.splice(h, 0, { c: b, s: c, up: d, pr: e })
            }; g.removeEventListener = function (a, b) { var c, d = this._listeners[a]; if (d) for (c = d.length; -1 < --c;)if (d[c].c === b) return void d.splice(c, 1) }; g.dispatchEvent = function (a) { var b, c, d = this._listeners[a]; if (d) { var e = d.length; 1 < e && (d = d.slice(0)); for (b = this._eventTarget; -1 < --e;)(c = d[e]) && (c.up ? c.c.call(c.s || b, { type: a, target: b }) : c.c.call(c.s || b)) } }; var S = h.requestAnimationFrame, R = h.cancelAnimationFrame,
                O = Date.now || function () { return (new Date).getTime() }, J = O(); C = ["ms", "moz", "webkit", "o"]; for (a = C.length; -1 < --a && !S;)S = h[C[a] + "RequestAnimationFrame"], R = h[C[a] + "CancelAnimationFrame"] || h[C[a] + "CancelRequestAnimationFrame"]; u("Ticker", function (a, b) {
                    var c, d, e, f, g, h = this, k = O(), l = !1 !== b && S ? "auto" : !1, p = 500, m = 33, n = function (a) { var b; var l = O() - J; l > p && (k += l - m); J += l; h.time = (J - k) / 1E3; l = h.time - g; (!c || 0 < l || !0 === a) && (h.frame++ , g += l + (l >= f ? .004 : f - l), b = !0); !0 !== a && (e = d(n)); b && h.dispatchEvent("tick") }; Q.call(h); h.time =
                        h.frame = 0; h.tick = function () { n(!0) }; h.lagSmoothing = function (a, b) { p = a || 1E10; m = Math.min(b, p, 0) }; h.sleep = function () { null != e && (l && R ? R(e) : clearTimeout(e), d = q, e = null, h === E && (ha = !1)) }; h.wake = function (a) { null !== e ? h.sleep() : a ? k += -J + (J = O()) : 10 < h.frame && (J = O() - p + 5); d = 0 === c ? q : l && S ? S : function (a) { return setTimeout(a, 1E3 * (g - h.time) + 1 | 0) }; h === E && (ha = !0); n(2) }; h.fps = function (a) { return arguments.length ? (c = a, f = 1 / (c || 60), g = this.time + f, void h.wake()) : c }; h.useRAF = function (a) {
                            return arguments.length ? (h.sleep(), l = a, void h.fps(c)) :
                                l
                        }; h.fps(a); setTimeout(function () { "auto" === l && 5 > h.frame && "hidden" !== document.visibilityState && h.useRAF(!1) }, 1500)
                }); g = b.Ticker.prototype = new b.events.EventDispatcher; g.constructor = b.Ticker; var G = u("core.Animation", function (a, b) {
                    if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = !0 === b.immediateRender, this.data = b.data, this._reversed = !0 === b.reversed, ea) {
                        ha || E.wake(); var c = this.vars.useFrames ? ka : ea; c.add(this, c._time); this.vars.paused &&
                            this.paused(!0)
                    }
                }); var E = G.ticker = new b.Ticker; g = G.prototype; g._dirty = g._gc = g._initted = g._paused = !1; g._totalTime = g._time = 0; g._rawPrevTime = -1; g._next = g._last = g._onUpdate = g._timeline = g.timeline = null; g._paused = !1; var P = function () { ha && 2E3 < O() - J && E.wake(); setTimeout(P, 2E3) }; P(); g.play = function (a, b) { return null != a && this.seek(a, b), this.reversed(!1).paused(!1) }; g.pause = function (a, b) { return null != a && this.seek(a, b), this.paused(!0) }; g.resume = function (a, b) { return null != a && this.seek(a, b), this.paused(!1) }; g.seek =
                    function (a, b) { return this.totalTime(Number(a), !1 !== b) }; g.restart = function (a, b) { return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, !1 !== b, !0) }; g.reverse = function (a, b) { return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1) }; g.render = function (a, b, c) { }; g.invalidate = function () { return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this }; g.isActive = function () {
                        var a, b = this._timeline, c = this._startTime;
                        return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime()) >= c && a < c + this.totalDuration() / this._timeScale
                    }; g._enabled = function (a, b) { return ha || E.wake(), this._gc = !a, this._active = this.isActive(), !0 !== b && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1 }; g._kill = function (a, b) { return this._enabled(!1, !1) }; g.kill = function (a, b) { return this._kill(a, b), this }; g._uncache = function (a) {
                        for (a = a ? this : this.timeline; a;)a._dirty = !0, a =
                            a.timeline; return this
                    }; g._swapSelfInParams = function (a) { for (var b = a.length, c = a.concat(); -1 < --b;)"{self}" === a[b] && (c[b] = this); return c }; g._callback = function (a) { var b = this.vars, c = b[a], d = b[a + "Params"]; a = b[a + "Scope"] || b.callbackScope || this; switch (d ? d.length : 0) { case 0: c.call(a); break; case 1: c.call(a, d[0]); break; case 2: c.call(a, d[0], d[1]); break; default: c.apply(a, d) } }; g.eventCallback = function (a, b, c, d) {
                        if ("on" === (a || "").substr(0, 2)) {
                            var f = this.vars; if (1 === arguments.length) return f[a]; null == b ? delete f[a] :
                                (f[a] = b, f[a + "Params"] = e(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, f[a + "Scope"] = d); "onUpdate" === a && (this._onUpdate = b)
                        } return this
                    }; g.delay = function (a) { return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay }; g.duration = function (a) {
                        return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== a && this.totalTime(a /
                            this._duration * this._totalTime, !0), this) : (this._dirty = !1, this._duration)
                    }; g.totalDuration = function (a) { return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration }; g.time = function (a, b) { return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time }; g.totalTime = function (a, b, c) {
                        if (ha || E.wake(), !arguments.length) return this._totalTime; if (this._timeline) {
                            if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
                            this._dirty &&
                                this.totalDuration(); var d = this._totalDuration, e = this._timeline; if (a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale, e._dirty || this._uncache(!1), e._timeline) for (; e._timeline;)e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), e = e._timeline
                            } this._gc && this._enabled(!0, !1); (this._totalTime !== a || 0 === this._duration) && (I.length && na(), this.render(a, b, !1), I.length && na())
                        } return this
                    }; g.progress = g.totalProgress =
                        function (a, b) { var c = this.duration(); return arguments.length ? this.totalTime(c * a, b) : c ? this._time / c : this.ratio }; g.startTime = function (a) { return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime }; g.endTime = function (a) { return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale }; g.timeScale = function (a) {
                            if (!arguments.length) return this._timeScale; if (a = a || 1E-10, this._timeline &&
                                this._timeline.smoothChildTiming) { var b = this._pauseTime; b = b || 0 === b ? b : this._timeline.totalTime(); this._startTime = b - (b - this._startTime) * this._timeScale / a } return this._timeScale = a, this._uncache(!1)
                        }; g.reversed = function (a) { return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed }; g.paused = function (a) {
                            if (!arguments.length) return this._paused; var b, c, d = this._timeline;
                            return a != this._paused && d && (ha || a || E.wake(), b = d.rawTime(), c = b - this._pauseTime, !a && d.smoothChildTiming && (this._startTime += c, this._uncache(!1)), this._pauseTime = a ? b : null, this._paused = a, this._active = this.isActive(), !a && 0 !== c && this._initted && this.duration() && (b = d.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale, this.render(b, b === this._totalTime, !0))), this._gc && !a && this._enabled(!0, !1), this
                        }; C = u("core.SimpleTimeline", function (a) {
                            G.call(this, 0, a); this.autoRemoveChildren = this.smoothChildTiming =
                                !0
                        }); g = C.prototype = new G; g.constructor = C; g.kill()._gc = !1; g._first = g._last = g._recent = null; g._sortChildren = !1; g.add = g.insert = function (a, b, c, d) {
                            if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), b = this._last, this._sortChildren) for (c = a._startTime; b && b._startTime > c;)b = b._prev; return b ? (a._next = b._next, b._next = a) : (a._next = this._first,
                                this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = b, this._recent = a, this._timeline && this._uncache(!0), this
                        }; g._remove = function (a, b) { return a.timeline === this && (b || a._enabled(!1, !0), a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), a._next = a._prev = a.timeline = null, a === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this }; g.render = function (a, b, c) {
                            var d = this._first; for (this._totalTime =
                                this._time = this._rawPrevTime = a; d;) { var e = d._next; (d._active || a >= d._startTime && !d._paused) && (d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)); d = e }
                        }; g.rawTime = function () { return ha || E.wake(), this._totalTime }; var B = u("TweenLite", function (a, b, c) {
                            if (G.call(this, b, c), this.render = B.prototype.render, null == a) throw "Cannot tween a null target."; this.target = a = "string" != typeof a ? a : B.selector(a) || a; var d; var f = a.jquery ||
                                a.length && a !== h && a[0] && (a[0] === h || a[0].nodeType && a[0].style && !a.nodeType); c = this.vars.overwrite; if (this._overwrite = c = null == c ? ua[B.defaultOverwrite] : "number" == typeof c ? c >> 0 : ua[c], (f || a instanceof Array || a.push && e(a)) && "number" != typeof a[0]) for (this._targets = d = y(a), this._propLookup = [], this._siblings = [], a = 0; a < d.length; a++)(f = d[a]) ? "string" != typeof f ? f.length && f !== h && f[0] && (f[0] === h || f[0].nodeType && f[0].style && !f.nodeType) ? (d.splice(a--, 1), this._targets = d = d.concat(y(f))) : (this._siblings[a] = va(f, this,
                                    !1), 1 === c && 1 < this._siblings[a].length && xa(f, this, null, 1, this._siblings[a])) : (f = d[a--] = B.selector(f), "string" == typeof f && d.splice(a + 1, 1)) : d.splice(a--, 1); else this._propLookup = {}, this._siblings = va(a, this, !1), 1 === c && 1 < this._siblings.length && xa(a, this, null, 1, this._siblings); (this.vars.immediateRender || 0 === b && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1E-10, this.render(Math.min(0, -this._delay)))
                        }, !0), L = function (a) {
                            return a && a.length && a !== h && a[0] && (a[0] === h || a[0].nodeType && a[0].style &&
                                !a.nodeType)
                        }; g = B.prototype = new G; g.constructor = B; g.kill()._gc = !1; g.ratio = 0; g._firstPT = g._targets = g._overwrittenProps = g._startAt = null; g._notifyPluginsOfEnabled = g._lazy = !1; B.version = "1.19.0"; B.defaultEase = g._ease = new d(null, null, 1, 1); B.defaultOverwrite = "auto"; B.ticker = E; B.autoSleep = 120; B.lagSmoothing = function (a, b) { E.lagSmoothing(a, b) }; B.selector = h.$ || h.jQuery || function (a) {
                            var b = h.$ || h.jQuery; return b ? (B.selector = b, b(a)) : "undefined" == typeof document ? a : document.querySelectorAll ? document.querySelectorAll(a) :
                                document.getElementById("#" === a.charAt(0) ? a.substr(1) : a)
                        }; var I = [], T = {}, ba = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, ja = function (a) { for (var b, c = this._firstPT; c;)b = c.blob ? a ? this.join("") : this.start : c.c * a + c.s, c.m ? b = c.m(b, this._target || c.t) : 1E-6 > b && -1E-6 < b && (b = 0), c.f ? c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b) : c.t[c.p] = b, c = c._next }, U = function (a, b, c, d) {
                            var e, f = [a, b], g = 0, h = "", k = 0; f.start = a; c && (c(f), a = f[0], b = f[1]); f.length = 0; a = a.match(ba) || []; c = b.match(ba) || []; d && (d._next = null, d.blob = 1, f._firstPT = f._applyPT =
                                d); var l = c.length; for (d = 0; l > d; d++) { var m = c[d]; var p = b.substr(g, b.indexOf(m, g) - g); h += p || !d ? p : ","; g += p.length; k ? k = (k + 1) % 5 : "rgba(" === p.substr(-5) && (k = 1); m === a[d] || a.length <= d ? h += m : (h && (f.push(h), h = ""), e = parseFloat(a[d]), f.push(e), f._firstPT = { _next: f._firstPT, t: f, p: f.length - 1, s: e, c: ("=" === m.charAt(1) ? parseInt(m.charAt(0) + "1", 10) * parseFloat(m.substr(2)) : parseFloat(m) - e) || 0, f: 0, m: k && 4 > k ? Math.round : 0 }); g += m.length } return h += b.substr(g), h && f.push(h), f.setRatio = ja, f
                        }, ma = function (a, b, c, d, e, f, g, h, k) {
                        "function" ==
                            typeof d && (d = d(k || 0, a)); var l, m; k = "get" === c ? a[b] : c; var p = typeof a[b], n = "string" == typeof d && "=" === d.charAt(1); f = { t: a, p: b, s: k, f: "function" === p, pg: 0, n: e || b, m: f ? "function" == typeof f ? f : Math.round : 0, pr: 0, c: n ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2)) : parseFloat(d) - k || 0 }; return "number" !== p && ("function" === p && "get" === c && (m = b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3), f.s = k = g ? a[m](g) : a[m]()), "string" == typeof k && (g || isNaN(k)) ? (f.fp = g, l = U(k, d, h || B.defaultStringFilter,
                                f), f = { t: l, p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: e || b, pr: 0, m: 0 }) : n || (f.s = parseFloat(k), f.c = parseFloat(d) - f.s || 0)), f.c ? ((f._next = this._firstPT) && (f._next._prev = f), this._firstPT = f, f) : void 0
                        }; a = B._internals = { isArray: e, isSelector: L, lazyTweens: I, blobDif: U }; var W = B._plugins = {}, V = a.tweenLookup = {}, aa = 0, da = a.reservedProps = {
                            ease: 1, delay: 1, overwrite: 1, onComplete: 1, onCompleteParams: 1, onCompleteScope: 1, useFrames: 1, runBackwards: 1, startAt: 1, onUpdate: 1, onUpdateParams: 1, onUpdateScope: 1, onStart: 1, onStartParams: 1, onStartScope: 1,
                            onReverseComplete: 1, onReverseCompleteParams: 1, onReverseCompleteScope: 1, onRepeat: 1, onRepeatParams: 1, onRepeatScope: 1, easeParams: 1, yoyo: 1, immediateRender: 1, repeat: 1, repeatDelay: 1, data: 1, paused: 1, reversed: 1, autoCSS: 1, lazy: 1, onOverwrite: 1, callbackScope: 1, stringFilter: 1, id: 1
                        }, ua = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, "true": 1, "false": 0 }, ka = G._rootFramesTimeline = new C, ea = G._rootTimeline = new C, za = 30, na = a.lazyRender = function () {
                            var a, b = I.length; for (T = {}; -1 < --b;)(a = I[b]) && !1 !== a._lazy &&
                                (a.render(a._lazy[0], a._lazy[1], !0), a._lazy = !1); I.length = 0
                        }; ea._startTime = E.time; ka._startTime = E.frame; ea._active = ka._active = !0; setTimeout(na, 1); G._updateRoot = B.render = function () {
                            var a, b; if (I.length && na(), ea.render((E.time - ea._startTime) * ea._timeScale, !1, !1), ka.render((E.frame - ka._startTime) * ka._timeScale, !1, !1), I.length && na(), E.frame >= za) {
                                za = E.frame + (parseInt(B.autoSleep, 10) || 120); for (b in V) { var c = V[b].tweens; for (a = c.length; -1 < --a;)c[a]._gc && c.splice(a, 1); 0 === c.length && delete V[b] } if (b = ea._first,
                                    (!b || b._paused) && B.autoSleep && !ka._first && 1 === E._listeners.tick.length) { for (; b && b._paused;)b = b._next; b || E.sleep() }
                            }
                        }; E.addEventListener("tick", G._updateRoot); var va = function (a, b, c) { var d, e, f = a._gsTweenID; if (V[f || (a._gsTweenID = f = "t" + aa++)] || (V[f] = { target: a, tweens: [] }), b && (d = V[f].tweens, d[e = d.length] = b, c)) for (; -1 < --e;)d[e] === b && d.splice(e, 1); return V[f].tweens }, ra = function (a, b, c, d) { var e, f, g = a.vars.onOverwrite; return g && (e = g(a, b, c, d)), g = B.onOverwrite, g && (f = g(a, b, c, d)), !1 !== e && !1 !== f }, xa = function (a,
                            b, c, d, e) {
                                var f, g, h; if (1 === d || 4 <= d) { c = e.length; for (f = 0; c > f; f++)if ((h = e[f]) !== b) h._gc || h._kill(null, a, b) && (g = !0); else if (5 === d) break; return g } var k, l = b._startTime + 1E-10, m = [], n = 0, p = 0 === b._duration; for (f = e.length; -1 < --f;)(h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (k = k || Y(b, 0, p), 0 === Y(h, k, p) && (m[n++] = h)) : h._startTime <= l && h._startTime + h.totalDuration() / h._timeScale > l && ((p || !h._initted) && 2E-10 >= l - h._startTime || (m[n++] = h))); for (f = n; -1 < --f;)(h = m[f], 2 === d && h._kill(c, a, b) && (g = !0), 2 !== d || !h._firstPT &&
                                    h._initted) && (2 === d || ra(h, b)) && h._enabled(!1, !1) && (g = !0); return g
                        }, Y = function (a, b, c) { for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline;) { if (f += d._startTime, e *= d._timeScale, d._paused) return -100; d = d._timeline } return f /= e, f > b ? f - b : c && f === b || !a._initted && 2E-10 > f - b ? 1E-10 : (f += a.totalDuration() / a._timeScale / e) > b + 1E-10 ? 0 : f - b - 1E-10 }; g._init = function () {
                            var a, b, c = this.vars, e = this._overwrittenProps, f = this._duration; var g = !!c.immediateRender; var h = c.ease; if (c.startAt) {
                            this._startAt && (this._startAt.render(-1,
                                !0), this._startAt.kill()); var k = {}; for (a in c.startAt) k[a] = c.startAt[a]; if (k.overwrite = !1, k.immediateRender = !0, k.lazy = g && !1 !== c.lazy, k.startAt = k.delay = null, this._startAt = B.to(this.target, 0, k), g) if (0 < this._time) this._startAt = null; else if (0 !== f) return
                            } else if (c.runBackwards && 0 !== f) if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null; else {
                            0 !== this._time && (g = !1); k = {}; for (a in c) da[a] && "autoCSS" !== a || (k[a] = c[a]); if (k.overwrite = 0, k.data = "isFromStart", k.lazy = g && !1 !== c.lazy,
                                k.immediateRender = g, this._startAt = B.to(this.target, 0, k), g) { if (0 === this._time) return } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                            } if (this._ease = h = h ? h instanceof d ? h : "function" == typeof h ? new d(h, c.easeParams) : w[h] || B.defaultEase : B.defaultEase, c.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, c.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) for (g = this._targets.length,
                                a = 0; g > a; a++)this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], e ? e[a] : null, a) && (b = !0); else b = this._initProps(this.target, this._propLookup, this._siblings, e, 0); if (b && B._onPluginEvent("_onInitAllProps", this), e && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), c.runBackwards) for (k = this._firstPT; k;)k.s += k.c, k.c = -k.c, k = k._next; this._onUpdate = c.onUpdate; this._initted = !0
                        }; g._initProps = function (a, b, c, d, f) {
                            var g, k, m, n; if (null == a) return !1; T[a._gsTweenID] && na(); if (!this.vars.css &&
                                a.style && a !== h && a.nodeType && W.css && !1 !== this.vars.autoCSS) { var l = this.vars; var p = {}; for (n in l) da[n] || n in a && "transform" !== n && "x" !== n && "y" !== n && "width" !== n && "height" !== n && "className" !== n && "border" !== n || !(!W[n] || W[n] && W[n]._autoCSS) || (p[n] = l[n], delete l[n]); l.css = p } for (g in this.vars) if (l = this.vars[g], da[g]) l && (l instanceof Array || l.push && e(l)) && -1 !== l.join("").indexOf("{self}") && (this.vars[g] = this._swapSelfInParams(l, this)); else if (W[g] && (m = new W[g])._onInitTween(a, this.vars[g], this, f)) {
                                this._firstPT =
                                    n = { _next: this._firstPT, t: m, p: "setRatio", s: 0, c: 1, f: 1, n: g, pg: 1, pr: m._priority, m: 0 }; for (l = m._overwriteProps.length; -1 < --l;)b[m._overwriteProps[l]] = this._firstPT; (m._priority || m._onInitAllProps) && (k = !0); (m._onDisable || m._onEnable) && (this._notifyPluginsOfEnabled = !0); n._next && (n._next._prev = n)
                                } else b[g] = ma.call(this, a, g, "get", l, g, 0, null, this.vars.stringFilter, f); return d && this._kill(d, a) ? this._initProps(a, b, c, d, f) : 1 < this._overwrite && this._firstPT && 1 < c.length && xa(a, this, b, this._overwrite, c) ? (this._kill(b,
                                    a), this._initProps(a, b, c, d, f)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (T[a._gsTweenID] = !0), k)
                        }; g.render = function (a, b, c) {
                            var d, e, f, g = this._time, h = this._duration; var k = this._rawPrevTime; if (a >= h - 1E-7) this._totalTime = this._time = h, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (d = !0, e = "onComplete", c = c || this._timeline.autoRemoveChildren), 0 === h && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0),
                                (0 > k || 0 >= a && -1E-7 <= a || 1E-10 === k && "isPause" !== this.data) && k !== a && (c = !0, 1E-10 < k && (e = "onReverseComplete")), this._rawPrevTime = f = !b || a || k === a ? a : 1E-10); else if (1E-7 > a) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== g || 0 === h && 0 < k) && (e = "onReverseComplete", d = this._reversed), 0 > a && (this._active = !1, 0 === h && (this._initted || !this.vars.lazy || c) && (0 <= k && (1E-10 !== k || "isPause" !== this.data) && (c = !0), this._rawPrevTime = f = !b || a || k === a ? a : 1E-10)), this._initted || (c = !0); else if (this._totalTime =
                                    this._time = a, this._easeType) { var l = a / h, m = this._easeType, n = this._easePower; (1 === m || 3 === m && .5 <= l) && (l = 1 - l); 3 === m && (l *= 2); 1 === n ? l *= l : 2 === n ? l *= l * l : 3 === n ? l *= l * l * l : 4 === n && (l *= l * l * l * l); 1 === m ? this.ratio = 1 - l : 2 === m ? this.ratio = l : .5 > a / h ? this.ratio = l / 2 : this.ratio = 1 - l / 2 } else this.ratio = this._ease.getRatio(a / h); if (this._time !== g || c) {
                                        if (!this._initted) {
                                            if (this._init(), !this._initted || this._gc) return; if (!c && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime =
                                                g, this._rawPrevTime = k, I.push(this), void (this._lazy = [a, b]); this._time && !d ? this.ratio = this._ease.getRatio(this._time / h) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                                        } !1 !== this._lazy && (this._lazy = !1); this._active || !this._paused && this._time !== g && 0 <= a && (this._active = !0); 0 !== g || (this._startAt && (0 <= a ? this._startAt.render(a, b, c) : e || (e = "_dummyGS")), !this.vars.onStart || 0 === this._time && 0 !== h || !b && this._callback("onStart")); for (k = this._firstPT; k;)k.f ? k.t[k.p](k.c * this.ratio + k.s) :
                                            k.t[k.p] = k.c * this.ratio + k.s, k = k._next; this._onUpdate && (0 > a && this._startAt && -1E-4 !== a && this._startAt.render(a, b, c), b || (this._time !== g || d || c) && this._callback("onUpdate")); e && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && -1E-4 !== a && this._startAt.render(a, b, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this._callback(e), 0 === h && 1E-10 === this._rawPrevTime && 1E-10 !== f && (this._rawPrevTime = 0))
                                    }
                        }; g._kill = function (a, b, c) {
                            if ("all" === a && (a = null), null ==
                                a && (null == b || b === this.target)) return this._lazy = !1, this._enabled(!1, !1); b = "string" != typeof b ? b || this._targets || this.target : B.selector(b) || b; var d, f, g, h, k, m, l = c && this._time && c._startTime === this._startTime && this._timeline === c._timeline; if ((e(b) || L(b)) && "number" != typeof b[0]) for (d = b.length; -1 < --d;)this._kill(a, b[d], c) && (h = !0); else {
                                    if (this._targets) for (d = this._targets.length; -1 < --d;) {
                                        if (b === this._targets[d]) {
                                            var n = this._propLookup[d] || {}; this._overwrittenProps = this._overwrittenProps || []; var p = this._overwrittenProps[d] =
                                                a ? this._overwrittenProps[d] || {} : "all"; break
                                        }
                                    } else { if (b !== this.target) return !1; n = this._propLookup; p = this._overwrittenProps = a ? this._overwrittenProps || {} : "all" } if (n) {
                                        if (d = a || n, k = a !== p && "all" !== p && a !== n && ("object" != typeof a || !a._tempKill), c && (B.onOverwrite || this.vars.onOverwrite)) { for (f in d) n[f] && (m || (m = []), m.push(f)); if ((m || !a) && !ra(this, c, b, m)) return !1 } for (f in d) (g = n[f]) && (l && (g.f ? g.t[g.p](g.s) : g.t[g.p] = g.s, h = !0), g.pg && g.t._kill(d) && (h = !0), g.pg && 0 !== g.t._overwriteProps.length || (g._prev ? g._prev._next =
                                            g._next : g === this._firstPT && (this._firstPT = g._next), g._next && (g._next._prev = g._prev), g._next = g._prev = null), delete n[f]), k && (p[f] = 1); !this._firstPT && this._initted && this._enabled(!1, !1)
                                    }
                                } return h
                        }; g.invalidate = function () {
                            return this._notifyPluginsOfEnabled && B._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], G.prototype.invalidate.call(this), this.vars.immediateRender &&
                                (this._time = -1E-10, this.render(Math.min(0, -this._delay))), this
                        }; g._enabled = function (a, b) { if (ha || E.wake(), a && this._gc) { var c, d = this._targets; if (d) for (c = d.length; -1 < --c;)this._siblings[c] = va(d[c], this, !0); else this._siblings = va(this.target, this, !0) } return G.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? B._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1 }; B.to = function (a, b, c) { return new B(a, b, c) }; B.from = function (a, b, c) {
                            return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender,
                                new B(a, b, c)
                        }; B.fromTo = function (a, b, c, d) { return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new B(a, b, d) }; B.delayedCall = function (a, b, c, d, e) { return new B(b, 0, { delay: a, onComplete: b, onCompleteParams: c, callbackScope: d, onReverseComplete: b, onReverseCompleteParams: c, immediateRender: !1, lazy: !1, useFrames: e, overwrite: 0 }) }; B.set = function (a, b) { return new B(a, 0, b) }; B.getTweensOf = function (a, b) {
                            if (null == a) return []; a = "string" != typeof a ? a : B.selector(a) || a; var c, d; if ((e(a) || L(a)) && "number" !=
                                typeof a[0]) { var f = a.length; for (c = []; -1 < --f;)c = c.concat(B.getTweensOf(a[f], b)); for (f = c.length; -1 < --f;) { var g = c[f]; for (d = f; -1 < --d;)g === c[d] && c.splice(f, 1) } } else for (c = va(a).concat(), f = c.length; -1 < --f;)(c[f]._gc || b && !c[f].isActive()) && c.splice(f, 1); return c
                        }; B.killTweensOf = B.killDelayedCallsTo = function (a, b, c) { "object" == typeof b && (c = b, b = !1); b = B.getTweensOf(a, b); for (var d = b.length; -1 < --d;)b[d]._kill(c, a) }; var oa = u("plugins.TweenPlugin", function (a, b) {
                        this._overwriteProps = (a || "").split(","); this._propName =
                            this._overwriteProps[0]; this._priority = b || 0; this._super = oa.prototype
                        }, !0); if (g = oa.prototype, oa.version = "1.19.0", oa.API = 2, g._firstPT = null, g._addTween = ma, g.setRatio = ja, g._kill = function (a) { var b, c = this._overwriteProps, d = this._firstPT; if (null != a[this._propName]) this._overwriteProps = []; else for (b = c.length; -1 < --b;)null != a[c[b]] && c.splice(b, 1); for (; d;)null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, d._prev = null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next; return !1 },
                            g._mod = g._roundProps = function (a) { for (var b, c = this._firstPT; c;)(b = a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")]) && "function" == typeof b && (2 === c.f ? c.t._applyPT.m = b : c.m = b), c = c._next }, B._onPluginEvent = function (a, b) { var c, d, e, f, g = b._firstPT; if ("_onInitAllProps" === a) { for (; g;) { var h = g._next; for (d = e; d && d.pr > g.pr;)d = d._next; (g._prev = d ? d._prev : f) ? g._prev._next = g : e = g; (g._next = d) ? d._prev = g : f = g; g = h } g = b._firstPT = e } for (; g;)g.pg && "function" == typeof g.t[a] && g.t[a]() && (c = !0), g = g._next; return c },
                            oa.activate = function (a) { for (var b = a.length; -1 < --b;)a[b].API === oa.API && (W[(new a[b])._propName] = a[b]); return !0 }, m.plugin = function (a) {
                                if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition."; var b, c = a.propName, d = a.priority || 0, e = a.overwriteProps, f = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_mod", mod: "_mod", initAll: "_onInitAllProps" }, g = u("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function () { oa.call(this, c, d); this._overwriteProps = e || [] }, !0 === a.global), h = g.prototype =
                                    new oa(c); h.constructor = g; g.API = a.API; for (b in f) "function" == typeof a[b] && (h[f[b]] = a[b]); return g.version = a.version, oa.activate([g]), g
                            }, C = h._gsQueue) { for (a = 0; a < C.length; a++)C[a](); for (g in r) r[g].func || h.console.log("GSAP encountered missing dependency: " + g) } var ha = !1
    }
})("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"); var _Group = function () { this._tweens = {}; this._tweensAddedDuringUpdate = {} };
_Group.prototype = {
    getAll: function () { return Object.keys(this._tweens).map(function (h) { return this._tweens[h] }.bind(this)) }, removeAll: function () { this._tweens = {} }, add: function (h) { this._tweens[h.getId()] = h; this._tweensAddedDuringUpdate[h.getId()] = h }, remove: function (h) { delete this._tweens[h.getId()]; delete this._tweensAddedDuringUpdate[h.getId()] }, update: function (h, c) {
        var n = Object.keys(this._tweens); if (0 === n.length) return !1; for (h = void 0 !== h ? h : TWEEN.now(); 0 < n.length;) {
        this._tweensAddedDuringUpdate = {}; for (var v =
            0; v < n.length; v++) { var a = this._tweens[n[v]]; a && !1 === a.update(h) && (a._isPlaying = !1, c || delete this._tweens[n[v]]) } n = Object.keys(this._tweensAddedDuringUpdate)
        } return !0
    }
}; var TWEEN = new _Group; TWEEN.Group = _Group; TWEEN._nextId = 0; TWEEN.nextId = function () { return TWEEN._nextId++ };
TWEEN.now = "undefined" === typeof window && "undefined" !== typeof process ? function () { var h = process.hrtime(); return 1E3 * h[0] + h[1] / 1E6 } : "undefined" !== typeof window && void 0 !== window.performance && void 0 !== window.performance.now ? window.performance.now.bind(window.performance) : void 0 !== Date.now ? Date.now : function () { return (new Date).getTime() };
TWEEN.Tween = function (h, c) {
this._object = h; this._valuesStart = {}; this._valuesEnd = {}; this._valuesStartRepeat = {}; this._duration = 1E3; this._repeat = 0; this._repeatDelayTime = void 0; this._reversed = this._isPlaying = this._yoyo = !1; this._delayTime = 0; this._startTime = null; this._easingFunction = TWEEN.Easing.Linear.None; this._interpolationFunction = TWEEN.Interpolation.Linear; this._chainedTweens = []; this._onStartCallback = null; this._onStartCallbackFired = !1; this._onStopCallback = this._onCompleteCallback = this._onUpdateCallback =
    null; this._group = c || TWEEN; this._id = TWEEN.nextId()
};
TWEEN.Tween.prototype = {
    getId: function () { return this._id }, isPlaying: function () { return this._isPlaying }, to: function (h, c) { this._valuesEnd = h; void 0 !== c && (this._duration = c); return this }, start: function (h) {
        this._group.add(this); this._isPlaying = !0; this._onStartCallbackFired = !1; this._startTime = void 0 !== h ? "string" === typeof h ? TWEEN.now() + parseFloat(h) : h : TWEEN.now(); this._startTime += this._delayTime; for (var c in this._valuesEnd) {
            if (this._valuesEnd[c] instanceof Array) {
                if (0 === this._valuesEnd[c].length) continue;
                this._valuesEnd[c] = [this._object[c]].concat(this._valuesEnd[c])
            } void 0 !== this._object[c] && (this._valuesStart[c] = this._object[c], !1 === this._valuesStart[c] instanceof Array && (this._valuesStart[c] *= 1), this._valuesStartRepeat[c] = this._valuesStart[c] || 0)
        } return this
    }, stop: function () { if (!this._isPlaying) return this; this._group.remove(this); this._isPlaying = !1; null !== this._onStopCallback && this._onStopCallback(this._object); this.stopChainedTweens(); return this }, end: function () {
        this.update(this._startTime + this._duration);
        return this
    }, stopChainedTweens: function () { for (var h = 0, c = this._chainedTweens.length; h < c; h++)this._chainedTweens[h].stop() }, group: function h(h) { this._group = h; return this }, delay: function (h) { this._delayTime = h; return this }, repeat: function (h) { this._repeat = h; return this }, repeatDelay: function (h) { this._repeatDelayTime = h; return this }, yoyo: function (h) { this._yoyo = h; return this }, easing: function (h) { this._easingFunction = h; return this }, interpolation: function (h) { this._interpolationFunction = h; return this }, chain: function () {
    this._chainedTweens =
        arguments; return this
    }, onStart: function (h) { this._onStartCallback = h; return this }, onUpdate: function (h) { this._onUpdateCallback = h; return this }, onComplete: function (h) { this._onCompleteCallback = h; return this }, onStop: function (h) { this._onStopCallback = h; return this }, update: function (h) {
        var c; if (h < this._startTime) return !0; !1 === this._onStartCallbackFired && (null !== this._onStartCallback && this._onStartCallback(this._object), this._onStartCallbackFired = !0); var n = (h - this._startTime) / this._duration; n = 0 === this._duration ||
            1 < n ? 1 : n; var v = this._easingFunction(n); for (c in this._valuesEnd) if (void 0 !== this._valuesStart[c]) { var a = this._valuesStart[c] || 0, t = this._valuesEnd[c]; t instanceof Array ? this._object[c] = this._interpolationFunction(t, v) : ("string" === typeof t && (t = "+" === t.charAt(0) || "-" === t.charAt(0) ? a + parseFloat(t) : parseFloat(t)), "number" === typeof t && (this._object[c] = a + (t - a) * v)) } null !== this._onUpdateCallback && this._onUpdateCallback(this._object); if (1 === n) if (0 < this._repeat) {
            isFinite(this._repeat) && this._repeat--; for (c in this._valuesStartRepeat) "string" ===
                typeof this._valuesEnd[c] && (this._valuesStartRepeat[c] += parseFloat(this._valuesEnd[c])), this._yoyo && (n = this._valuesStartRepeat[c], this._valuesStartRepeat[c] = this._valuesEnd[c], this._valuesEnd[c] = n), this._valuesStart[c] = this._valuesStartRepeat[c]; this._yoyo && (this._reversed = !this._reversed); this._startTime = void 0 !== this._repeatDelayTime ? h + this._repeatDelayTime : h + this._delayTime
            } else {
            null !== this._onCompleteCallback && this._onCompleteCallback(this._object); h = 0; for (c = this._chainedTweens.length; h < c; h++)this._chainedTweens[h].start(this._startTime +
                this._duration); return !1
            } return !0
    }
};
TWEEN.Easing = {
    Linear: { None: function (h) { return h } }, Quadratic: { In: function (h) { return h * h }, Out: function (h) { return h * (2 - h) }, InOut: function (h) { return 1 > (h *= 2) ? .5 * h * h : -.5 * (--h * (h - 2) - 1) } }, Cubic: { In: function (h) { return h * h * h }, Out: function (h) { return --h * h * h + 1 }, InOut: function (h) { return 1 > (h *= 2) ? .5 * h * h * h : .5 * ((h -= 2) * h * h + 2) } }, Quartic: { In: function (h) { return h * h * h * h }, Out: function (h) { return 1 - --h * h * h * h }, InOut: function (h) { return 1 > (h *= 2) ? .5 * h * h * h * h : -.5 * ((h -= 2) * h * h * h - 2) } }, Quintic: {
        In: function (h) { return h * h * h * h * h }, Out: function (h) {
            return --h *
                h * h * h * h + 1
        }, InOut: function (h) { return 1 > (h *= 2) ? .5 * h * h * h * h * h : .5 * ((h -= 2) * h * h * h * h + 2) }
    }, Sinusoidal: { In: function (h) { return 1 - Math.cos(h * Math.PI / 2) }, Out: function (h) { return Math.sin(h * Math.PI / 2) }, InOut: function (h) { return .5 * (1 - Math.cos(Math.PI * h)) } }, Exponential: { In: function (h) { return 0 === h ? 0 : Math.pow(1024, h - 1) }, Out: function (h) { return 1 === h ? 1 : 1 - Math.pow(2, -10 * h) }, InOut: function (h) { return 0 === h ? 0 : 1 === h ? 1 : 1 > (h *= 2) ? .5 * Math.pow(1024, h - 1) : .5 * (-Math.pow(2, -10 * (h - 1)) + 2) } }, Circular: {
        In: function (h) {
            return 1 - Math.sqrt(1 -
                h * h)
        }, Out: function (h) { return Math.sqrt(1 - --h * h) }, InOut: function (h) { return 1 > (h *= 2) ? -.5 * (Math.sqrt(1 - h * h) - 1) : .5 * (Math.sqrt(1 - (h -= 2) * h) + 1) }
    }, Elastic: {
        In: function (h) { return 0 === h ? 0 : 1 === h ? 1 : -Math.pow(2, 10 * (h - 1)) * Math.sin(5 * (h - 1.1) * Math.PI) }, Out: function (h) { return 0 === h ? 0 : 1 === h ? 1 : Math.pow(2, -10 * h) * Math.sin(5 * (h - .1) * Math.PI) + 1 }, InOut: function (h) {
            if (0 === h) return 0; if (1 === h) return 1; h *= 2; return 1 > h ? -.5 * Math.pow(2, 10 * (h - 1)) * Math.sin(5 * (h - 1.1) * Math.PI) : .5 * Math.pow(2, -10 * (h - 1)) * Math.sin(5 * (h - 1.1) * Math.PI) +
                1
        }
    }, Back: { In: function (h) { return h * h * (2.70158 * h - 1.70158) }, Out: function (h) { return --h * h * (2.70158 * h + 1.70158) + 1 }, InOut: function (h) { return 1 > (h *= 2) ? .5 * h * h * (3.5949095 * h - 2.5949095) : .5 * ((h -= 2) * h * (3.5949095 * h + 2.5949095) + 2) } }, Bounce: {
        In: function (h) { return 1 - TWEEN.Easing.Bounce.Out(1 - h) }, Out: function (h) { return h < 1 / 2.75 ? 7.5625 * h * h : h < 2 / 2.75 ? 7.5625 * (h -= 1.5 / 2.75) * h + .75 : h < 2.5 / 2.75 ? 7.5625 * (h -= 2.25 / 2.75) * h + .9375 : 7.5625 * (h -= 2.625 / 2.75) * h + .984375 }, InOut: function (h) {
            return .5 > h ? .5 * TWEEN.Easing.Bounce.In(2 * h) : .5 * TWEEN.Easing.Bounce.Out(2 *
                h - 1) + .5
        }
    }
};
TWEEN.Interpolation = {
    Linear: function (h, c) { var n = h.length - 1, v = n * c, a = Math.floor(v), t = TWEEN.Interpolation.Utils.Linear; return 0 > c ? t(h[0], h[1], v) : 1 < c ? t(h[n], h[n - 1], n - v) : t(h[a], h[a + 1 > n ? n : a + 1], v - a) }, Bezier: function (h, c) { for (var n = 0, v = h.length - 1, a = Math.pow, t = TWEEN.Interpolation.Utils.Bernstein, b = 0; b <= v; b++)n += a(1 - c, v - b) * a(c, b) * h[b] * t(v, b); return n }, CatmullRom: function (h, c) {
        var n = h.length - 1, v = n * c, a = Math.floor(v), t = TWEEN.Interpolation.Utils.CatmullRom; return h[0] === h[n] ? (0 > c && (a = Math.floor(v = n * (1 + c))), t(h[(a -
            1 + n) % n], h[a], h[(a + 1) % n], h[(a + 2) % n], v - a)) : 0 > c ? h[0] - (t(h[0], h[0], h[1], h[1], -v) - h[0]) : 1 < c ? h[n] - (t(h[n], h[n], h[n - 1], h[n - 1], v - n) - h[n]) : t(h[a ? a - 1 : 0], h[a], h[n < a + 1 ? n : a + 1], h[n < a + 2 ? n : a + 2], v - a)
    }, Utils: {
        Linear: function (h, c, n) { return (c - h) * n + h }, Bernstein: function (h, c) { var n = TWEEN.Interpolation.Utils.Factorial; return n(h) / n(c) / n(h - c) }, Factorial: function () { var h = [1]; return function (c) { var n = 1; if (h[c]) return h[c]; for (var v = c; 1 < v; v--)n *= v; return h[c] = n } }(), CatmullRom: function (h, c, n, v, a) {
            h = .5 * (n - h); v = .5 * (v - c); var t =
                a * a; return (2 * c - 2 * n + h + v) * a * t + (-3 * c + 3 * n - 2 * h - v) * t + h * a + c
        }
    }
}; (function (h) { "function" === typeof define && define.amd ? define([], function () { return TWEEN }) : "undefined" !== typeof module && "object" === typeof exports ? module.exports = TWEEN : void 0 !== h && (h.TWEEN = TWEEN) })(this); Detector = {
    canvas: !!window.CanvasRenderingContext2D, webgl: function () { try { return !!window.WebGLRenderingContext && !!document.createElement("canvas").getContext("experimental-webgl") } catch (h) { return !1 } }(), workers: !!window.Worker, fileapi: window.File && window.FileReader && window.FileList && window.Blob, getWebGLErrorMessage: function () {
        var h = document.createElement("div"); h.id = "webgl-error-message"; h.style.fontFamily = "monospace"; h.style.fontSize = "13px"; h.style.fontWeight = "normal"; h.style.textAlign = "center"; h.style.background =
            "#fff"; h.style.color = "#000"; h.style.padding = "1.5em"; h.style.width = "400px"; h.style.margin = "5em auto 0"; this.webgl || (h.innerHTML = window.WebGLRenderingContext ? 'Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br />\nFind out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.' : 'Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>\nFind out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.');
        return h
    }, addGetWebGLMessage: function (h) { h = h || {}; var c = void 0 !== h.parent ? h.parent : document.body; h = void 0 !== h.id ? h.id : "oldie"; var n = Detector.getWebGLErrorMessage(); n.id = h; c.appendChild(n) }
};
THREE.OrbitControls = function (h, c) {
    function n() { return Math.pow(.95, f.zoomSpeed) } function v(a) { f.object.isPerspectiveCamera ? O /= a : f.object.isOrthographicCamera ? (f.object.zoom = Math.max(f.minZoom, Math.min(f.maxZoom, f.object.zoom * a)), f.object.updateProjectionMatrix(), G = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), f.enableZoom = !1) } function a(a) {
        f.object.isPerspectiveCamera ? O *= a : f.object.isOrthographicCamera ? (f.object.zoom = Math.max(f.minZoom, Math.min(f.maxZoom,
            f.object.zoom / a)), f.object.updateProjectionMatrix(), G = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), f.enableZoom = !1)
    } function t(a) {
        if (!1 !== f.enabled) {
            a.preventDefault(); switch (a.button) {
                case f.mouseButtons.ORBIT: if (!1 === f.enableRotate) return; E.set(a.clientX, a.clientY); C = g.ROTATE; break; case f.mouseButtons.ZOOM: if (!1 === f.enableZoom) return; ba.set(a.clientX, a.clientY); C = g.DOLLY; break; case f.mouseButtons.PAN: if (!1 === f.enablePan) return; L.set(a.clientX,
                    a.clientY); C = g.PAN
            }C !== g.NONE && (document.addEventListener("mousemove", b, !1), document.addEventListener("mouseup", y, !1), f.dispatchEvent(w))
        }
    } function b(b) {
        if (!1 !== f.enabled) switch (b.preventDefault(), C) {
            case g.ROTATE: if (!1 === f.enableRotate) break; P.set(b.clientX, b.clientY); B.subVectors(P, E).multiplyScalar(f.rotateSpeed); b = f.domElement === document ? f.domElement.body : f.domElement; R.theta -= 2 * Math.PI * B.x / b.clientHeight; R.phi -= 2 * Math.PI * B.y / b.clientHeight; E.copy(P); f.update(); break; case g.DOLLY: if (!1 === f.enableZoom) break;
                ja.set(b.clientX, b.clientY); U.subVectors(ja, ba); 0 < U.y ? v(n()) : 0 > U.y && a(n()); ba.copy(ja); f.update(); break; case g.PAN: !1 !== f.enablePan && (I.set(b.clientX, b.clientY), T.subVectors(I, L).multiplyScalar(f.panSpeed), V(T.x, T.y), L.copy(I), f.update())
        }
    } function y(a) { !1 !== f.enabled && (document.removeEventListener("mousemove", b, !1), document.removeEventListener("mouseup", y, !1), f.dispatchEvent(z), C = g.NONE) } function q(b) {
    !1 === f.enabled || !1 === f.enableZoom || C !== g.NONE && C !== g.ROTATE || (b.preventDefault(), b.stopPropagation(),
        f.dispatchEvent(w), 0 > b.deltaY ? a(n()) : 0 < b.deltaY && v(n()), f.update(), f.dispatchEvent(z))
    } function e(a) { if (!1 !== f.enabled && !1 !== f.enableKeys && !1 !== f.enablePan) switch (a.keyCode) { case f.keys.UP: V(0, f.keyPanSpeed); f.update(); break; case f.keys.BOTTOM: V(0, -f.keyPanSpeed); f.update(); break; case f.keys.LEFT: V(f.keyPanSpeed, 0); f.update(); break; case f.keys.RIGHT: V(-f.keyPanSpeed, 0), f.update() } } function r(a) {
        if (!1 !== f.enabled) {
            a.preventDefault(); switch (a.touches.length) {
                case 1: if (!1 === f.enableRotate) return; E.set(a.touches[0].pageX,
                    a.touches[0].pageY); C = g.TOUCH_ROTATE; break; case 2: if (!1 === f.enableZoom && !1 === f.enablePan) return; if (f.enableZoom) { var b = a.touches[0].pageX - a.touches[1].pageX, c = a.touches[0].pageY - a.touches[1].pageY; ba.set(0, Math.sqrt(b * b + c * c)) } f.enablePan && L.set(.5 * (a.touches[0].pageX + a.touches[1].pageX), .5 * (a.touches[0].pageY + a.touches[1].pageY)); C = g.TOUCH_DOLLY_PAN; break; default: C = g.NONE
            }C !== g.NONE && f.dispatchEvent(w)
        }
    } function k(a) {
        if (!1 !== f.enabled) switch (a.preventDefault(), a.stopPropagation(), a.touches.length) {
            case 1: if (!1 ===
                f.enableRotate) break; if (C !== g.TOUCH_ROTATE) break; P.set(a.touches[0].pageX, a.touches[0].pageY); B.subVectors(P, E).multiplyScalar(f.rotateSpeed); a = f.domElement === document ? f.domElement.body : f.domElement; R.theta -= 2 * Math.PI * B.x / a.clientHeight; R.phi -= 2 * Math.PI * B.y / a.clientHeight; E.copy(P); f.update(); break; case 2: if (!1 === f.enableZoom && !1 === f.enablePan) break; if (C !== g.TOUCH_DOLLY_PAN) break; if (f.enableZoom) {
                    var b = a.touches[0].pageX - a.touches[1].pageX, c = a.touches[0].pageY - a.touches[1].pageY; ja.set(0, Math.sqrt(b *
                        b + c * c)); U.set(0, Math.pow(ja.y / ba.y, f.zoomSpeed)); v(U.y); ba.copy(ja)
                } f.enablePan && (I.set(.5 * (a.touches[0].pageX + a.touches[1].pageX), .5 * (a.touches[0].pageY + a.touches[1].pageY)), T.subVectors(I, L).multiplyScalar(f.panSpeed), V(T.x, T.y), L.copy(I)); f.update(); break; default: C = g.NONE
        }
    } function m(a) { !1 !== f.enabled && (f.dispatchEvent(z), C = g.NONE) } function u(a) { !1 !== f.enabled && a.preventDefault() } this.object = h; this.domElement = void 0 !== c ? c : document; this.enabled = !0; this.target = new THREE.Vector3; this.minDistance =
        0; this.maxDistance = Infinity; this.minZoom = 0; this.maxZoom = Infinity; this.minPolarAngle = 0; this.maxPolarAngle = Math.PI; this.minAzimuthAngle = -Infinity; this.maxAzimuthAngle = Infinity; this.enableDamping = !1; this.dampingFactor = .25; this.enableZoom = !0; this.zoomSpeed = 1; this.enableRotate = !0; this.rotateSpeed = 1; this.enablePan = !0; this.panSpeed = 1; this.screenSpacePanning = !1; this.keyPanSpeed = 7; this.autoRotate = !1; this.autoRotateSpeed = 2; this.enableKeys = !0; this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 }; this.mouseButtons = {
            ORBIT: THREE.MOUSE.LEFT,
            ZOOM: THREE.MOUSE.MIDDLE, PAN: THREE.MOUSE.RIGHT
        }; this.target0 = this.target.clone(); this.position0 = this.object.position.clone(); this.zoom0 = this.object.zoom; this.getPolarAngle = function () { return S.phi }; this.getAzimuthalAngle = function () { return S.theta }; this.saveState = function () { f.target0.copy(f.target); f.position0.copy(f.object.position); f.zoom0 = f.object.zoom }; this.reset = function () {
            f.target.copy(f.target0); f.object.position.copy(f.position0); f.object.zoom = f.zoom0; f.object.updateProjectionMatrix(); f.dispatchEvent(d);
            f.update(); C = g.NONE
        }; this.update = function () {
            var a = new THREE.Vector3, b = (new THREE.Quaternion).setFromUnitVectors(h.up, new THREE.Vector3(0, 1, 0)), c = b.clone().inverse(), e = new THREE.Vector3, k = new THREE.Quaternion; return function () {
                var h = f.object.position; a.copy(h).sub(f.target); a.applyQuaternion(b); S.setFromVector3(a); f.autoRotate && C === g.NONE && (R.theta -= 2 * Math.PI / 60 / 60 * f.autoRotateSpeed); S.theta += R.theta; S.phi += R.phi; S.theta = Math.max(f.minAzimuthAngle, Math.min(f.maxAzimuthAngle, S.theta)); S.phi = Math.max(f.minPolarAngle,
                    Math.min(f.maxPolarAngle, S.phi)); S.makeSafe(); S.radius *= O; S.radius = Math.max(f.minDistance, Math.min(f.maxDistance, S.radius)); f.target.add(J); a.setFromSpherical(S); a.applyQuaternion(c); h.copy(f.target).add(a); f.object.lookAt(f.target); !0 === f.enableDamping ? (R.theta *= 1 - f.dampingFactor, R.phi *= 1 - f.dampingFactor, J.multiplyScalar(1 - f.dampingFactor)) : (R.set(0, 0, 0), J.set(0, 0, 0)); O = 1; return G || e.distanceToSquared(f.object.position) > Q || 8 * (1 - k.dot(f.object.quaternion)) > Q ? (f.dispatchEvent(d), e.copy(f.object.position),
                        k.copy(f.object.quaternion), G = !1, !0) : !1
            }
        }(); this.dispose = function () {
            f.domElement.removeEventListener("contextmenu", u, !1); f.domElement.removeEventListener("mousedown", t, !1); f.domElement.removeEventListener("wheel", q, !1); f.domElement.removeEventListener("touchstart", r, !1); f.domElement.removeEventListener("touchend", m, !1); f.domElement.removeEventListener("touchmove", k, !1); document.removeEventListener("mousemove", b, !1); document.removeEventListener("mouseup", y, !1); window.removeEventListener("keydown",
                e, !1)
        }; var f = this, d = { type: "change" }, w = { type: "start" }, z = { type: "end" }, g = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_DOLLY_PAN: 4 }, C = g.NONE, Q = 1E-6, S = new THREE.Spherical, R = new THREE.Spherical, O = 1, J = new THREE.Vector3, G = !1, E = new THREE.Vector2, P = new THREE.Vector2, B = new THREE.Vector2, L = new THREE.Vector2, I = new THREE.Vector2, T = new THREE.Vector2, ba = new THREE.Vector2, ja = new THREE.Vector2, U = new THREE.Vector2, ma = function () {
            var a = new THREE.Vector3; return function (b, c) {
                a.setFromMatrixColumn(c, 0); a.multiplyScalar(-b);
                J.add(a)
            }
        }(), W = function () { var a = new THREE.Vector3; return function (b, c) { !0 === f.screenSpacePanning ? a.setFromMatrixColumn(c, 1) : (a.setFromMatrixColumn(c, 0), a.crossVectors(f.object.up, a)); a.multiplyScalar(b); J.add(a) } }(), V = function () {
            var a = new THREE.Vector3; return function (b, c) {
                var d = f.domElement === document ? f.domElement.body : f.domElement; if (f.object.isPerspectiveCamera) {
                    a.copy(f.object.position).sub(f.target); var e = a.length(); e *= Math.tan(f.object.fov / 2 * Math.PI / 180); ma(2 * b * e / d.clientHeight, f.object.matrix);
                    W(2 * c * e / d.clientHeight, f.object.matrix)
                } else f.object.isOrthographicCamera ? (ma(b * (f.object.right - f.object.left) / f.object.zoom / d.clientWidth, f.object.matrix), W(c * (f.object.top - f.object.bottom) / f.object.zoom / d.clientHeight, f.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), f.enablePan = !1)
            }
        }(); f.domElement.addEventListener("contextmenu", u, !1); f.domElement.addEventListener("mousedown", t, !1); f.domElement.addEventListener("wheel", q, !1); f.domElement.addEventListener("touchstart",
            r, !1); f.domElement.addEventListener("touchend", m, !1); f.domElement.addEventListener("touchmove", k, !1); window.addEventListener("keydown", e, !1); this.update()
}; THREE.OrbitControls.prototype = Object.create(THREE.EventDispatcher.prototype); THREE.OrbitControls.prototype.constructor = THREE.OrbitControls;
Object.defineProperties(THREE.OrbitControls.prototype, {
    center: { get: function () { console.warn("THREE.OrbitControls: .center has been renamed to .target"); return this.target } }, noZoom: { get: function () { console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."); return !this.enableZoom }, set: function (h) { console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."); this.enableZoom = !h } }, noRotate: {
        get: function () {
            console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.");
            return !this.enableRotate
        }, set: function (h) { console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."); this.enableRotate = !h }
    }, noPan: { get: function () { console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."); return !this.enablePan }, set: function (h) { console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."); this.enablePan = !h } }, noKeys: {
        get: function () {
            console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.");
            return !this.enableKeys
        }, set: function (h) { console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."); this.enableKeys = !h }
    }, staticMoving: { get: function () { console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."); return !this.enableDamping }, set: function (h) { console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."); this.enableDamping = !h } }, dynamicDampingFactor: {
        get: function () {
            console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.");
            return this.dampingFactor
        }, set: function (h) { console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."); this.dampingFactor = h }
    }
});
$(".button--bubble").each(function () {
    var h = $(this).parent().find(".circle.top-left"), c = $(this).parent().find(".circle.bottom-right"), n = new TimelineLite, v = new TimelineLite, a = new TimelineLite({ paused: !0 }); n.to(h, 1.2, { x: -25, y: -25, scaleY: 2, ease: SlowMo.ease.config(.1, .7, !1) }); n.to(h.eq(0), .1, { scale: .2, x: "+=6", y: "-=2" }); n.to(h.eq(1), .1, { scaleX: 1, scaleY: .8, x: "-=10", y: "-=7" }, "-=0.1"); n.to(h.eq(2), .1, { scale: .2, x: "-=15", y: "+=6" }, "-=0.1"); n.to(h.eq(0), 1, { scale: 0, x: "-=5", y: "-=15", opacity: 0 }); n.to(h.eq(1), 1, {
        scaleX: .4,
        scaleY: .4, x: "-=10", y: "-=10", opacity: 0
    }, "-=1"); n.to(h.eq(2), 1, { scale: 0, x: "-=15", y: "+=5", opacity: 0 }, "-=1"); var t = new TimelineLite, b = new TimelineLite; t.set(h, { x: 0, y: 0, rotation: -45 }); t.add(n); v.set(c, { x: 0, y: 0 }); v.to(c, 1.1, { x: 30, y: 30, ease: SlowMo.ease.config(.1, .7, !1) }); v.to(c.eq(0), .1, { scale: .2, x: "-=6", y: "+=3" }); v.to(c.eq(1), .1, { scale: .8, x: "+=7", y: "+=3" }, "-=0.1"); v.to(c.eq(2), .1, { scale: .2, x: "+=15", y: "-=6" }, "-=0.2"); v.to(c.eq(0), 1, { scale: 0, x: "+=5", y: "+=15", opacity: 0 }); v.to(c.eq(1), 1, {
        scale: .4, x: "+=7", y: "+=7",
        opacity: 0
    }, "-=1"); v.to(c.eq(2), 1, { scale: 0, x: "+=15", y: "-=5", opacity: 0 }, "-=1"); b.set(c, { x: 0, y: 0, rotation: 45 }); b.add(v); a.add(t); a.to($(this).parent().find(".button.effect-button"), .8, { scaleY: 1.1 }, .1); a.add(b, .2); a.to($(this).parent().find(".button.effect-button"), 1.8, { scale: 1, ease: Elastic.easeOut.config(1.2, .4) }, 1.2); a.timeScale(2.6); $(this).on("click", function () {
        a.restart(); setTimeout(function () { var a = document.getElementById("myAudio"); a.volume = 1; a.play() }, 50); setTimeout(function () { start() }, 300); setTimeout(function () {
            $(".init").animate({ opacity: 0 },
                300)
        }, 800); setTimeout(function () { $(".init").remove() }, 1100); $("#bars").animate({ opacity: 1 }, 3200)
    })
}); function fire() { document.getElementById("click").play(); $(".init").animate({ bottom: "-=20px", opacity: 0 }, 300); setTimeout(function () { $(".init").remove() }, 300); $("#bars").animate({ opacity: 1 }, 3200) }
var world, dt = 1 / 60, song, constraintDown = !1, camera, scene, renderer, gplane = !1, clickMarker = !1, geometry, material, mesh, controls, time = Date.now(), jointBody, constrainedBody, mouseConstraint, N = 3, container, projector, camFactor = 20, frustumSize = 30, aspect = window.innerWidth / window.innerHeight, meshes = [], bodies = [], jump = !1, sfx, mediaSourceNode, analyser, audio; window.onload = function () { TweenMax.staggerFrom(".init", 2, { opacity: 0, y: 20, ease: Power2.easeInOut }, .1) };
function start() {
    document.getElementById("myAudio").src = ""; setTimeout(function () {
        setTimeout(function () { $(".menu").css("opacity", "1"); $("p").addClass("trans"); TweenMax.staggerFrom(".menu li", 1, { opacity: 0, y: 20, ease: Power2.easeInOut }, .1); TweenMax.staggerFrom(".menu #form", 2.5, { opacity: 0, y: 20, ease: Power2.easeInOut }, .1) }, 1E3); var h = window.AudioContext || window.webkitAudioContext || !1; h ? (sfx = new h, audio = document.getElementById("myAudio"), document.getElementById("myAudio").src = "../sound/song1.mp3", mediaSourceNode =
            sfx.createMediaElementSource(audio), analyser = sfx.createAnalyser(), analyser.fftSize = 1024, timeDomainData = new Uint8Array(analyser.frequencyBinCount), mediaSourceNode.connect(analyser), analyser.connect(sfx.destination)) : alert("Sorry, but the Web Audio API is not supported by your browser. Please, consider upgrading to the latest version or downloading Google Chrome or Mozilla Firefox"); setTimeout(function () {
            audio.volume = 0; audio.play(); var c = setInterval(function () { audio.volume += .01; .99 < audio.volume && clearInterval(c) },
                60)
            }, 1E3); initCannon(); init(); animate(); detectBeats()
    }, 1200)
}
function init() {
Detector.webgl || Detector.addGetWebGLMessage(); container = document.createElement("div"); container.setAttribute("id", "container"); document.body.appendChild(container); scene = new THREE.Scene; var h = window.innerWidth / window.innerHeight; camera = new THREE.OrthographicCamera(frustumSize * h / -2, frustumSize * h / 2, frustumSize / 2, frustumSize / -2, 1, 2E3); camera.position.set(55, 43, -38); scene.add(camera); h = new THREE.AmbientLight(16109986, .6); scene.add(h); h = new THREE.DirectionalLight(16777215, 1); h.position.set(20,
    30, 20); h.castShadow = !0; h.shadow.mapSize.width = 1024; h.shadow.mapSize.height = 1024; h.shadow.camera.left = -20; h.shadow.camera.right = 20; h.shadow.camera.top = 20; h.shadow.camera.bottom = -20; h.shadow.camera.far = 60; h.shadow.camera.near = 20; scene.add(h); geometry = new THREE.PlaneGeometry(500, 500, 1, 1); material = new THREE.MeshLambertMaterial({ color: 11673893 }); mesh = new THREE.Mesh(geometry, material); mesh.quaternion.setFromAxisAngle(new THREE.Vector3(1, 0, 0), -Math.PI / 2); mesh.receiveShadow = !0; scene.add(mesh); h = new THREE.BoxGeometry(3,
        3, 3, 10, 10); for (var c = new THREE.MeshLambertMaterial({ color: 16748339 }), n = 1, v = 0; 3 > v; v++)for (var a = 0; a < N; a++)cubeMesh = new THREE.Mesh(h, c), cubeMesh.castShadow = !0, cubeMesh.name = n, cubeMesh.position.set(9 * v - 20, 9 * a - 20, 0), meshes.push(cubeMesh), scene.add(cubeMesh), n += 1; renderer = new THREE.WebGLRenderer({ antialias: !0 }); renderer.setSize(window.innerWidth, window.innerHeight); container.appendChild(renderer.domElement); renderer.shadowMap.enabled = !0; renderer.shadowMap.type = THREE.PCFSoftShadowMap; controls = new THREE.OrbitControls(camera,
            renderer.domElement); controls.enableZoom = !1; controls.enableRotate = !1; controls.enablePan = !1; window.addEventListener("resize", onWindowResize, !1); document.body.style.backgroundColor = "#ea202d"
} function map(h, c, n, v, a) { return (h - c) * (a - v) / (n - c) + v } var count = 0;
function ondown(h) { h = new THREE.Vector3(Math.random() - .2, Math.random() - .2, Math.random() - .2); constraintDown = !0; addMouseConstraint(h.x, h.y, h.z, bodies[count]); moveJointToPoint(0, 4, 0); count += 1; 9 === count && (count = 0); if (50 > timeDomainData[0]) for (h = 0; h < bodies.length; h++)bodies[h].position.y = 1E-5 * Math.random() }
function setScreenPerpCenter(h, c) { if (!gplane) { var n = new THREE.PlaneGeometry(300, 300); (gplane = new THREE.Mesh(n, material)).visible = !1; scene.add(gplane) } gplane.position.copy(h); gplane.quaternion.copy(c.quaternion) } function onup(h) { constraintDown = !1; removeJointConstraint() } var lastx, lasty, last;
function onWindowResize() { var h = window.innerWidth / window.innerHeight; camera.left = -frustumSize * h / 2; camera.right = frustumSize * h / 2; camera.top = frustumSize / 2; camera.bottom = -frustumSize / 2; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth, window.innerHeight) } function animate() { requestAnimationFrame(animate); updatePhysics(); render() }
function detectBeats() { analyser.getByteTimeDomainData(timeDomainData); 110 > timeDomainData[0] && (jump = !0, ondown(), setTimeout(onup, 200), setTimeout(function () { jump = !1; detectBeats() }, 200)); 0 == jump && requestAnimationFrame(detectBeats) } function updatePhysics() { world.step(dt); for (var h = 0; h !== meshes.length; h++)meshes[h].position.copy(bodies[h].position), meshes[h].quaternion.copy(bodies[h].quaternion) } function render() { renderer.render(scene, camera); TWEEN.update() }
function initCannon() {
    world = new CANNON.World; world.quatNormalizeSkip = 0; world.quatNormalizeFast = !1; world.gravity.set(0, -65, 0); world.broadphase = new CANNON.NaiveBroadphase; boxShape = new CANNON.Box(new CANNON.Vec3(1, 1, 1)); for (var h = 0; 3 > h; h++)for (var c = 0; c < N; c++)boxBody = new CANNON.Body({ mass: 8 }), boxBody.addShape(boxShape), boxBody.position.set(9 * c - 9, 3, 9 * h - 9), world.addBody(boxBody), bodies.push(boxBody); h = new CANNON.Plane; c = new CANNON.Body({ mass: 0 }); c.addShape(h); c.quaternion.setFromAxisAngle(new CANNON.Vec3(1,
        0, 0), -Math.PI / 2); world.addBody(c); h = new CANNON.Sphere(.1); jointBody = new CANNON.Body({ mass: 0 }); jointBody.addShape(h); jointBody.collisionFilterGroup = 0; jointBody.collisionFilterMask = 0; world.addBody(jointBody)
}
function addMouseConstraint(h, c, n, v) { constrainedBody = v; v = (new CANNON.Vec3(h, c, n)).vsub(constrainedBody.position); pivot = constrainedBody.quaternion.inverse().vmult(v); jointBody.position.set(h, c, n); mouseConstraint = new CANNON.PointToPointConstraint(constrainedBody, pivot, jointBody, new CANNON.Vec3(0, 0, 0)); world.addConstraint(mouseConstraint) } function moveJointToPoint(h, c, n) { jointBody.position.set(h, c, n); mouseConstraint.update() }
function removeJointConstraint() { world.removeConstraint(mouseConstraint); mouseConstraint = !1 } function Tween(h, c) { this.backgroundCol = h; this.cubeCol = c; h = new THREE.Color(this.backgroundCol); c = new THREE.Color(this.cubeCol); TweenLite.to(mesh.material.color, 1, { r: h.r, g: h.g, b: h.b }); for (var n = 0; n < bodies.length; n++)TweenLite.to(meshes[n].material.color, .6, { r: c.r, g: c.g, b: c.b }) }
function backToOrigin() {
    setTimeout(function () {
        for (var h = 0; h < bodies.length; h++)(new TWEEN.Tween(bodies[h].quaternion)).to({ x: bodies[0].quaternion.x, y: bodies[0].quaternion.y, z: bodies[0].quaternion.z }, 1000).easing(TWEEN.Easing.Quintic.InOut).start(); for (h = 0; 3 > h; h++)(new TWEEN.Tween(bodies[h].position)).to({ x: 9 * h - 9, y: .99999, z: -9 }, 900).easing(TWEEN.Easing.Quintic.InOut).start(); for (h = 3; 6 > h; h++)(new TWEEN.Tween(bodies[h].position)).to({ x: 9 * h - 36, y: .99999, z: 0 }, 900).easing(TWEEN.Easing.Quintic.InOut).start();
        for (h = 6; 9 > h; h++)(new TWEEN.Tween(bodies[h].position)).to({ x: 9 * h - 63, y: .99999, z: 9 }, 900).easing(TWEEN.Easing.Quintic.InOut).start()
    }, 200)
} function changeSong(h, c) { audio = document.getElementById("myAudio"); audio.src = "sound/" + h + ".mp3"; audio.volume = 0; audio.play(); audio.volume = 0; var n = setInterval(function () { audio.volume += .01; .9 < audio.volume && clearInterval(n) }, 60); console.log(c); document.body.style.backgroundColor = c } var lastActive = "song1"; $("#song1").css("border-left", "3px white solid");
$("#song1").css("padding-left", "20px"); $("#song1").css("font-weight", "700"); $("#song1").css("opacity", "0.85"); $("#list1").css("opacity", "0.85");
$("#song1").click(function () {
    var h = this.id; this.id !== lastActive && ($("#" + lastActive).css("border", "none"), $("#" + lastActive).css("padding-left", "0"), $("#" + lastActive).css("opacity", "0.6"), $("#" + lastActive).css("font-weight", "500")); $("#song1").css("border-left", "3px white solid"); $("#song1").css("padding-left", "20px"); $("#song1").css("font-weight", "700"); $("#song1").css("opacity", "0.85"); $("#list1").css("opacity", "0.85"); $("#bars").animate({ opacity: 0, bottom: "-20" }, 500, function () {
        setTimeout(function () {
            $("#bars").animate({
                opacity: 1,
                bottom: "20"
            }, 500)
        }, 400)
    }); lastActive = this.id; Tween("#b22125", "#ff8f33"); document.getElementById("myAudio").pause(); setTimeout(function () { backToOrigin(); changeSong(h, "#ea202d") }, 400)
});
$("#song2").click(function () {
    var h = this.id; this.id !== lastActive && ($("#" + lastActive).css("border", "none"), $("#" + lastActive).css("padding-left", "0"), $("#" + lastActive).css("opacity", "0.6"), $("#" + lastActive).css("font-weight", "500")); $("#song2").css("border-left", "3px white solid"); $("#song2").css("padding-left", "20px"); $("#song2").css("font-weight", "700"); $("#song2").css("opacity", "0.85"); $("#list2").css("opacity", "0.85"); $("#bars").animate({ opacity: 0, bottom: "-20" }, 500, function () {
        setTimeout(function () {
            $("#bars").animate({
                opacity: 1,
                bottom: "20"
            }, 500)
        }, 400)
    }); lastActive = this.id; Tween("#233198", "#fb6c3a"); document.getElementById("myAudio").pause(); setTimeout(function () { backToOrigin(); changeSong(h, "#3036a5") }, 400)
});
$("#song3").click(function () {
    var h = this.id; this.id !== lastActive && ($("#" + lastActive).css("border", "none"), $("#" + lastActive).css("padding-left", "0"), $("#" + lastActive).css("opacity", "0.6"), $("#" + lastActive).css("font-weight", "500")); $("#song3").css("border-left", "3px white solid"); $("#song3").css("padding-left", "20px"); $("#song3").css("font-weight", "700"); $("#song3").css("opacity", "0.85"); $("#list3").css("opacity", "0.85"); $("#bars").animate({ opacity: 0, bottom: "-20" }, 500, function () {
        setTimeout(function () {
            $("#bars").animate({
                opacity: 1,
                bottom: "20"
            }, 500)
        }, 400)
    }); lastActive = this.id; Tween("#007d40", "#4896ff"); document.getElementById("myAudio").pause(); setTimeout(function () { backToOrigin(); changeSong(h, "#009a4d") }, 400)
});
$("#song4").click(function () {
    var h = this.id; this.id !== lastActive && ($("#" + lastActive).css("border", "none"), $("#" + lastActive).css("padding-left", "0"), $("#" + lastActive).css("opacity", "0.6"), $("#" + lastActive).css("font-weight", "500")); $("#song4").css("border-left", "3px white solid"); $("#song4").css("padding-left", "20px"); $("#song4").css("font-weight", "700"); $("#song4").css("opacity", "0.85"); $("#list4").css("opacity", "0.85"); $("#bars").animate({ opacity: 0, bottom: "-20" }, 500, function () {
        setTimeout(function () {
            $("#bars").animate({
                opacity: 1,
                bottom: "20"
            }, 500)
        }, 400)
    }); lastActive = this.id; Tween("#e77415", "#39a668"); document.getElementById("myAudio").pause(); setTimeout(function () { backToOrigin(); changeSong(h, "#ff8d2d") }, 400)
});
$("#song5").click(function () {
    var h = this.id; this.id !== lastActive && ($("#" + lastActive).css("border", "none"), $("#" + lastActive).css("padding-left", "0"), $("#" + lastActive).css("opacity", "0.6"), $("#" + lastActive).css("font-weight", "500")); $("#song5").css("border-left", "3px white solid"); $("#song5").css("padding-left", "20px"); $("#song5").css("font-weight", "700"); $("#song5").css("opacity", "0.85"); $("#list5").css("opacity", "0.85"); $("#bars").animate({ opacity: 0, bottom: "-20" }, 500, function () {
        setTimeout(function () {
            $("#bars").animate({
                opacity: 1,
                bottom: "20"
            }, 500)
        }, 400)
    }); lastActive = this.id; Tween("#007871", "#f3a52f"); document.getElementById("myAudio").pause(); setTimeout(function () { backToOrigin(); changeSong(h, "#00937e") }, 400)
}); $("input").focus(function () { $(this).attr("placeholder", "") }); $("input").blur(function () { this.value = ""; $(this).attr("placeholder", "Search") }); document.onmousedown = function () { $("input").is(":focus") && $("input").blur() };
var SpotifyWebApi = function () {
    var h = null, c = function (a, c, h) { var b = {}, q = null; "object" === typeof c ? (b = c, q = h) : "function" === typeof c && (q = c); v(a.params, b); return n(a, q) }, n = function (b, c) {
        var n = function (e, n) {
            var k = new XMLHttpRequest, m = b.type || "GET"; "GET" === m ? k.open(m, a(b.url, b.params), !0) : k.open(m, a(b.url)); h && k.setRequestHeader("Authorization", "Bearer " + h); k.onreadystatechange = function () {
                if (4 === k.readyState) {
                    var a = null; try { a = k.responseText ? JSON.parse(k.responseText) : "" } catch (f) { } 200 === k.status || 201 === k.status ?
                        (e && e(a), c && c(null, a)) : (n && n(k), c && c(k, null))
                }
            }; "GET" === m ? k.send(null) : k.send(JSON.stringify(b.postData))
        }; return c ? (n(), null) : new window.Promise(n)
    }, v = function () { var a = Array.prototype.slice.call(arguments), c = a[0]; a = a.slice(1); c = c || {}; for (var h = 0; h < a.length; h++)for (var e in a[h]) c[e] = a[h][e]; return c }, a = function (a, c) { var b = "", e; for (e in c) if (c.hasOwnProperty(e)) { var h = c[e]; b += encodeURIComponent(e) + "=" + encodeURIComponent(h) + "&" } 0 < b.length && (b = b.substring(0, b.length - 1), a = a + "?" + b); return a }, t = function () { };
    t.prototype = { constructor: SpotifyWebApi }; t.prototype.setAccessToken = function (a) { h = a }; t.prototype.searchTracks = function (a, h, n) { return c({ url: "https://api.spotify.com/v1/search/", params: { q: a, type: "track" } }, h, n) }; t.prototype.getAudioFeaturesForTrack = function (a, h) { return c({ url: "https://api.spotify.com/v1/audio-features/" + a }, {}, h) }; t.prototype.getToken = function (a) { return c({ url: "https://spotify-web-api-token.herokuapp.com/token" }, {}, a) }; return t
}(); "use strict";
var col1 = ["#b22125", "#ff8f33", "#ea202d"], col2 = ["#233198", "#fb6c3a", "#3036a5"], col3 = ["#007d40", "#4896ff", "#009a4d"], col4 = ["#e77415", "#39a668", "#ff8d2d"], col5 = ["#007871", "#f3a52f", "#00937e"], colors = [col1, col2, col3, col4, col5], currentIndex, spotifyApi = new SpotifyWebApi; spotifyApi.getToken().then(function (h) { spotifyApi.setAccessToken(h.token) }); var queryInput = document.querySelector("#query"), audioTag = document.querySelector("#myAudio");
$("#form").submit(function (h) {
    audioTag.pause();
    h.preventDefault(); spotifyApi.searchTracks(queryInput.value.trim(), { limit: 1 }).then(function (c) {
        c = c.tracks.items[0]; if (void 0 !== c) {
        audioTag.crossOrigin = "anonymous"; var h = audioTag.src = c.preview_url; if (null !== h) {
            backToOrigin(); var v = Math.floor(5 * Math.random()); v == currentIndex && (v += 1, 4 < v ? v = 3 : 0 > v && (v = 2)); Tween(colors[v][0], colors[v][1]); currentIndex = v; $("#" + lastActive).css("border", "none"); $("#" + lastActive).css("padding-left", "0"); $("#" + lastActive).css("opacity", "0.6"); $("#" +
                lastActive).css("font-weight", "300"); setTimeout(function () { audioTag.play(); audioTag.volume = 0; var a = setInterval(function () { audioTag.volume += .01; .9 < audioTag.volume && clearInterval(a) }, 35), c = new XMLHttpRequest; c.open("GET", h, !0); c.responseType = "arraybuffer"; c.send(); $(".spotifyInfo").animate({ opacity: 1 }, 500); $("#bars").animate({ opacity: 0, bottom: "-20" }, 500, function () { setTimeout(function () { $("#bars").animate({ opacity: 1, bottom: "20" }, 500) }, 400) }); document.body.style.backgroundColor = colors[v][2] }, 200)
        } else $("#errorMessage").animate({
            opacity: 1,
            top: "+=30"
        }, 500, function () { setTimeout(function () { $("#errorMessage").animate({ opacity: 0, top: "-=30" }, 500) }, 1500) })
        } else $("#errorMessage").animate({ opacity: 1, top: "+=30" }, 500, function () { setTimeout(function () { $("#errorMessage").animate({ opacity: 0, top: "-=30" }, 500) }, 1100) })
    })
}); console.log = function () { };