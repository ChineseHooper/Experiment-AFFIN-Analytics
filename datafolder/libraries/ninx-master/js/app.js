var $jscomp = $jscomp || {}; $jscomp.scope = {}; $jscomp.ASSUME_ES5 = !1; $jscomp.ASSUME_NO_NATIVE_MAP = !1; $jscomp.ASSUME_NO_NATIVE_SET = !1; $jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (m, c, h) { m != Array.prototype && m != Object.prototype && (m[c] = h.value) }; $jscomp.getGlobal = function (m) { return "undefined" != typeof window && window === m ? m : "undefined" != typeof global && null != global ? global : m }; $jscomp.global = $jscomp.getGlobal(this); $jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function () { $jscomp.initSymbol = function () { }; $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol) }; $jscomp.Symbol = function () { var m = 0; return function (c) { return $jscomp.SYMBOL_PREFIX + (c || "") + m++ } }();
$jscomp.initSymbolIterator = function () { $jscomp.initSymbol(); var m = $jscomp.global.Symbol.iterator; m || (m = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator")); "function" != typeof Array.prototype[m] && $jscomp.defineProperty(Array.prototype, m, { configurable: !0, writable: !0, value: function () { return $jscomp.arrayIterator(this) } }); $jscomp.initSymbolIterator = function () { } }; $jscomp.arrayIterator = function (m) { var c = 0; return $jscomp.iteratorPrototype(function () { return c < m.length ? { done: !1, value: m[c++] } : { done: !0 } }) };
$jscomp.iteratorPrototype = function (m) { $jscomp.initSymbolIterator(); m = { next: m }; m[$jscomp.global.Symbol.iterator] = function () { return this }; return m };
!function (m) { if ("object" == typeof exports && "undefined" != typeof module) module.exports = m(); else { var c; "undefined" != typeof window ? c = window : "undefined" != typeof global ? c = global : "undefined" != typeof self && (c = self); c.CANNON = m() } }(function () {
	return function a(c, h, t) {
		function r(w, e) {
			if (!h[w]) {
				if (!c[w]) { var q = "function" == typeof require && require; if (!e && q) return q(w, !0); if (b) return b(w, !0); throw Error("Cannot find module '" + w + "'"); } q = h[w] = { exports: {} }; c[w][0].call(q.exports, function (a) {
					var e = c[w][1][a]; return r(e ?
						e : a)
				}, q, q.exports, a, c, h, t)
			} return h[w].exports
		} for (var b = "function" == typeof require && require, y = 0; y < t.length; y++)r(t[y]); return r
	}({
		1: [function (c, h, t) {
		h.exports = {
			name: "cannon", version: "0.6.2", description: "A lightweight 3D physics engine written in JavaScript.", homepage: "https://github.com/schteppe/cannon.js", author: "Stefan Hedman <schteppe@gmail.com> (http://steffe.se)", keywords: ["cannon.js", "cannon", "physics", "engine", "3d"], main: "./build/cannon.js", engines: { node: "*" }, repository: { type: "git", url: "https://github.com/schteppe/cannon.js.git" },
			bugs: { url: "https://github.com/schteppe/cannon.js/issues" }, licenses: [{ type: "MIT" }], devDependencies: { jshint: "latest", "uglify-js": "latest", nodeunit: "^0.9.0", grunt: "~0.4.0", "grunt-contrib-jshint": "~0.1.1", "grunt-contrib-nodeunit": "^0.4.1", "grunt-contrib-concat": "~0.1.3", "grunt-contrib-uglify": "^0.5.1", "grunt-browserify": "^2.1.4", "grunt-contrib-yuidoc": "^0.5.2", browserify: "*" }, dependencies: {}
		}
		}, {}], 2: [function (c, h, t) {
		h.exports = {
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
		}], 3: [function (c, h, t) {
			function a(a) {
				a = a || {};
				this.lowerBound = new r; a.lowerBound && this.lowerBound.copy(a.lowerBound); this.upperBound = new r; a.upperBound && this.upperBound.copy(a.upperBound)
			} var r = c("../math/Vec3"); c("../utils/Utils"); h.exports = a; var b = new r; a.prototype.setFromPoints = function (a, e, q, k) {
				var n = this.lowerBound, v = this.upperBound; n.copy(a[0]); q && q.vmult(n, n); v.copy(n); for (var f = 1; f < a.length; f++) {
					var d = a[f]; q && (q.vmult(d, b), d = b); d.x > v.x && (v.x = d.x); d.x < n.x && (n.x = d.x); d.y > v.y && (v.y = d.y); d.y < n.y && (n.y = d.y); d.z > v.z && (v.z = d.z); d.z < n.z && (n.z =
						d.z)
				} e && (e.vadd(n, n), e.vadd(v, v)); k && (n.x -= k, n.y -= k, n.z -= k, v.x += k, v.y += k, v.z += k); return this
			}; a.prototype.copy = function (a) { this.lowerBound.copy(a.lowerBound); this.upperBound.copy(a.upperBound); return this }; a.prototype.clone = function () { return (new a).copy(this) }; a.prototype.extend = function (a) {
				var e = a.lowerBound.x; this.lowerBound.x > e && (this.lowerBound.x = e); e = a.upperBound.x; this.upperBound.x < e && (this.upperBound.x = e); e = a.lowerBound.y; this.lowerBound.y > e && (this.lowerBound.y = e); e = a.upperBound.y; this.upperBound.y <
					e && (this.upperBound.y = e); e = a.lowerBound.z; this.lowerBound.z > e && (this.lowerBound.z = e); e = a.upperBound.z; this.upperBound.z < e && (this.upperBound.z = e)
			}; a.prototype.overlaps = function (a) { var e = this.lowerBound, b = this.upperBound, k = a.lowerBound; a = a.upperBound; return (k.x <= b.x && b.x <= a.x || e.x <= a.x && a.x <= b.x) && (k.y <= b.y && b.y <= a.y || e.y <= a.y && a.y <= b.y) && (k.z <= b.z && b.z <= a.z || e.z <= a.z && a.z <= b.z) }; a.prototype.contains = function (a) {
				var e = this.lowerBound, b = this.upperBound, k = a.lowerBound; a = a.upperBound; return e.x <= k.x &&
					b.x >= a.x && e.y <= k.y && b.y >= a.y && e.z <= k.z && b.z >= a.z
			}; a.prototype.getCorners = function (a, e, b, k, n, v, f, d) { var u = this.lowerBound, z = this.upperBound; a.copy(u); e.set(z.x, u.y, u.z); b.set(z.x, z.y, u.z); k.set(u.x, z.y, z.z); n.set(z.x, u.y, u.z); v.set(u.x, z.y, u.z); f.set(u.x, u.y, z.z); d.copy(z) }; var y = [new r, new r, new r, new r, new r, new r, new r, new r]; a.prototype.toLocalFrame = function (a, e) { this.getCorners(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7]); for (var b = 0; 8 !== b; b++) { var k = y[b]; a.pointToLocal(k, k) } return e.setFromPoints(y) };
			a.prototype.toWorldFrame = function (a, e) { this.getCorners(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7]); for (var b = 0; 8 !== b; b++) { var k = y[b]; a.pointToWorld(k, k) } return e.setFromPoints(y) }
		}, { "../math/Vec3": 30, "../utils/Utils": 53 }], 4: [function (c, h, t) {
			function a() { this.matrix = [] } h.exports = a; a.prototype.get = function (a, b) { a = a.index; b = b.index; if (b > a) { var c = b; b = a; a = c } return this.matrix[(a * (a + 1) >> 1) + b - 1] }; a.prototype.set = function (a, b, c) { a = a.index; b = b.index; if (b > a) { var w = b; b = a; a = w } this.matrix[(a * (a + 1) >> 1) + b - 1] = c ? 1 : 0 };
			a.prototype.reset = function () { for (var a = 0, b = this.matrix.length; a !== b; a++)this.matrix[a] = 0 }; a.prototype.setNumObjects = function (a) { this.matrix.length = a * (a - 1) >> 1 }
		}, {}], 5: [function (c, h, t) {
			function a() { this.world = null; this.useBoundingBoxes = !1; this.dirty = !0 } var r = c("../objects/Body"); t = c("../math/Vec3"); var b = c("../math/Quaternion"); c("../shapes/Shape"); c("../shapes/Plane"); h.exports = a; a.prototype.collisionPairs = function (a, b, d) { throw Error("collisionPairs not implemented for this BroadPhase class!"); }; var y =
				r.STATIC | r.KINEMATIC; a.prototype.needBroadphaseCollision = function (a, b) { return 0 !== (a.collisionFilterGroup & b.collisionFilterMask) && 0 !== (b.collisionFilterGroup & a.collisionFilterMask) && (0 === (a.type & y) && a.sleepState !== r.SLEEPING || 0 === (b.type & y) && b.sleepState !== r.SLEEPING) ? !0 : !1 }; a.prototype.intersectionTest = function (a, b, d, e) { this.useBoundingBoxes ? this.doBoundingBoxBroadphase(a, b, d, e) : this.doBoundingSphereBroadphase(a, b, d, e) }; var w = new t; new t; new b; new t; a.prototype.doBoundingSphereBroadphase = function (a,
					b, d, e) { b.position.vsub(a.position, w); var f = Math.pow(a.boundingRadius + b.boundingRadius, 2); w.norm2() < f && (d.push(a), e.push(b)) }; a.prototype.doBoundingBoxBroadphase = function (a, b, d, e) { a.aabbNeedsUpdate && a.computeAABB(); b.aabbNeedsUpdate && b.computeAABB(); a.aabb.overlaps(b.aabb) && (d.push(a), e.push(b)) }; var e = { keys: [] }, q = [], k = []; a.prototype.makePairsUnique = function (a, b) {
						for (var d = a.length, f = 0; f !== d; f++)q[f] = a[f], k[f] = b[f]; a.length = 0; for (f = b.length = 0; f !== d; f++) {
							var n = q[f].id, g = k[f].id; n = n < g ? n + "," + g : g + "," +
								n; e[n] = f; e.keys.push(n)
						} for (f = 0; f !== e.keys.length; f++)n = e.keys.pop(), d = e[n], a.push(q[d]), b.push(k[d]), delete e[n]
					}; a.prototype.setWorld = function (a) { }; var n = new t; a.boundingSphereCheck = function (a, b) { a.position.vsub(b.position, n); return Math.pow(a.shape.boundingSphereRadius + b.shape.boundingSphereRadius, 2) > n.norm2() }; a.prototype.aabbQuery = function (a, b, d) { console.warn(".aabbQuery is not implemented in this Broadphase subclass."); return [] }
		}, {
			"../math/Quaternion": 28, "../math/Vec3": 30, "../objects/Body": 31,
			"../shapes/Plane": 42, "../shapes/Shape": 43
		}], 6: [function (c, h, t) {
			function a(a, q, k, n, v) { r.apply(this); this.nx = k || 10; this.ny = n || 10; this.nz = v || 10; this.aabbMin = a || new b(100, 100, 100); this.aabbMax = q || new b(-100, -100, -100); a = this.nx * this.ny * this.nz; if (0 >= a) throw "GridBroadphase: Each dimension's n must be >0"; this.bins = []; this.binLengths = []; this.bins.length = a; this.binLengths.length = a; for (q = 0; q < a; q++)this.bins[q] = [], this.binLengths[q] = 0 } h.exports = a; var r = c("./Broadphase"), b = c("../math/Vec3"), y = c("../shapes/Shape");
			a.prototype = new r; a.prototype.constructor = a; var w = new b; new b; a.prototype.collisionPairs = function (a, b, k) {
				function e(a, d, b, p, e, f, k) { a = (a - K) * P | 0; d = (d - G) * B | 0; b = (b - E) * L | 0; p = W((p - K) * P); e = W((e - G) * B); f = W((f - E) * L); 0 > a ? a = 0 : a >= u && (a = u - 1); 0 > d ? d = 0 : d >= z && (d = z - 1); 0 > b ? b = 0 : b >= g && (b = g - 1); 0 > p ? p = 0 : p >= u && (p = u - 1); 0 > e ? e = 0 : e >= z && (e = z - 1); 0 > f ? f = 0 : f >= g && (f = g - 1); a *= q; d *= c; b *= 1; p *= q; e *= c; for (f *= 1; a <= p; a += q)for (var n = d; n <= e; n += c)for (var x = b; x <= f; x += 1) { var v = a + n + x; U[v][la[v]++] = k } } var v = a.numObjects(); a = a.bodies; var f = this.aabbMax,
					d = this.aabbMin, u = this.nx, z = this.ny, g = this.nz, q = z * g, c = g, h = f.x, r = f.y, t = f.z, K = d.x, G = d.y, E = d.z, P = u / (h - K), B = z / (r - G), L = g / (t - E); h = (h - K) / u; var J = (r - G) / z; t = (t - E) / g; var T = .5 * Math.sqrt(h * h + J * J + t * t); r = y.types; var aa = r.SPHERE, ia = r.PLANE, U = this.bins, la = this.binLengths; r = this.bins.length; for (d = 0; d !== r; d++)la[d] = 0; var W = Math.ceil; d = Math.min; f = Math.max; for (d = 0; d !== v; d++) {
						f = a[d]; var V = f.shape; switch (V.type) {
							case aa: var Z = f.position.x, ca = f.position.y, ta = f.position.z; V = V.radius; e(Z - V, ca - V, ta - V, Z + V, ca + V, ta + V, f); break;
							case ia: V.worldNormalNeedsUpdate && V.computeWorldNormal(f.quaternion); ta = V.worldNormal; V = G + .5 * J - f.position.y; var ja = E + .5 * t - f.position.z, da = w; da.set(K + .5 * h - f.position.x, V, ja); for (var ya = Z = 0; Z !== u; Z++ , ya += q, da.y = V, da.x += h)for (var ma = ca = 0; ca !== z; ca++ , ma += c, da.z = ja, da.y += J)for (var ua = 0, qa = 0; ua !== g; ua++ , qa += 1, da.z += t)if (da.dot(ta) < T) { var wa = ya + ma + qa; U[wa][la[wa]++] = f } break; default: f.aabbNeedsUpdate && f.computeAABB(), e(f.aabb.lowerBound.x, f.aabb.lowerBound.y, f.aabb.lowerBound.z, f.aabb.upperBound.x, f.aabb.upperBound.y,
								f.aabb.upperBound.z, f)
						}
					} for (d = 0; d !== r; d++)if (v = la[d], 1 < v) for (a = U[d], Z = 0; Z !== v; Z++)for (f = a[Z], ca = 0; ca !== Z; ca++)h = a[ca], this.needBroadphaseCollision(f, h) && this.intersectionTest(f, h, b, k); this.makePairsUnique(b, k)
			}
		}, { "../math/Vec3": 30, "../shapes/Shape": 43, "./Broadphase": 5 }], 7: [function (c, h, t) {
			function a() { r.apply(this) } h.exports = a; var r = c("./Broadphase"); c = c("./AABB"); a.prototype = new r; a.prototype.constructor = a; a.prototype.collisionPairs = function (a, c, w) {
				a = a.bodies; var b = a.length, q, k; for (q = 0; q !== b; q++)for (k =
					0; k !== q; k++) { var n = a[q]; var v = a[k]; this.needBroadphaseCollision(n, v) && this.intersectionTest(n, v, c, w) }
			}; new c; a.prototype.aabbQuery = function (a, c, w) { w = w || []; for (var b = 0; b < a.bodies.length; b++) { var q = a.bodies[b]; q.aabbNeedsUpdate && q.computeAABB(); q.aabb.overlaps(c) && w.push(q) } return w }
		}, { "./AABB": 3, "./Broadphase": 5 }], 8: [function (c, h, t) {
			function a() { this.matrix = {} } h.exports = a; a.prototype.get = function (a, b) { a = a.id; b = b.id; if (b > a) { var c = b; b = a; a = c } return a + "-" + b in this.matrix }; a.prototype.set = function (a, b,
				c) { a = a.id; b = b.id; if (b > a) { var w = b; b = a; a = w } c ? this.matrix[a + "-" + b] = !0 : delete this.matrix[a + "-" + b] }; a.prototype.reset = function () { this.matrix = {} }; a.prototype.setNumObjects = function (a) { }
		}, {}], 9: [function (c, h, t) {
			function a(d, e) { this.from = d ? d.clone() : new b; this.to = e ? e.clone() : new b; this._direction = new b; this.precision = 1E-4; this.checkCollisionResponse = !0; this.skipBackfaces = !1; this.collisionFilterGroup = this.collisionFilterMask = -1; this.mode = a.ANY; this.result = new w; this.hasHit = !1; this.callback = function (a) { } }
			function r(a, d, b, e) { e.vsub(d, aa); b.vsub(d, k); a.vsub(d, n); a = aa.dot(aa); d = aa.dot(k); b = aa.dot(n); e = k.dot(k); var f = k.dot(n), g, u; return 0 <= (g = e * b - d * f) && 0 <= (u = a * f - d * b) && g + u < a * e - d * d } h.exports = a; var b = c("../math/Vec3"); h = c("../math/Quaternion"); var y = c("../math/Transform"); c("../shapes/ConvexPolyhedron"); c("../shapes/Box"); var w = c("../collision/RaycastResult"); t = c("../shapes/Shape"); c = c("../collision/AABB"); a.prototype.constructor = a; a.CLOSEST = 1; a.ANY = 2; a.ALL = 4; var e = new c, q = []; a.prototype.intersectWorld =
				function (d, b) {
				this.mode = b.mode || a.ANY; this.result = b.result || new w; this.skipBackfaces = !!b.skipBackfaces; this.collisionFilterMask = "undefined" !== typeof b.collisionFilterMask ? b.collisionFilterMask : -1; this.collisionFilterGroup = "undefined" !== typeof b.collisionFilterGroup ? b.collisionFilterGroup : -1; b.from && this.from.copy(b.from); b.to && this.to.copy(b.to); this.callback = b.callback || function () { }; this.hasHit = !1; this.result.reset(); this._updateDirection(); this.getAABB(e); q.length = 0; d.broadphase.aabbQuery(d, e, q);
					this.intersectBodies(q); return this.hasHit
				}; var k = new b, n = new b; a.pointInTriangle = r; var v = new b, f = new h; a.prototype.intersectBody = function (a, d) {
					d && (this.result = d, this._updateDirection()); var b = this.checkCollisionResponse; if ((!b || a.collisionResponse) && 0 !== (this.collisionFilterGroup & a.collisionFilterMask) && 0 !== (a.collisionFilterGroup & this.collisionFilterMask)) for (var e = 0, k = a.shapes.length; e < k; e++) {
						var n = a.shapes[e]; if (!b || n.collisionResponse) if (a.quaternion.mult(a.shapeOrientations[e], f), a.quaternion.vmult(a.shapeOffsets[e],
							v), v.vadd(a.position, v), this.intersectShape(n, f, v, a), this.result._shouldStop) break
					}
				}; a.prototype.intersectBodies = function (a, d) { d && (this.result = d, this._updateDirection()); for (var b = 0, e = a.length; !this.result._shouldStop && b < e; b++)this.intersectBody(a[b]) }; a.prototype._updateDirection = function () { this.to.vsub(this.from, this._direction); this._direction.normalize() }; a.prototype.intersectShape = function (a, d, b, e) {
					var f = this.from, k = this._direction; b.vsub(f, aa); var n = aa.dot(k); k.mult(n, ia); ia.vadd(f, ia); b.distanceTo(ia) >
						a.boundingSphereRadius || (f = this[a.type]) && f.call(this, a, d, b, e)
				}; new b; new b; var d = new b, u = new b, z = new b, g = new b; new b; new w; a.prototype.intersectBox = function (a, d, b, e) { return this.intersectConvex(a.convexPolyhedronRepresentation, d, b, e) }; a.prototype[t.types.BOX] = a.prototype.intersectBox; a.prototype.intersectPlane = function (a, d, e, f) {
					var k = this.from, n = this.to, g = this._direction, u = new b(0, 0, 1); d.vmult(u, u); var z = new b; k.vsub(e, z); d = z.dot(u); n.vsub(e, z); z = z.dot(u); if (!(0 < d * z || k.distanceTo(n) < d || (z = u.dot(g),
						Math.abs(z) < this.precision))) { var v = new b; n = new b; d = new b; k.vsub(e, v); e = -u.dot(v) / z; g.scale(e, n); k.vadd(n, d); this.reportIntersection(u, d, a, f, -1) }
				}; a.prototype[t.types.PLANE] = a.prototype.intersectPlane; a.prototype.getAABB = function (a) { var d = this.to, b = this.from; a.lowerBound.x = Math.min(d.x, b.x); a.lowerBound.y = Math.min(d.y, b.y); a.lowerBound.z = Math.min(d.z, b.z); a.upperBound.x = Math.max(d.x, b.x); a.upperBound.y = Math.max(d.y, b.y); a.upperBound.z = Math.max(d.z, b.z) }; var C = { faceList: [0] }; a.prototype.intersectHeightfield =
					function (d, e, f, k) {
						var n = new b, g = new a(this.from, this.to); y.pointToLocalFrame(f, e, g.from, g.from); y.pointToLocalFrame(f, e, g.to, g.to); var u = [], z = null, v = null, q = null, c = null, w = d.getIndexOfPosition(g.from.x, g.from.y, u, !1); w && (z = u[0], v = u[1], q = u[0], c = u[1]); if (w = d.getIndexOfPosition(g.to.x, g.to.y, u, !1)) { if (null === z || u[0] < z) z = u[0]; if (null === q || u[0] > q) q = u[0]; if (null === v || u[1] < v) v = u[1]; if (null === c || u[1] > c) c = u[1] } if (null !== z) for (d.getRectMinMax(z, v, q, c, []), g = z; g <= q; g++)for (u = v; u <= c; u++) {
							if (this.result._shouldStop) return;
							d.getConvexTrianglePillar(g, u, !1); y.pointToWorldFrame(f, e, d.pillarOffset, n); this.intersectConvex(d.pillarConvex, e, n, k, C); if (this.result._shouldStop) return; d.getConvexTrianglePillar(g, u, !0); y.pointToWorldFrame(f, e, d.pillarOffset, n); this.intersectConvex(d.pillarConvex, e, n, k, C)
						}
					}; a.prototype[t.types.HEIGHTFIELD] = a.prototype.intersectHeightfield; var Q = new b, R = new b; a.prototype.intersectSphere = function (a, d, b, e) {
						d = this.from; var f = this.to, k = Math.pow(f.x - d.x, 2) + Math.pow(f.y - d.y, 2) + Math.pow(f.z - d.z, 2), n = 2 *
							((f.x - d.x) * (d.x - b.x) + (f.y - d.y) * (d.y - b.y) + (f.z - d.z) * (d.z - b.z)), g = Math.pow(n, 2) - 4 * k * (Math.pow(d.x - b.x, 2) + Math.pow(d.y - b.y, 2) + Math.pow(d.z - b.z, 2) - Math.pow(a.radius, 2)); if (!(0 > g)) if (0 === g) d.lerp(f, g, Q), Q.vsub(b, R), R.normalize(), this.reportIntersection(R, Q, a, e, -1); else {
								var u = (-n - Math.sqrt(g)) / (2 * k); k = (-n + Math.sqrt(g)) / (2 * k); 0 <= u && 1 >= u && (d.lerp(f, u, Q), Q.vsub(b, R), R.normalize(), this.reportIntersection(R, Q, a, e, -1)); !this.result._shouldStop && 0 <= k && 1 >= k && (d.lerp(f, k, Q), Q.vsub(b, R), R.normalize(), this.reportIntersection(R,
									Q, a, e, -1))
							}
					}; a.prototype[t.types.SPHERE] = a.prototype.intersectSphere; var S = new b; new b; new b; var O = new b; a.prototype.intersectConvex = function (a, b, e, f, k) {
						k = k && k.faceList || null; for (var n = a.faces, v = a.vertices, q = a.faceNormals, c = this._direction, w = this.from, y = w.distanceTo(this.to), h = k ? k.length : n.length, C = this.result, B = 0; !C._shouldStop && B < h; B++) {
							var Q = k ? k[B] : B, E = n[Q], t = q[Q], p = b, x = e; O.copy(v[E[0]]); p.vmult(O, O); O.vadd(x, O); O.vsub(w, O); p.vmult(t, S); t = c.dot(S); if (!(Math.abs(t) < this.precision || (t = S.dot(O) / t,
								0 > t))) for (c.mult(t, d), d.vadd(w, d), u.copy(v[E[0]]), p.vmult(u, u), x.vadd(u, u), t = 1; !C._shouldStop && t < E.length - 1; t++) { z.copy(v[E[t]]); g.copy(v[E[t + 1]]); p.vmult(z, z); p.vmult(g, g); x.vadd(z, z); x.vadd(g, g); var D = d.distanceTo(w); !r(d, u, z, g) && !r(d, z, u, g) || D > y || this.reportIntersection(S, d, a, f, Q) }
						}
					}; a.prototype[t.types.CONVEXPOLYHEDRON] = a.prototype.intersectConvex; var K = new b, G = new b, E = new b, P = new b, B = new b, L = new b; new c; var J = [], T = new y; a.prototype.intersectTrimesh = function (a, b, e, f, k) {
						k = a.indices; var n = this.from,
							v = this.to, q = this._direction; T.position.copy(e); T.quaternion.copy(b); y.vectorToLocalFrame(e, b, q, G); y.pointToLocalFrame(e, b, n, E); y.pointToLocalFrame(e, b, v, P); n = E.distanceSquared(P); a.tree.rayQuery(this, T, J); v = 0; for (q = J.length; !this.result._shouldStop && v !== q; v++) {
								var c = J[v]; a.getNormal(c, K); a.getVertex(k[3 * c], u); u.vsub(E, O); var w = G.dot(K); w = K.dot(O) / w; 0 > w || (G.scale(w, d), d.vadd(E, d), a.getVertex(k[3 * c + 1], z), a.getVertex(k[3 * c + 2], g), w = d.distanceSquared(E), !r(d, z, u, g) && !r(d, u, z, g) || w > n || (y.vectorToWorldFrame(b,
									K, B), y.pointToWorldFrame(e, b, d, L), this.reportIntersection(B, L, a, f, c)))
							} J.length = 0
					}; a.prototype[t.types.TRIMESH] = a.prototype.intersectTrimesh; a.prototype.reportIntersection = function (d, b, e, f, k) {
						var n = this.from, g = this.to, u = n.distanceTo(b), z = this.result; if (!(this.skipBackfaces && 0 < d.dot(this._direction))) switch (z.hitFaceIndex = "undefined" !== typeof k ? k : -1, this.mode) {
							case a.ALL: this.hasHit = !0; z.set(n, g, d, b, e, f, u); z.hasHit = !0; this.callback(z); break; case a.CLOSEST: if (u < z.distance || !z.hasHit) this.hasHit = !0,
								z.hasHit = !0, z.set(n, g, d, b, e, f, u); break; case a.ANY: this.hasHit = !0, z.hasHit = !0, z.set(n, g, d, b, e, f, u), z._shouldStop = !0
						}
					}; var aa = new b, ia = new b
		}, { "../collision/AABB": 3, "../collision/RaycastResult": 10, "../math/Quaternion": 28, "../math/Transform": 29, "../math/Vec3": 30, "../shapes/Box": 37, "../shapes/ConvexPolyhedron": 38, "../shapes/Shape": 43 }], 10: [function (c, h, t) {
			function a() {
			this.rayFromWorld = new r; this.rayToWorld = new r; this.hitNormalWorld = new r; this.hitPointWorld = new r; this.hasHit = !1; this.body = this.shape = null;
				this.distance = this.hitFaceIndex = -1; this._shouldStop = !1
			} var r = c("../math/Vec3"); h.exports = a; a.prototype.reset = function () { this.rayFromWorld.setZero(); this.rayToWorld.setZero(); this.hitNormalWorld.setZero(); this.hitPointWorld.setZero(); this.hasHit = !1; this.body = this.shape = null; this.distance = this.hitFaceIndex = -1; this._shouldStop = !1 }; a.prototype.abort = function () { this._shouldStop = !0 }; a.prototype.set = function (a, c, w, e, q, k, n) {
				this.rayFromWorld.copy(a); this.rayToWorld.copy(c); this.hitNormalWorld.copy(w); this.hitPointWorld.copy(e);
				this.shape = q; this.body = k; this.distance = n
			}
		}, { "../math/Vec3": 30 }], 11: [function (c, h, t) {
			function a(a) { r.apply(this); this.axisList = []; this.world = null; this.axisIndex = 0; var b = this.axisList; this._addBodyHandler = function (a) { b.push(a.body) }; this._removeBodyHandler = function (a) { a = b.indexOf(a.body); -1 !== a && b.splice(a, 1) }; a && this.setWorld(a) } c("../shapes/Shape"); var r = c("../collision/Broadphase"); h.exports = a; a.prototype = new r; a.prototype.setWorld = function (a) {
				for (var b = this.axisList.length = 0; b < a.bodies.length; b++)this.axisList.push(a.bodies[b]);
				a.removeEventListener("addBody", this._addBodyHandler); a.removeEventListener("removeBody", this._removeBodyHandler); a.addEventListener("addBody", this._addBodyHandler); a.addEventListener("removeBody", this._removeBodyHandler); this.world = a; this.dirty = !0
			}; a.insertionSortX = function (a) { for (var b = 1, c = a.length; b < c; b++) { for (var e = a[b], q = b - 1; 0 <= q && !(a[q].aabb.lowerBound.x <= e.aabb.lowerBound.x); q--)a[q + 1] = a[q]; a[q + 1] = e } return a }; a.insertionSortY = function (a) {
				for (var b = 1, c = a.length; b < c; b++) {
					for (var e = a[b], q = b - 1; 0 <=
						q && !(a[q].aabb.lowerBound.y <= e.aabb.lowerBound.y); q--)a[q + 1] = a[q]; a[q + 1] = e
				} return a
			}; a.insertionSortZ = function (a) { for (var b = 1, c = a.length; b < c; b++) { for (var e = a[b], q = b - 1; 0 <= q && !(a[q].aabb.lowerBound.z <= e.aabb.lowerBound.z); q--)a[q + 1] = a[q]; a[q + 1] = e } return a }; a.prototype.collisionPairs = function (b, c, w) {
				b = this.axisList; var e = b.length, q = this.axisIndex, k, n; this.dirty && (this.sortList(), this.dirty = !1); for (k = 0; k !== e; k++) {
					var v = b[k]; for (n = k + 1; n < e; n++) {
						var f = b[n]; if (this.needBroadphaseCollision(v, f)) {
							if (!a.checkBounds(v,
								f, q)) break; this.intersectionTest(v, f, c, w)
						}
					}
				}
			}; a.prototype.sortList = function () { for (var b = this.axisList, c = this.axisIndex, w = b.length, e = 0; e !== w; e++) { var q = b[e]; q.aabbNeedsUpdate && q.computeAABB() } 0 === c ? a.insertionSortX(b) : 1 === c ? a.insertionSortY(b) : 2 === c && a.insertionSortZ(b) }; a.checkBounds = function (a, c, w) { if (0 === w) { var b = a.position.x; var q = c.position.x } else 1 === w ? (b = a.position.y, q = c.position.y) : 2 === w && (b = a.position.z, q = c.position.z); return q - c.boundingRadius < b + a.boundingRadius }; a.prototype.autoDetectAxis =
				function () { for (var a = 0, c = 0, w = 0, e = 0, q = 0, k = 0, n = this.axisList, v = n.length, f = 1 / v, d = 0; d !== v; d++) { var u = n[d], z = u.position.x; a += z; c += z * z; z = u.position.y; w += z; e += z * z; u = u.position.z; q += u; k += u * u } a = c - a * a * f; w = e - w * w * f; q = k - q * q * f; this.axisIndex = a > w ? a > q ? 0 : 2 : w > q ? 1 : 2 }; a.prototype.aabbQuery = function (a, c, w) { w = w || []; this.dirty && (this.sortList(), this.dirty = !1); a = this.axisList; for (var b = 0; b < a.length; b++) { var q = a[b]; q.aabbNeedsUpdate && q.computeAABB(); q.aabb.overlaps(c) && w.push(q) } return w }
		}, { "../collision/Broadphase": 5, "../shapes/Shape": 43 }],
		12: [function (c, h, t) {
			function a(a, q, k) {
				k = k || {}; var e = "undefined" !== typeof k.maxForce ? k.maxForce : 1E6, v = k.pivotA ? k.pivotA.clone() : new w, f = k.pivotB ? k.pivotB.clone() : new w; this.axisA = k.axisA ? k.axisA.clone() : new w; this.axisB = k.axisB ? k.axisB.clone() : new w; r.call(this, a, v, q, f, e); this.collideConnected = !!k.collideConnected; this.angle = "undefined" !== typeof k.angle ? k.angle : 0; v = this.coneEquation = new b(a, q, k); a = this.twistEquation = new y(a, q, k); this.twistAngle = "undefined" !== typeof k.twistAngle ? k.twistAngle : 0; v.maxForce =
					0; v.minForce = -e; a.maxForce = 0; a.minForce = -e; this.equations.push(v, a)
			} h.exports = a; c("./Constraint"); var r = c("./PointToPointConstraint"), b = c("../equations/ConeEquation"), y = c("../equations/RotationalEquation"); c("../equations/ContactEquation"); var w = c("../math/Vec3"); a.prototype = new r; a.constructor = a; new w; new w; a.prototype.update = function () {
				var a = this.bodyA, b = this.bodyB, k = this.coneEquation, n = this.twistEquation; r.prototype.update.call(this); a.vectorToWorldFrame(this.axisA, k.axisA); b.vectorToWorldFrame(this.axisB,
					k.axisB); this.axisA.tangents(n.axisA, n.axisA); a.vectorToWorldFrame(n.axisA, n.axisA); this.axisB.tangents(n.axisB, n.axisB); b.vectorToWorldFrame(n.axisB, n.axisB); k.angle = this.angle; n.maxAngle = this.twistAngle
			}
		}, { "../equations/ConeEquation": 18, "../equations/ContactEquation": 19, "../equations/RotationalEquation": 22, "../math/Vec3": 30, "./Constraint": 13, "./PointToPointConstraint": 17 }], 13: [function (c, h, t) {
			function a(b, c, w) {
				w = r.defaults(w, { collideConnected: !0, wakeUpBodies: !0 }); this.equations = []; this.bodyA = b;
				this.bodyB = c; this.id = a.idCounter++; this.collideConnected = w.collideConnected; w.wakeUpBodies && (b && b.wakeUp(), c && c.wakeUp())
			} h.exports = a; var r = c("../utils/Utils"); a.prototype.update = function () { throw Error("method update() not implmemented in this Constraint subclass!"); }; a.prototype.enable = function () { for (var a = this.equations, c = 0; c < a.length; c++)a[c].enabled = !0 }; a.prototype.disable = function () { for (var a = this.equations, c = 0; c < a.length; c++)a[c].enabled = !1 }; a.idCounter = 0
		}, { "../utils/Utils": 53 }], 14: [function (c,
			h, t) { function a(a, c, e, q) { r.call(this, a, c); "undefined" === typeof e && (e = a.position.distanceTo(c.position)); "undefined" === typeof q && (q = 1E6); this.distance = e; a = this.distanceEquation = new b(a, c); this.equations.push(a); a.minForce = -q; a.maxForce = q } h.exports = a; var r = c("./Constraint"), b = c("../equations/ContactEquation"); a.prototype = new r; a.prototype.update = function () { var a = this.distanceEquation, b = .5 * this.distance, e = a.ni; this.bodyB.position.vsub(this.bodyA.position, e); e.normalize(); e.mult(b, a.ri); e.mult(-b, a.rj) } },
		{ "../equations/ContactEquation": 19, "./Constraint": 13 }], 15: [function (c, h, t) {
			function a(a, e, v) {
				v = v || {}; var f = "undefined" !== typeof v.maxForce ? v.maxForce : 1E6, d = v.pivotA ? v.pivotA.clone() : new w, k = v.pivotB ? v.pivotB.clone() : new w; r.call(this, a, d, e, k, f); (this.axisA = v.axisA ? v.axisA.clone() : new w(1, 0, 0)).normalize(); (this.axisB = v.axisB ? v.axisB.clone() : new w(1, 0, 0)).normalize(); d = this.rotationalEquation1 = new b(a, e, v); v = this.rotationalEquation2 = new b(a, e, v); a = this.motorEquation = new y(a, e, f); a.enabled = !1; this.equations.push(d,
					v, a)
			} h.exports = a; c("./Constraint"); var r = c("./PointToPointConstraint"), b = c("../equations/RotationalEquation"), y = c("../equations/RotationalMotorEquation"); c("../equations/ContactEquation"); var w = c("../math/Vec3"); a.prototype = new r; a.constructor = a; a.prototype.enableMotor = function () { this.motorEquation.enabled = !0 }; a.prototype.disableMotor = function () { this.motorEquation.enabled = !1 }; a.prototype.setMotorSpeed = function (a) { this.motorEquation.targetVelocity = a }; a.prototype.setMotorMaxForce = function (a) {
				this.motorEquation.maxForce =
				a; this.motorEquation.minForce = -a
			}; var e = new w, q = new w; a.prototype.update = function () { var a = this.bodyA, b = this.bodyB, v = this.motorEquation, f = this.rotationalEquation1, d = this.rotationalEquation2, u = this.axisA, z = this.axisB; r.prototype.update.call(this); a.quaternion.vmult(u, e); b.quaternion.vmult(z, q); e.tangents(f.axisA, d.axisA); f.axisB.copy(q); d.axisB.copy(q); this.motorEquation.enabled && (a.quaternion.vmult(this.axisA, v.axisA), b.quaternion.vmult(this.axisB, v.axisB)) }
		}, {
			"../equations/ContactEquation": 19, "../equations/RotationalEquation": 22,
			"../equations/RotationalMotorEquation": 23, "../math/Vec3": 30, "./Constraint": 13, "./PointToPointConstraint": 17
		}], 16: [function (c, h, t) {
			function a(a, e, q) { q = q || {}; var k = "undefined" !== typeof q.maxForce ? q.maxForce : 1E6, n = new y, v = new y, f = new y; a.position.vadd(e.position, f); f.scale(.5, f); e.pointToLocalFrame(f, v); a.pointToLocalFrame(f, n); r.call(this, a, n, e, v, k); k = this.rotationalEquation1 = new b(a, e, q); n = this.rotationalEquation2 = new b(a, e, q); a = this.rotationalEquation3 = new b(a, e, q); this.equations.push(k, n, a) } h.exports =
				a; c("./Constraint"); var r = c("./PointToPointConstraint"), b = c("../equations/RotationalEquation"); c("../equations/RotationalMotorEquation"); c("../equations/ContactEquation"); var y = c("../math/Vec3"); a.prototype = new r; a.constructor = a; new y; new y; a.prototype.update = function () {
					var a = this.bodyA, b = this.bodyB, q = this.rotationalEquation1, k = this.rotationalEquation2, n = this.rotationalEquation3; r.prototype.update.call(this); a.vectorToWorldFrame(y.UNIT_X, q.axisA); b.vectorToWorldFrame(y.UNIT_Y, q.axisB); a.vectorToWorldFrame(y.UNIT_Y,
						k.axisA); b.vectorToWorldFrame(y.UNIT_Z, k.axisB); a.vectorToWorldFrame(y.UNIT_Z, n.axisA); b.vectorToWorldFrame(y.UNIT_X, n.axisB)
				}
		}, { "../equations/ContactEquation": 19, "../equations/RotationalEquation": 22, "../equations/RotationalMotorEquation": 23, "../math/Vec3": 30, "./Constraint": 13, "./PointToPointConstraint": 17 }], 17: [function (c, h, t) {
			function a(a, e, q, k, n) {
				r.call(this, a, q); n = "undefined" !== typeof n ? n : 1E6; this.pivotA = e ? e.clone() : new y; this.pivotB = k ? k.clone() : new y; e = this.equationX = new b(a, q); k = this.equationY =
					new b(a, q); a = this.equationZ = new b(a, q); this.equations.push(e, k, a); e.minForce = k.minForce = a.minForce = -n; e.maxForce = k.maxForce = a.maxForce = n; e.ni.set(1, 0, 0); k.ni.set(0, 1, 0); a.ni.set(0, 0, 1)
			} h.exports = a; var r = c("./Constraint"), b = c("../equations/ContactEquation"), y = c("../math/Vec3"); a.prototype = new r; a.prototype.update = function () {
				var a = this.bodyB, b = this.equationX, q = this.equationY, k = this.equationZ; this.bodyA.quaternion.vmult(this.pivotA, b.ri); a.quaternion.vmult(this.pivotB, b.rj); q.ri.copy(b.ri); q.rj.copy(b.rj);
				k.ri.copy(b.ri); k.rj.copy(b.rj)
			}
		}, { "../equations/ContactEquation": 19, "../math/Vec3": 30, "./Constraint": 13 }], 18: [function (c, h, t) {
			function a(a, q, k) { k = k || {}; var e = "undefined" !== typeof k.maxForce ? k.maxForce : 1E6; b.call(this, a, q, -e, e); this.axisA = k.axisA ? k.axisA.clone() : new r(1, 0, 0); this.axisB = k.axisB ? k.axisB.clone() : new r(0, 1, 0); this.angle = "undefined" !== typeof k.angle ? k.angle : 0 } h.exports = a; var r = c("../math/Vec3"); c("../math/Mat3"); var b = c("./Equation"); a.prototype = new b; a.prototype.constructor = a; var y = new r,
				w = new r; a.prototype.computeB = function (a) { var b = this.a, e = this.b, n = this.axisA, v = this.axisB, f = this.jacobianElementA, d = this.jacobianElementB; n.cross(v, y); v.cross(n, w); f.rotational.copy(w); d.rotational.copy(y); n = Math.cos(this.angle) - n.dot(v); v = this.computeGW(); f = this.computeGiMf(); return -n * b - v * e - a * f }
		}, { "../math/Mat3": 27, "../math/Vec3": 30, "./Equation": 20 }], 19: [function (c, h, t) {
			function a(a, e, f) { r.call(this, a, e, 0, "undefined" !== typeof f ? f : 1E6); this.restitution = 0; this.ri = new b; this.rj = new b; this.ni = new b } h.exports =
				a; var r = c("./Equation"), b = c("../math/Vec3"); c("../math/Mat3"); a.prototype = new r; a.prototype.constructor = a; var y = new b, w = new b, e = new b; a.prototype.computeB = function (a) {
					var d = this.a, b = this.b, f = this.bi, k = this.bj, n = this.ri, v = this.rj, c = f.velocity, q = f.angularVelocity, h = k.velocity, r = k.angularVelocity, E = this.jacobianElementA, t = this.jacobianElementB, B = this.ni; n.cross(B, y); v.cross(B, w); B.negate(E.spatial); y.negate(E.rotational); t.spatial.copy(B); t.rotational.copy(w); e.copy(k.position); e.vadd(v, e); e.vsub(f.position,
						e); e.vsub(n, e); f = B.dot(e); k = this.restitution + 1; c = k * h.dot(B) - k * c.dot(B) + r.dot(w) - q.dot(y); q = this.computeGiMf(); return -f * d - c * b - a * q
				}; var q = new b, k = new b, n = new b, v = new b, f = new b; a.prototype.getImpactVelocityAlongNormal = function () { this.bi.position.vadd(this.ri, n); this.bj.position.vadd(this.rj, v); this.bi.getVelocityAtWorldPoint(n, q); this.bj.getVelocityAtWorldPoint(v, k); q.vsub(k, f); return this.ni.dot(f) }
		}, { "../math/Mat3": 27, "../math/Vec3": 30, "./Equation": 20 }], 20: [function (c, h, t) {
			function a(b, e, d, k) {
			this.id =
				a.id++; this.minForce = "undefined" === typeof d ? -1E6 : d; this.maxForce = "undefined" === typeof k ? 1E6 : k; this.bi = b; this.bj = e; this.eps = this.b = this.a = 0; this.jacobianElementA = new r; this.jacobianElementB = new r; this.enabled = !0; this.setSpookParams(1E7, 4, 1 / 60)
			} h.exports = a; var r = c("../math/JacobianElement"); c = c("../math/Vec3"); a.prototype.constructor = a; a.id = 0; a.prototype.setSpookParams = function (a, b, d) { this.a = 4 / (d * (1 + 4 * b)); this.b = 4 * b / (1 + 4 * b); this.eps = 4 / (d * d * a * (1 + 4 * b)) }; a.prototype.computeB = function (a, b, d) {
				var e = this.computeGW(),
				f = this.computeGq(), k = this.computeGiMf(); return -f * a - e * b - k * d
			}; a.prototype.computeGq = function () { var a = this.jacobianElementB, b = this.bj.position; return this.jacobianElementA.spatial.dot(this.bi.position) + a.spatial.dot(b) }; var b = new c; a.prototype.computeGW = function () { var a = this.jacobianElementB, e = this.bi, d = this.bj, k = d.velocity; d = d.angularVelocity || b; return this.jacobianElementA.multiplyVectors(e.velocity, e.angularVelocity || b) + a.multiplyVectors(k, d) }; a.prototype.computeGWlambda = function () {
				var a = this.jacobianElementB,
				e = this.bi, d = this.bj, k = d.vlambda; d = d.wlambda || b; return this.jacobianElementA.multiplyVectors(e.vlambda, e.wlambda || b) + a.multiplyVectors(k, d)
			}; var y = new c, w = new c, e = new c, q = new c; a.prototype.computeGiMf = function () {
				var a = this.jacobianElementA, b = this.jacobianElementB, d = this.bi, k = this.bj, n = d.force, g = d.torque, c = k.force, h = k.torque, r = d.invMassSolve, t = k.invMassSolve; d.invInertiaWorldSolve ? d.invInertiaWorldSolve.vmult(g, e) : e.set(0, 0, 0); k.invInertiaWorldSolve ? k.invInertiaWorldSolve.vmult(h, q) : q.set(0, 0, 0); n.mult(r,
					y); c.mult(t, w); return a.multiplyVectors(y, e) + b.multiplyVectors(w, q)
			}; var k = new c; a.prototype.computeGiMGt = function () { var a = this.jacobianElementA, b = this.jacobianElementB, d = this.bi, e = this.bj, n = d.invInertiaWorldSolve, g = e.invInertiaWorldSolve; d = d.invMassSolve + e.invMassSolve; n && (n.vmult(a.rotational, k), d += k.dot(a.rotational)); g && (g.vmult(b.rotational, k), d += k.dot(b.rotational)); return d }; var n = new c; new c; new c; new c; new c; new c; a.prototype.addToWlambda = function (a) {
				var b = this.jacobianElementA, d = this.jacobianElementB,
				e = this.bi, k = this.bj; b.spatial.mult(e.invMassSolve * a, n); e.vlambda.vadd(n, e.vlambda); d.spatial.mult(k.invMassSolve * a, n); k.vlambda.vadd(n, k.vlambda); e.invInertiaWorldSolve && (e.invInertiaWorldSolve.vmult(b.rotational, n), n.mult(a, n), e.wlambda.vadd(n, e.wlambda)); k.invInertiaWorldSolve && (k.invInertiaWorldSolve.vmult(d.rotational, n), n.mult(a, n), k.wlambda.vadd(n, k.wlambda))
			}; a.prototype.computeC = function () { return this.computeGiMGt() + this.eps }
		}, { "../math/JacobianElement": 26, "../math/Vec3": 30 }], 21: [function (c,
			h, t) {
				function a(a, c, k) { r.call(this, a, c, -k, k); this.ri = new b; this.rj = new b; this.t = new b } h.exports = a; var r = c("./Equation"), b = c("../math/Vec3"); c("../math/Mat3"); a.prototype = new r; a.prototype.constructor = a; var y = new b, w = new b; a.prototype.computeB = function (a) {
					var b = this.b, e = this.rj, n = this.t; this.ri.cross(n, y); e.cross(n, w); e = this.jacobianElementA; var c = this.jacobianElementB; n.negate(e.spatial); y.negate(e.rotational); c.spatial.copy(n); c.rotational.copy(w); n = this.computeGW(); e = this.computeGiMf(); return -n *
						b - a * e
				}
		}, { "../math/Mat3": 27, "../math/Vec3": 30, "./Equation": 20 }], 22: [function (c, h, t) {
			function a(a, c, k) { k = k || {}; var e = "undefined" !== typeof k.maxForce ? k.maxForce : 1E6; b.call(this, a, c, -e, e); this.axisA = k.axisA ? k.axisA.clone() : new r(1, 0, 0); this.axisB = k.axisB ? k.axisB.clone() : new r(0, 1, 0); this.maxAngle = Math.PI / 2 } h.exports = a; var r = c("../math/Vec3"); c("../math/Mat3"); var b = c("./Equation"); a.prototype = new b; a.prototype.constructor = a; var y = new r, w = new r; a.prototype.computeB = function (a) {
				var b = this.a, e = this.b, n =
					this.axisA, c = this.axisB, f = this.jacobianElementA, d = this.jacobianElementB; n.cross(c, y); c.cross(n, w); f.rotational.copy(w); d.rotational.copy(y); n = Math.cos(this.maxAngle) - n.dot(c); c = this.computeGW(); f = this.computeGiMf(); return -n * b - c * e - a * f
			}
		}, { "../math/Mat3": 27, "../math/Vec3": 30, "./Equation": 20 }], 23: [function (c, h, t) {
			function a(a, c, e) { e = "undefined" !== typeof e ? e : 1E6; b.call(this, a, c, -e, e); this.axisA = new r; this.axisB = new r; this.targetVelocity = 0 } h.exports = a; var r = c("../math/Vec3"); c("../math/Mat3"); var b = c("./Equation");
			a.prototype = new b; a.prototype.constructor = a; a.prototype.computeB = function (a) { var b = this.b, e = this.axisB, c = this.jacobianElementB; this.jacobianElementA.rotational.copy(this.axisA); e.negate(c.rotational); e = this.computeGW() - this.targetVelocity; c = this.computeGiMf(); return -e * b - a * c }
		}, { "../math/Mat3": 27, "../math/Vec3": 30, "./Equation": 20 }], 24: [function (c, h, t) {
			function a(b, c, w) {
				w = r.defaults(w, { friction: .3, restitution: .3, contactEquationStiffness: 1E7, contactEquationRelaxation: 3, frictionEquationStiffness: 1E7, frictionEquationRelaxation: 3 });
				this.id = a.idCounter++; this.materials = [b, c]; this.friction = w.friction; this.restitution = w.restitution; this.contactEquationStiffness = w.contactEquationStiffness; this.contactEquationRelaxation = w.contactEquationRelaxation; this.frictionEquationStiffness = w.frictionEquationStiffness; this.frictionEquationRelaxation = w.frictionEquationRelaxation
			} var r = c("../utils/Utils"); h.exports = a; a.idCounter = 0
		}, { "../utils/Utils": 53 }], 25: [function (c, h, t) {
			function a(c) {
				var b = ""; c = c || {}; "string" === typeof c ? (b = c, c = {}) : "object" ===
					typeof c && (b = ""); this.name = b; this.id = a.idCounter++; this.friction = "undefined" !== typeof c.friction ? c.friction : -1; this.restitution = "undefined" !== typeof c.restitution ? c.restitution : -1
			} h.exports = a; a.idCounter = 0
		}, {}], 26: [function (c, h, t) { function a() { this.spatial = new r; this.rotational = new r } h.exports = a; var r = c("./Vec3"); a.prototype.multiplyElement = function (a) { return a.spatial.dot(this.spatial) + a.rotational.dot(this.rotational) }; a.prototype.multiplyVectors = function (a, c) { return a.dot(this.spatial) + c.dot(this.rotational) } },
		{ "./Vec3": 30 }], 27: [function (c, h, t) {
			function a(a) { this.elements = a ? a : [0, 0, 0, 0, 0, 0, 0, 0, 0] } h.exports = a; var r = c("./Vec3"); a.prototype.identity = function () { var a = this.elements; a[0] = 1; a[1] = 0; a[2] = 0; a[3] = 0; a[4] = 1; a[5] = 0; a[6] = 0; a[7] = 0; a[8] = 1 }; a.prototype.setZero = function () { var a = this.elements; a[0] = 0; a[1] = 0; a[2] = 0; a[3] = 0; a[4] = 0; a[5] = 0; a[6] = 0; a[7] = 0; a[8] = 0 }; a.prototype.setTrace = function (a) { var b = this.elements; b[0] = a.x; b[4] = a.y; b[8] = a.z }; a.prototype.getTrace = function (a) {
				a = a || new r; var b = this.elements; a.x = b[0];
				a.y = b[4]; a.z = b[8]
			}; a.prototype.vmult = function (a, c) { c = c || new r; var b = this.elements, e = a.x, q = a.y, k = a.z; c.x = b[0] * e + b[1] * q + b[2] * k; c.y = b[3] * e + b[4] * q + b[5] * k; c.z = b[6] * e + b[7] * q + b[8] * k; return c }; a.prototype.smult = function (a) { for (var b = 0; b < this.elements.length; b++)this.elements[b] *= a }; a.prototype.mmult = function (b, c) { for (var w = c || new a, e = 0; 3 > e; e++)for (var q = 0; 3 > q; q++) { for (var k = 0, n = 0; 3 > n; n++)k += b.elements[e + 3 * n] * this.elements[n + 3 * q]; w.elements[e + 3 * q] = k } return w }; a.prototype.scale = function (b, c) {
				c = c || new a; for (var w =
					this.elements, e = c.elements, q = 0; 3 !== q; q++)e[3 * q] = b.x * w[3 * q], e[3 * q + 1] = b.y * w[3 * q + 1], e[3 * q + 2] = b.z * w[3 * q + 2]; return c
			}; a.prototype.solve = function (a, c) {
				c = c || new r; for (var b = [], e = 0; 12 > e; e++)b.push(0); var q; for (e = 0; 3 > e; e++)for (q = 0; 3 > q; q++)b[e + 4 * q] = this.elements[e + 3 * q]; b[3] = a.x; b[7] = a.y; b[11] = a.z; var k = 3, n = k; do {
					e = n - k; if (0 === b[e + 4 * e]) for (q = e + 1; q < n; q++)if (0 !== b[e + 4 * q]) { var v = 4; do { var f = 4 - v; b[f + 4 * e] += b[f + 4 * q] } while (--v); break } if (0 !== b[e + 4 * e]) for (q = e + 1; q < n; q++) {
						var d = b[e + 4 * q] / b[e + 4 * e]; v = 4; do f = 4 - v, b[f + 4 * q] = f <=
							e ? 0 : b[f + 4 * q] - b[f + 4 * e] * d; while (--v)
					}
				} while (--k); c.z = b[11] / b[10]; c.y = (b[7] - b[6] * c.z) / b[5]; c.x = (b[3] - b[2] * c.z - b[1] * c.y) / b[0]; if (isNaN(c.x) || isNaN(c.y) || isNaN(c.z) || Infinity === c.x || Infinity === c.y || Infinity === c.z) throw "Could not solve equation! Got x=[" + c.toString() + "], b=[" + a.toString() + "], A=[" + this.toString() + "]"; return c
			}; a.prototype.e = function (a, c, h) { if (void 0 === h) return this.elements[c + 3 * a]; this.elements[c + 3 * a] = h }; a.prototype.copy = function (a) {
				for (var b = 0; b < a.elements.length; b++)this.elements[b] =
					a.elements[b]; return this
			}; a.prototype.toString = function () { for (var a = "", c = 0; 9 > c; c++)a += this.elements[c] + ","; return a }; a.prototype.reverse = function (b) {
				b = b || new a; for (var c = [], h = 0; 18 > h; h++)c.push(0); var e; for (h = 0; 3 > h; h++)for (e = 0; 3 > e; e++)c[h + 6 * e] = this.elements[h + 3 * e]; c[3] = 1; c[9] = 0; c[15] = 0; c[4] = 0; c[10] = 1; c[16] = 0; c[5] = 0; c[11] = 0; c[17] = 1; var q = 3, k = q; do {
					h = k - q; if (0 === c[h + 6 * h]) for (e = h + 1; e < k; e++)if (0 !== c[h + 6 * e]) { var n = 6; do { var v = 6 - n; c[v + 6 * h] += c[v + 6 * e] } while (--n); break } if (0 !== c[h + 6 * h]) for (e = h + 1; e < k; e++) {
						var f =
							c[h + 6 * e] / c[h + 6 * h]; n = 6; do v = 6 - n, c[v + 6 * e] = v <= h ? 0 : c[v + 6 * e] - c[v + 6 * h] * f; while (--n)
					}
				} while (--q); h = 2; do { e = h - 1; do { f = c[h + 6 * e] / c[h + 6 * h]; n = 6; do v = 6 - n, c[v + 6 * e] -= c[v + 6 * h] * f; while (--n) } while (e--) } while (--h); h = 2; do { f = 1 / c[h + 6 * h]; n = 6; do v = 6 - n, c[v + 6 * h] *= f; while (--n) } while (h--); h = 2; do { e = 2; do { v = c[3 + e + 6 * h]; if (isNaN(v) || Infinity === v) throw "Could not reverse! A=[" + this.toString() + "]"; b.e(h, e, v) } while (e--) } while (h--); return b
			}; a.prototype.setRotationFromQuaternion = function (a) {
				var b = a.x, c = a.y, e = a.z, q = a.w, k = b + b, n = c + c, v = e + e;
				a = b * k; var f = b * n; b *= v; var d = c * n; c *= v; e *= v; k *= q; n *= q; q *= v; v = this.elements; v[0] = 1 - (d + e); v[1] = f - q; v[2] = b + n; v[3] = f + q; v[4] = 1 - (a + e); v[5] = c - k; v[6] = b - n; v[7] = c + k; v[8] = 1 - (a + d); return this
			}; a.prototype.transpose = function (b) { b = b || new a; for (var c = b.elements, h = this.elements, e = 0; 3 !== e; e++)for (var q = 0; 3 !== q; q++)c[3 * e + q] = h[3 * q + e]; return b }
		}, { "./Vec3": 30 }], 28: [function (c, h, t) {
			function a(a, b, e, f) { this.x = void 0 !== a ? a : 0; this.y = void 0 !== b ? b : 0; this.z = void 0 !== e ? e : 0; this.w = void 0 !== f ? f : 1 } h.exports = a; var r = c("./Vec3"); a.prototype.set =
				function (a, b, e, f) { this.x = a; this.y = b; this.z = e; this.w = f }; a.prototype.toString = function () { return this.x + "," + this.y + "," + this.z + "," + this.w }; a.prototype.toArray = function () { return [this.x, this.y, this.z, this.w] }; a.prototype.setFromAxisAngle = function (a, b) { var e = Math.sin(.5 * b); this.x = a.x * e; this.y = a.y * e; this.z = a.z * e; this.w = Math.cos(.5 * b) }; a.prototype.toAxisAngle = function (a) {
					a = a || new r; this.normalize(); var b = 2 * Math.acos(this.w), e = Math.sqrt(1 - this.w * this.w); .001 > e ? (a.x = this.x, a.y = this.y, a.z = this.z) : (a.x = this.x /
						e, a.y = this.y / e, a.z = this.z / e); return [a, b]
				}; var b = new r, y = new r; a.prototype.setFromVectors = function (a, e) { if (a.isAntiparallelTo(e)) a.tangents(b, y), this.setFromAxisAngle(b, Math.PI); else { var k = a.cross(e); this.x = k.x; this.y = k.y; this.z = k.z; this.w = Math.sqrt(Math.pow(a.norm(), 2) * Math.pow(e.norm(), 2)) + a.dot(e); this.normalize() } }; var w = new r, e = new r, q = new r; a.prototype.mult = function (b, c) {
					c = c || new a; var k = this.w; w.set(this.x, this.y, this.z); e.set(b.x, b.y, b.z); c.w = k * b.w - w.dot(e); w.cross(e, q); c.x = k * e.x + b.w * w.x + q.x;
					c.y = k * e.y + b.w * w.y + q.y; c.z = k * e.z + b.w * w.z + q.z; return c
				}; a.prototype.inverse = function (b) { var e = this.x, c = this.y, f = this.z, d = this.w; b = b || new a; this.conjugate(b); e = 1 / (e * e + c * c + f * f + d * d); b.x *= e; b.y *= e; b.z *= e; b.w *= e; return b }; a.prototype.conjugate = function (b) { b = b || new a; b.x = -this.x; b.y = -this.y; b.z = -this.z; b.w = this.w; return b }; a.prototype.normalize = function () {
					var a = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w); 0 === a ? this.w = this.z = this.y = this.x = 0 : (a = 1 / a, this.x *= a, this.y *= a, this.z *= a, this.w *=
						a)
				}; a.prototype.normalizeFast = function () { var a = (3 - (this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)) / 2; 0 === a ? this.w = this.z = this.y = this.x = 0 : (this.x *= a, this.y *= a, this.z *= a, this.w *= a) }; a.prototype.vmult = function (a, b) { b = b || new r; var e = a.x, f = a.y, d = a.z, c = this.x, k = this.y, g = this.z, n = this.w, q = n * e + k * d - g * f, h = n * f + g * e - c * d, w = n * d + c * f - k * e; e = -c * e - k * f - g * d; b.x = q * n + e * -c + h * -g - w * -k; b.y = h * n + e * -k + w * -c - q * -g; b.z = w * n + e * -g + q * -k - h * -c; return b }; a.prototype.copy = function (a) { this.x = a.x; this.y = a.y; this.z = a.z; this.w = a.w; return this };
			a.prototype.toEuler = function (a, b) { b = b || "YZX"; var e = this.x, f = this.y, d = this.z, c = this.w; switch (b) { case "YZX": var k = e * f + d * c; if (.499 < k) { var g = 2 * Math.atan2(e, c); var n = Math.PI / 2; var q = 0 } -.499 > k && (g = -2 * Math.atan2(e, c), n = -Math.PI / 2, q = 0); isNaN(g) && (q = d * d, g = Math.atan2(2 * f * c - 2 * e * d, 1 - 2 * f * f - 2 * q), n = Math.asin(2 * k), q = Math.atan2(2 * e * c - 2 * f * d, 1 - 2 * e * e - 2 * q)); break; default: throw Error("Euler order " + b + " not supported yet."); }a.y = g; a.z = n; a.x = q }; a.prototype.setFromEuler = function (a, b, e, f) {
				f = f || "XYZ"; var d = Math.cos(a / 2), c =
					Math.cos(b / 2), k = Math.cos(e / 2); a = Math.sin(a / 2); b = Math.sin(b / 2); e = Math.sin(e / 2); "XYZ" === f ? (this.x = a * c * k + d * b * e, this.y = d * b * k - a * c * e, this.z = d * c * e + a * b * k, this.w = d * c * k - a * b * e) : "YXZ" === f ? (this.x = a * c * k + d * b * e, this.y = d * b * k - a * c * e, this.z = d * c * e - a * b * k, this.w = d * c * k + a * b * e) : "ZXY" === f ? (this.x = a * c * k - d * b * e, this.y = d * b * k + a * c * e, this.z = d * c * e + a * b * k, this.w = d * c * k - a * b * e) : "ZYX" === f ? (this.x = a * c * k - d * b * e, this.y = d * b * k + a * c * e, this.z = d * c * e - a * b * k, this.w = d * c * k + a * b * e) : "YZX" === f ? (this.x = a * c * k + d * b * e, this.y = d * b * k + a * c * e, this.z = d * c * e - a * b * k, this.w =
						d * c * k - a * b * e) : "XZY" === f && (this.x = a * c * k - d * b * e, this.y = d * b * k - a * c * e, this.z = d * c * e + a * b * k, this.w = d * c * k + a * b * e); return this
			}; a.prototype.clone = function () { return new a(this.x, this.y, this.z, this.w) }
		}, { "./Vec3": 30 }], 29: [function (c, h, t) {
			function a(a) { a = a || {}; this.position = new r; a.position && this.position.copy(a.position); this.quaternion = new b; a.quaternion && this.quaternion.copy(a.quaternion) } var r = c("./Vec3"), b = c("./Quaternion"); h.exports = a; var y = new b; a.pointToLocalFrame = function (a, b, c, k) {
				k = k || new r; c.vsub(a, k);
				b.conjugate(y); y.vmult(k, k); return k
			}; a.prototype.pointToLocal = function (b, e) { return a.pointToLocalFrame(this.position, this.quaternion, b, e) }; a.pointToWorldFrame = function (a, b, c, k) { k = k || new r; b.vmult(c, k); k.vadd(a, k); return k }; a.prototype.pointToWorld = function (b, e) { return a.pointToWorldFrame(this.position, this.quaternion, b, e) }; a.prototype.vectorToWorldFrame = function (a, b) { b = b || new r; this.quaternion.vmult(a, b); return b }; a.vectorToWorldFrame = function (a, b, c) { a.vmult(b, c); return c }; a.vectorToLocalFrame = function (a,
				b, c, k) { k = k || new r; b.w *= -1; b.vmult(c, k); b.w *= -1; return k }
		}, { "./Quaternion": 28, "./Vec3": 30 }], 30: [function (c, h, t) {
			function a(a, b, c) { this.x = a || 0; this.y = b || 0; this.z = c || 0 } h.exports = a; var r = c("./Mat3"); a.ZERO = new a(0, 0, 0); a.UNIT_X = new a(1, 0, 0); a.UNIT_Y = new a(0, 1, 0); a.UNIT_Z = new a(0, 0, 1); a.prototype.cross = function (b, c) { var e = b.x, n = b.y, q = b.z, f = this.x, d = this.y, u = this.z; c = c || new a; c.x = d * q - u * n; c.y = u * e - f * q; c.z = f * n - d * e; return c }; a.prototype.set = function (a, b, c) { this.x = a; this.y = b; this.z = c; return this }; a.prototype.setZero =
				function () { this.x = this.y = this.z = 0 }; a.prototype.vadd = function (b, c) { if (c) c.x = b.x + this.x, c.y = b.y + this.y, c.z = b.z + this.z; else return new a(this.x + b.x, this.y + b.y, this.z + b.z) }; a.prototype.vsub = function (b, c) { if (c) c.x = this.x - b.x, c.y = this.y - b.y, c.z = this.z - b.z; else return new a(this.x - b.x, this.y - b.y, this.z - b.z) }; a.prototype.crossmat = function () { return new r([0, -this.z, this.y, this.z, 0, -this.x, -this.y, this.x, 0]) }; a.prototype.normalize = function () {
					var a = this.x, b = this.y, c = this.z; a = Math.sqrt(a * a + b * b + c * c); 0 < a ? (b = 1 /
						a, this.x *= b, this.y *= b, this.z *= b) : this.z = this.y = this.x = 0; return a
				}; a.prototype.unit = function (b) { b = b || new a; var e = this.x, c = this.y, n = this.z, v = Math.sqrt(e * e + c * c + n * n); 0 < v ? (v = 1 / v, b.x = e * v, b.y = c * v, b.z = n * v) : (b.x = 1, b.y = 0, b.z = 0); return b }; a.prototype.norm = function () { var a = this.x, b = this.y, c = this.z; return Math.sqrt(a * a + b * b + c * c) }; a.prototype.length = a.prototype.norm; a.prototype.norm2 = function () { return this.dot(this) }; a.prototype.lengthSquared = a.prototype.norm2; a.prototype.distanceTo = function (a) {
					var b = this.x, e = this.y,
					c = this.z, v = a.x, f = a.y; a = a.z; return Math.sqrt((v - b) * (v - b) + (f - e) * (f - e) + (a - c) * (a - c))
				}; a.prototype.distanceSquared = function (a) { var b = this.x, e = this.y, c = this.z, v = a.x, f = a.y; a = a.z; return (v - b) * (v - b) + (f - e) * (f - e) + (a - c) * (a - c) }; a.prototype.mult = function (b, c) { c = c || new a; var e = this.y, n = this.z; c.x = b * this.x; c.y = b * e; c.z = b * n; return c }; a.prototype.scale = a.prototype.mult; a.prototype.dot = function (a) { return this.x * a.x + this.y * a.y + this.z * a.z }; a.prototype.isZero = function () { return 0 === this.x && 0 === this.y && 0 === this.z }; a.prototype.negate =
					function (b) { b = b || new a; b.x = -this.x; b.y = -this.y; b.z = -this.z; return b }; var b = new a, y = new a; a.prototype.tangents = function (a, c) { var e = this.norm(); 0 < e ? (e = 1 / e, b.set(this.x * e, this.y * e, this.z * e), .9 > Math.abs(b.x) ? y.set(1, 0, 0) : y.set(0, 1, 0), b.cross(y, a), b.cross(a, c)) : (a.set(1, 0, 0), c.set(0, 1, 0)) }; a.prototype.toString = function () { return this.x + "," + this.y + "," + this.z }; a.prototype.toArray = function () { return [this.x, this.y, this.z] }; a.prototype.copy = function (a) { this.x = a.x; this.y = a.y; this.z = a.z; return this }; a.prototype.lerp =
						function (a, b, c) { var e = this.x, k = this.y, f = this.z; c.x = e + (a.x - e) * b; c.y = k + (a.y - k) * b; c.z = f + (a.z - f) * b }; a.prototype.almostEquals = function (a, b) { void 0 === b && (b = 1E-6); return Math.abs(this.x - a.x) > b || Math.abs(this.y - a.y) > b || Math.abs(this.z - a.z) > b ? !1 : !0 }; a.prototype.almostZero = function (a) { void 0 === a && (a = 1E-6); return Math.abs(this.x) > a || Math.abs(this.y) > a || Math.abs(this.z) > a ? !1 : !0 }; var w = new a; a.prototype.isAntiparallelTo = function (a, b) { this.negate(w); return w.almostEquals(a, b) }; a.prototype.clone = function () {
							return new a(this.x,
								this.y, this.z)
						}
		}, { "./Mat3": 27 }], 31: [function (c, h, t) {
			function a(d) {
				d = d || {}; r.apply(this); this.id = a.idCounter++; this.postStep = this.preStep = this.world = null; this.vlambda = new b; this.collisionFilterGroup = "number" === typeof d.collisionFilterGroup ? d.collisionFilterGroup : 1; this.collisionFilterMask = "number" === typeof d.collisionFilterMask ? d.collisionFilterMask : 1; this.collisionResponse = !0; this.position = new b; d.position && this.position.copy(d.position); this.previousPosition = new b; this.initPosition = new b; this.velocity =
					new b; d.velocity && this.velocity.copy(d.velocity); this.initVelocity = new b; this.force = new b; var c = "number" === typeof d.mass ? d.mass : 0; this.mass = c; this.invMass = 0 < c ? 1 / c : 0; this.material = d.material || null; this.linearDamping = "number" === typeof d.linearDamping ? d.linearDamping : .01; this.type = 0 >= c ? a.STATIC : a.DYNAMIC; typeof d.type === typeof a.STATIC && (this.type = d.type); this.allowSleep = "undefined" !== typeof d.allowSleep ? d.allowSleep : !0; this.sleepState = 0; this.sleepSpeedLimit = "undefined" !== typeof d.sleepSpeedLimit ? d.sleepSpeedLimit :
						.1; this.sleepTimeLimit = "undefined" !== typeof d.sleepTimeLimit ? d.sleepTimeLimit : 1; this.timeLastSleepy = 0; this._wakeUpAfterNarrowphase = !1; this.torque = new b; this.quaternion = new w; d.quaternion && this.quaternion.copy(d.quaternion); this.initQuaternion = new w; this.angularVelocity = new b; d.angularVelocity && this.angularVelocity.copy(d.angularVelocity); this.initAngularVelocity = new b; this.interpolatedPosition = new b; this.interpolatedQuaternion = new w; this.shapes = []; this.shapeOffsets = []; this.shapeOrientations = []; this.inertia =
							new b; this.invInertia = new b; this.invInertiaWorld = new y; this.invMassSolve = 0; this.invInertiaSolve = new b; this.invInertiaWorldSolve = new y; this.fixedRotation = "undefined" !== typeof d.fixedRotation ? d.fixedRotation : !1; this.angularDamping = "undefined" !== typeof d.angularDamping ? d.angularDamping : .01; this.aabb = new e; this.aabbNeedsUpdate = !0; this.wlambda = new b; d.shape && this.addShape(d.shape); this.updateMassProperties()
			} h.exports = a; var r = c("../utils/EventTarget"); c("../shapes/Shape"); var b = c("../math/Vec3"), y = c("../math/Mat3"),
				w = c("../math/Quaternion"); c("../material/Material"); var e = c("../collision/AABB"), q = c("../shapes/Box"); a.prototype = new r; a.prototype.constructor = a; a.DYNAMIC = 1; a.STATIC = 2; a.KINEMATIC = 4; a.AWAKE = 0; a.SLEEPY = 1; a.SLEEPING = 2; a.idCounter = 0; a.prototype.wakeUp = function () { var b = this.sleepState; this.sleepState = 0; b === a.SLEEPING && this.dispatchEvent({ type: "wakeup" }) }; a.prototype.sleep = function () { this.sleepState = a.SLEEPING; this.velocity.set(0, 0, 0); this.angularVelocity.set(0, 0, 0) }; a.sleepyEvent = { type: "sleepy" }; a.sleepEvent =
					{ type: "sleep" }; a.prototype.sleepTick = function (b) { if (this.allowSleep) { var d = this.sleepState, c = this.velocity.norm2() + this.angularVelocity.norm2(), e = Math.pow(this.sleepSpeedLimit, 2); d === a.AWAKE && c < e ? (this.sleepState = a.SLEEPY, this.timeLastSleepy = b, this.dispatchEvent(a.sleepyEvent)) : d === a.SLEEPY && c > e ? this.wakeUp() : d === a.SLEEPY && b - this.timeLastSleepy > this.sleepTimeLimit && (this.sleep(), this.dispatchEvent(a.sleepEvent)) } }; a.prototype.updateSolveMassProperties = function () {
					this.sleepState === a.SLEEPING || this.type ===
						a.KINEMATIC ? (this.invMassSolve = 0, this.invInertiaSolve.setZero(), this.invInertiaWorldSolve.setZero()) : (this.invMassSolve = this.invMass, this.invInertiaSolve.copy(this.invInertia), this.invInertiaWorldSolve.copy(this.invInertiaWorld))
					}; a.prototype.pointToLocalFrame = function (a, d) { d = d || new b; a.vsub(this.position, d); this.quaternion.conjugate().vmult(d, d); return d }; a.prototype.vectorToLocalFrame = function (a, d) { d = d || new b; this.quaternion.conjugate().vmult(a, d); return d }; a.prototype.pointToWorldFrame = function (a,
						d) { d = d || new b; this.quaternion.vmult(a, d); d.vadd(this.position, d); return d }; a.prototype.vectorToWorldFrame = function (a, d) { d = d || new b; this.quaternion.vmult(a, d); return d }; var k = new b, n = new w; a.prototype.addShape = function (a, d, c) { var e = new b, f = new w; d && e.copy(d); c && f.copy(c); this.shapes.push(a); this.shapeOffsets.push(e); this.shapeOrientations.push(f); this.updateMassProperties(); this.updateBoundingRadius(); this.aabbNeedsUpdate = !0; return this }; a.prototype.updateBoundingRadius = function () {
							for (var a = this.shapes,
								d = this.shapeOffsets, b = a.length, c = 0, e = 0; e !== b; e++) { var f = a[e]; f.updateBoundingSphereRadius(); var g = d[e].norm(); f = f.boundingSphereRadius; g + f > c && (c = g + f) } this.boundingRadius = c
						}; var v = new e; a.prototype.computeAABB = function () {
							for (var a = this.shapes, d = this.shapeOffsets, b = this.shapeOrientations, c = a.length, e = this.quaternion, f = this.aabb, g = 0; g !== c; g++) { var u = a[g]; b[g].mult(e, n); n.vmult(d[g], k); k.vadd(this.position, k); u.calculateWorldAABB(k, n, v.lowerBound, v.upperBound); 0 === g ? f.copy(v) : f.extend(v) } this.aabbNeedsUpdate =
								!1
						}; var f = new y, d = new y; new y; a.prototype.updateInertiaWorld = function (a) { var b = this.invInertia; if (b.x !== b.y || b.y !== b.z || a) f.setRotationFromQuaternion(this.quaternion), f.transpose(d), f.scale(b, f), f.mmult(d, this.invInertiaWorld) }; var u = new b, z = new b; a.prototype.applyForce = function (d, b) { this.type === a.DYNAMIC && (b.vsub(this.position, u), u.cross(d, z), this.force.vadd(d, this.force), this.torque.vadd(z, this.torque)) }; var g = new b, C = new b; a.prototype.applyLocalForce = function (d, b) {
						this.type === a.DYNAMIC && (this.vectorToWorldFrame(d,
							g), this.pointToWorldFrame(b, C), this.applyForce(g, C))
						}; var Q = new b, R = new b, S = new b; a.prototype.applyImpulse = function (d, b) { this.type === a.DYNAMIC && (b.vsub(this.position, Q), R.copy(d), R.mult(this.invMass, R), this.velocity.vadd(R, this.velocity), Q.cross(d, S), this.invInertiaWorld.vmult(S, S), this.angularVelocity.vadd(S, this.angularVelocity)) }; var O = new b, K = new b; a.prototype.applyLocalImpulse = function (d, b) { this.type === a.DYNAMIC && (this.vectorToWorldFrame(d, O), this.pointToWorldFrame(b, K), this.applyImpulse(O, K)) };
			var G = new b; a.prototype.updateMassProperties = function () { this.invMass = 0 < this.mass ? 1 / this.mass : 0; var a = this.inertia, d = this.fixedRotation; this.computeAABB(); G.set((this.aabb.upperBound.x - this.aabb.lowerBound.x) / 2, (this.aabb.upperBound.y - this.aabb.lowerBound.y) / 2, (this.aabb.upperBound.z - this.aabb.lowerBound.z) / 2); q.calculateInertia(G, this.mass, a); this.invInertia.set(0 < a.x && !d ? 1 / a.x : 0, 0 < a.y && !d ? 1 / a.y : 0, 0 < a.z && !d ? 1 / a.z : 0); this.updateInertiaWorld(!0) }; a.prototype.getVelocityAtWorldPoint = function (a, d) {
				var c =
					new b; a.vsub(this.position, c); this.angularVelocity.cross(c, d); this.velocity.vadd(d, d); return d
			}
		}, { "../collision/AABB": 3, "../material/Material": 25, "../math/Mat3": 27, "../math/Quaternion": 28, "../math/Vec3": 30, "../shapes/Box": 37, "../shapes/Shape": 43, "../utils/EventTarget": 49 }], 32: [function (c, h, t) {
			function a(a) {
			this.chassisBody = a.chassisBody; this.wheelInfos = []; this.sliding = !1; this.world = null; this.indexRightAxis = "undefined" !== typeof a.indexRightAxis ? a.indexRightAxis : 1; this.indexForwardAxis = "undefined" !==
				typeof a.indexForwardAxis ? a.indexForwardAxis : 0; this.indexUpAxis = "undefined" !== typeof a.indexUpAxis ? a.indexUpAxis : 2
			} function r(a, d, b) { var c = R, e = S, f = O, g = K; d.vsub(a.position, c); c.cross(b, e); a.invInertiaWorld.vmult(e, g); g.cross(c, f); return a.invMass + b.dot(f) } c("./Body"); var b = c("../math/Vec3"), y = c("../math/Quaternion"); c("../collision/RaycastResult"); t = c("../collision/Ray"); var w = c("../objects/WheelInfo"); h.exports = a; new b; new b; new b; var e = new b, q = new b, k = new b; new t; a.prototype.addWheel = function (a) {
				a =
				a || {}; a = new w(a); var d = this.wheelInfos.length; this.wheelInfos.push(a); return d
			}; a.prototype.setSteeringValue = function (a, d) { this.wheelInfos[d].steering = a }; new b; a.prototype.applyEngineForce = function (a, d) { this.wheelInfos[d].engineForce = a }; a.prototype.setBrake = function (a, d) { this.wheelInfos[d].brake = a }; a.prototype.addToWorld = function (a) { a.add(this.chassisBody); var d = this; this.preStepCallback = function () { d.updateVehicle(a.dt) }; a.addEventListener("preStep", this.preStepCallback); this.world = a }; a.prototype.getVehicleAxisWorld =
				function (a, d) { d.set(0 === a ? 1 : 0, 1 === a ? 1 : 0, 2 === a ? 1 : 0); this.chassisBody.vectorToWorldFrame(d, d) }; a.prototype.updateVehicle = function (a) {
					for (var d = this.wheelInfos, c = d.length, e = this.chassisBody, f = 0; f < c; f++)this.updateWheelTransform(f); this.currentVehicleSpeedKmHour = 3.6 * e.velocity.norm(); f = new b; this.getVehicleAxisWorld(this.indexForwardAxis, f); 0 > f.dot(e.velocity) && (this.currentVehicleSpeedKmHour *= -1); for (f = 0; f < c; f++)this.castRay(d[f]); this.updateSuspension(a); var g = new b, k = new b; for (f = 0; f < c; f++) {
						var n = d[f],
						u = n.suspensionForce; u > n.maxSuspensionForce && (u = n.maxSuspensionForce); n.raycastResult.hitNormalWorld.scale(u * a, g); n.raycastResult.hitPointWorld.vsub(e.position, k); e.applyImpulse(g, n.raycastResult.hitPointWorld)
					} this.updateFriction(a); g = new b; k = new b; u = new b; for (f = 0; f < c; f++) {
						n = d[f]; e.getVelocityAtWorldPoint(n.chassisConnectionPointWorld, u); var z = 1; switch (this.indexUpAxis) { case 1: z = -1 }if (n.isInContact) {
							this.getVehicleAxisWorld(this.indexForwardAxis, k); var q = k.dot(n.raycastResult.hitNormalWorld); n.raycastResult.hitNormalWorld.scale(q,
								g); k.vsub(g, k); q = k.dot(u); n.deltaRotation = z * q * a / n.radius
						} !n.sliding && n.isInContact || 0 === n.engineForce || !n.useCustomSlidingRotationalSpeed || (n.deltaRotation = (0 < n.engineForce ? 1 : -1) * n.customSlidingRotationalSpeed * a); Math.abs(n.brake) > Math.abs(n.engineForce) && (n.deltaRotation = 0); n.rotation += n.deltaRotation; n.deltaRotation *= .99
					}
				}; a.prototype.updateSuspension = function (a) {
					a = this.chassisBody.mass; for (var d = this.wheelInfos, b = d.length, c = 0; c < b; c++) {
						var e = d[c]; if (e.isInContact) {
							var f = e.suspensionStiffness * (e.suspensionRestLength -
								e.suspensionLength) * e.clippedInvContactDotSuspension; var g = e.suspensionRelativeVelocity; f -= (0 > g ? e.dampingCompression : e.dampingRelaxation) * g; e.suspensionForce = f * a; 0 > e.suspensionForce && (e.suspensionForce = 0)
						} else e.suspensionForce = 0
					}
				}; a.prototype.removeFromWorld = function (a) { a.remove(this.chassisBody); a.removeEventListener("preStep", this.preStepCallback); this.world = null }; var n = new b, v = new b; a.prototype.castRay = function (a) {
					this.updateWheelTransformWorld(a); var d = this.chassisBody, c = -1; a.directionWorld.scale(a.suspensionRestLength +
						a.radius, n); var e = a.chassisConnectionPointWorld; e.vadd(n, v); var f = a.raycastResult; f.reset(); var g = d.collisionResponse; d.collisionResponse = !1; this.world.rayTest(e, v, f); d.collisionResponse = g; e = f.body; a.raycastResult.groundObject = 0; e ? (c = f.distance, a.raycastResult.hitNormalWorld = f.hitNormalWorld, a.isInContact = !0, a.suspensionLength = f.distance - a.radius, f = a.suspensionRestLength - a.maxSuspensionTravel, e = a.suspensionRestLength + a.maxSuspensionTravel, a.suspensionLength < f && (a.suspensionLength = f), a.suspensionLength >
							e && (a.suspensionLength = e, a.raycastResult.reset()), f = a.raycastResult.hitNormalWorld.dot(a.directionWorld), e = new b, d.getVelocityAtWorldPoint(a.raycastResult.hitPointWorld, e), d = a.raycastResult.hitNormalWorld.dot(e), -.1 <= f ? (a.suspensionRelativeVelocity = 0, a.clippedInvContactDotSuspension = 10) : (f = -1 / f, a.suspensionRelativeVelocity = d * f, a.clippedInvContactDotSuspension = f)) : (a.suspensionLength = a.suspensionRestLength + 0 * a.maxSuspensionTravel, a.suspensionRelativeVelocity = 0, a.directionWorld.scale(-1, a.raycastResult.hitNormalWorld),
								a.clippedInvContactDotSuspension = 1); return c
				}; a.prototype.updateWheelTransformWorld = function (a) { a.isInContact = !1; var d = this.chassisBody; d.pointToWorldFrame(a.chassisConnectionPointLocal, a.chassisConnectionPointWorld); d.vectorToWorldFrame(a.directionLocal, a.directionWorld); d.vectorToWorldFrame(a.axleLocal, a.axleWorld) }; a.prototype.updateWheelTransform = function (a) {
					a = this.wheelInfos[a]; this.updateWheelTransformWorld(a); a.directionLocal.scale(-1, e); q.copy(a.axleLocal); e.cross(q, k); k.normalize(); q.normalize();
					var d = a.steering, b = new y; b.setFromAxisAngle(e, d); d = new y; d.setFromAxisAngle(q, a.rotation); var c = a.worldTransform.quaternion; this.chassisBody.quaternion.mult(b, c); c.mult(d, c); c.normalize(); b = a.worldTransform.position; b.copy(a.directionWorld); b.scale(a.suspensionLength, b); b.vadd(a.chassisConnectionPointWorld, b)
				}; var f = [new b(1, 0, 0), new b(0, 1, 0), new b(0, 0, 1)]; a.prototype.getWheelTransformWorld = function (a) { return this.wheelInfos[a].worldTransform }; var d = new b, u = [], z = []; a.prototype.updateFriction = function (a) {
					for (var c =
						this.wheelInfos, e = c.length, n = this.chassisBody, k = 0, q = 0; q < e; q++) { var v = c[q], h = v.raycastResult.body; h && k++; v.sideImpulse = 0; v.forwardImpulse = 0; z[q] || (z[q] = new b); u[q] || (u[q] = new b) } for (q = 0; q < e; q++)if (v = c[q], h = v.raycastResult.body) {
							var w = u[q]; this.getWheelTransformWorld(q).vectorToWorldFrame(f[this.indexRightAxis], w); k = v.raycastResult.hitNormalWorld; var y = w.dot(k); k.scale(y, d); w.vsub(d, w); w.normalize(); k.cross(w, z[q]); z[q].normalize(); k = v; y = n; var t = v.raycastResult.hitPointWorld, O = v.raycastResult.hitPointWorld;
							if (1.1 < w.norm2()) h = 0; else { var R = G, B = E, K = P; y.getVelocityAtWorldPoint(t, R); h.getVelocityAtWorldPoint(O, B); R.vsub(B, K); h = -.2 * w.dot(K) * (1 / (y.invMass + h.invMass)) } k.sideImpulse = h; v.sideImpulse *= 1
						} this.sliding = !1; for (q = 0; q < e; q++) {
							v = c[q]; h = v.raycastResult.body; y = 0; v.slipInfo = 1; if (h) {
								k = v.brake ? v.brake : 0; R = n; t = h; O = v.raycastResult.hitPointWorld; w = z[q]; y = k; B = O; K = g; var S = C, ma = Q; R.getVelocityAtWorldPoint(B, K); t.getVelocityAtWorldPoint(B, S); K.vsub(S, ma); B = w.dot(ma); R = r(R, O, w); t = r(t, O, w); t = 1 / (R + t) * -B; y < t && (t = y);
								t < -y && (t = -y); y = t; y += v.engineForce * a; k /= y; v.slipInfo *= k
							} v.forwardImpulse = 0; v.skidInfo = 1; h && (v.skidInfo = 1, h = v.suspensionForce * a * v.frictionSlip, k = h * h, v.forwardImpulse = y, y = .5 * v.forwardImpulse, t = 1 * v.sideImpulse, y = y * y + t * t, v.sliding = !1, y > k && (this.sliding = !0, v.sliding = !0, k = h / Math.sqrt(y), v.skidInfo *= k))
						} if (this.sliding) for (q = 0; q < e; q++)v = c[q], 0 !== v.sideImpulse && 1 > v.skidInfo && (v.forwardImpulse *= v.skidInfo, v.sideImpulse *= v.skidInfo); for (q = 0; q < e; q++)v = c[q], a = new b, a.copy(v.raycastResult.hitPointWorld), 0 !== v.forwardImpulse &&
							(h = new b, z[q].scale(v.forwardImpulse, h), n.applyImpulse(h, a)), 0 !== v.sideImpulse && (h = v.raycastResult.body, k = new b, k.copy(v.raycastResult.hitPointWorld), y = new b, u[q].scale(v.sideImpulse, y), n.pointToLocalFrame(a, a), a["xyz"[this.indexUpAxis]] *= v.rollInfluence, n.pointToWorldFrame(a, a), n.applyImpulse(y, a), y.scale(-1, y), h.applyImpulse(y, k))
				}; var g = new b, C = new b, Q = new b, R = new b, S = new b, O = new b, K = new b, G = new b, E = new b, P = new b
		}, {
			"../collision/Ray": 9, "../collision/RaycastResult": 10, "../math/Quaternion": 28, "../math/Vec3": 30,
			"../objects/WheelInfo": 36, "./Body": 31
		}], 33: [function (c, h, t) {
			function a(a) { this.wheelBodies = []; this.coordinateSystem = "undefined" === typeof a.coordinateSystem ? new w(1, 2, 3) : a.coordinateSystem.clone(); this.chassisBody = a.chassisBody; this.chassisBody || (a = new y(new w(5, 2, .5)), this.chassisBody = new r(1, a)); this.constraints = []; this.wheelAxes = []; this.wheelForces = [] } var r = c("./Body"), b = c("../shapes/Sphere"), y = c("../shapes/Box"), w = c("../math/Vec3"), e = c("../constraints/HingeConstraint"); h.exports = a; a.prototype.addWheel =
				function (a) { a = a || {}; var c = a.body; c || (c = new r(1, new b(1.2))); this.wheelBodies.push(c); this.wheelForces.push(0); new w; var f = "undefined" !== typeof a.position ? a.position.clone() : new w, d = new w; this.chassisBody.pointToWorldFrame(f, d); c.position.set(d.x, d.y, d.z); a = "undefined" !== typeof a.axis ? a.axis.clone() : new w(0, 1, 0); this.wheelAxes.push(a); c = new e(this.chassisBody, c, { pivotA: f, axisA: a, pivotB: w.ZERO, axisB: a, collideConnected: !1 }); this.constraints.push(c); return this.wheelBodies.length - 1 }; a.prototype.setSteeringValue =
					function (a, b) { var c = this.wheelAxes[b], d = Math.cos(a), e = Math.sin(a), k = c.x; c = c.y; this.constraints[b].axisA.set(d * k - e * c, e * k + d * c, 0) }; a.prototype.setMotorSpeed = function (a, b) { var c = this.constraints[b]; c.enableMotor(); c.motorTargetVelocity = a }; a.prototype.disableMotor = function (a) { this.constraints[a].disableMotor() }; var q = new w; a.prototype.setWheelForce = function (a, b) { this.wheelForces[b] = a }; a.prototype.applyWheelForce = function (a, b) {
						var c = this.wheelBodies[b], d = c.torque; this.wheelAxes[b].scale(a, q); c.vectorToWorldFrame(q,
							q); d.vadd(q, d)
					}; a.prototype.addToWorld = function (a) { for (var b = this.constraints, c = this.wheelBodies.concat([this.chassisBody]), d = 0; d < c.length; d++)a.add(c[d]); for (d = 0; d < b.length; d++)a.addConstraint(b[d]); a.addEventListener("preStep", this._update.bind(this)) }; a.prototype._update = function () { for (var a = this.wheelForces, b = 0; b < a.length; b++)this.applyWheelForce(a[b], b) }; a.prototype.removeFromWorld = function (a) {
						for (var b = this.constraints, c = this.wheelBodies.concat([this.chassisBody]), d = 0; d < c.length; d++)a.remove(c[d]);
						for (d = 0; d < b.length; d++)a.removeConstraint(b[d])
					}; var k = new w; a.prototype.getWheelSpeed = function (a) { var b = this.wheelBodies[a].angularVelocity; this.chassisBody.vectorToWorldFrame(this.wheelAxes[a], k); return b.dot(k) }
		}, { "../constraints/HingeConstraint": 15, "../math/Vec3": 30, "../shapes/Box": 37, "../shapes/Sphere": 44, "./Body": 31 }], 34: [function (c, h, t) {
			function a() {
			this.particles = []; this.speedOfSound = this.smoothingRadius = this.density = 1; this.viscosity = .01; this.eps = 1E-6; this.pressures = []; this.densities = []; this.neighbors =
				[]
			} h.exports = a; c("../shapes/Shape"); h = c("../math/Vec3"); c("../math/Quaternion"); c("../shapes/Particle"); c("../objects/Body"); c("../material/Material"); a.prototype.add = function (a) { this.particles.push(a); this.neighbors.length < this.particles.length && this.neighbors.push([]) }; a.prototype.remove = function (a) { a = this.particles.indexOf(a); -1 !== a && (this.particles.splice(a, 1), this.neighbors.length > this.particles.length && this.neighbors.pop()) }; var r = new h; a.prototype.getNeighbors = function (a, b) {
				for (var c = this.particles.length,
					d = a.id, e = this.smoothingRadius * this.smoothingRadius, k = 0; k !== c; k++) { var g = this.particles[k]; g.position.vsub(a.position, r); d !== g.id && r.norm2() < e && b.push(g) }
			}; var b = new h, y = new h, w = new h, e = new h, q = new h, k = new h; a.prototype.update = function () {
				for (var a = this.particles.length, c = this.speedOfSound, f = this.eps, d = 0; d !== a; d++) {
					var u = this.particles[d], z = this.neighbors[d]; z.length = 0; this.getNeighbors(u, z); z.push(this.particles[d]); for (var g = z.length, h = 0, r = 0; r !== g; r++) {
						u.position.vsub(z[r].position, b); var t = b.norm();
						t = this.w(t); h += z[r].mass * t
					} this.densities[d] = h; this.pressures[d] = c * c * (this.densities[d] - this.density)
				} for (d = 0; d !== a; d++) {
					c = this.particles[d]; y.set(0, 0, 0); w.set(0, 0, 0); z = this.neighbors[d]; g = z.length; for (r = 0; r !== g; r++)h = z[r], c.position.vsub(h.position, q), t = q.norm(), u = -h.mass * (this.pressures[d] / (this.densities[d] * this.densities[d] + f) + this.pressures[r] / (this.densities[r] * this.densities[r] + f)), this.gradw(q, e), e.mult(u, e), y.vadd(e, y), h.velocity.vsub(c.velocity, k), k.mult(1 / (1E-4 + this.densities[d] * this.densities[r]) *
						this.viscosity * h.mass, k), u = this.nablaw(t), k.mult(u, k), w.vadd(k, w); w.mult(c.mass, w); y.mult(c.mass, y); c.force.vadd(w, c.force); c.force.vadd(y, c.force)
				}
			}; a.prototype.w = function (a) { var b = this.smoothingRadius; return 315 / (64 * Math.PI * Math.pow(b, 9)) * Math.pow(b * b - a * a, 3) }; a.prototype.gradw = function (a, b) { var c = a.norm(), d = this.smoothingRadius; a.mult(945 / (32 * Math.PI * Math.pow(d, 9)) * Math.pow(d * d - c * c, 2), b) }; a.prototype.nablaw = function (a) {
				var b = this.smoothingRadius; return 945 / (32 * Math.PI * Math.pow(b, 9)) * (b * b - a * a) * (7 *
					a * a - 3 * b * b)
			}
		}, { "../material/Material": 25, "../math/Quaternion": 28, "../math/Vec3": 30, "../objects/Body": 31, "../shapes/Particle": 41, "../shapes/Shape": 43 }], 35: [function (c, h, t) {
			function a(a, d, b) {
				b = b || {}; this.restLength = "number" === typeof b.restLength ? b.restLength : 1; this.stiffness = b.stiffness || 100; this.damping = b.damping || 1; this.bodyA = a; this.bodyB = d; this.localAnchorA = new r; this.localAnchorB = new r; b.localAnchorA && this.localAnchorA.copy(b.localAnchorA); b.localAnchorB && this.localAnchorB.copy(b.localAnchorB); b.worldAnchorA &&
					this.setWorldAnchorA(b.worldAnchorA); b.worldAnchorB && this.setWorldAnchorB(b.worldAnchorB)
			} var r = c("../math/Vec3"); h.exports = a; a.prototype.setWorldAnchorA = function (a) { this.bodyA.pointToLocalFrame(a, this.localAnchorA) }; a.prototype.setWorldAnchorB = function (a) { this.bodyB.pointToLocalFrame(a, this.localAnchorB) }; a.prototype.getWorldAnchorA = function (a) { this.bodyA.pointToWorldFrame(this.localAnchorA, a) }; a.prototype.getWorldAnchorB = function (a) { this.bodyB.pointToWorldFrame(this.localAnchorB, a) }; var b = new r,
				y = new r, w = new r, e = new r, q = new r, k = new r, n = new r, v = new r, f = new r, d = new r, u = new r; a.prototype.applyForce = function () {
					var a = this.stiffness, c = this.damping, h = this.restLength, r = this.bodyA, t = this.bodyB; this.getWorldAnchorA(q); this.getWorldAnchorB(k); q.vsub(r.position, n); k.vsub(t.position, v); k.vsub(q, b); var S = b.norm(); y.copy(b); y.normalize(); t.velocity.vsub(r.velocity, w); t.angularVelocity.cross(v, u); w.vadd(u, w); r.angularVelocity.cross(n, u); w.vsub(u, w); y.mult(-a * (S - h) - c * w.dot(y), e); r.force.vsub(e, r.force);
					t.force.vadd(e, t.force); n.cross(e, f); v.cross(e, d); r.torque.vsub(f, r.torque); t.torque.vadd(d, t.torque)
				}
		}, { "../math/Vec3": 30 }], 36: [function (c, h, t) {
			function a(a) {
				a = w.defaults(a, {
					chassisConnectionPointLocal: new r, chassisConnectionPointWorld: new r, directionLocal: new r, directionWorld: new r, axleLocal: new r, axleWorld: new r, suspensionRestLength: 1, suspensionMaxLength: 2, radius: 1, suspensionStiffness: 100, dampingCompression: 10, dampingRelaxation: 10, frictionSlip: 1E4, steering: 0, rotation: 0, deltaRotation: 0, rollInfluence: .01,
					maxSuspensionForce: Number.MAX_VALUE, isFrontWheel: !0, clippedInvContactDotSuspension: 1, suspensionRelativeVelocity: 0, suspensionForce: 0, skidInfo: 0, suspensionLength: 0, maxSuspensionTravel: 1, useCustomSlidingRotationalSpeed: !1, customSlidingRotationalSpeed: -.1
				}); this.maxSuspensionTravel = a.maxSuspensionTravel; this.customSlidingRotationalSpeed = a.customSlidingRotationalSpeed; this.useCustomSlidingRotationalSpeed = a.useCustomSlidingRotationalSpeed; this.sliding = !1; this.chassisConnectionPointLocal = a.chassisConnectionPointLocal.clone();
				this.chassisConnectionPointWorld = a.chassisConnectionPointWorld.clone(); this.directionLocal = a.directionLocal.clone(); this.directionWorld = a.directionWorld.clone(); this.axleLocal = a.axleLocal.clone(); this.axleWorld = a.axleWorld.clone(); this.suspensionRestLength = a.suspensionRestLength; this.suspensionMaxLength = a.suspensionMaxLength; this.radius = a.radius; this.suspensionStiffness = a.suspensionStiffness; this.dampingCompression = a.dampingCompression; this.dampingRelaxation = a.dampingRelaxation; this.frictionSlip =
					a.frictionSlip; this.deltaRotation = this.rotation = this.steering = 0; this.rollInfluence = a.rollInfluence; this.maxSuspensionForce = a.maxSuspensionForce; this.brake = this.engineForce = 0; this.isFrontWheel = a.isFrontWheel; this.clippedInvContactDotSuspension = 1; this.forwardImpulse = this.sideImpulse = this.suspensionLength = this.skidInfo = this.suspensionForce = this.suspensionRelativeVelocity = 0; this.raycastResult = new y; this.worldTransform = new b; this.isInContact = !1
			} var r = c("../math/Vec3"), b = c("../math/Transform"), y = c("../collision/RaycastResult"),
				w = c("../utils/Utils"); h.exports = a; var e = new r, q = new r; e = new r; a.prototype.updateWheel = function (a) {
					var b = this.raycastResult; if (this.isInContact) { var c = b.hitNormalWorld.dot(b.directionWorld); b.hitPointWorld.vsub(a.position, q); a.getVelocityAtWorldPoint(q, e); a = b.hitNormalWorld.dot(e); -.1 <= c ? (this.suspensionRelativeVelocity = 0, this.clippedInvContactDotSuspension = 10) : (c = -1 / c, this.suspensionRelativeVelocity = a * c, this.clippedInvContactDotSuspension = c) } else b.suspensionLength = this.suspensionRestLength, this.suspensionRelativeVelocity =
						0, b.directionWorld.scale(-1, b.hitNormalWorld), this.clippedInvContactDotSuspension = 1
				}
		}, { "../collision/RaycastResult": 10, "../math/Transform": 29, "../math/Vec3": 30, "../utils/Utils": 53 }], 37: [function (c, h, t) {
			function a(a) { r.call(this); this.type = r.types.BOX; this.halfExtents = a; this.convexPolyhedronRepresentation = null; this.updateConvexPolyhedronRepresentation(); this.updateBoundingSphereRadius() } h.exports = a; var r = c("./Shape"), b = c("../math/Vec3"), y = c("./ConvexPolyhedron"); a.prototype = new r; a.prototype.constructor =
				a; a.prototype.updateConvexPolyhedronRepresentation = function () { var a = this.halfExtents.x, c = this.halfExtents.y, e = this.halfExtents.z; a = [new b(-a, -c, -e), new b(a, -c, -e), new b(a, c, -e), new b(-a, c, -e), new b(-a, -c, e), new b(a, -c, e), new b(a, c, e), new b(-a, c, e)]; new b(0, 0, 1); new b(0, 1, 0); new b(1, 0, 0); this.convexPolyhedronRepresentation = a = new y(a, [[3, 2, 1, 0], [4, 5, 6, 7], [5, 4, 0, 1], [2, 3, 7, 6], [0, 4, 7, 3], [1, 2, 6, 5]]); a.material = this.material }; a.prototype.calculateLocalInertia = function (c, e) {
					e = e || new b; a.calculateInertia(this.halfExtents,
						c, e); return e
				}; a.calculateInertia = function (a, b, c) { c.x = 1 / 12 * b * (4 * a.y * a.y + 4 * a.z * a.z); c.y = 1 / 12 * b * (4 * a.x * a.x + 4 * a.z * a.z); c.z = 1 / 12 * b * (4 * a.y * a.y + 4 * a.x * a.x) }; a.prototype.getSideNormals = function (a, b) { var c = this.halfExtents; a[0].set(c.x, 0, 0); a[1].set(0, c.y, 0); a[2].set(0, 0, c.z); a[3].set(-c.x, 0, 0); a[4].set(0, -c.y, 0); a[5].set(0, 0, -c.z); if (void 0 !== b) for (c = 0; c !== a.length; c++)b.vmult(a[c], a[c]); return a }; a.prototype.volume = function () { return 8 * this.halfExtents.x * this.halfExtents.y * this.halfExtents.z }; a.prototype.updateBoundingSphereRadius =
					function () { this.boundingSphereRadius = this.halfExtents.norm() }; var w = new b; new b; a.prototype.forEachWorldCorner = function (a, b, c) { var e = this.halfExtents; e = [[e.x, e.y, e.z], [-e.x, e.y, e.z], [-e.x, -e.y, e.z], [-e.x, -e.y, -e.z], [e.x, -e.y, -e.z], [e.x, e.y, -e.z], [-e.x, e.y, -e.z], [e.x, -e.y, e.z]]; for (var f = 0; f < e.length; f++)w.set(e[f][0], e[f][1], e[f][2]), b.vmult(w, w), a.vadd(w, w), c(w.x, w.y, w.z) }; var e = [new b, new b, new b, new b, new b, new b, new b, new b]; a.prototype.calculateWorldAABB = function (a, b, c, h) {
						var f = this.halfExtents;
						e[0].set(f.x, f.y, f.z); e[1].set(-f.x, f.y, f.z); e[2].set(-f.x, -f.y, f.z); e[3].set(-f.x, -f.y, -f.z); e[4].set(f.x, -f.y, -f.z); e[5].set(f.x, f.y, -f.z); e[6].set(-f.x, f.y, -f.z); e[7].set(f.x, -f.y, f.z); var d = e[0]; b.vmult(d, d); a.vadd(d, d); h.copy(d); c.copy(d); for (f = 1; 8 > f; f++) { d = e[f]; b.vmult(d, d); a.vadd(d, d); var k = d.x, n = d.y; d = d.z; k > h.x && (h.x = k); n > h.y && (h.y = n); d > h.z && (h.z = d); k < c.x && (c.x = k); n < c.y && (c.y = n); d < c.z && (c.z = d) }
					}
		}, { "../math/Vec3": 30, "./ConvexPolyhedron": 38, "./Shape": 43 }], 38: [function (c, h, t) {
			function a(a, b,
				d) { r.call(this); this.type = r.types.CONVEXPOLYHEDRON; this.vertices = a || []; this.worldVertices = []; this.worldVerticesNeedsUpdate = !0; this.faces = b || []; this.faceNormals = []; this.computeNormals(); this.worldFaceNormalsNeedsUpdate = !0; this.worldFaceNormals = []; this.uniqueEdges = []; this.uniqueAxes = d ? d.slice() : null; this.computeEdges(); this.updateBoundingSphereRadius() } h.exports = a; var r = c("./Shape"), b = c("../math/Vec3"); c("../math/Quaternion"); var y = c("../math/Transform"); a.prototype = new r; a.prototype.constructor = a;
			var w = new b; a.prototype.computeEdges = function () { for (var a = this.faces, b = this.vertices, d = this.uniqueEdges, c = d.length = 0; c !== a.length; c++)for (var e = a[c], f = e.length, g = 0; g !== f; g++) { b[e[g]].vsub(b[e[(g + 1) % f]], w); w.normalize(); for (var k = !1, u = 0; u !== d.length; u++)if (d[u].almostEquals(w) || d[u].almostEquals(w)) { k = !0; break } k || d.push(w.clone()) } }; a.prototype.computeNormals = function () {
				this.faceNormals.length = this.faces.length; for (var a = 0; a < this.faces.length; a++) {
					for (var d = 0; d < this.faces[a].length; d++)if (!this.vertices[this.faces[a][d]]) throw Error("Vertex " +
						this.faces[a][d] + " not found!"); d = this.faceNormals[a] || new b; this.getFaceNormal(a, d); d.negate(d); this.faceNormals[a] = d; if (0 > d.dot(this.vertices[this.faces[a][0]])) for (console.error(".faceNormals[" + a + "] = Vec3(" + d.toString() + ") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule."), d = 0; d < this.faces[a].length; d++)console.warn(".vertices[" + this.faces[a][d] + "] = Vec3(" + this.vertices[this.faces[a][d]].toString() + ")")
				}
			}; var e =
				new b, q = new b; a.computeNormal = function (a, d, b, c) { d.vsub(a, q); b.vsub(d, e); e.cross(q, c); c.isZero() || c.normalize() }; a.prototype.getFaceNormal = function (d, b) { var c = this.faces[d]; return a.computeNormal(this.vertices[c[0]], this.vertices[c[1]], this.vertices[c[2]], b) }; var k = new b; a.prototype.clipAgainstHull = function (a, d, c, e, f, g, u, n, z) {
					for (var q = -1, h = -Number.MAX_VALUE, v = 0; v < c.faces.length; v++) { k.copy(c.faceNormals[v]); f.vmult(k, k); var r = k.dot(g); r > h && (h = r, q = v) } h = []; v = c.faces[q]; r = v.length; for (var w = 0; w < r; w++) {
						var C =
							c.vertices[v[w]], p = new b; p.copy(C); f.vmult(p, p); e.vadd(p, p); h.push(p)
					} 0 <= q && this.clipFaceAgainstHull(g, a, d, h, u, n, z)
				}; var n = new b, v = new b, f = new b, d = new b, u = new b, z = new b; a.prototype.findSeparatingAxis = function (a, b, c, e, g, k, q, h) {
					var r = Number.MAX_VALUE, w = 0; if (this.uniqueAxes) for (y = 0; y !== this.uniqueAxes.length; y++) { c.vmult(this.uniqueAxes[y], n); t = this.testSepAxis(n, a, b, c, e, g); if (!1 === t) return !1; t < r && (r = t, k.copy(n)) } else for (var C = q ? q.length : this.faces.length, y = 0; y < C; y++) {
						t = q ? q[y] : y; n.copy(this.faceNormals[t]);
						c.vmult(n, n); var t = this.testSepAxis(n, a, b, c, e, g); if (!1 === t) return !1; t < r && (r = t, k.copy(n))
					} if (a.uniqueAxes) for (y = 0; y !== a.uniqueAxes.length; y++) { g.vmult(a.uniqueAxes[y], v); w++; t = this.testSepAxis(v, a, b, c, e, g); if (!1 === t) return !1; t < r && (r = t, k.copy(v)) } else for (q = h ? h.length : a.faces.length, y = 0; y < q; y++) { t = h ? h[y] : y; v.copy(a.faceNormals[t]); g.vmult(v, v); w++; t = this.testSepAxis(v, a, b, c, e, g); if (!1 === t) return !1; t < r && (r = t, k.copy(v)) } for (h = 0; h !== this.uniqueEdges.length; h++)for (c.vmult(this.uniqueEdges[h], d), w = 0; w !==
						a.uniqueEdges.length; w++)if (g.vmult(a.uniqueEdges[w], u), d.cross(u, z), !z.almostZero()) { z.normalize(); y = this.testSepAxis(z, a, b, c, e, g); if (!1 === y) return !1; y < r && (r = y, k.copy(z)) } e.vsub(b, f); 0 < f.dot(k) && k.negate(k); return !0
				}; var g = [], C = []; a.prototype.testSepAxis = function (b, d, c, e, f, k) { a.project(this, b, c, e, g); a.project(d, b, f, k, C); c = g[0]; b = g[1]; d = C[0]; e = C[1]; if (c < e || d < b) return !1; c -= e; b = d - b; return c < b ? c : b }; var Q = new b, R = new b; a.prototype.calculateLocalInertia = function (a, b) {
					this.computeLocalAABB(Q, R); var d = R.x -
						Q.x, c = R.y - Q.y, e = R.z - Q.z; b.x = 1 / 12 * a * (4 * c * c + 4 * e * e); b.y = 1 / 12 * a * (4 * d * d + 4 * e * e); b.z = 1 / 12 * a * (4 * c * c + 4 * d * d)
				}; a.prototype.getPlaneConstantOfFace = function (a) { return -this.faceNormals[a].dot(this.vertices[this.faces[a][0]]) }; var S = new b, O = new b, K = new b, G = new b, E = new b, P = new b, B = new b, L = new b; a.prototype.clipFaceAgainstHull = function (a, b, d, c, e, f, g) {
					for (var k = [], u = -1, n = Number.MAX_VALUE, z = 0; z < this.faces.length; z++) { S.copy(this.faceNormals[z]); d.vmult(S, S); var q = S.dot(a); q < n && (n = q, u = z) } if (!(0 > u)) {
						a = this.faces[u]; a.connectedFaces =
							[]; for (n = 0; n < this.faces.length; n++)for (z = 0; z < this.faces[n].length; z++)-1 !== a.indexOf(this.faces[n][z]) && n !== u && -1 === a.connectedFaces.indexOf(n) && a.connectedFaces.push(n); n = a.length; for (z = 0; z < n; z++) {
								q = this.vertices[a[z]]; q.vsub(this.vertices[a[(z + 1) % n]], O); K.copy(O); d.vmult(K, K); b.vadd(K, K); G.copy(this.faceNormals[u]); d.vmult(G, G); b.vadd(G, G); K.cross(G, E); E.negate(E); P.copy(q); d.vmult(P, P); b.vadd(P, P); P.dot(E); q = a.connectedFaces[z]; B.copy(this.faceNormals[q]); q = this.getPlaneConstantOfFace(q); L.copy(B);
								d.vmult(L, L); q -= L.dot(b); for (this.clipFaceAgainstPlane(c, k, L, q); c.length;)c.shift(); for (; k.length;)c.push(k.shift())
							} B.copy(this.faceNormals[u]); q = this.getPlaneConstantOfFace(u); L.copy(B); d.vmult(L, L); q -= L.dot(b); for (n = 0; n < c.length; n++)b = L.dot(c[n]) + q, b <= e && (console.log("clamped: depth=" + b + " to minDist=" + (e + "")), b = e), b <= f && (d = c[n], 0 >= b && g.push({ point: d, normal: L, depth: b }))
					}
				}; a.prototype.clipFaceAgainstPlane = function (a, d, c, e) {
					var f = a.length; if (2 > f) return d; var g = a[a.length - 1]; var k = c.dot(g) + e; for (var u =
						0; u < f; u++) { var n = a[u]; var z = c.dot(n) + e; if (0 > k) { if (0 > z) { var q = new b; q.copy(n) } else q = new b, g.lerp(n, k / (k - z), q); d.push(q) } else 0 > z && (q = new b, g.lerp(n, k / (k - z), q), d.push(q), d.push(n)); g = n; k = z } return d
				}; a.prototype.computeWorldVertices = function (a, d) { for (var c = this.vertices.length; this.worldVertices.length < c;)this.worldVertices.push(new b); for (var e = this.vertices, f = this.worldVertices, g = 0; g !== c; g++)d.vmult(e[g], f[g]), a.vadd(f[g], f[g]); this.worldVerticesNeedsUpdate = !1 }; new b; a.prototype.computeLocalAABB =
					function (a, d) { var b = this.vertices.length, c = this.vertices; a.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE); d.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE); for (var e = 0; e < b; e++) { var f = c[e]; f.x < a.x ? a.x = f.x : f.x > d.x && (d.x = f.x); f.y < a.y ? a.y = f.y : f.y > d.y && (d.y = f.y); f.z < a.z ? a.z = f.z : f.z > d.z && (d.z = f.z) } }; a.prototype.computeWorldFaceNormals = function (a) {
						for (var d = this.faceNormals.length; this.worldFaceNormals.length < d;)this.worldFaceNormals.push(new b); for (var c = this.faceNormals, e = this.worldFaceNormals,
							f = 0; f !== d; f++)a.vmult(c[f], e[f]); this.worldFaceNormalsNeedsUpdate = !1
					}; a.prototype.updateBoundingSphereRadius = function () { for (var a = 0, d = this.vertices, b = 0, c = d.length; b !== c; b++) { var e = d[b].norm2(); e > a && (a = e) } this.boundingSphereRadius = Math.sqrt(a) }; var J = new b; a.prototype.calculateWorldAABB = function (a, d, b, c) {
						for (var e = this.vertices.length, f = this.vertices, g, k, u, n, z, q, h = 0; h < e; h++) {
							J.copy(f[h]); d.vmult(J, J); a.vadd(J, J); var v = J; if (v.x < g || void 0 === g) g = v.x; else if (v.x > n || void 0 === n) n = v.x; if (v.y < k || void 0 ===
								k) k = v.y; else if (v.y > z || void 0 === z) z = v.y; if (v.z < u || void 0 === u) u = v.z; else if (v.z > q || void 0 === q) q = v.z
						} b.set(g, k, u); c.set(n, z, q)
					}; a.prototype.volume = function () { return 4 * Math.PI * this.boundingSphereRadius / 3 }; a.prototype.getAveragePointLocal = function (a) { a = a || new b; for (var d = this.vertices.length, c = this.vertices, e = 0; e < d; e++)a.vadd(c[e], a); a.mult(1 / d, a); return a }; a.prototype.transformAllPoints = function (a, d) {
						var b = this.vertices.length, c = this.vertices; if (d) {
							for (var e = 0; e < b; e++) { var f = c[e]; d.vmult(f, f) } for (e =
								0; e < this.faceNormals.length; e++)f = this.faceNormals[e], d.vmult(f, f)
						} if (a) for (e = 0; e < b; e++)f = c[e], f.vadd(a, f)
					}; var T = new b, aa = new b, ia = new b; a.prototype.pointIsInside = function (a) { var d = this.vertices, b = this.faces, c = this.faceNormals, e = this.faces.length; this.getAveragePointLocal(T); for (var f = 0; f < e; f++) { var g = c[f]; var k = d[b[f][0]], u = aa; a.vsub(k, u); u = g.dot(u); var n = ia; T.vsub(k, n); g = g.dot(n); if (0 > u && 0 < g || 0 < u && 0 > g) return !1 } return -1 }; new b; var U = new b, la = new b; a.project = function (a, d, b, c, e) {
						var f = a.vertices.length;
						a = a.vertices; la.setZero(); y.vectorToLocalFrame(b, c, d, U); y.pointToLocalFrame(b, c, la, la); c = la.dot(U); b = d = a[0].dot(U); for (var g = 1; g < f; g++) { var k = a[g].dot(U); k > d && (d = k); k < b && (b = k) } b -= c; d -= c; b > d && (f = b, b = d, d = f); e[0] = d; e[1] = b
					}
		}, { "../math/Quaternion": 28, "../math/Transform": 29, "../math/Vec3": 30, "./Shape": 43 }], 39: [function (c, h, t) {
			function a(a, c, q, k) {
				var e = [], h = [], f = [], d = [], u = [], z = Math.cos, g = Math.sin; e.push(new b(c * z(0), c * g(0), .5 * -q)); d.push(0); e.push(new b(a * z(0), a * g(0), .5 * q)); u.push(1); for (var w = 0; w < k; w++) {
					var t =
						2 * Math.PI / k * (w + 1), R = 2 * Math.PI / k * (w + .5); w < k - 1 ? (e.push(new b(c * z(t), c * g(t), .5 * -q)), d.push(2 * w + 2), e.push(new b(a * z(t), a * g(t), .5 * q)), u.push(2 * w + 3), f.push([2 * w + 2, 2 * w + 3, 2 * w + 1, 2 * w])) : f.push([0, 1, 2 * w + 1, 2 * w]); (1 === k % 2 || w < k / 2) && h.push(new b(z(R), g(R), 0))
				} f.push(u); h.push(new b(0, 0, 1)); a = []; for (w = 0; w < d.length; w++)a.push(d[d.length - w - 1]); f.push(a); this.type = r.types.CONVEXPOLYHEDRON; y.call(this, e, f, h)
			} h.exports = a; var r = c("./Shape"), b = c("../math/Vec3"); c("../math/Quaternion"); var y = c("./ConvexPolyhedron"); a.prototype =
				new y
		}, { "../math/Quaternion": 28, "../math/Vec3": 30, "./ConvexPolyhedron": 38, "./Shape": 43 }], 40: [function (c, h, t) {
			function a(a, c) {
				c = w.defaults(c, { maxValue: null, minValue: null, elementSize: 1 }); this.data = a; this.maxValue = c.maxValue; this.minValue = c.minValue; this.elementSize = c.elementSize; null === c.minValue && this.updateMinValue(); null === c.maxValue && this.updateMaxValue(); this.cacheEnabled = !0; r.call(this); this.pillarConvex = new b; this.pillarOffset = new y; this.type = r.types.HEIGHTFIELD; this.updateBoundingSphereRadius();
				this._cachedPillars = {}
			} var r = c("./Shape"), b = c("./ConvexPolyhedron"), y = c("../math/Vec3"), w = c("../utils/Utils"); h.exports = a; a.prototype = new r; a.prototype.update = function () { this._cachedPillars = {} }; a.prototype.updateMinValue = function () { for (var a = this.data, b = a[0][0], c = 0; c !== a.length; c++)for (var n = 0; n !== a[c].length; n++) { var h = a[c][n]; h < b && (b = h) } this.minValue = b }; a.prototype.updateMaxValue = function () {
				for (var a = this.data, b = a[0][0], c = 0; c !== a.length; c++)for (var n = 0; n !== a[c].length; n++) {
					var h = a[c][n]; h > b && (b =
						h)
				} this.maxValue = b
			}; a.prototype.setHeightValueAtIndex = function (a, b, c) { this.data[a][b] = c; this.clearCachedConvexTrianglePillar(a, b, !1); 0 < a && (this.clearCachedConvexTrianglePillar(a - 1, b, !0), this.clearCachedConvexTrianglePillar(a - 1, b, !1)); 0 < b && (this.clearCachedConvexTrianglePillar(a, b - 1, !0), this.clearCachedConvexTrianglePillar(a, b - 1, !1)); 0 < b && 0 < a && this.clearCachedConvexTrianglePillar(a - 1, b - 1, !0) }; a.prototype.getRectMinMax = function (a, b, c, n, h) {
				h = h || []; for (var e = this.data, d = this.minValue; a <= c; a++)for (var k =
					b; k <= n; k++) { var z = e[a][k]; z > d && (d = z) } h[0] = this.minValue; h[1] = d
			}; a.prototype.getIndexOfPosition = function (a, b, c, n) { var e = this.elementSize, f = this.data; a = Math.floor(a / e); b = Math.floor(b / e); c[0] = a; c[1] = b; n && (0 > a && (a = 0), 0 > b && (b = 0), a >= f.length - 1 && (a = f.length - 1), b >= f[0].length - 1 && (b = f[0].length - 1)); return 0 > a || 0 > b || a >= f.length - 1 || b >= f[0].length - 1 ? !1 : !0 }; a.prototype.getHeightAt = function (a, b, c) { var e = []; this.getIndexOfPosition(a, b, e, c); a = []; this.getRectMinMax(e[0], e[1] + 1, e[0], e[1] + 1, a); return (a[0] + a[1]) / 2 };
			a.prototype.getCacheConvexTrianglePillarKey = function (a, b, c) { return a + "_" + b + "_" + (c ? 1 : 0) }; a.prototype.getCachedConvexTrianglePillar = function (a, b, c) { return this._cachedPillars[this.getCacheConvexTrianglePillarKey(a, b, c)] }; a.prototype.setCachedConvexTrianglePillar = function (a, b, c, n, h) { this._cachedPillars[this.getCacheConvexTrianglePillarKey(a, b, c)] = { convex: n, offset: h } }; a.prototype.clearCachedConvexTrianglePillar = function (a, b, c) { delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(a, b, c)] }; a.prototype.getConvexTrianglePillar =
				function (a, c, k) {
					var e = this.pillarConvex, h = this.pillarOffset; if (this.cacheEnabled) { var f = this.getCachedConvexTrianglePillar(a, c, k); if (f) { this.pillarConvex = f.convex; this.pillarOffset = f.offset; return } e = new b; h = new y; this.pillarConvex = e; this.pillarOffset = h } f = this.data; var d = this.elementSize, u = e.faces; e.vertices.length = 6; for (var z = 0; 6 > z; z++)e.vertices[z] || (e.vertices[z] = new y); u.length = 5; for (z = 0; 5 > z; z++)u[z] || (u[z] = []); z = e.vertices; var g = (Math.min(f[a][c], f[a + 1][c], f[a][c + 1], f[a + 1][c + 1]) - this.minValue) /
						2 + this.minValue; k ? (h.set((a + .75) * d, (c + .75) * d, g), z[0].set(.25 * d, .25 * d, f[a + 1][c + 1] - g), z[1].set(-.75 * d, .25 * d, f[a][c + 1] - g), z[2].set(.25 * d, -.75 * d, f[a + 1][c] - g), z[3].set(.25 * d, .25 * d, -g - 1), z[4].set(-.75 * d, .25 * d, -g - 1), z[5].set(.25 * d, -.75 * d, -g - 1), u[0][0] = 0, u[0][1] = 1, u[0][2] = 2, u[1][0] = 5, u[1][1] = 4, u[1][2] = 3, u[2][0] = 2, u[2][1] = 5, u[2][2] = 3, u[2][3] = 0, u[3][0] = 3, u[3][1] = 4, u[3][2] = 1, u[3][3] = 0, u[4][0] = 1, u[4][1] = 4, u[4][2] = 5, u[4][3] = 2) : (h.set((a + .25) * d, (c + .25) * d, g), z[0].set(-.25 * d, -.25 * d, f[a][c] - g), z[1].set(.75 * d, -.25 *
							d, f[a + 1][c] - g), z[2].set(-.25 * d, .75 * d, f[a][c + 1] - g), z[3].set(-.25 * d, -.25 * d, -g - 1), z[4].set(.75 * d, -.25 * d, -g - 1), z[5].set(-.25 * d, .75 * d, -g - 1), u[0][0] = 0, u[0][1] = 1, u[0][2] = 2, u[1][0] = 5, u[1][1] = 4, u[1][2] = 3, u[2][0] = 0, u[2][1] = 2, u[2][2] = 5, u[2][3] = 3, u[3][0] = 1, u[3][1] = 0, u[3][2] = 3, u[3][3] = 4, u[4][0] = 4, u[4][1] = 5, u[4][2] = 2, u[4][3] = 1); e.computeNormals(); e.computeEdges(); e.updateBoundingSphereRadius(); this.setCachedConvexTrianglePillar(a, c, k, e, h)
				}; a.prototype.calculateLocalInertia = function (a, b) {
					b = b || new y; b.set(0, 0, 0);
					return b
				}; a.prototype.volume = function () { return Number.MAX_VALUE }; a.prototype.calculateWorldAABB = function (a, b, c, n) { c.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE); n.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE) }; a.prototype.updateBoundingSphereRadius = function () { var a = this.data, b = this.elementSize; this.boundingSphereRadius = (new y(a.length * b, a[0].length * b, Math.max(Math.abs(this.maxValue), Math.abs(this.minValue)))).norm() }
		}, {
			"../math/Vec3": 30, "../utils/Utils": 53, "./ConvexPolyhedron": 38,
			"./Shape": 43
		}], 41: [function (c, h, t) { function a() { r.call(this); this.type = r.types.PARTICLE } h.exports = a; var r = c("./Shape"), b = c("../math/Vec3"); a.prototype = new r; a.prototype.constructor = a; a.prototype.calculateLocalInertia = function (a, c) { c = c || new b; c.set(0, 0, 0); return c }; a.prototype.volume = function () { return 0 }; a.prototype.updateBoundingSphereRadius = function () { this.boundingSphereRadius = 0 }; a.prototype.calculateWorldAABB = function (a, b, c, h) { c.copy(a); h.copy(a) } }, { "../math/Vec3": 30, "./Shape": 43 }], 42: [function (c,
			h, t) {
				function a() { r.call(this); this.type = r.types.PLANE; this.worldNormal = new b; this.worldNormalNeedsUpdate = !0; this.boundingSphereRadius = Number.MAX_VALUE } h.exports = a; var r = c("./Shape"), b = c("../math/Vec3"); a.prototype = new r; a.prototype.constructor = a; a.prototype.computeWorldNormal = function (a) { var b = this.worldNormal; b.set(0, 0, 1); a.vmult(b, b); this.worldNormalNeedsUpdate = !1 }; a.prototype.calculateLocalInertia = function (a, c) { return c = c || new b }; a.prototype.volume = function () { return Number.MAX_VALUE }; var y = new b;
			a.prototype.calculateWorldAABB = function (a, b, c, k) { y.set(0, 0, 1); b.vmult(y, y); b = Number.MAX_VALUE; c.set(-b, -b, -b); k.set(b, b, b); 1 === y.x && (k.x = a.x); 1 === y.y && (k.y = a.y); 1 === y.z && (k.z = a.z); -1 === y.x && (c.x = a.x); -1 === y.y && (c.y = a.y); -1 === y.z && (c.z = a.z) }; a.prototype.updateBoundingSphereRadius = function () { this.boundingSphereRadius = Number.MAX_VALUE }
		}, { "../math/Vec3": 30, "./Shape": 43 }], 43: [function (c, h, t) {
			function a() {
			this.id = a.idCounter++; this.boundingSphereRadius = this.type = 0; this.collisionResponse = !0; this.material =
				null
			} h.exports = a; a = c("./Shape"); c("../math/Vec3"); c("../math/Quaternion"); c("../material/Material"); a.prototype.constructor = a; a.prototype.updateBoundingSphereRadius = function () { throw "computeBoundingSphereRadius() not implemented for shape type " + this.type; }; a.prototype.volume = function () { throw "volume() not implemented for shape type " + this.type; }; a.prototype.calculateLocalInertia = function (a, b) { throw "calculateLocalInertia() not implemented for shape type " + this.type; }; a.idCounter = 0; a.types = {
				SPHERE: 1,
				PLANE: 2, BOX: 4, COMPOUND: 8, CONVEXPOLYHEDRON: 16, HEIGHTFIELD: 32, PARTICLE: 64, CYLINDER: 128, TRIMESH: 256
			}
		}, { "../material/Material": 25, "../math/Quaternion": 28, "../math/Vec3": 30, "./Shape": 43 }], 44: [function (c, h, t) {
			function a(a) { r.call(this); this.radius = void 0 !== a ? Number(a) : 1; this.type = r.types.SPHERE; if (0 > this.radius) throw Error("The sphere radius cannot be negative."); this.updateBoundingSphereRadius() } h.exports = a; var r = c("./Shape"), b = c("../math/Vec3"); a.prototype = new r; a.prototype.constructor = a; a.prototype.calculateLocalInertia =
				function (a, c) { c = c || new b; var e = 2 * a * this.radius * this.radius / 5; c.x = e; c.y = e; c.z = e; return c }; a.prototype.volume = function () { return 4 * Math.PI * this.radius / 3 }; a.prototype.updateBoundingSphereRadius = function () { this.boundingSphereRadius = this.radius }; a.prototype.calculateWorldAABB = function (a, b, c, h) { b = this.radius; for (var e = ["x", "y", "z"], n = 0; n < e.length; n++) { var q = e[n]; c[q] = a[q] - b; h[q] = a[q] + b } }
		}, { "../math/Vec3": 30, "./Shape": 43 }], 45: [function (c, h, t) {
			function a(a, d) {
				r.call(this); this.type = r.types.TRIMESH; this.vertices =
					new Float32Array(a); this.indices = new Int16Array(d); this.normals = new Float32Array(d.length); this.aabb = new w; this.edges = null; this.scale = new b(1, 1, 1); this.tree = new e; this.updateEdges(); this.updateNormals(); this.updateAABB(); this.updateBoundingSphereRadius(); this.updateTree()
			} h.exports = a; var r = c("./Shape"), b = c("../math/Vec3"); c("../math/Quaternion"); var y = c("../math/Transform"), w = c("../collision/AABB"), e = c("../utils/Octree"); a.prototype = new r; a.prototype.constructor = a; var q = new b; a.prototype.updateTree =
				function () { var a = this.tree; a.reset(); a.aabb.copy(this.aabb); var d = this.scale; a.aabb.lowerBound.x *= 1 / d.x; a.aabb.lowerBound.y *= 1 / d.y; a.aabb.lowerBound.z *= 1 / d.z; a.aabb.upperBound.x *= 1 / d.x; a.aabb.upperBound.y *= 1 / d.y; a.aabb.upperBound.z *= 1 / d.z; d = new w; for (var c = new b, e = new b, f = new b, g = [c, e, f], k = 0; k < this.indices.length / 3; k++) { var u = 3 * k; this._getUnscaledVertex(this.indices[u], c); this._getUnscaledVertex(this.indices[u + 1], e); this._getUnscaledVertex(this.indices[u + 2], f); d.setFromPoints(g); a.insert(d, k) } a.removeEmptyNodes() };
			var k = new w; a.prototype.getTrianglesInAABB = function (a, b) { k.copy(a); var d = this.scale, c = d.x, e = d.y; d = d.z; var f = k.lowerBound, g = k.upperBound; f.x /= c; f.y /= e; f.z /= d; g.x /= c; g.y /= e; g.z /= d; return this.tree.aabbQuery(k, b) }; a.prototype.setScale = function (a) { var b = a.x === a.y === a.z; this.scale.x === this.scale.y === this.scale.z && b || this.updateNormals(); this.scale.copy(a); this.updateAABB(); this.updateBoundingSphereRadius() }; a.prototype.updateNormals = function () {
				for (var b = this.normals, d = 0; d < this.indices.length / 3; d++) {
					var c =
						3 * d, e = this.indices[c + 1], f = this.indices[c + 2]; this.getVertex(this.indices[c], u); this.getVertex(e, z); this.getVertex(f, g); a.computeNormal(z, u, g, q); b[c] = q.x; b[c + 1] = q.y; b[c + 2] = q.z
				}
			}; a.prototype.updateEdges = function () {
				for (var a = {}, b = function (b, d) { a[e < f ? e + "_" + f : f + "_" + e] = !0 }, d = 0; d < this.indices.length / 3; d++) { var c = 3 * d, e = this.indices[c], f = this.indices[c + 1]; c = this.indices[c + 2]; b(e, f); b(f, c); b(c, e) } b = Object.keys(a); this.edges = new Int16Array(2 * b.length); for (d = 0; d < b.length; d++)c = b[d].split("_"), this.edges[2 * d] =
					parseInt(c[0], 10), this.edges[2 * d + 1] = parseInt(c[1], 10)
			}; a.prototype.getEdgeVertex = function (a, b, d) { this.getVertex(this.edges[2 * a + (b ? 1 : 0)], d) }; var n = new b, v = new b; a.prototype.getEdgeVector = function (a, b) { this.getEdgeVertex(a, 0, n); this.getEdgeVertex(a, 1, v); v.vsub(n, b) }; var f = new b, d = new b; a.computeNormal = function (a, b, c, e) { b.vsub(a, d); c.vsub(b, f); f.cross(d, e); e.isZero() || e.normalize() }; var u = new b, z = new b, g = new b; a.prototype.getVertex = function (a, b) {
				var d = this.scale; this._getUnscaledVertex(a, b); b.x *= d.x;
				b.y *= d.y; b.z *= d.z; return b
			}; a.prototype._getUnscaledVertex = function (a, b) { var d = 3 * a, c = this.vertices; return b.set(c[d], c[d + 1], c[d + 2]) }; a.prototype.getWorldVertex = function (a, b, d, c) { this.getVertex(a, c); y.pointToWorldFrame(b, d, c, c); return c }; a.prototype.getTriangleVertices = function (a, b, d, c) { a *= 3; this.getVertex(this.indices[a], b); this.getVertex(this.indices[a + 1], d); this.getVertex(this.indices[a + 2], c) }; a.prototype.getNormal = function (a, b) {
				var d = 3 * a; return b.set(this.normals[d], this.normals[d + 1], this.normals[d +
					2])
			}; var C = new w; a.prototype.calculateLocalInertia = function (a, b) { this.computeLocalAABB(C); var d = C.upperBound.x - C.lowerBound.x, c = C.upperBound.y - C.lowerBound.y, e = C.upperBound.z - C.lowerBound.z; return b.set(1 / 12 * a * (4 * c * c + 4 * e * e), 1 / 12 * a * (4 * d * d + 4 * e * e), 1 / 12 * a * (4 * c * c + 4 * d * d)) }; var Q = new b; a.prototype.computeLocalAABB = function (a) {
				var b = a.lowerBound; a = a.upperBound; var d = this.vertices.length; this.getVertex(0, Q); b.copy(Q); a.copy(Q); for (var c = 0; c !== d; c++)this.getVertex(c, Q), Q.x < b.x ? b.x = Q.x : Q.x > a.x && (a.x = Q.x), Q.y <
					b.y ? b.y = Q.y : Q.y > a.y && (a.y = Q.y), Q.z < b.z ? b.z = Q.z : Q.z > a.z && (a.z = Q.z)
			}; a.prototype.updateAABB = function () { this.computeLocalAABB(this.aabb) }; a.prototype.updateBoundingSphereRadius = function () { var a = 0, d = this.vertices, c = new b, e = 0; for (d = d.length / 3; e !== d; e++) { this.getVertex(e, c); var f = c.norm2(); f > a && (a = f) } this.boundingSphereRadius = Math.sqrt(a) }; new b; var R = new y, S = new w; a.prototype.calculateWorldAABB = function (a, b, d, c) { R.position = a; R.quaternion = b; this.aabb.toWorldFrame(R, S); d.copy(S.lowerBound); c.copy(S.upperBound) };
			a.prototype.volume = function () { return 4 * Math.PI * this.boundingSphereRadius / 3 }; a.createTorus = function (b, d, c, e, f) { b = b || 1; d = d || .5; c = c || 8; e = e || 6; f = f || 2 * Math.PI; for (var g = [], k = [], u = 0; u <= c; u++)for (var n = 0; n <= e; n++) { var z = n / e * f, h = u / c * Math.PI * 2; g.push((b + d * Math.cos(h)) * Math.cos(z), (b + d * Math.cos(h)) * Math.sin(z), d * Math.sin(h)) } for (u = 1; u <= c; u++)for (n = 1; n <= e; n++)b = (e + 1) * (u - 1) + n - 1, d = (e + 1) * (u - 1) + n, f = (e + 1) * u + n, k.push((e + 1) * u + n - 1, b, f), k.push(b, d, f); return new a(g, k) }
		}, {
			"../collision/AABB": 3, "../math/Quaternion": 28,
			"../math/Transform": 29, "../math/Vec3": 30, "../utils/Octree": 50, "./Shape": 43
		}], 46: [function (c, h, t) {
			function a() { r.call(this); this.iterations = 10; this.tolerance = 1E-7 } h.exports = a; c("../math/Vec3"); c("../math/Quaternion"); var r = c("./Solver"); a.prototype = new r; var b = [], y = [], w = []; a.prototype.solve = function (a, c) {
				var e = 0, n = this.iterations, h = this.tolerance * this.tolerance, f = this.equations, d = f.length, u = c.bodies, z = u.length, g; if (0 !== d) for (g = 0; g !== z; g++)u[g].updateSolveMassProperties(); y.length = d; w.length = d; b.length =
					d; for (g = 0; g !== d; g++) { var q = f[g]; b[g] = 0; w[g] = q.computeB(a); y[g] = 1 / q.computeC() } if (0 !== d) {
						for (g = 0; g !== z; g++)q = u[g], e = q.wlambda, q.vlambda.set(0, 0, 0), e && e.set(0, 0, 0); for (e = 0; e !== n; e++) { for (var r = g = 0; r !== d; r++) { q = f[r]; var t = w[r]; var S = y[r]; var O = b[r]; var K = q.computeGWlambda(); t = S * (t - K - q.eps * O); O + t < q.minForce ? t = q.minForce - O : O + t > q.maxForce && (t = q.maxForce - O); b[r] += t; g += 0 < t ? t : -t; q.addToWlambda(t) } if (g * g < h) break } for (g = 0; g !== z; g++)q = u[g], n = q.velocity, h = q.angularVelocity, n.vadd(q.vlambda, n), h && h.vadd(q.wlambda,
							h)
					} return e
			}
		}, { "../math/Quaternion": 28, "../math/Vec3": 30, "./Solver": 47 }], 47: [function (c, h, t) { function a() { this.equations = [] } h.exports = a; a.prototype.solve = function (a, b) { return 0 }; a.prototype.addEquation = function (a) { a.enabled && this.equations.push(a) }; a.prototype.removeEquation = function (a) { var b = this.equations; a = b.indexOf(a); -1 !== a && b.splice(a, 1) }; a.prototype.removeAllEquations = function () { this.equations.length = 0 } }, {}], 48: [function (c, h, t) {
			function a(a) {
				w.call(this); this.iterations = 10; this.tolerance = 1E-7;
				this.subsolver = a; this.nodes = []; for (this.nodePool = []; 128 > this.nodePool.length;)this.nodePool.push(this.createNode())
			} function r(a) { for (var b = a.length, c = 0; c !== b; c++) { var e = a[c]; if (!(e.visited || e.body.type & n)) return e } return !1 } function b(a, b, c) { b.push(a.body); b = a.eqs.length; for (var d = 0; d !== b; d++) { var e = a.eqs[d]; -1 === c.indexOf(e) && c.push(e) } } function y(a, b) { return b.id - a.id } h.exports = a; c("../math/Vec3"); c("../math/Quaternion"); var w = c("./Solver"); c = c("../objects/Body"); a.prototype = new w; var e = [], q = [],
				k = { bodies: [] }, n = c.STATIC, v = []; a.prototype.createNode = function () { return { body: null, children: [], eqs: [], visited: !1 } }; a.prototype.solve = function (a, d) {
					for (var c = this.nodePool, f = d.bodies, g = this.equations, n = g.length, h = f.length, w = this.subsolver; c.length < h;)c.push(this.createNode()); e.length = h; for (var t = 0; t < h; t++)e[t] = c[t]; for (t = 0; t !== h; t++)c = e[t], c.body = f[t], c.children.length = 0, c.eqs.length = 0, c.visited = !1; for (h = 0; h !== n; h++) {
						c = g[h]; t = f.indexOf(c.bi); var O = f.indexOf(c.bj); t = e[t]; O = e[O]; t.children.push(O); t.eqs.push(c);
						O.children.push(t); O.eqs.push(c)
					} f = 0; g = q; w.tolerance = this.tolerance; for (w.iterations = this.iterations; t = r(e);) { g.length = 0; k.bodies.length = 0; c = t; t = b; n = k.bodies; h = g; v.push(c); c.visited = !0; for (t(c, n, h); v.length;)for (c = v.pop(); O = r(c.children);)O.visited = !0, t(O, n, h), v.push(O); n = g.length; g = g.sort(y); for (t = 0; t !== n; t++)w.addEquation(g[t]); w.solve(a, k); w.removeAllEquations(); f++ } return f
				}
		}, { "../math/Quaternion": 28, "../math/Vec3": 30, "../objects/Body": 31, "./Solver": 47 }], 49: [function (c, h, t) {
			c = function () { }; h.exports =
				c; c.prototype = {
					constructor: c, addEventListener: function (a, c) { void 0 === this._listeners && (this._listeners = {}); var b = this._listeners; void 0 === b[a] && (b[a] = []); -1 === b[a].indexOf(c) && b[a].push(c); return this }, hasEventListener: function (a, c) { if (void 0 === this._listeners) return !1; var b = this._listeners; return void 0 !== b[a] && -1 !== b[a].indexOf(c) ? !0 : !1 }, removeEventListener: function (a, c) {
						if (void 0 === this._listeners) return this; var b = this._listeners; if (void 0 === b[a]) return this; var h = b[a].indexOf(c); -1 !== h && b[a].splice(h,
							1); return this
					}, dispatchEvent: function (a) { if (void 0 === this._listeners) return this; var c = this._listeners[a.type]; if (void 0 !== c) { a.target = this; for (var b = 0, h = c.length; b < h; b++)c[b].call(this, a) } return this }
				}
		}, {}], 50: [function (c, h, t) {
			function a(a) { a = a || {}; this.root = a.root || null; this.aabb = a.aabb ? a.aabb.clone() : new b; this.data = []; this.children = [] } function r(b, c) { c = c || {}; c.root = null; c.aabb = b; a.call(this, c); this.maxDepth = "undefined" !== typeof c.maxDepth ? c.maxDepth : 8 } var b = c("../collision/AABB"), y = c("../math/Vec3");
			h.exports = r; r.prototype = new a; a.prototype.reset = function (a, b) { this.children.length = this.data.length = 0 }; a.prototype.insert = function (a, b, c) { var e = this.data; c = c || 0; if (!this.aabb.contains(a)) return !1; var f = this.children; if (c < (this.maxDepth || this.root.maxDepth)) { var d = !1; f.length || (this.subdivide(), d = !0); for (var k = 0; 8 !== k; k++)if (f[k].insert(a, b, c + 1)) return !0; d && (f.length = 0) } e.push(b); return !0 }; var w = new y; a.prototype.subdivide = function () {
				var c = this.aabb, e = c.lowerBound, n = c.upperBound; c = this.children; c.push(new a({
					aabb: new b({
						lowerBound: new y(0,
							0, 0)
					})
				}), new a({ aabb: new b({ lowerBound: new y(1, 0, 0) }) }), new a({ aabb: new b({ lowerBound: new y(1, 1, 0) }) }), new a({ aabb: new b({ lowerBound: new y(1, 1, 1) }) }), new a({ aabb: new b({ lowerBound: new y(0, 1, 1) }) }), new a({ aabb: new b({ lowerBound: new y(0, 0, 1) }) }), new a({ aabb: new b({ lowerBound: new y(1, 0, 1) }) }), new a({ aabb: new b({ lowerBound: new y(0, 1, 0) }) })); n.vsub(e, w); w.scale(.5, w); n = this.root || this; for (var h = 0; 8 !== h; h++) { var f = c[h]; f.root = n; var d = f.aabb.lowerBound; d.x *= w.x; d.y *= w.y; d.z *= w.z; d.vadd(e, d); d.vadd(w, f.aabb.upperBound) }
			};
			a.prototype.aabbQuery = function (a, b) { for (var c = [this]; c.length;) { var e = c.pop(); e.aabb.overlaps(a) && Array.prototype.push.apply(b, e.data); Array.prototype.push.apply(c, e.children) } return b }; var e = new b; a.prototype.rayQuery = function (a, b, c) { a.getAABB(e); e.toLocalFrame(b, e); this.aabbQuery(e, c); return c }; a.prototype.removeEmptyNodes = function () { for (var a = [this]; a.length;) { for (var b = a.pop(), c = b.children.length - 1; 0 <= c; c--)b.children[c].data.length || b.children.splice(c, 1); Array.prototype.push.apply(a, b.children) } }
		},
		{ "../collision/AABB": 3, "../math/Vec3": 30 }], 51: [function (c, h, t) { function a() { this.objects = []; this.type = Object } h.exports = a; a.prototype.release = function () { for (var a = arguments.length, b = 0; b !== a; b++)this.objects.push(arguments[b]) }; a.prototype.get = function () { return 0 === this.objects.length ? this.constructObject() : this.objects.pop() }; a.prototype.constructObject = function () { throw Error("constructObject() not implemented in this Pool subclass yet!"); } }, {}], 52: [function (c, h, t) {
			function a() { this.data = { keys: [] } }
			h.exports = a; a.prototype.get = function (a, b) { if (a > b) { var c = b; b = a; a = c } return this.data[a + "-" + b] }; a.prototype.set = function (a, b, c) { if (a > b) { var h = b; b = a; a = h } h = a + "-" + b; this.get(a, b) || this.data.keys.push(h); this.data[h] = c }; a.prototype.reset = function () { for (var a = this.data, b = a.keys; 0 < b.length;) { var c = b.pop(); delete a[c] } }
		}, {}], 53: [function (c, h, t) { function a() { } h.exports = a; a.defaults = function (a, b) { a = a || {}; for (var c in b) c in a || (a[c] = b[c]); return a } }, {}], 54: [function (c, h, t) {
			function a() {
				b.call(this); this.type =
					r
			} h.exports = a; var r = c("../math/Vec3"), b = c("./Pool"); a.prototype = new b; a.prototype.constructObject = function () { return new r }
		}, { "../math/Vec3": 30, "./Pool": 51 }], 55: [function (c, h, t) {
			function a(a) { this.contactPointPool = []; this.frictionEquationPool = []; this.result = []; this.frictionResult = []; this.v3pool = new e; this.world = a; this.currentContactMaterial = null; this.enableFrictionReduction = !1 } h.exports = a; h = c("../collision/AABB"); t = c("../shapes/Shape"); var r = c("../collision/Ray"), b = c("../math/Vec3"), y = c("../math/Transform");
			c("../shapes/ConvexPolyhedron"); var w = c("../math/Quaternion"); c("../solver/Solver"); var e = c("../utils/Vec3Pool"), q = c("../equations/ContactEquation"), k = c("../equations/FrictionEquation"); a.prototype.createContactEquation = function (a, b, d, c, e, p) {
				if (this.contactPointPool.length) { var f = this.contactPointPool.pop(); f.bi = a; f.bj = b } else f = new q(a, b); f.enabled = a.collisionResponse && b.collisionResponse && d.collisionResponse && c.collisionResponse; var g = this.currentContactMaterial; f.restitution = g.restitution; f.setSpookParams(g.contactEquationStiffness,
					g.contactEquationRelaxation, this.world.dt); a = d.material || a.material; b = c.material || b.material; a && b && 0 <= a.restitution && 0 <= b.restitution && (f.restitution = a.restitution * b.restitution); f.si = e || d; f.sj = p || c; return f
			}; a.prototype.createFrictionEquationsFromContact = function (a, b) {
				var d = a.bi, c = a.bj, e = this.world, p = this.currentContactMaterial, f = p.friction, g = a.si.material || d.material, l = a.sj.material || c.material; g && l && 0 <= g.friction && 0 <= l.friction && (f = g.friction * l.friction); if (0 < f) {
					f *= e.gravity.length(); g = d.invMass +
						c.invMass; 0 < g && (g = 1 / g); var x = this.frictionEquationPool; l = x.length ? x.pop() : new k(d, c, f * g); x = x.length ? x.pop() : new k(d, c, f * g); l.bi = x.bi = d; l.bj = x.bj = c; l.minForce = x.minForce = -f * g; l.maxForce = x.maxForce = f * g; l.ri.copy(a.ri); l.rj.copy(a.rj); x.ri.copy(a.ri); x.rj.copy(a.rj); a.ni.tangents(l.t, x.t); l.setSpookParams(p.frictionEquationStiffness, p.frictionEquationRelaxation, e.dt); x.setSpookParams(p.frictionEquationStiffness, p.frictionEquationRelaxation, e.dt); l.enabled = x.enabled = a.enabled; b.push(l, x); return !0
				} return !1
			};
			var n = new b, v = new b, f = new b; a.prototype.createFrictionFromAverage = function (a) {
				var b = this.result[this.result.length - 1]; if (this.createFrictionEquationsFromContact(b, this.frictionResult) && 1 !== a) {
					var d = this.frictionResult[this.frictionResult.length - 2], c = this.frictionResult[this.frictionResult.length - 1]; n.setZero(); v.setZero(); f.setZero(); for (var e = b.bi, p = 0; p !== a; p++)b = this.result[this.result.length - 1 - p], b.bodyA !== e ? (n.vadd(b.ni, n), v.vadd(b.ri, v), f.vadd(b.rj, f)) : (n.vsub(b.ni, n), v.vadd(b.rj, v), f.vadd(b.ri,
						f)); a = 1 / a; v.scale(a, d.ri); f.scale(a, d.rj); c.ri.copy(d.ri); c.rj.copy(d.rj); n.normalize(); n.tangents(d.t, c.t)
				}
			}; var d = new b, u = new b, z = new w, g = new w; a.prototype.getContacts = function (a, b, c, e, p, f, l) {
			this.contactPointPool = p; this.frictionEquationPool = l; this.result = e; this.frictionResult = f; e = 0; for (p = a.length; e !== p; e++) {
				f = a[e]; l = b[e]; var x = null; f.material && l.material && (x = c.getContactMaterial(f.material, l.material) || null); for (var k = 0; k < f.shapes.length; k++) {
					f.quaternion.mult(f.shapeOrientations[k], z); f.quaternion.vmult(f.shapeOffsets[k],
						d); d.vadd(f.position, d); for (var h = f.shapes[k], n = 0; n < l.shapes.length; n++) {
							l.quaternion.mult(l.shapeOrientations[n], g); l.quaternion.vmult(l.shapeOffsets[n], u); u.vadd(l.position, u); var D = l.shapes[n]; if (!(d.distanceTo(u) > h.boundingSphereRadius + D.boundingSphereRadius)) {
								var q = null; h.material && D.material && (q = c.getContactMaterial(h.material, D.material) || null); this.currentContactMaterial = q || x || c.defaultContactMaterial; (q = this[h.type | D.type]) && (h.type < D.type ? q.call(this, h, D, d, u, z, g, f, l, h, D) : q.call(this, D, h,
									u, d, g, z, l, f, h, D))
							}
						}
				}
			}
			}; a.prototype[t.types.BOX | t.types.BOX] = a.prototype.boxBox = function (a, b, d, c, e, p, f, g) { a.convexPolyhedronRepresentation.material = a.material; b.convexPolyhedronRepresentation.material = b.material; a.convexPolyhedronRepresentation.collisionResponse = a.collisionResponse; b.convexPolyhedronRepresentation.collisionResponse = b.collisionResponse; this.convexConvex(a.convexPolyhedronRepresentation, b.convexPolyhedronRepresentation, d, c, e, p, f, g, a, b) }; a.prototype[t.types.BOX | t.types.CONVEXPOLYHEDRON] =
				a.prototype.boxConvex = function (a, b, d, c, e, p, f, g) { a.convexPolyhedronRepresentation.material = a.material; a.convexPolyhedronRepresentation.collisionResponse = a.collisionResponse; this.convexConvex(a.convexPolyhedronRepresentation, b, d, c, e, p, f, g, a, b) }; a.prototype[t.types.BOX | t.types.PARTICLE] = a.prototype.boxParticle = function (a, b, d, c, e, p, f, g) {
					a.convexPolyhedronRepresentation.material = a.material; a.convexPolyhedronRepresentation.collisionResponse = a.collisionResponse; this.convexParticle(a.convexPolyhedronRepresentation,
						b, d, c, e, p, f, g, a, b)
				}; a.prototype[t.types.SPHERE] = a.prototype.sphereSphere = function (a, b, d, c, e, p, f, g) { e = this.createContactEquation(f, g, a, b); c.vsub(d, e.ni); e.ni.normalize(); e.ri.copy(e.ni); e.rj.copy(e.ni); e.ri.mult(a.radius, e.ri); e.rj.mult(-b.radius, e.rj); e.ri.vadd(d, e.ri); e.ri.vsub(f.position, e.ri); e.rj.vadd(c, e.rj); e.rj.vsub(g.position, e.rj); this.result.push(e); this.createFrictionEquationsFromContact(e, this.frictionResult) }; var C = new b, Q = new b, R = new b; a.prototype[t.types.PLANE | t.types.TRIMESH] = a.prototype.planeTrimesh =
					function (a, d, c, e, p, f, g, l) { var k = new b; C.set(0, 0, 1); p.vmult(C, C); for (p = 0; p < d.vertices.length / 3; p++) { d.getVertex(p, k); var x = new b; x.copy(k); y.pointToWorldFrame(e, f, x, k); x = Q; k.vsub(c, x); if (0 >= C.dot(x)) { var h = this.createContactEquation(g, l, a, d); h.ni.copy(C); var u = R; C.scale(x.dot(C), u); k.vsub(u, u); h.ri.copy(u); h.ri.vsub(g.position, h.ri); h.rj.copy(k); h.rj.vsub(l.position, h.rj); this.result.push(h); this.createFrictionEquationsFromContact(h, this.frictionResult) } } }; var S = new b, O = new b; new b; var K = new b, G = new b,
						E = new b, P = new b, B = new b, L = new b, J = new b, T = new b, aa = new b, ia = new b, U = new b, la = new h, W = []; a.prototype[t.types.SPHERE | t.types.TRIMESH] = a.prototype.sphereTrimesh = function (a, b, d, c, e, p, f, g) {
							y.pointToLocalFrame(c, p, d, J); e = a.radius; la.lowerBound.set(J.x - e, J.y - e, J.z - e); la.upperBound.set(J.x + e, J.y + e, J.z + e); b.getTrianglesInAABB(la, W); var l = a.radius * a.radius; for (e = 0; e < W.length; e++)for (var k = 0; 3 > k; k++)if (b.getVertex(b.indices[3 * W[e] + k], K), K.vsub(J, O), O.norm2() <= l) {
								G.copy(K); y.pointToWorldFrame(c, p, G, K); K.vsub(d,
									O); var x = this.createContactEquation(f, g, a, b); x.ni.copy(O); x.ni.normalize(); x.ri.copy(x.ni); x.ri.scale(a.radius, x.ri); x.ri.vadd(d, x.ri); x.ri.vsub(f.position, x.ri); x.rj.copy(K); x.rj.vsub(g.position, x.rj); this.result.push(x); this.createFrictionEquationsFromContact(x, this.frictionResult)
							} for (e = 0; e < W.length; e++)for (k = 0; 3 > k; k++)b.getVertex(b.indices[3 * W[e] + k], E), b.getVertex(b.indices[3 * W[e] + (k + 1) % 3], P), P.vsub(E, B), J.vsub(P, T), d = T.dot(B), J.vsub(E, T), x = T.dot(B), 0 < x && 0 > d && (J.vsub(E, T), L.copy(B), L.normalize(),
								x = T.dot(L), L.scale(x, T), T.vadd(E, T), d = T.distanceTo(J), d < a.radius && (x = this.createContactEquation(f, g, a, b), T.vsub(J, x.ni), x.ni.normalize(), x.ni.scale(a.radius, x.ri), y.pointToWorldFrame(c, p, T, T), T.vsub(g.position, x.rj), y.vectorToWorldFrame(p, x.ni, x.ni), y.vectorToWorldFrame(p, x.ri, x.ri), this.result.push(x), this.createFrictionEquationsFromContact(x, this.frictionResult))); e = 0; for (k = W.length; e !== k; e++)b.getTriangleVertices(W[e], aa, ia, U), b.getNormal(W[e], S), J.vsub(aa, T), d = T.dot(S), S.scale(d, T), J.vsub(T, T),
									d = T.distanceTo(J), r.pointInTriangle(T, aa, ia, U) && d < a.radius && (x = this.createContactEquation(f, g, a, b), T.vsub(J, x.ni), x.ni.normalize(), x.ni.scale(a.radius, x.ri), y.pointToWorldFrame(c, p, T, T), T.vsub(g.position, x.rj), y.vectorToWorldFrame(p, x.ni, x.ni), y.vectorToWorldFrame(p, x.ri, x.ri), this.result.push(x), this.createFrictionEquationsFromContact(x, this.frictionResult)); W.length = 0
						}; var V = new b, Z = new b; a.prototype[t.types.SPHERE | t.types.PLANE] = a.prototype.spherePlane = function (a, b, d, c, e, p, f, g) {
							b = this.createContactEquation(f,
								g, a, b); b.ni.set(0, 0, 1); p.vmult(b.ni, b.ni); b.ni.negate(b.ni); b.ni.normalize(); b.ni.mult(a.radius, b.ri); d.vsub(c, V); b.ni.mult(b.ni.dot(V), Z); V.vsub(Z, b.rj); -V.dot(b.ni) <= a.radius && (a = b.ri, p = b.rj, a.vadd(d, a), a.vsub(f.position, a), p.vadd(c, p), p.vsub(g.position, p), this.result.push(b), this.createFrictionEquationsFromContact(b, this.frictionResult))
						}; var ca = new b, ta = new b, ja = new b, da = new b, ya = new b, ma = new b, ua = new b, qa = [new b, new b, new b, new b, new b, new b], wa = new b, X = new b, na = new b, fa = new b; a.prototype[t.types.SPHERE |
							t.types.BOX] = a.prototype.sphereBox = function (a, b, d, c, e, p, f, g) {
								e = this.v3pool; d.vsub(c, da); b.getSideNormals(qa, p); p = a.radius; for (var l = !1, x = null, k = 0, h = 0, u = 0, n = null, z = 0, D = qa.length; z !== D && !1 === l; z++) {
									var q = ya; q.copy(qa[z]); var H = q.norm(); q.normalize(); var v = da.dot(q); if (v < H + p && 0 < v) {
										var r = ma, F = ua; r.copy(qa[(z + 1) % 3]); F.copy(qa[(z + 2) % 3]); var I = r.norm(), t = F.norm(); r.normalize(); F.normalize(); var Y = da.dot(r), ha = da.dot(F); Y < I && Y > -I && ha < t && ha > -t && (v = Math.abs(v - H - p), null === n || v < n) && (n = v, h = Y, u = ha, x = H, X.copy(q),
											na.copy(r), fa.copy(F), k++)
									}
								} k && (l = !0, k = this.createContactEquation(f, g, a, b), X.mult(-p, k.ri), k.ni.copy(X), k.ni.negate(k.ni), X.mult(x, X), na.mult(h, na), X.vadd(na, X), fa.mult(u, fa), X.vadd(fa, k.rj), k.ri.vadd(d, k.ri), k.ri.vsub(f.position, k.ri), k.rj.vadd(c, k.rj), k.rj.vsub(g.position, k.rj), this.result.push(k), this.createFrictionEquationsFromContact(k, this.frictionResult)); v = e.get(); for (x = 0; 2 !== x && !l; x++)for (h = 0; 2 !== h && !l; h++)for (u = 0; 2 !== u && !l; u++)v.set(0, 0, 0), x ? v.vadd(qa[0], v) : v.vsub(qa[0], v), h ? v.vadd(qa[1],
									v) : v.vsub(qa[1], v), u ? v.vadd(qa[2], v) : v.vsub(qa[2], v), c.vadd(v, wa), wa.vsub(d, wa), wa.norm2() < p * p && (l = !0, k = this.createContactEquation(f, g, a, b), k.ri.copy(wa), k.ri.normalize(), k.ni.copy(k.ri), k.ri.mult(p, k.ri), k.rj.copy(v), k.ri.vadd(d, k.ri), k.ri.vsub(f.position, k.ri), k.rj.vadd(c, k.rj), k.rj.vsub(g.position, k.rj), this.result.push(k), this.createFrictionEquationsFromContact(k, this.frictionResult)); e.release(v); n = e.get(); z = e.get(); k = e.get(); D = e.get(); v = e.get(); q = qa.length; for (x = 0; x !== q && !l; x++)for (h = 0; h !==
										q && !l; h++)if (x % 3 !== h % 3) {
											qa[h].cross(qa[x], n); n.normalize(); qa[x].vadd(qa[h], z); k.copy(d); k.vsub(z, k); k.vsub(c, k); H = k.dot(n); n.mult(H, D); for (u = 0; u === x % 3 || u === h % 3;)u++; v.copy(d); v.vsub(D, v); v.vsub(z, v); v.vsub(c, v); H = Math.abs(H); r = v.norm(); H < qa[u].norm() && r < p && (l = !0, u = this.createContactEquation(f, g, a, b), z.vadd(D, u.rj), u.rj.copy(u.rj), v.negate(u.ni), u.ni.normalize(), u.ri.copy(u.rj), u.ri.vadd(c, u.ri), u.ri.vsub(d, u.ri), u.ri.normalize(), u.ri.mult(p, u.ri), u.ri.vadd(d, u.ri), u.ri.vsub(f.position, u.ri), u.rj.vadd(c,
												u.rj), u.rj.vsub(g.position, u.rj), this.result.push(u), this.createFrictionEquationsFromContact(u, this.frictionResult))
										} e.release(n, z, k, D, v)
							}; var p = new b, x = new b, D = new b, H = new b, oa = new b, ba = new b, Ja = new b, sa = new b, ka = new b, l = new b; a.prototype[t.types.SPHERE | t.types.CONVEXPOLYHEDRON] = a.prototype.sphereConvex = function (a, b, d, c, e, f, g, k) {
								e = this.v3pool; d.vsub(c, p); for (var u = b.faceNormals, h = b.faces, n = b.vertices, z = a.radius, q = 0; q !== n.length; q++) {
									var v = oa; f.vmult(n[q], v); c.vadd(v, v); var r = H; v.vsub(d, r); if (r.norm2() <
										z * z) { a = this.createContactEquation(g, k, a, b); a.ri.copy(r); a.ri.normalize(); a.ni.copy(a.ri); a.ri.mult(z, a.ri); v.vsub(c, a.rj); a.ri.vadd(d, a.ri); a.ri.vsub(g.position, a.ri); a.rj.vadd(c, a.rj); a.rj.vsub(k.position, a.rj); this.result.push(a); this.createFrictionEquationsFromContact(a, this.frictionResult); return }
								} q = 0; for (v = h.length; q !== v; q++) {
									r = h[q]; var t = ba; f.vmult(u[q], t); var w = Ja; f.vmult(n[r[0]], w); w.vadd(c, w); var y = sa; t.mult(-z, y); d.vadd(y, y); var C = ka; y.vsub(w, C); y = C.dot(t); C = l; d.vsub(w, C); if (0 > y && 0 < C.dot(t)) {
										w =
										[]; C = 0; for (var Q = r.length; C !== Q; C++) { var F = e.get(); f.vmult(n[r[C]], F); c.vadd(F, F); w.push(F) } a: { C = w; Q = t; F = d; for (var I = null, pa = C.length, Y = 0; Y !== pa; Y++) { var ha = C[Y], Ha = ca; C[(Y + 1) % pa].vsub(ha, Ha); var Ca = ta; Ha.cross(Q, Ca); Ha = ja; F.vsub(ha, Ha); ha = Ca.dot(Ha); if (null === I || 0 < ha && !0 === I || 0 >= ha && !1 === I) null === I && (I = 0 < ha); else { C = !1; break a } } C = !0 } if (C) {
											a = this.createContactEquation(g, k, a, b); t.mult(-z, a.ri); t.negate(a.ni); b = e.get(); t.mult(-y, b); f = e.get(); t.mult(-z, f); d.vsub(c, a.rj); a.rj.vadd(f, a.rj); a.rj.vadd(b,
												a.rj); a.rj.vadd(c, a.rj); a.rj.vsub(k.position, a.rj); a.ri.vadd(d, a.ri); a.ri.vsub(g.position, a.ri); e.release(b); e.release(f); this.result.push(a); this.createFrictionEquationsFromContact(a, this.frictionResult); C = 0; for (r = w.length; C !== r; C++)e.release(w[C]); break
										} else for (C = 0; C !== r.length; C++) {
											t = e.get(); y = e.get(); f.vmult(n[r[(C + 1) % r.length]], t); f.vmult(n[r[(C + 2) % r.length]], y); c.vadd(t, t); c.vadd(y, y); pa = x; y.vsub(t, pa); I = D; pa.unit(I); Q = e.get(); F = e.get(); d.vsub(t, F); Y = F.dot(I); I.mult(Y, Q); Q.vadd(t, Q); I = e.get();
											Q.vsub(d, I); if (0 < Y && Y * Y < pa.norm2() && I.norm2() < z * z) { a = this.createContactEquation(g, k, a, b); Q.vsub(c, a.rj); Q.vsub(d, a.ni); a.ni.normalize(); a.ni.mult(z, a.ri); a.rj.vadd(c, a.rj); a.rj.vsub(k.position, a.rj); a.ri.vadd(d, a.ri); a.ri.vsub(g.position, a.ri); this.result.push(a); this.createFrictionEquationsFromContact(a, this.frictionResult); C = 0; for (r = w.length; C !== r; C++)e.release(w[C]); e.release(t); e.release(y); e.release(Q); e.release(I); e.release(F); return } e.release(t); e.release(y); e.release(Q); e.release(I); e.release(F)
										} C =
											0; for (r = w.length; C !== r; C++)e.release(w[C])
									}
								}
							}; new b; new b; a.prototype[t.types.PLANE | t.types.BOX] = a.prototype.planeBox = function (a, b, d, c, e, p, f, g) { b.convexPolyhedronRepresentation.material = b.material; b.convexPolyhedronRepresentation.collisionResponse = b.collisionResponse; this.planeConvex(a, b.convexPolyhedronRepresentation, d, c, e, p, f, g) }; var Ga = new b, Fa = new b, Wa = new b, ab = new b; a.prototype[t.types.PLANE | t.types.CONVEXPOLYHEDRON] = a.prototype.planeConvex = function (a, b, d, c, e, p, f, g) {
								Fa.set(0, 0, 1); e.vmult(Fa,
									Fa); for (var l = e = 0; l !== b.vertices.length; l++)if (Ga.copy(b.vertices[l]), p.vmult(Ga, Ga), c.vadd(Ga, Ga), Ga.vsub(d, Wa), 0 >= Fa.dot(Wa)) { var k = this.createContactEquation(f, g, a, b), x = ab; Fa.mult(Fa.dot(Wa), x); Ga.vsub(x, x); x.vsub(d, k.ri); k.ni.copy(Fa); Ga.vsub(c, k.rj); k.ri.vadd(d, k.ri); k.ri.vsub(f.position, k.ri); k.rj.vadd(c, k.rj); k.rj.vsub(g.position, k.rj); this.result.push(k); e++; this.enableFrictionReduction || this.createFrictionEquationsFromContact(k, this.frictionResult) } this.enableFrictionReduction && e && this.createFrictionFromAverage(e)
							};
			var La = new b, za = new b; a.prototype[t.types.CONVEXPOLYHEDRON] = a.prototype.convexConvex = function (a, b, d, c, e, p, f, g, l, k, x, u) {
				if (!(d.distanceTo(c) > a.boundingSphereRadius + b.boundingSphereRadius) && a.findSeparatingAxis(b, d, e, c, p, La, x, u)) {
					x = []; a.clipAgainstHull(d, e, b, c, p, La, -100, 100, x); for (p = e = 0; p !== x.length; p++) {
						u = this.createContactEquation(f, g, a, b, l, k); var h = u.ri, n = u.rj; La.negate(u.ni); x[p].normal.negate(za); za.mult(x[p].depth, za); x[p].point.vadd(za, h); n.copy(x[p].point); h.vsub(d, h); n.vsub(c, n); h.vadd(d, h);
						h.vsub(f.position, h); n.vadd(c, n); n.vsub(g.position, n); this.result.push(u); e++; this.enableFrictionReduction || this.createFrictionEquationsFromContact(u, this.frictionResult)
					} this.enableFrictionReduction && e && this.createFrictionFromAverage(e)
				}
			}; var Ma = new b, Xa = new b, Qa = new b; a.prototype[t.types.PLANE | t.types.PARTICLE] = a.prototype.planeParticle = function (a, b, d, c, e, p, f, g) {
				Ma.set(0, 0, 1); f.quaternion.vmult(Ma, Ma); c.vsub(f.position, Xa); 0 >= Ma.dot(Xa) && (a = this.createContactEquation(g, f, b, a), a.ni.copy(Ma), a.ni.negate(a.ni),
					a.ri.set(0, 0, 0), Ma.mult(Ma.dot(c), Qa), c.vsub(Qa, Qa), a.rj.copy(Qa), this.result.push(a), this.createFrictionEquationsFromContact(a, this.frictionResult))
			}; var va = new b; a.prototype[t.types.PARTICLE | t.types.SPHERE] = a.prototype.sphereParticle = function (a, b, d, c, e, p, f, g) {
				va.set(0, 0, 1); c.vsub(d, va); va.norm2() <= a.radius * a.radius && (b = this.createContactEquation(g, f, b, a), va.normalize(), b.rj.copy(va), b.rj.mult(a.radius, b.rj), b.ni.copy(va), b.ni.negate(b.ni), b.ri.set(0, 0, 0), this.result.push(b), this.createFrictionEquationsFromContact(b,
					this.frictionResult))
			}; var Ya = new w, Na = new b; new b; var Aa = new b, eb = new b, ea = new b; a.prototype[t.types.PARTICLE | t.types.CONVEXPOLYHEDRON] = a.prototype.convexParticle = function (a, b, d, c, e, p, f, g) {
				var l = -1; p = null; var k = 0; Na.copy(c); Na.vsub(d, Na); e.conjugate(Ya); Ya.vmult(Na, Na); if (a.pointIsInside(Na)) {
				a.worldVerticesNeedsUpdate && a.computeWorldVertices(d, e); a.worldFaceNormalsNeedsUpdate && a.computeWorldFaceNormals(e); e = 0; for (var x = a.faces.length; e !== x; e++) {
					var u = a.worldFaceNormals[e]; c.vsub(a.worldVertices[a.faces[e][0]],
						eb); var h = -u.dot(eb); if (null === p || Math.abs(h) < Math.abs(p)) p = h, l = e, Aa.copy(u), k++
				} -1 !== l ? (a = this.createContactEquation(g, f, b, a), Aa.mult(p, ea), ea.vadd(c, ea), ea.vsub(d, ea), a.rj.copy(ea), Aa.negate(a.ni), a.ri.set(0, 0, 0), b = a.ri, p = a.rj, b.vadd(c, b), b.vsub(g.position, b), p.vadd(d, p), p.vsub(f.position, p), this.result.push(a), this.createFrictionEquationsFromContact(a, this.frictionResult)) : console.warn("Point found inside convex, but did not find penetrating face!")
				}
			}; a.prototype[t.types.BOX | t.types.HEIGHTFIELD] =
				a.prototype.boxHeightfield = function (a, b, d, c, e, p, f, g) { a.convexPolyhedronRepresentation.material = a.material; a.convexPolyhedronRepresentation.collisionResponse = a.collisionResponse; this.convexHeightfield(a.convexPolyhedronRepresentation, b, d, c, e, p, f, g) }; var Ra = new b, Ea = new b, Ia = [0]; a.prototype[t.types.CONVEXPOLYHEDRON | t.types.HEIGHTFIELD] = a.prototype.convexHeightfield = function (a, b, d, c, e, p, f, g) {
					var l = b.data, k = b.elementSize, x = a.boundingSphereRadius; y.pointToLocalFrame(c, p, d, Ra); var u = Math.floor((Ra.x - x) /
						k) - 1, h = Math.ceil((Ra.x + x) / k) + 1, n = Math.floor((Ra.y - x) / k) - 1; k = Math.ceil((Ra.y + x) / k) + 1; if (!(0 > h || 0 > k || u > l.length || n > l[0].length)) {
						0 > u && (u = 0); 0 > h && (h = 0); 0 > n && (n = 0); 0 > k && (k = 0); u >= l.length && (u = l.length - 1); h >= l.length && (h = l.length - 1); k >= l[0].length && (k = l[0].length - 1); n >= l[0].length && (n = l[0].length - 1); l = []; b.getRectMinMax(u, n, h, k, l); var z = l[0]; if (!(Ra.z - x > l[1] || Ra.z + x < z)) for (x = u; x < h; x++)for (u = n; u < k; u++)b.getConvexTrianglePillar(x, u, !1), y.pointToWorldFrame(c, p, b.pillarOffset, Ea), d.distanceTo(Ea) < b.pillarConvex.boundingSphereRadius +
							a.boundingSphereRadius && this.convexConvex(a, b.pillarConvex, d, Ea, e, p, f, g, null, null, Ia, null), b.getConvexTrianglePillar(x, u, !0), y.pointToWorldFrame(c, p, b.pillarOffset, Ea), d.distanceTo(Ea) < b.pillarConvex.boundingSphereRadius + a.boundingSphereRadius && this.convexConvex(a, b.pillarConvex, d, Ea, e, p, f, g, null, null, Ia, null)
						}
				}; var ra = new b, M = new b; a.prototype[t.types.SPHERE | t.types.HEIGHTFIELD] = a.prototype.sphereHeightfield = function (a, b, d, c, e, p, f, g) {
					var l = b.data, k = a.radius, x = b.elementSize; y.pointToLocalFrame(c,
						p, d, ra); var u = Math.floor((ra.x - k) / x) - 1, h = Math.ceil((ra.x + k) / x) + 1, n = Math.floor((ra.y - k) / x) - 1; x = Math.ceil((ra.y + k) / x) + 1; if (!(0 > h || 0 > x || u > l.length || x > l[0].length)) {
						0 > u && (u = 0); 0 > h && (h = 0); 0 > n && (n = 0); 0 > x && (x = 0); u >= l.length && (u = l.length - 1); h >= l.length && (h = l.length - 1); x >= l[0].length && (x = l[0].length - 1); n >= l[0].length && (n = l[0].length - 1); l = []; b.getRectMinMax(u, n, h, x, l); var z = l[0]; if (!(ra.z - k > l[1] || ra.z + k < z)) for (k = this.result; u < h; u++)for (l = n; l < x; l++)if (z = k.length, b.getConvexTrianglePillar(u, l, !1), y.pointToWorldFrame(c,
							p, b.pillarOffset, M), d.distanceTo(M) < b.pillarConvex.boundingSphereRadius + a.boundingSphereRadius && this.sphereConvex(a, b.pillarConvex, d, M, e, p, f, g), b.getConvexTrianglePillar(u, l, !0), y.pointToWorldFrame(c, p, b.pillarOffset, M), d.distanceTo(M) < b.pillarConvex.boundingSphereRadius + a.boundingSphereRadius && this.sphereConvex(a, b.pillarConvex, d, M, e, p, f, g), 2 < k.length - z) return
						}
				}
		}, {
			"../collision/AABB": 3, "../collision/Ray": 9, "../equations/ContactEquation": 19, "../equations/FrictionEquation": 21, "../math/Quaternion": 28,
			"../math/Transform": 29, "../math/Vec3": 30, "../shapes/ConvexPolyhedron": 38, "../shapes/Shape": 43, "../solver/Solver": 47, "../utils/Vec3Pool": 54
		}], 56: [function (c, h, t) {
			function a() {
				w.apply(this); this.dt = -1; this.allowSleep = !1; this.contacts = []; this.frictionEquations = []; this.quatNormalizeSkip = 0; this.quatNormalizeFast = !1; this.stepnumber = this.time = 0; this.default_dt = 1 / 60; this.nextId = 0; this.gravity = new r; this.broadphase = new u; this.bodies = []; this.solver = new b; this.constraints = []; this.narrowphase = new y(this); this.collisionMatrix =
					new e; this.collisionMatrixPrevious = new e; this.materials = []; this.contactmaterials = []; this.contactMaterialTable = new v; this.defaultMaterial = new q("default"); this.defaultContactMaterial = new k(this.defaultMaterial, this.defaultMaterial, { friction: .3, restitution: 0 }); this.doProfiling = !1; this.profile = { solve: 0, makeContactConstraints: 0, broadphase: 0, integrate: 0, narrowphase: 0 }; this.subsystems = []; this.addBodyEvent = { type: "addBody", body: null }; this.removeBodyEvent = { type: "removeBody", body: null }
			} h.exports = a; c("../shapes/Shape");
			var r = c("../math/Vec3"); h = c("../math/Quaternion"); var b = c("../solver/GSSolver"); c("../utils/Vec3Pool"); c("../equations/ContactEquation"); c("../equations/FrictionEquation"); var y = c("./Narrowphase"), w = c("../utils/EventTarget"), e = c("../collision/ArrayCollisionMatrix"), q = c("../material/Material"), k = c("../material/ContactMaterial"), n = c("../objects/Body"), v = c("../utils/TupleDictionary"), f = c("../collision/RaycastResult"); t = c("../collision/AABB"); var d = c("../collision/Ray"), u = c("../collision/NaiveBroadphase");
			a.prototype = new w; new t; var z = new d; a.prototype.getContactMaterial = function (a, b) { return this.contactMaterialTable.get(a.id, b.id) }; a.prototype.numObjects = function () { return this.bodies.length }; a.prototype.collisionMatrixTick = function () { var a = this.collisionMatrixPrevious; this.collisionMatrixPrevious = this.collisionMatrix; this.collisionMatrix = a; this.collisionMatrix.reset() }; a.prototype.add = a.prototype.addBody = function (a) {
			-1 === this.bodies.indexOf(a) && (a.index = this.bodies.length, this.bodies.push(a), a.world =
				this, a.initPosition.copy(a.position), a.initVelocity.copy(a.velocity), a.timeLastSleepy = this.time, a instanceof n && (a.initAngularVelocity.copy(a.angularVelocity), a.initQuaternion.copy(a.quaternion)), this.collisionMatrix.setNumObjects(this.bodies.length), this.addBodyEvent.body = a, this.dispatchEvent(this.addBodyEvent))
			}; a.prototype.addConstraint = function (a) { this.constraints.push(a) }; a.prototype.removeConstraint = function (a) { a = this.constraints.indexOf(a); -1 !== a && this.constraints.splice(a, 1) }; a.prototype.rayTest =
				function (a, b, d) { d instanceof f ? this.raycastClosest(a, b, { skipBackfaces: !0 }, d) : this.raycastAll(a, b, { skipBackfaces: !0 }, d) }; a.prototype.raycastAll = function (a, b, c, e) { c.mode = d.ALL; c.from = a; c.to = b; c.callback = e; return z.intersectWorld(this, c) }; a.prototype.raycastAny = function (a, b, c, e) { c.mode = d.ANY; c.from = a; c.to = b; c.result = e; return z.intersectWorld(this, c) }; a.prototype.raycastClosest = function (a, b, c, e) { c.mode = d.CLOSEST; c.from = a; c.to = b; c.result = e; return z.intersectWorld(this, c) }; a.prototype.remove = function (a) {
				a.world =
					null; var b = this.bodies.length - 1, d = this.bodies, c = d.indexOf(a); if (-1 !== c) { d.splice(c, 1); for (c = 0; c !== d.length; c++)d[c].index = c; this.collisionMatrix.setNumObjects(b); this.removeBodyEvent.body = a; this.dispatchEvent(this.removeBodyEvent) }
				}; a.prototype.removeBody = a.prototype.remove; a.prototype.addMaterial = function (a) { this.materials.push(a) }; a.prototype.addContactMaterial = function (a) { this.contactmaterials.push(a); this.contactMaterialTable.set(a.materials[0].id, a.materials[1].id, a) }; "undefined" === typeof performance &&
					(performance = {}); if (!performance.now) { var g = Date.now(); performance.timing && performance.timing.navigationStart && (g = performance.timing.navigationStart); performance.now = function () { return Date.now() - g } } var C = new r; a.prototype.step = function (a, b, d) {
						d = d || 10; b = b || 0; if (0 === b) this.internalStep(a), this.time += a; else {
							var c = Math.floor((this.time + b) / a) - Math.floor(this.time / a); c = Math.min(c, d); d = performance.now(); for (var e = 0; e !== c && !(this.internalStep(a), performance.now() - d > 1E3 * a); e++); this.time += b; a = this.time % a /
								a; b = this.bodies; for (c = 0; c !== b.length; c++)d = b[c], d.type !== n.STATIC && d.sleepState !== n.SLEEPING ? (d.position.vsub(d.previousPosition, C), C.scale(a, C), d.position.vadd(C, d.interpolatedPosition)) : (d.interpolatedPosition.copy(d.position), d.interpolatedQuaternion.copy(d.quaternion))
						}
					}; var Q = { type: "postStep" }, R = { type: "preStep" }, S = { type: "collide", body: null, contact: null }, O = [], K = [], G = [], E = []; new r; new r; new r; new r; new r; new r; new r; new r; new r; new h; var P = new h, B = new h, L = new r; a.prototype.internalStep = function (a) {
					this.dt =
						a; var b = this.contacts, d = this.numObjects(), c = this.bodies, e = this.solver, f = this.gravity, g = this.doProfiling, k = this.profile, u = n.DYNAMIC, h, z = this.constraints; f.norm(); var q = f.x, v = f.y, r = f.z; g && (h = performance.now()); for (f = 0; f !== d; f++) { var t = c[f]; if (t.type & u) { var w = t.force; t = t.mass; w.x += t * q; w.y += t * v; w.z += t * r } } f = 0; for (t = this.subsystems.length; f !== t; f++)this.subsystems[f].update(); g && (h = performance.now()); G.length = 0; E.length = 0; this.broadphase.collisionPairs(this, G, E); g && (k.broadphase = performance.now() - h); t =
							z.length; for (f = 0; f !== t; f++)if (q = z[f], !q.collideConnected) for (v = G.length - 1; 0 <= v; --v)if (q.bodyA === G[v] && q.bodyB === E[v] || q.bodyB === G[v] && q.bodyA === E[v]) G.splice(v, 1), E.splice(v, 1); this.collisionMatrixTick(); g && (h = performance.now()); t = b.length; for (f = 0; f !== t; f++)O.push(b[f]); b.length = 0; t = this.frictionEquations.length; for (f = 0; f !== t; f++)K.push(this.frictionEquations[f]); this.frictionEquations.length = 0; this.narrowphase.getContacts(G, E, this, b, O, this.frictionEquations, K); g && (k.narrowphase = performance.now() -
								h); g && (h = performance.now()); for (f = 0; f < this.frictionEquations.length; f++)e.addEquation(this.frictionEquations[f]); f = b.length; for (v = 0; v !== f; v++)q = b[v], t = q.bi, r = q.bj, t.material && r.material && this.getContactMaterial(t.material, r.material), t.material && r.material && 0 <= t.material.restitution && 0 <= r.material.restitution && (q.restitution = t.material.restitution * r.material.restitution), e.addEquation(q), t.allowSleep && t.type === n.DYNAMIC && t.sleepState === n.SLEEPING && r.sleepState === n.AWAKE && r.type !== n.STATIC && r.velocity.norm2() +
									r.angularVelocity.norm2() >= 2 * Math.pow(r.sleepSpeedLimit, 2) && (t._wakeUpAfterNarrowphase = !0), r.allowSleep && r.type === n.DYNAMIC && r.sleepState === n.SLEEPING && t.sleepState === n.AWAKE && t.type !== n.STATIC && t.velocity.norm2() + t.angularVelocity.norm2() >= 2 * Math.pow(t.sleepSpeedLimit, 2) && (r._wakeUpAfterNarrowphase = !0), this.collisionMatrix.set(t, r, !0), this.collisionMatrixPrevious.get(t, r) || (S.body = r, S.contact = q, t.dispatchEvent(S), S.body = t, r.dispatchEvent(S)); g && (k.makeContactConstraints = performance.now() - h, h = performance.now());
						for (f = 0; f !== d; f++)t = c[f], t._wakeUpAfterNarrowphase && (t.wakeUp(), t._wakeUpAfterNarrowphase = !1); t = z.length; for (f = 0; f !== t; f++)for (q = z[f], q.update(), v = 0, b = q.equations.length; v !== b; v++)e.addEquation(q.equations[v]); e.solve(a, this); g && (k.solve = performance.now() - h); e.removeAllEquations(); e = Math.pow; for (f = 0; f !== d; f++)if (t = c[f], t.type & u && (z = e(1 - t.linearDamping, a), b = t.velocity, b.mult(z, b), z = t.angularVelocity)) b = e(1 - t.angularDamping, a), z.mult(b, z); this.dispatchEvent(R); for (f = 0; f !== d; f++)t = c[f], t.preStep && t.preStep.call(t);
						g && (h = performance.now()); u = n.DYNAMIC | n.KINEMATIC; e = 0 === this.stepnumber % (this.quatNormalizeSkip + 1); z = this.quatNormalizeFast; b = .5 * a; for (f = 0; f !== d; f++)if (t = c[f], q = t.force, v = t.torque, t.type & u && t.sleepState !== n.SLEEPING) {
							r = t.velocity; w = t.angularVelocity; var C = t.position, y = t.quaternion, J = t.invMass, na = t.invInertiaWorld; r.x += q.x * J * a; r.y += q.y * J * a; r.z += q.z * J * a; t.angularVelocity && (na.vmult(v, L), L.mult(a, L), L.vadd(w, w)); C.x += r.x * a; C.y += r.y * a; C.z += r.z * a; t.angularVelocity && (P.set(w.x, w.y, w.z, 0), P.mult(y, B), y.x +=
								b * B.x, y.y += b * B.y, y.z += b * B.z, y.w += b * B.w, e && (z ? y.normalizeFast() : y.normalize())); t.aabb && (t.aabbNeedsUpdate = !0); t.updateInertiaWorld && t.updateInertiaWorld()
						} this.clearForces(); this.broadphase.dirty = !0; g && (k.integrate = performance.now() - h); this.time += a; this.stepnumber += 1; this.dispatchEvent(Q); for (f = 0; f !== d; f++)t = c[f], (a = t.postStep) && a.call(t); if (this.allowSleep) for (f = 0; f !== d; f++)c[f].sleepTick(this.time)
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
(function (m, c) { "object" === typeof module && "object" === typeof module.exports ? module.exports = m.document ? c(m, !0) : function (h) { if (!h.document) throw Error("jQuery requires a window with a document"); return c(h) } : c(m) })("undefined" !== typeof window ? window : this, function (m, c) {
	function h(a, b) { b = b || X; var d = b.createElement("script"); d.text = a; b.head.appendChild(d).parentNode.removeChild(d) } function t(a) {
		var b = !!a && "length" in a && a.length, d = l.type(a); return "function" === d || l.isWindow(a) ? !1 : "array" === d || 0 === b || "number" ===
			typeof b && 0 < b && b - 1 in a
	} function a(a, b, d) { if (l.isFunction(b)) return l.grep(a, function (a, c) { return !!b.call(a, c, a) !== d }); if (b.nodeType) return l.grep(a, function (a) { return a === b !== d }); if ("string" === typeof b) { if (va.test(b)) return l.filter(b, a, d); b = l.filter(b, a) } return l.grep(a, function (a) { return -1 < D.call(b, a) !== d && 1 === a.nodeType }) } function r(a, b) { for (; (a = a[b]) && 1 !== a.nodeType;); return a } function b(a) { var b = {}; l.each(a.match(ea) || [], function (a, d) { b[d] = !0 }); return b } function y(a) { return a } function w(a) {
		throw a;
	} function e(a, b, d) { var c; try { a && l.isFunction(c = a.promise) ? c.call(a).done(b).fail(d) : a && l.isFunction(c = a.then) ? c.call(a, b, d) : b.call(void 0, a) } catch (Mb) { d.call(void 0, Mb) } } function q() { X.removeEventListener("DOMContentLoaded", q); m.removeEventListener("load", q); l.ready() } function k() { this.expando = l.expando + k.uid++ } function n(a, b, d) {
		if (void 0 === d && 1 === a.nodeType) if (d = "data-" + b.replace(fb, "-$&").toLowerCase(), d = a.getAttribute(d), "string" === typeof d) {
			try {
				d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d +
					"" === d ? +d : Oa.test(d) ? JSON.parse(d) : d
			} catch (ec) { } Da.set(a, b, d)
		} else d = void 0; return d
	} function v(a, b, d, c) { var A = 1, e = 20, p = c ? function () { return c.cur() } : function () { return l.css(a, b, "") }, f = p(), g = d && d[3] || (l.cssNumber[b] ? "" : "px"), Ba = (l.cssNumber[b] || "px" !== g && +f) && Za.exec(l.css(a, b)); if (Ba && Ba[3] !== g) { g = g || Ba[3]; d = d || []; Ba = +f || 1; do A = A || ".5", Ba /= A, l.style(a, b, Ba + g); while (A !== (A = p() / f) && 1 !== A && --e) } if (d) { Ba = +Ba || +f || 0; var k = d[1] ? Ba + (d[1] + 1) * d[2] : +d[2]; c && (c.unit = g, c.start = Ba, c.end = k) } return k } function f(a,
		b) { for (var d, c, A = [], e = 0, p = a.length; e < p; e++)if (c = a[e], c.style) if (d = c.style.display, b) { if ("none" === d && (A[e] = M.get(c, "display") || null, A[e] || (c.style.display = "")), "" === c.style.display && gb(c)) { d = e; var f = c.ownerDocument; c = c.nodeName; var g = ib[c]; g || (f = f.body.appendChild(f.createElement(c)), g = l.css(f, "display"), f.parentNode.removeChild(f), "none" === g && (g = "block"), ib[c] = g); f = g; A[d] = f } } else "none" !== d && (A[e] = "none", M.set(c, "display", d)); for (e = 0; e < p; e++)null != A[e] && (a[e].style.display = A[e]); return a } function d(a,
			b) { var d = "undefined" !== typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" !== typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : []; return void 0 === b || b && l.nodeName(a, b) ? l.merge([a], d) : d } function u(a, b) { for (var d = 0, c = a.length; d < c; d++)M.set(a[d], "globalEval", !b || M.get(b[d], "globalEval")) } function z(a, b, c, e, p) {
				for (var A, f, g, Ba = b.createDocumentFragment(), k = [], x = 0, h = a.length; x < h; x++)if ((A = a[x]) || 0 === A) if ("object" === l.type(A)) l.merge(k, A.nodeType ? [A] : A); else if (vb.test(A)) {
					f = f || Ba.appendChild(b.createElement("div"));
					g = (kb.exec(A) || ["", ""])[1].toLowerCase(); g = Ka[g] || Ka._default; f.innerHTML = g[1] + l.htmlPrefilter(A) + g[2]; for (g = g[0]; g--;)f = f.lastChild; l.merge(k, f.childNodes); f = Ba.firstChild; f.textContent = ""
				} else k.push(b.createTextNode(A)); Ba.textContent = ""; for (x = 0; A = k[x++];)if (e && -1 < l.inArray(A, e)) p && p.push(A); else if (a = l.contains(A.ownerDocument, A), f = d(Ba.appendChild(A), "script"), a && u(f), c) for (g = 0; A = f[g++];)$a.test(A.type || "") && c.push(A); return Ba
			} function g() { return !0 } function C() { return !1 } function Q() { try { return X.activeElement } catch (A) { } }
	function R(a, b, d, c, e, f) { var A; if ("object" === typeof b) { "string" !== typeof d && (c = c || d, d = void 0); for (A in b) R(a, A, d, c, b[A], f); return a } null == c && null == e ? (e = d, c = d = void 0) : null == e && ("string" === typeof d ? (e = c, c = void 0) : (e = c, c = d, d = void 0)); if (!1 === e) e = C; else if (!e) return a; if (1 === f) { var p = e; e = function (a) { l().off(a); return p.apply(this, arguments) }; e.guid = p.guid || (p.guid = l.guid++) } return a.each(function () { l.event.add(this, b, e, c, d) }) } function S(a, b) {
		return l.nodeName(a, "table") && l.nodeName(11 !== b.nodeType ? b : b.firstChild,
			"tr") ? a.getElementsByTagName("tbody")[0] || a : a
	} function O(a) { a.type = (null !== a.getAttribute("type")) + "/" + a.type; return a } function K(a) { var b = I.exec(a.type); b ? a.type = b[1] : a.removeAttribute("type"); return a } function G(a, b) { var d; if (1 === b.nodeType) { if (M.hasData(a)) { var c = M.access(a); var e = M.set(b, c); if (c = c.events) for (A in delete e.handle, e.events = {}, c) for (e = 0, d = c[A].length; e < d; e++)l.event.add(b, A, c[A][e]) } if (Da.hasData(a)) { var A = Da.access(a); A = l.extend({}, A); Da.set(b, A) } } } function E(a, b, c, e) {
		b = p.apply([],
			b); var A, f = 0, g = a.length, Ba = g - 1, k = b[0], x = l.isFunction(k); if (x || 1 < g && "string" === typeof k && !ka.checkClone && F.test(k)) return a.each(function (d) { var A = a.eq(d); x && (b[0] = k.call(this, d, A.html())); E(A, b, c, e) }); if (g) {
				var u = z(b, a[0].ownerDocument, !1, a, e); var m = u.firstChild; 1 === u.childNodes.length && (u = m); if (m || e) {
					m = l.map(d(u, "script"), O); for (A = m.length; f < g; f++) { var n = u; f !== Ba && (n = l.clone(n, !0, !0), A && l.merge(m, d(n, "script"))); c.call(a[f], n, f) } if (A) for (u = m[m.length - 1].ownerDocument, l.map(m, K), f = 0; f < A; f++)n = m[f],
						$a.test(n.type || "") && !M.access(n, "globalEval") && l.contains(u, n) && (n.src ? l._evalUrl && l._evalUrl(n.src) : h(n.textContent.replace(pa, ""), u))
				}
			} return a
	} function P(a, b, c) { for (var e = b ? l.filter(b, a) : a, A = 0; null != (b = e[A]); A++)c || 1 !== b.nodeType || l.cleanData(d(b)), b.parentNode && (c && l.contains(b.ownerDocument, b) && u(d(b, "script")), b.parentNode.removeChild(b)); return a } function B(a, b, d) {
		var c = a.style; if (d = d || Ha(a)) {
			var e = d.getPropertyValue(b) || d[b]; "" !== e || l.contains(a.ownerDocument, a) || (e = l.style(a, b)); if (!ka.pixelMarginRight() &&
				ha.test(e) && Y.test(b)) { a = c.width; b = c.minWidth; var A = c.maxWidth; c.minWidth = c.maxWidth = c.width = e; e = d.width; c.width = a; c.minWidth = b; c.maxWidth = A }
		} return void 0 !== e ? e + "" : e
	} function L(a, b) { return { get: function () { if (a()) delete this.get; else return (this.get = b).apply(this, arguments) } } } function J(a) { if (a in sb) return a; for (var b = a[0].toUpperCase() + a.slice(1), d = Va.length; d--;)if (a = Va[d] + b, a in sb) return a } function T(a, b, d) { return (a = Za.exec(b)) ? Math.max(0, a[2] - (d || 0)) + (a[3] || "px") : b } function aa(a, b, d, c, e) {
		b = d ===
			(c ? "border" : "content") ? 4 : "width" === b ? 1 : 0; for (var A = 0; 4 > b; b += 2)"margin" === d && (A += l.css(a, d + Pa[b], !0, e)), c ? ("content" === d && (A -= l.css(a, "padding" + Pa[b], !0, e)), "margin" !== d && (A -= l.css(a, "border" + Pa[b] + "Width", !0, e))) : (A += l.css(a, "padding" + Pa[b], !0, e), "padding" !== d && (A += l.css(a, "border" + Pa[b] + "Width", !0, e))); return A
	} function ia(a, b, d) {
		var c, e = !0, A = Ha(a), f = "border-box" === l.css(a, "boxSizing", !1, A); a.getClientRects().length && (c = a.getBoundingClientRect()[b]); if (0 >= c || null == c) {
			c = B(a, b, A); if (0 > c || null == c) c =
				a.style[b]; if (ha.test(c)) return c; e = f && (ka.boxSizingReliable() || c === a.style[b]); c = parseFloat(c) || 0
		} return c + aa(a, b, d || (f ? "border" : "content"), e, A) + "px"
	} function U(a, b, d, c, e) { return new U.prototype.init(a, b, d, c, e) } function la() { Sa && (m.requestAnimationFrame(la), l.fx.tick()) } function W() { m.setTimeout(function () { bb = void 0 }); return bb = l.now() } function V(a, b) { var d = 0, c = { height: a }; for (b = b ? 1 : 0; 4 > d; d += 2 - b) { var e = Pa[d]; c["margin" + e] = c["padding" + e] = a } b && (c.opacity = c.width = a); return c } function Z(a, b, d) {
		for (var c,
			e = (ta.tweeners[b] || []).concat(ta.tweeners["*"]), A = 0, f = e.length; A < f; A++)if (c = e[A].call(d, b, a)) return c
	} function ca(a, b) { var d, c; for (d in a) { var e = l.camelCase(d); var A = b[e]; var f = a[d]; l.isArray(f) && (A = f[1], f = a[d] = f[0]); d !== e && (a[e] = f, delete a[d]); if ((c = l.cssHooks[e]) && "expand" in c) for (d in f = c.expand(f), delete a[e], f) d in a || (a[d] = f[d], b[d] = A); else b[e] = A } } function ta(a, b, d) {
		var c, e = 0, A = ta.prefilters.length, f = l.Deferred().always(function () { delete p.elem }), p = function () {
			if (c) return !1; var b = bb || W(); b =
				Math.max(0, g.startTime + g.duration - b); for (var d = 1 - (b / g.duration || 0), e = 0, A = g.tweens.length; e < A; e++)g.tweens[e].run(d); f.notifyWith(a, [g, d, b]); if (1 > d && A) return b; f.resolveWith(a, [g]); return !1
		}, g = f.promise({
			elem: a, props: l.extend({}, b), opts: l.extend(!0, { specialEasing: {}, easing: l.easing._default }, d), originalProperties: b, originalOptions: d, startTime: bb || W(), duration: d.duration, tweens: [], createTween: function (b, d) { var c = l.Tween(a, g.opts, b, d, g.opts.specialEasing[b] || g.opts.easing); g.tweens.push(c); return c },
			stop: function (b) { var d = 0, e = b ? g.tweens.length : 0; if (c) return this; for (c = !0; d < e; d++)g.tweens[d].run(1); b ? (f.notifyWith(a, [g, 1, 0]), f.resolveWith(a, [g, b])) : f.rejectWith(a, [g, b]); return this }
		}); d = g.props; for (ca(d, g.opts.specialEasing); e < A; e++)if (b = ta.prefilters[e].call(g, a, d, g.opts)) return l.isFunction(b.stop) && (l._queueHooks(g.elem, g.opts.queue).stop = l.proxy(b.stop, b)), b; l.map(d, Z, g); l.isFunction(g.opts.start) && g.opts.start.call(a, g); l.fx.timer(l.extend(p, { elem: a, anim: g, queue: g.opts.queue })); return g.progress(g.opts.progress).done(g.opts.done,
			g.opts.complete).fail(g.opts.fail).always(g.opts.always)
	} function ja(a) { return a.getAttribute && a.getAttribute("class") || "" } function da(a, b, d, c) { var e; if (l.isArray(b)) l.each(b, function (b, e) { d || Pb.test(a) ? c(a, e) : da(a + "[" + ("object" === typeof e && null != e ? b : "") + "]", e, d, c) }); else if (d || "object" !== l.type(b)) c(a, b); else for (e in b) da(a + "[" + e + "]", b[e], d, c) } function ya(a) {
		return function (b, d) {
		"string" !== typeof b && (d = b, b = "*"); var c, e = 0, A = b.toLowerCase().match(ea) || []; if (l.isFunction(d)) for (; c = A[e++];)"+" === c[0] ?
			(c = c.slice(1) || "*", (a[c] = a[c] || []).unshift(d)) : (a[c] = a[c] || []).push(d)
		}
	} function ma(a, b, d, c) { function e(p) { var g; A[p] = !0; l.each(a[p] || [], function (a, p) { var l = p(b, d, c); if ("string" === typeof l && !f && !A[l]) return b.dataTypes.unshift(l), e(l), !1; if (f) return !(g = l) }); return g } var A = {}, f = a === yb; return e(b.dataTypes[0]) || !A["*"] && e("*") } function ua(a, b) { var d, c, e = l.ajaxSettings.flatOptions || {}; for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]); c && l.extend(!0, a, c); return a } function qa(a) {
		return l.isWindow(a) ?
			a : 9 === a.nodeType && a.defaultView
	} var wa = [], X = m.document, na = Object.getPrototypeOf, fa = wa.slice, p = wa.concat, x = wa.push, D = wa.indexOf, H = {}, oa = H.toString, ba = H.hasOwnProperty, Ja = ba.toString, sa = Ja.call(Object), ka = {}, l = function (a, b) { return new l.fn.init(a, b) }, Ga = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, Fa = /^-ms-/, Wa = /-([a-z])/g, ab = function (a, b) { return b.toUpperCase() }; l.fn = l.prototype = {
		jquery: "3.1.0", constructor: l, length: 0, toArray: function () { return fa.call(this) }, get: function (a) {
			return null != a ? 0 > a ? this[a + this.length] :
				this[a] : fa.call(this)
		}, pushStack: function (a) { a = l.merge(this.constructor(), a); a.prevObject = this; return a }, each: function (a) { return l.each(this, a) }, map: function (a) { return this.pushStack(l.map(this, function (b, d) { return a.call(b, d, b) })) }, slice: function () { return this.pushStack(fa.apply(this, arguments)) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, eq: function (a) { var b = this.length; a = +a + (0 > a ? b : 0); return this.pushStack(0 <= a && a < b ? [this[a]] : []) }, end: function () {
			return this.prevObject ||
				this.constructor()
		}, push: x, sort: wa.sort, splice: wa.splice
	}; l.extend = l.fn.extend = function () { var a, b, d, c = arguments[0] || {}, e = 1, f = arguments.length, p = !1; "boolean" === typeof c && (p = c, c = arguments[e] || {}, e++); "object" === typeof c || l.isFunction(c) || (c = {}); e === f && (c = this, e--); for (; e < f; e++)if (null != (a = arguments[e])) for (b in a) { var g = c[b]; var k = a[b]; c !== k && (p && k && (l.isPlainObject(k) || (d = l.isArray(k))) ? (d ? (d = !1, g = g && l.isArray(g) ? g : []) : g = g && l.isPlainObject(g) ? g : {}, c[b] = l.extend(p, g, k)) : void 0 !== k && (c[b] = k)) } return c };
	l.extend({
		expando: "jQuery" + ("3.1.0" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) { throw Error(a); }, noop: function () { }, isFunction: function (a) { return "function" === l.type(a) }, isArray: Array.isArray, isWindow: function (a) { return null != a && a === a.window }, isNumeric: function (a) { var b = l.type(a); return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a)) }, isPlainObject: function (a) {
			if (!a || "[object Object]" !== oa.call(a)) return !1; a = na(a); if (!a) return !0; a = ba.call(a, "constructor") && a.constructor; return "function" ===
				typeof a && Ja.call(a) === sa
		}, isEmptyObject: function (a) { for (var b in a) return !1; return !0 }, type: function (a) { return null == a ? a + "" : "object" === typeof a || "function" === typeof a ? H[oa.call(a)] || "object" : typeof a }, globalEval: function (a) { h(a) }, camelCase: function (a) { return a.replace(Fa, "ms-").replace(Wa, ab) }, nodeName: function (a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() }, each: function (a, b) {
			var d, c = 0; if (t(a)) for (d = a.length; c < d && !1 !== b.call(a[c], c, a[c]); c++); else for (c in a) if (!1 === b.call(a[c],
				c, a[c])) break; return a
		}, trim: function (a) { return null == a ? "" : (a + "").replace(Ga, "") }, makeArray: function (a, b) { var d = b || []; null != a && (t(Object(a)) ? l.merge(d, "string" === typeof a ? [a] : a) : x.call(d, a)); return d }, inArray: function (a, b, d) { return null == b ? -1 : D.call(b, a, d) }, merge: function (a, b) { for (var d = +b.length, c = 0, e = a.length; c < d; c++)a[e++] = b[c]; a.length = e; return a }, grep: function (a, b, d) { for (var c = [], e = 0, f = a.length, p = !d; e < f; e++)d = !b(a[e], e), d !== p && c.push(a[e]); return c }, map: function (a, b, d) {
			var c, e = 0, f = []; if (t(a)) for (c =
				a.length; e < c; e++) { var A = b(a[e], e, d); null != A && f.push(A) } else for (e in a) A = b(a[e], e, d), null != A && f.push(A); return p.apply([], f)
		}, guid: 1, proxy: function (a, b) { if ("string" === typeof b) { var d = a[b]; b = a; a = d } if (l.isFunction(a)) { var c = fa.call(arguments, 2); d = function () { return a.apply(b || this, c.concat(fa.call(arguments))) }; d.guid = a.guid = a.guid || l.guid++; return d } }, now: Date.now, support: ka
	}); $jscomp.initSymbol(); "function" === typeof Symbol && ($jscomp.initSymbol(), $jscomp.initSymbolIterator(), $jscomp.initSymbol(), $jscomp.initSymbolIterator(),
		l.fn[Symbol.iterator] = wa[Symbol.iterator]); l.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) { H["[object " + b + "]"] = b.toLowerCase() }); var La = function (a) {
			function b(a, b, d, c) {
				var e, f, p, A, g = b && b.ownerDocument, l = b ? b.nodeType : 9; d = d || []; if ("string" !== typeof a || !a || 1 !== l && 9 !== l && 11 !== l) return d; if (!c && ((b ? b.ownerDocument || b : ba) !== I && U(b), b = b || I, w)) {
					if (11 !== l && (A = Bb.exec(a))) if (e = A[1]) if (9 === l) if (f = b.getElementById(e)) { if (f.id === e) return d.push(f), d } else return d;
					else { if (g && (f = g.getElementById(e)) && y(b, f) && f.id === e) return d.push(f), d } else { if (A[2]) return Ta.apply(d, b.getElementsByTagName(a)), d; if ((e = A[3]) && xa.getElementsByClassName && b.getElementsByClassName) return Ta.apply(d, b.getElementsByClassName(e)), d } if (!(!xa.qsa || Ha[a + " "] || ha && ha.test(a))) {
						if (1 !== l) { g = b; var k = a } else if ("object" !== b.nodeName.toLowerCase()) {
							(p = b.getAttribute("id")) ? p = p.replace(nb, T) : b.setAttribute("id", p = C); f = X(a); for (e = f.length; e--;)f[e] = "#" + p + " " + h(f[e]); k = f.join(","); g = Fa.test(a) &&
								x(b.parentNode) || b
						} if (k) try { return Ta.apply(d, g.querySelectorAll(k)), d } catch (jc) { } finally { p === C && b.removeAttribute("id") }
					}
				} return da(a.replace(O, "$1"), b, d, c)
			} function d() { function a(d, c) { b.push(d + " ") > M.cacheLength && delete a[b.shift()]; return a[d + " "] = c } var b = []; return a } function c(a) { a[C] = !0; return a } function e(a) { var b = I.createElement("fieldset"); try { return !!a(b) } catch (hc) { return !1 } finally { b.parentNode && b.parentNode.removeChild(b) } } function f(a, b) {
				for (var d = a.split("|"), c = d.length; c--;)M.attrHandle[d[c]] =
					b
			} function p(a, b) { var d = b && a, c = d && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex; if (c) return c; if (d) for (; d = d.nextSibling;)if (d === b) return -1; return a ? 1 : -1 } function A(a) { return function (b) { return "input" === b.nodeName.toLowerCase() && b.type === a } } function g(a) { return function (b) { var d = b.nodeName.toLowerCase(); return ("input" === d || "button" === d) && b.type === a } } function l(a) {
				return function (b) {
					return "label" in b && b.disabled === a || "form" in b && b.disabled === a || "form" in b && !1 === b.disabled && (b.isDisabled ===
						a || b.isDisabled !== !a && ("label" in b || !V(b)) !== a)
				}
			} function k(a) { return c(function (b) { b = +b; return c(function (d, c) { for (var e, f = a([], d.length, b), p = f.length; p--;)d[e = f[p]] && (d[e] = !(c[e] = d[e])) }) }) } function x(a) { return a && "undefined" !== typeof a.getElementsByTagName && a } function u() { } function h(a) { for (var b = 0, d = a.length, c = ""; b < d; b++)c += a[b].value; return c } function n(a, b, d) {
				var c = b.dir, e = b.next, f = e || c, p = d && "parentNode" === f, A = sa++; return b.first ? function (b, d, e) {
					for (; b = b[c];)if (1 === b.nodeType || p) return a(b,
						d, e)
				} : function (b, d, g) { var l, k = [oa, A]; if (g) for (; b = b[c];) { if ((1 === b.nodeType || p) && a(b, d, g)) return !0 } else for (; b = b[c];)if (1 === b.nodeType || p) { var x = b[C] || (b[C] = {}); x = x[b.uniqueID] || (x[b.uniqueID] = {}); if (e && e === b.nodeName.toLowerCase()) b = b[c] || b; else { if ((l = x[f]) && l[0] === oa && l[1] === A) return k[2] = l[2]; x[f] = k; if (k[2] = a(b, d, g)) return !0 } } }
			} function m(a) { return 1 < a.length ? function (b, d, c) { for (var e = a.length; e--;)if (!a[e](b, d, c)) return !1; return !0 } : a[0] } function z(a, b, d, c, e) {
				for (var f, p = [], A = 0, g = a.length, l = null !=
					b; A < g; A++)if (f = a[A]) if (!d || d(f, c, e)) p.push(f), l && b.push(A); return p
			} function D(a, d, e, f, p, A) {
			f && !f[C] && (f = D(f)); p && !p[C] && (p = D(p, A)); return c(function (c, A, g, l) {
				var k, x = [], u = [], h = A.length, n; if (!(n = c)) { n = d || "*"; for (var m = g.nodeType ? [g] : g, Ba = [], D = 0, q = m.length; D < q; D++)b(n, m[D], Ba); n = Ba } n = !a || !c && d ? n : z(n, x, a, g, l); m = e ? p || (c ? a : h || f) ? [] : A : n; e && e(n, m, g, l); if (f) { var F = z(m, u); f(F, [], g, l); for (g = F.length; g--;)if (k = F[g]) m[u[g]] = !(n[u[g]] = k) } if (c) {
					if (p || a) {
						if (p) {
							F = []; for (g = m.length; g--;)(k = m[g]) && F.push(n[g] = k);
							p(null, m = [], F, l)
						} for (g = m.length; g--;)(k = m[g]) && -1 < (F = p ? Va(c, k) : x[g]) && (c[F] = !(A[F] = k))
					}
				} else m = z(m === A ? m.splice(h, m.length) : m), p ? p(null, A, m, l) : Ta.apply(A, m)
			})
			} function q(a) {
				var b, d, c = a.length, e = M.relative[a[0].type]; var f = e || M.relative[" "]; for (var p = e ? 1 : 0, A = n(function (a) { return a === b }, f, !0), g = n(function (a) { return -1 < Va(b, a) }, f, !0), l = [function (a, d, c) { a = !e && (c || d !== t) || ((b = d).nodeType ? A(a, d, c) : g(a, d, c)); b = null; return a }]; p < c; p++)if (f = M.relative[a[p].type]) l = [n(m(l), f)]; else {
					f = M.filter[a[p].type].apply(null,
						a[p].matches); if (f[C]) { for (d = ++p; d < c && !M.relative[a[d].type]; d++); return D(1 < p && m(l), 1 < p && h(a.slice(0, p - 1).concat({ value: " " === a[p - 2].type ? "*" : "" })).replace(O, "$1"), f, p < d && q(a.slice(p, d)), d < c && q(a = a.slice(d)), d < c && h(a)) } l.push(f)
				} return m(l)
			} function F(a, d) {
				var e = 0 < d.length, f = 0 < a.length, p = function (c, p, A, g, l) {
					var k, x, u = 0, h = "0", m = c && [], n = [], Ba = t, D = c || f && M.find.TAG("*", l), F = oa += null == Ba ? 1 : Math.random() || .1, q = D.length; for (l && (t = p === I || p || l); h !== q && null != (k = D[h]); h++) {
						if (f && k) {
							var v = 0; p || k.ownerDocument ===
								I || (U(k), A = !w); for (; x = a[v++];)if (x(k, p || I, A)) { g.push(k); break } l && (oa = F)
						} e && ((k = !x && k) && u-- , c && m.push(k))
					} u += h; if (e && h !== u) { for (v = 0; x = d[v++];)x(m, n, p, A); if (c) { if (0 < u) for (; h--;)m[h] || n[h] || (n[h] = R.call(g)); n = z(n) } Ta.apply(g, n); l && !c && 0 < n.length && 1 < u + d.length && b.uniqueSort(g) } l && (oa = F, t = Ba); return m
				}; return e ? c(p) : p
			} var v, t, H, r, I, Y, w, ha, Ca, pa, y, C = "sizzle" + 1 * new Date, ba = a.document, oa = 0, sa = 0, Q = d(), tb = d(), Ha = d(), ka = function (a, b) { a === b && (r = !0); return 0 }, B = {}.hasOwnProperty, Ja = [], R = Ja.pop, sb = Ja.push, Ta = Ja.push,
				E = Ja.slice, Va = function (a, b) { for (var d = 0, c = a.length; d < c; d++)if (a[d] === b) return d; return -1 }, G = RegExp("[\\x20\\t\\r\\n\\f]+", "g"), O = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"), S = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, Z = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/, bb = RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]", "g"), Ab = /:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
				K = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/, Sa = {
					ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/, CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/, TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/, ATTR: /^\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\]/, PSEUDO: /^:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
					CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i, bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i, needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
				}, Ga = /^(?:input|select|textarea|button)$/i, P = /^h\d$/i, J = /^[^{]+\{\s*\[native \w/,
				Bb = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Fa = /[+~]/, L = RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)", "ig"), Ua = function (a, b, d) { a = "0x" + b - 65536; return a !== a || d ? b : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, a & 1023 | 56320) }, nb = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, T = function (a, b) { return b ? "\x00" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a }, cb = function () { U() }, V = n(function (a) { return !0 === a.disabled }, {
					dir: "parentNode",
					next: "legend"
				}); try { Ta.apply(Ja = E.call(ba.childNodes), ba.childNodes), Ja[ba.childNodes.length].nodeType } catch (gc) { Ta = { apply: Ja.length ? function (a, b) { sb.apply(a, E.call(b)) } : function (a, b) { for (var d = a.length, c = 0; a[d++] = b[c++];); a.length = d - 1 } } } var xa = b.support = {}; var W = b.isXML = function (a) { return (a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName : !1 }; var U = b.setDocument = function (a) {
					var b; a = a ? a.ownerDocument || a : ba; if (a === I || 9 !== a.nodeType || !a.documentElement) return I; I = a; Y = I.documentElement; w =
						!W(I); ba !== I && (b = I.defaultView) && b.top !== b && (b.addEventListener ? b.addEventListener("unload", cb, !1) : b.attachEvent && b.attachEvent("onunload", cb)); xa.attributes = e(function (a) { a.className = "i"; return !a.getAttribute("className") }); xa.getElementsByTagName = e(function (a) { a.appendChild(I.createComment("")); return !a.getElementsByTagName("*").length }); xa.getElementsByClassName = J.test(I.getElementsByClassName); xa.getById = e(function (a) { Y.appendChild(a).id = C; return !I.getElementsByName || !I.getElementsByName(C).length });
					xa.getById ? (M.find.ID = function (a, b) { if ("undefined" !== typeof b.getElementById && w) { var d = b.getElementById(a); return d ? [d] : [] } }, M.filter.ID = function (a) { var b = a.replace(L, Ua); return function (a) { return a.getAttribute("id") === b } }) : (delete M.find.ID, M.filter.ID = function (a) { var b = a.replace(L, Ua); return function (a) { return (a = "undefined" !== typeof a.getAttributeNode && a.getAttributeNode("id")) && a.value === b } }); M.find.TAG = xa.getElementsByTagName ? function (a, b) {
						if ("undefined" !== typeof b.getElementsByTagName) return b.getElementsByTagName(a);
						if (xa.qsa) return b.querySelectorAll(a)
					} : function (a, b) { var d, c = [], e = 0, f = b.getElementsByTagName(a); if ("*" === a) { for (; d = f[e++];)1 === d.nodeType && c.push(d); return c } return f }; M.find.CLASS = xa.getElementsByClassName && function (a, b) { if ("undefined" !== typeof b.getElementsByClassName && w) return b.getElementsByClassName(a) }; Ca = []; ha = []; if (xa.qsa = J.test(I.querySelectorAll)) e(function (a) {
						Y.appendChild(a).innerHTML = "<a id='" + C + "'></a><select id='" + C + "-\r\\' msallowcapture=''><option selected=''></option></select>";
						a.querySelectorAll("[msallowcapture^='']").length && ha.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"); a.querySelectorAll("[selected]").length || ha.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)"); a.querySelectorAll("[id~=" + C + "-]").length || ha.push("~="); a.querySelectorAll(":checked").length || ha.push(":checked"); a.querySelectorAll("a#" + C + "+*").length || ha.push(".#.+[+~]")
					}), e(function (a) {
					a.innerHTML =
						"<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"; var b = I.createElement("input"); b.setAttribute("type", "hidden"); a.appendChild(b).setAttribute("name", "D"); a.querySelectorAll("[name=d]").length && ha.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="); 2 !== a.querySelectorAll(":enabled").length && ha.push(":enabled", ":disabled"); Y.appendChild(a).disabled = !0; 2 !== a.querySelectorAll(":disabled").length && ha.push(":enabled", ":disabled"); a.querySelectorAll("*,:x"); ha.push(",.*:")
					}); (xa.matchesSelector =
						J.test(pa = Y.matches || Y.webkitMatchesSelector || Y.mozMatchesSelector || Y.oMatchesSelector || Y.msMatchesSelector)) && e(function (a) { xa.disconnectedMatch = pa.call(a, "*"); pa.call(a, "[s!='']:x"); Ca.push("!=", ":((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)") });
					ha = ha.length && new RegExp(ha.join("|")); Ca = Ca.length && new RegExp(Ca.join("|")); y = (b = J.test(Y.compareDocumentPosition)) || J.test(Y.contains) ? function (a, b) { var d = 9 === a.nodeType ? a.documentElement : a, c = b && b.parentNode; return a === c || !!(c && 1 === c.nodeType && (d.contains ? d.contains(c) : a.compareDocumentPosition && a.compareDocumentPosition(c) & 16)) } : function (a, b) { if (b) for (; b = b.parentNode;)if (b === a) return !0; return !1 }; ka = b ? function (a, b) {
						if (a === b) return r = !0, 0; var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
						if (d) return d; d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1; return d & 1 || !xa.sortDetached && b.compareDocumentPosition(a) === d ? a === I || a.ownerDocument === ba && y(ba, a) ? -1 : b === I || b.ownerDocument === ba && y(ba, b) ? 1 : H ? Va(H, a) - Va(H, b) : 0 : d & 4 ? -1 : 1
					} : function (a, b) {
						if (a === b) return r = !0, 0; var d = 0; var c = a.parentNode; var e = b.parentNode, f = [a], A = [b]; if (!c || !e) return a === I ? -1 : b === I ? 1 : c ? -1 : e ? 1 : H ? Va(H, a) - Va(H, b) : 0; if (c === e) return p(a, b); for (c = a; c = c.parentNode;)f.unshift(c); for (c = b; c = c.parentNode;)A.unshift(c);
						for (; f[d] === A[d];)d++; return d ? p(f[d], A[d]) : f[d] === ba ? -1 : A[d] === ba ? 1 : 0
					}; return I
				}; b.matches = function (a, d) { return b(a, null, null, d) }; b.matchesSelector = function (a, d) { (a.ownerDocument || a) !== I && U(a); d = d.replace(bb, "='$1']"); if (!(!xa.matchesSelector || !w || Ha[d + " "] || Ca && Ca.test(d) || ha && ha.test(d))) try { var c = pa.call(a, d); if (c || xa.disconnectedMatch || a.document && 11 !== a.document.nodeType) return c } catch (ic) { } return 0 < b(d, I, null, [a]).length }; b.contains = function (a, b) { (a.ownerDocument || a) !== I && U(a); return y(a, b) };
			b.attr = function (a, b) { (a.ownerDocument || a) !== I && U(a); var d = M.attrHandle[b.toLowerCase()]; d = d && B.call(M.attrHandle, b.toLowerCase()) ? d(a, b, !w) : void 0; return void 0 !== d ? d : xa.attributes || !w ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }; b.escape = function (a) { return (a + "").replace(nb, T) }; b.error = function (a) { throw Error("Syntax error, unrecognized expression: " + a); }; b.uniqueSort = function (a) {
				var b, d = [], c = 0, e = 0; r = !xa.detectDuplicates; H = !xa.sortStable && a.slice(0); a.sort(ka); if (r) {
					for (; b =
						a[e++];)b === a[e] && (c = d.push(e)); for (; c--;)a.splice(d[c], 1)
				} H = null; return a
			}; var ca = b.getText = function (a) { var b = "", d = 0; var c = a.nodeType; if (!c) for (; c = a[d++];)b += ca(c); else if (1 === c || 9 === c || 11 === c) { if ("string" === typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling)b += ca(a) } else if (3 === c || 4 === c) return a.nodeValue; return b }; var M = b.selectors = {
				cacheLength: 50, createPseudo: c, match: Sa, attrHandle: {}, find: {}, relative: {
					">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": {
						dir: "previousSibling",
						first: !0
					}, "~": { dir: "previousSibling" }
				}, preFilter: {
					ATTR: function (a) { a[1] = a[1].replace(L, Ua); a[3] = (a[3] || a[4] || a[5] || "").replace(L, Ua); "~=" === a[2] && (a[3] = " " + a[3] + " "); return a.slice(0, 4) }, CHILD: function (a) { a[1] = a[1].toLowerCase(); "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]); return a }, PSEUDO: function (a) {
						var b, d = !a[6] && a[2]; if (Sa.CHILD.test(a[0])) return null; a[3] ? a[2] = a[4] || a[5] || "" : d && Ab.test(d) &&
							(b = X(d, !0)) && (b = d.indexOf(")", d.length - b) - d.length) && (a[0] = a[0].slice(0, b), a[2] = d.slice(0, b)); return a.slice(0, 3)
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
							k; d = f !== p ? "nextSibling" : "previousSibling"; var x = b.parentNode, u = A && b.nodeName.toLowerCase(); g = !g && !A; var h = !1; if (x) {
								if (f) { for (; d;) { for (l = b; l = l[d];)if (A ? l.nodeName.toLowerCase() === u : 1 === l.nodeType) return !1; var m = d = "only" === a && !m && "nextSibling" } return !0 } m = [p ? x.firstChild : x.lastChild]; if (p && g) { l = x; var n = l[C] || (l[C] = {}); n = n[l.uniqueID] || (n[l.uniqueID] = {}); h = n[a] || []; h = (k = h[0] === oa && h[1]) && h[2]; for (l = k && x.childNodes[k]; l = ++k && l && l[d] || (h = k = 0) || m.pop();)if (1 === l.nodeType && ++h && l === b) { n[a] = [oa, k, h]; break } } else if (g &&
									(l = b, n = l[C] || (l[C] = {}), n = n[l.uniqueID] || (n[l.uniqueID] = {}), h = n[a] || [], h = k = h[0] === oa && h[1]), !1 === h) for (; (l = ++k && l && l[d] || (h = k = 0) || m.pop()) && ((A ? l.nodeName.toLowerCase() !== u : 1 !== l.nodeType) || !++h || (g && (n = l[C] || (l[C] = {}), n = n[l.uniqueID] || (n[l.uniqueID] = {}), n[a] = [oa, h]), l !== b));); h -= e; return h === c || 0 === h % c && 0 <= h / c
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
								b.innerText || ca(b)).indexOf(a)
						}
					}), lang: c(function (a) { K.test(a || "") || b.error("unsupported lang: " + a); a = a.replace(L, Ua).toLowerCase(); return function (b) { var d; do if (d = w ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return d = d.toLowerCase(), d === a || 0 === d.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType); return !1 } }), target: function (b) { var d = a.location && a.location.hash; return d && d.slice(1) === b.id }, root: function (a) { return a === Y }, focus: function (a) {
						return a === I.activeElement && (!I.hasFocus ||
							I.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
					}, enabled: l(!1), disabled: l(!0), checked: function (a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected }, selected: function (a) { a.parentNode && a.parentNode.selectedIndex; return !0 === a.selected }, empty: function (a) { for (a = a.firstChild; a; a = a.nextSibling)if (6 > a.nodeType) return !1; return !0 }, parent: function (a) { return !M.pseudos.empty(a) }, header: function (a) { return P.test(a.nodeName) }, input: function (a) { return Ga.test(a.nodeName) },
					button: function (a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b }, text: function (a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) }, first: k(function () { return [0] }), last: k(function (a, b) { return [b - 1] }), eq: k(function (a, b, d) { return [0 > d ? d + b : d] }), even: k(function (a, b) { for (var d = 0; d < b; d += 2)a.push(d); return a }), odd: k(function (a, b) { for (var d = 1; d < b; d += 2)a.push(d); return a }), lt: k(function (a, b, d) {
						for (b =
							0 > d ? d + b : d; 0 <= --b;)a.push(b); return a
					}), gt: k(function (a, b, d) { for (d = 0 > d ? d + b : d; ++d < b;)a.push(d); return a })
				}
			}; M.pseudos.nth = M.pseudos.eq; for (v in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) M.pseudos[v] = A(v); for (v in { submit: !0, reset: !0 }) M.pseudos[v] = g(v); u.prototype = M.filters = M.pseudos; M.setFilters = new u; var X = b.tokenize = function (a, d) {
				var c, e, f, p, A; if (p = tb[a + " "]) return d ? 0 : p.slice(0); p = a; var g = []; for (A = M.preFilter; p;) {
					if (!l || (c = S.exec(p))) c && (p = p.slice(c[0].length) || p), g.push(e = []); var l = !1; if (c =
						Z.exec(p)) l = c.shift(), e.push({ value: l, type: c[0].replace(O, " ") }), p = p.slice(l.length); for (f in M.filter) !(c = Sa[f].exec(p)) || A[f] && !(c = A[f](c)) || (l = c.shift(), e.push({ value: l, type: f, matches: c }), p = p.slice(l.length)); if (!l) break
				} return d ? p.length : p ? b.error(a) : tb(a, g).slice(0)
			}; var ub = b.compile = function (a, b) { var d, c = [], e = [], f = Ha[a + " "]; if (!f) { b || (b = X(a)); for (d = b.length; d--;)f = q(b[d]), f[C] ? c.push(f) : e.push(f); f = Ha(a, F(e, c)); f.selector = a } return f }; var da = b.select = function (a, b, d, c) {
				var e, f, p, A = "function" ===
					typeof a && a, g = !c && X(a = A.selector || a); d = d || []; if (1 === g.length) {
						var l = g[0] = g[0].slice(0); if (2 < l.length && "ID" === (f = l[0]).type && xa.getById && 9 === b.nodeType && w && M.relative[l[1].type]) { b = (M.find.ID(f.matches[0].replace(L, Ua), b) || [])[0]; if (!b) return d; A && (b = b.parentNode); a = a.slice(l.shift().value.length) } for (e = Sa.needsContext.test(a) ? 0 : l.length; e--;) {
							f = l[e]; if (M.relative[p = f.type]) break; if (p = M.find[p]) if (c = p(f.matches[0].replace(L, Ua), Fa.test(l[0].type) && x(b.parentNode) || b)) {
								l.splice(e, 1); a = c.length && h(l);
								if (!a) return Ta.apply(d, c), d; break
							}
						}
					} (A || ub(a, g))(c, b, !w, d, !b || Fa.test(a) && x(b.parentNode) || b); return d
			}; xa.sortStable = C.split("").sort(ka).join("") === C; xa.detectDuplicates = !!r; U(); xa.sortDetached = e(function (a) { return a.compareDocumentPosition(I.createElement("fieldset")) & 1 }); e(function (a) { a.innerHTML = "<a href='#'></a>"; return "#" === a.firstChild.getAttribute("href") }) || f("type|href|height|width", function (a, b, d) { if (!d) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }); xa.attributes && e(function (a) {
			a.innerHTML =
				"<input/>"; a.firstChild.setAttribute("value", ""); return "" === a.firstChild.getAttribute("value")
			}) || f("value", function (a, b, d) { if (!d && "input" === a.nodeName.toLowerCase()) return a.defaultValue }); e(function (a) { return null == a.getAttribute("disabled") }) || f("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function (a, b, d) { var c; if (!d) return !0 === a[b] ? b.toLowerCase() : (c = a.getAttributeNode(b)) && c.specified ? c.value : null }); return b
		}(m);
	l.find = La; l.expr = La.selectors; l.expr[":"] = l.expr.pseudos; l.uniqueSort = l.unique = La.uniqueSort; l.text = La.getText; l.isXMLDoc = La.isXML; l.contains = La.contains; l.escapeSelector = La.escape; var za = function (a, b, d) { for (var c = [], e = void 0 !== d; (a = a[b]) && 9 !== a.nodeType;)if (1 === a.nodeType) { if (e && l(a).is(d)) break; c.push(a) } return c }, Ma = function (a, b) { for (var d = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && d.push(a); return d }, Xa = l.expr.match.needsContext, Qa = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
		va = /^.[^:#\[\.,]*$/; l.filter = function (a, b, d) { var c = b[0]; d && (a = ":not(" + a + ")"); return 1 === b.length && 1 === c.nodeType ? l.find.matchesSelector(c, a) ? [c] : [] : l.find.matches(a, l.grep(b, function (a) { return 1 === a.nodeType })) }; l.fn.extend({
			find: function (a) { var b, d = this.length, c = this; if ("string" !== typeof a) return this.pushStack(l(a).filter(function () { for (b = 0; b < d; b++)if (l.contains(c[b], this)) return !0 })); var e = this.pushStack([]); for (b = 0; b < d; b++)l.find(a, c[b], e); return 1 < d ? l.uniqueSort(e) : e }, filter: function (b) {
				return this.pushStack(a(this,
					b || [], !1))
			}, not: function (b) { return this.pushStack(a(this, b || [], !0)) }, is: function (b) { return !!a(this, "string" === typeof b && Xa.test(b) ? l(b) : b || [], !1).length }
		}); var Ya = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/; (l.fn.init = function (a, b, d) {
			if (!a) return this; d = d || Na; if ("string" === typeof a) {
				var c = "<" === a[0] && ">" === a[a.length - 1] && 3 <= a.length ? [null, a, null] : Ya.exec(a); if (!c || !c[1] && b) return !b || b.jquery ? (b || d).find(a) : this.constructor(b).find(a); if (c[1]) {
					if (b = b instanceof l ? b[0] : b, l.merge(this, l.parseHTML(c[1], b &&
						b.nodeType ? b.ownerDocument || b : X, !0)), Qa.test(c[1]) && l.isPlainObject(b)) for (c in b) if (l.isFunction(this[c])) this[c](b[c]); else this.attr(c, b[c])
				} else if (a = X.getElementById(c[2])) this[0] = a, this.length = 1; return this
			} return a.nodeType ? (this[0] = a, this.length = 1, this) : l.isFunction(a) ? void 0 !== d.ready ? d.ready(a) : a(l) : l.makeArray(a, this)
		}).prototype = l.fn; var Na = l(X); var Aa = /^(?:parents|prev(?:Until|All))/, eb = { children: !0, contents: !0, next: !0, prev: !0 }; l.fn.extend({
			has: function (a) {
				var b = l(a, this), d = b.length;
				return this.filter(function () { for (var a = 0; a < d; a++)if (l.contains(this, b[a])) return !0 })
			}, closest: function (a, b) { var d, c = 0, e = this.length, f = [], p = "string" !== typeof a && l(a); if (!Xa.test(a)) for (; c < e; c++)for (d = this[c]; d && d !== b; d = d.parentNode)if (11 > d.nodeType && (p ? -1 < p.index(d) : 1 === d.nodeType && l.find.matchesSelector(d, a))) { f.push(d); break } return this.pushStack(1 < f.length ? l.uniqueSort(f) : f) }, index: function (a) {
				return a ? "string" === typeof a ? D.call(l(a), this[0]) : D.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ?
					this.first().prevAll().length : -1
			}, add: function (a, b) { return this.pushStack(l.uniqueSort(l.merge(this.get(), l(a, b)))) }, addBack: function (a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) }
		}); l.each({
			parent: function (a) { return (a = a.parentNode) && 11 !== a.nodeType ? a : null }, parents: function (a) { return za(a, "parentNode") }, parentsUntil: function (a, b, d) { return za(a, "parentNode", d) }, next: function (a) { return r(a, "nextSibling") }, prev: function (a) { return r(a, "previousSibling") }, nextAll: function (a) {
				return za(a,
					"nextSibling")
			}, prevAll: function (a) { return za(a, "previousSibling") }, nextUntil: function (a, b, d) { return za(a, "nextSibling", d) }, prevUntil: function (a, b, d) { return za(a, "previousSibling", d) }, siblings: function (a) { return Ma((a.parentNode || {}).firstChild, a) }, children: function (a) { return Ma(a.firstChild) }, contents: function (a) { return a.contentDocument || l.merge([], a.childNodes) }
		}, function (a, b) {
		l.fn[a] = function (d, c) {
			var e = l.map(this, b, d); "Until" !== a.slice(-5) && (c = d); c && "string" === typeof c && (e = l.filter(c, e)); 1 < this.length &&
				(eb[a] || l.uniqueSort(e), Aa.test(a) && e.reverse()); return this.pushStack(e)
		}
		}); var ea = /\S+/g; l.Callbacks = function (a) {
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
											g); if (A === b.promise()) throw new TypeError("Thenable self-resolution"); var k = A && ("object" === typeof A || "function" === typeof A) && A.then; l.isFunction(k) ? c ? k.call(A, e(f, b, y, c), e(f, b, w, c)) : (f++ , k.call(A, e(f, b, y, c), e(f, b, w, c), e(f, b, y, b.notifyWith))) : (d !== y && (p = void 0, g = [A]), (c || b.resolveWith)(p, g))
									}
								}, k = c ? A : function () { try { A() } catch (Fb) { l.Deferred.exceptionHook && l.Deferred.exceptionHook(Fb, k.stackTrace), a + 1 >= f && (d !== w && (p = void 0, g = [Fb]), b.rejectWith(p, g)) } }; a ? k() : (l.Deferred.getStackHook && (k.stackTrace = l.Deferred.getStackHook()),
									m.setTimeout(k))
							}
						} var f = 0; return l.Deferred(function (f) { b[0][3].add(e(0, f, l.isFunction(c) ? c : y, f.notifyWith)); b[1][3].add(e(0, f, l.isFunction(a) ? a : y)); b[2][3].add(e(0, f, l.isFunction(d) ? d : w)) }).promise()
					}, promise: function (a) { return null != a ? l.extend(a, c) : c }
				}, e = {}; l.each(b, function (a, f) { var p = f[2], g = f[5]; c[f[1]] = p.add; g && p.add(function () { d = g }, b[3 - a][2].disable, b[0][2].lock); p.add(f[3].fire); e[f[0]] = function () { e[f[0] + "With"](this === e ? void 0 : this, arguments); return this }; e[f[0] + "With"] = p.fireWith }); c.promise(e);
				a && a.call(e, e); return e
			}, when: function (a) { var b = arguments.length, d = b, c = Array(d), f = fa.call(arguments), p = l.Deferred(), g = function (a) { return function (d) { c[a] = this; f[a] = 1 < arguments.length ? fa.call(arguments) : d; --b || p.resolveWith(c, f) } }; if (1 >= b && (e(a, p.done(g(d)).resolve, p.reject), "pending" === p.state() || l.isFunction(f[d] && f[d].then))) return p.then(); for (; d--;)e(f[d], g(d), p.reject); return p.promise() }
		}); var Ra = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/; l.Deferred.exceptionHook = function (a, b) {
		m.console &&
			m.console.warn && a && Ra.test(a.name) && m.console.warn("jQuery.Deferred exception: " + a.message, a.stack, b)
		}; l.readyException = function (a) { m.setTimeout(function () { throw a; }) }; var Ea = l.Deferred(); l.fn.ready = function (a) { Ea.then(a)["catch"](function (a) { l.readyException(a) }); return this }; l.extend({ isReady: !1, readyWait: 1, holdReady: function (a) { a ? l.readyWait++ : l.ready(!0) }, ready: function (a) { (!0 === a ? --l.readyWait : l.isReady) || (l.isReady = !0, !0 !== a && 0 < --l.readyWait || Ea.resolveWith(X, [l])) } }); l.ready.then = Ea.then; "complete" ===
			X.readyState || "loading" !== X.readyState && !X.documentElement.doScroll ? m.setTimeout(l.ready) : (X.addEventListener("DOMContentLoaded", q), m.addEventListener("load", q)); var Ia = function (a, b, d, c, e, f, p) { var g = 0, A = a.length, k = null == d; if ("object" === l.type(d)) for (g in e = !0, d) Ia(a, b, g, d[g], !0, f, p); else if (void 0 !== c && (e = !0, l.isFunction(c) || (p = !0), k && (p ? (b.call(a, c), b = null) : (k = b, b = function (a, b, d) { return k.call(l(a), d) })), b)) for (; g < A; g++)b(a[g], d, p ? c : c.call(a[g], g, b(a[g], d))); return e ? a : k ? b.call(a) : A ? b(a[0], d) : f },
				ra = function (a) { return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType }; k.uid = 1; k.prototype = {
					cache: function (a) { var b = a[this.expando]; b || (b = {}, ra(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))); return b }, set: function (a, b, d) { var c; a = this.cache(a); if ("string" === typeof b) a[l.camelCase(b)] = d; else for (c in b) a[l.camelCase(c)] = b[c]; return a }, get: function (a, b) { return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][l.camelCase(b)] }, access: function (a,
						b, d) { if (void 0 === b || b && "string" === typeof b && void 0 === d) return this.get(a, b); this.set(a, b, d); return void 0 !== d ? d : b }, remove: function (a, b) { var d, c = a[this.expando]; if (void 0 !== c) { if (void 0 !== b) for (l.isArray(b) ? b = b.map(l.camelCase) : (b = l.camelCase(b), b = b in c ? [b] : b.match(ea) || []), d = b.length; d--;)delete c[b[d]]; if (void 0 === b || l.isEmptyObject(c)) a.nodeType ? a[this.expando] = void 0 : delete a[this.expando] } }, hasData: function (a) { a = a[this.expando]; return void 0 !== a && !l.isEmptyObject(a) }
				}; var M = new k, Da = new k, Oa =
					/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, fb = /[A-Z]/g; l.extend({ hasData: function (a) { return Da.hasData(a) || M.hasData(a) }, data: function (a, b, d) { return Da.access(a, b, d) }, removeData: function (a, b) { Da.remove(a, b) }, _data: function (a, b, d) { return M.access(a, b, d) }, _removeData: function (a, b) { M.remove(a, b) } }); l.fn.extend({
						data: function (a, b) {
							var d, c = this[0], e = c && c.attributes; if (void 0 === a) {
								if (this.length) {
									var f = Da.get(c); if (1 === c.nodeType && !M.get(c, "hasDataAttrs")) {
										for (d = e.length; d--;)if (e[d]) {
											var p = e[d].name; 0 === p.indexOf("data-") &&
												(p = l.camelCase(p.slice(5)), n(c, p, f[p]))
										} M.set(c, "hasDataAttrs", !0)
									}
								} return f
							} return "object" === typeof a ? this.each(function () { Da.set(this, a) }) : Ia(this, function (b) { if (c && void 0 === b) { var d = Da.get(c, a); if (void 0 !== d) return d; d = n(c, a); if (void 0 !== d) return d } else this.each(function () { Da.set(this, a, b) }) }, null, b, 1 < arguments.length, null, !0)
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
		var a = X.createDocumentFragment().appendChild(X.createElement("div")), b = X.createElement("input"); b.setAttribute("type", "radio"); b.setAttribute("checked", "checked"); b.setAttribute("name", "t"); a.appendChild(b); ka.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked; a.innerHTML = "<textarea>x</textarea>"; ka.noCloneChecked =
			!!a.cloneNode(!0).lastChild.defaultValue
	})(); var lb = X.documentElement, db = /^key/, wb = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, rb = /^([^.]*)(?:\.(.+)|)/; l.event = {
		global: {}, add: function (a, b, d, c, e) {
			var f, p, g, k, A; if (g = M.get(a)) {
				if (d.handler) { var x = d; d = x.handler; e = x.selector } e && l.find.matchesSelector(lb, e); d.guid || (d.guid = l.guid++); (p = g.events) || (p = g.events = {}); (f = g.handle) || (f = g.handle = function (b) { return "undefined" !== typeof l && l.event.triggered !== b.type ? l.event.dispatch.apply(a, arguments) : void 0 });
				b = (b || "").match(ea) || [""]; for (g = b.length; g--;) {
					var h = rb.exec(b[g]) || []; var u = k = h[1]; var n = (h[2] || "").split(".").sort(); u && (h = l.event.special[u] || {}, u = (e ? h.delegateType : h.bindType) || u, h = l.event.special[u] || {}, k = l.extend({ type: u, origType: k, data: c, handler: d, guid: d.guid, selector: e, needsContext: e && l.expr.match.needsContext.test(e), namespace: n.join(".") }, x), (A = p[u]) || (A = p[u] = [], A.delegateCount = 0, h.setup && !1 !== h.setup.call(a, c, n, f) || a.addEventListener && a.addEventListener(u, f)), h.add && (h.add.call(a, k), k.handler.guid ||
						(k.handler.guid = d.guid)), e ? A.splice(A.delegateCount++, 0, k) : A.push(k), l.event.global[u] = !0)
				}
			}
		}, remove: function (a, b, d, c, e) {
			var f, p, g, k, A, x = M.hasData(a) && M.get(a); if (x && (g = x.events)) {
				b = (b || "").match(ea) || [""]; for (k = b.length; k--;) {
					var h = rb.exec(b[k]) || []; var u = A = h[1]; var n = (h[2] || "").split(".").sort(); if (u) {
						var m = l.event.special[u] || {}; u = (c ? m.delegateType : m.bindType) || u; var z = g[u] || []; h = h[2] && new RegExp("(^|\\.)" + n.join("\\.(?:.*\\.|)") + "(\\.|$)"); for (p = f = z.length; f--;) {
							var D = z[f]; !e && A !== D.origType ||
								d && d.guid !== D.guid || h && !h.test(D.namespace) || c && c !== D.selector && ("**" !== c || !D.selector) || (z.splice(f, 1), D.selector && z.delegateCount-- , m.remove && m.remove.call(a, D))
						} p && !z.length && (m.teardown && !1 !== m.teardown.call(a, n, x.handle) || l.removeEvent(a, u, x.handle), delete g[u])
					} else for (u in g) l.event.remove(a, u + b[k], d, c, !0)
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
			on: function (a, b, d, c) { return R(this, a, b, d, c) }, one: function (a, b, d, c) { return R(this, a, b, d, c, 1) }, off: function (a,
				b, d) { if (a && a.preventDefault && a.handleObj) { var c = a.handleObj; l(a.delegateTarget).off(c.namespace ? c.origType + "." + c.namespace : c.origType, c.selector, c.handler); return this } if ("object" === typeof a) { for (c in a) this.off(c, b, a[c]); return this } if (!1 === b || "function" === typeof b) d = b, b = void 0; !1 === d && (d = C); return this.each(function () { l.event.remove(this, a, d, b) }) }
		}); var xb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, mb = /<script|<style|<link/i, F = /checked\s*(?:[^=]|=\s*.checked.)/i,
			I = /^true\/(.*)/, pa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; l.extend({
				htmlPrefilter: function (a) { return a.replace(xb, "<$1></$2>") }, clone: function (a, b, c) {
					var e, f = a.cloneNode(!0), p = l.contains(a.ownerDocument, a); if (!(ka.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || l.isXMLDoc(a))) { var g = d(f); var k = d(a); var x = 0; for (e = k.length; x < e; x++) { var A = k[x], h = g[x], n = h.nodeName.toLowerCase(); if ("input" === n && jb.test(A.type)) h.checked = A.checked; else if ("input" === n || "textarea" === n) h.defaultValue = A.defaultValue } } if (b) if (c) for (k =
						k || d(a), g = g || d(f), x = 0, e = k.length; x < e; x++)G(k[x], g[x]); else G(a, f); g = d(f, "script"); 0 < g.length && u(g, !p && d(a, "script")); return f
				}, cleanData: function (a) { for (var b, d, c, e = l.event.special, f = 0; void 0 !== (d = a[f]); f++)if (ra(d)) { if (b = d[M.expando]) { if (b.events) for (c in b.events) e[c] ? l.event.remove(d, c) : l.removeEvent(d, c, b.handle); d[M.expando] = void 0 } d[Da.expando] && (d[Da.expando] = void 0) } }
			}); l.fn.extend({
				detach: function (a) { return P(this, a, !0) }, remove: function (a) { return P(this, a) }, text: function (a) {
					return Ia(this,
						function (a) { return void 0 === a ? l.text(this) : this.empty().each(function () { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) this.textContent = a }) }, null, a, arguments.length)
				}, append: function () { return E(this, arguments, function (a) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || S(this, a).appendChild(a) }) }, prepend: function () { return E(this, arguments, function (a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = S(this, a); b.insertBefore(a, b.firstChild) } }) }, before: function () {
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
			}, function (a, b) { l.fn[a] = function (a) { for (var d = [], c = l(a), e = c.length - 1, f = 0; f <= e; f++)a = f === e ? this : this.clone(!0), l(c[f])[b](a), x.apply(d, a.get()); return this.pushStack(d) } }); var Y = /^margin/, ha = new RegExp("^(" + qb + ")(?!px)[a-z%]+$", "i"), Ha = function (a) { var b = a.ownerDocument.defaultView; b && b.opener || (b = m); return b.getComputedStyle(a) }; (function () {
				function a() {
					if (p) {
						p.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
						p.innerHTML = ""; lb.appendChild(f); var a = m.getComputedStyle(p); b = "1%" !== a.top; e = "2px" === a.marginLeft; d = "4px" === a.width; p.style.marginRight = "50%"; c = "4px" === a.marginRight; lb.removeChild(f); p = null
					}
				} var b, d, c, e, f = X.createElement("div"), p = X.createElement("div"); p.style && (p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", ka.clearCloneStyle = "content-box" === p.style.backgroundClip, f.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
					f.appendChild(p), l.extend(ka, { pixelPosition: function () { a(); return b }, boxSizingReliable: function () { a(); return d }, pixelMarginRight: function () { a(); return c }, reliableMarginLeft: function () { a(); return e } }))
			})(); var Ca = /^(none|table(?!-c[ea]).+)/, tb = { position: "absolute", visibility: "hidden", display: "block" }, Ta = { letterSpacing: "0", fontWeight: "400" }, Va = ["Webkit", "Moz", "ms"], sb = X.createElement("div").style; l.extend({
				cssHooks: { opacity: { get: function (a, b) { if (b) { var d = B(a, "opacity"); return "" === d ? "1" : d } } } }, cssNumber: {
					animationIterationCount: !0,
					columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0
				}, cssProps: { "float": "cssFloat" }, style: function (a, b, d, c) {
					if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
						var e, f = l.camelCase(b), p = a.style; b = l.cssProps[f] || (l.cssProps[f] = J(f) || f); var g = l.cssHooks[b] || l.cssHooks[f]; if (void 0 !== d) {
							var k = typeof d; "string" === k && (e = Za.exec(d)) && e[1] && (d = v(a, b, e), k = "number"); null != d && d === d && ("number" === k && (d += e && e[3] || (l.cssNumber[f] ?
								"" : "px")), ka.clearCloneStyle || "" !== d || 0 !== b.indexOf("background") || (p[b] = "inherit"), g && "set" in g && void 0 === (d = g.set(a, d, c)) || (p[b] = d))
						} else return g && "get" in g && void 0 !== (e = g.get(a, !1, c)) ? e : p[b]
					}
				}, css: function (a, b, d, c) { var e; var f = l.camelCase(b); b = l.cssProps[f] || (l.cssProps[f] = J(f) || f); (f = l.cssHooks[b] || l.cssHooks[f]) && "get" in f && (e = f.get(a, !0, d)); void 0 === e && (e = B(a, b, c)); "normal" === e && b in Ta && (e = Ta[b]); return "" === d || d ? (a = parseFloat(e), !0 === d || isFinite(a) ? a || 0 : e) : e }
			}); l.each(["height", "width"], function (a,
				b) { l.cssHooks[b] = { get: function (a, d, c) { if (d) return !Ca.test(l.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? ia(a, b, c) : hb(a, tb, function () { return ia(a, b, c) }) }, set: function (a, d, c) { var e, f = c && Ha(a); (c = c && aa(a, b, c, "border-box" === l.css(a, "boxSizing", !1, f), f)) && (e = Za.exec(d)) && "px" !== (e[3] || "px") && (a.style[b] = d, d = l.css(a, b)); return T(a, d, c) } } }); l.cssHooks.marginLeft = L(ka.reliableMarginLeft, function (a, b) {
					if (b) return (parseFloat(B(a, "marginLeft")) || a.getBoundingClientRect().left -
						hb(a, { marginLeft: 0 }, function () { return a.getBoundingClientRect().left })) + "px"
				}); l.each({ margin: "", padding: "", border: "Width" }, function (a, b) { l.cssHooks[a + b] = { expand: function (d) { var c = 0, e = {}; for (d = "string" === typeof d ? d.split(" ") : [d]; 4 > c; c++)e[a + Pa[c] + b] = d[c] || d[c - 2] || d[0]; return e } }; Y.test(a) || (l.cssHooks[a + b].set = T) }); l.fn.extend({
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
				}; U.propHooks.scrollTop = U.propHooks.scrollLeft = { set: function (a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }; l.easing = { linear: function (a) { return a }, swing: function (a) { return .5 - Math.cos(a * Math.PI) / 2 }, _default: "swing" }; l.fx = U.prototype.init; l.fx.step = {}; var bb, Sa, Ab = /^(?:toggle|show|hide)$/, Ua = /queueHooks$/; l.Animation = l.extend(ta, {
					tweeners: {
						"*": [function (a, b) {
							var d = this.createTween(a, b); v(d.elem, a, Za.exec(b),
								d); return d
						}]
					}, tweener: function (a, b) { l.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(ea); for (var d, c = 0, e = a.length; c < e; c++)d = a[c], ta.tweeners[d] = ta.tweeners[d] || [], ta.tweeners[d].unshift(b) }, prefilters: [function (a, b, d) {
						var c; var e = "width" in b || "height" in b; var p = this, g = {}, k = a.style, x = a.nodeType && gb(a), h = M.get(a, "fxshow"); if (!d.queue) {
							var u = l._queueHooks(a, "fx"); if (null == u.unqueued) { u.unqueued = 0; var n = u.empty.fire; u.empty.fire = function () { u.unqueued || n() } } u.unqueued++; p.always(function () {
								p.always(function () {
								u.unqueued--;
									l.queue(a, "fx").length || u.empty.fire()
								})
							})
						} for (c in b) { var m = b[c]; if (Ab.test(m)) { delete b[c]; var z = z || "toggle" === m; if (m === (x ? "hide" : "show")) if ("show" === m && h && void 0 !== h[c]) x = !0; else continue; g[c] = h && h[c] || l.style(a, c) } } if ((b = !l.isEmptyObject(b)) || !l.isEmptyObject(g)) {
							if (e && 1 === a.nodeType) {
							d.overflow = [k.overflow, k.overflowX, k.overflowY]; var A = h && h.display; null == A && (A = M.get(a, "display")); e = l.css(a, "display"); "none" === e && (A ? e = A : (f([a], !0), A = a.style.display || A, e = l.css(a, "display"), f([a]))); ("inline" ===
								e || "inline-block" === e && null != A) && "none" === l.css(a, "float") && (b || (p.done(function () { k.display = A }), null == A && (e = k.display, A = "none" === e ? "" : e)), k.display = "inline-block")
							} d.overflow && (k.overflow = "hidden", p.always(function () { k.overflow = d.overflow[0]; k.overflowX = d.overflow[1]; k.overflowY = d.overflow[2] })); b = !1; for (c in g) b || (h ? "hidden" in h && (x = h.hidden) : h = M.access(a, "fxshow", { display: A }), z && (h.hidden = !x), x && f([a], !0), p.done(function () { x || f([a]); M.remove(a, "fxshow"); for (c in g) l.style(a, c, g[c]) })), b = Z(x ? h[c] :
								0, c, p), c in h || (h[c] = b.start, x && (b.end = b.start, b.start = 0))
						}
					}], prefilter: function (a, b) { b ? ta.prefilters.unshift(a) : ta.prefilters.push(a) }
				}); l.speed = function (a, b, d) {
					var c = a && "object" === typeof a ? l.extend({}, a) : { complete: d || !d && b || l.isFunction(a) && a, duration: a, easing: d && b || b && !l.isFunction(b) && b }; c.duration = l.fx.off || X.hidden ? 0 : "number" === typeof c.duration ? c.duration : c.duration in l.fx.speeds ? l.fx.speeds[c.duration] : l.fx.speeds._default; if (null == c.queue || !0 === c.queue) c.queue = "fx"; c.old = c.complete; c.complete =
						function () { l.isFunction(c.old) && c.old.call(this); c.queue && l.dequeue(this, c.queue) }; return c
				}; l.fn.extend({
					fadeTo: function (a, b, d, c) { return this.filter(gb).css("opacity", 0).show().end().animate({ opacity: b }, a, d, c) }, animate: function (a, b, d, c) { var e = l.isEmptyObject(a), f = l.speed(b, d, c); b = function () { var b = ta(this, l.extend({}, a), f); (e || M.get(this, "finish")) && b.stop(!0) }; b.finish = b; return e || !1 === f.queue ? this.each(b) : this.queue(f.queue, b) }, stop: function (a, b, d) {
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
					Sa || (Sa = m.requestAnimationFrame ? m.requestAnimationFrame(la) : m.setInterval(l.fx.tick,
						l.fx.interval))
				}; l.fx.stop = function () { m.cancelAnimationFrame ? m.cancelAnimationFrame(Sa) : m.clearInterval(Sa); Sa = null }; l.fx.speeds = { slow: 600, fast: 200, _default: 400 }; l.fn.delay = function (a, b) { a = l.fx ? l.fx.speeds[a] || a : a; return this.queue(b || "fx", function (b, d) { var c = m.setTimeout(b, a); d.stop = function () { m.clearTimeout(c) } }) }; (function () {
					var a = X.createElement("input"), b = X.createElement("select").appendChild(X.createElement("option")); a.type = "checkbox"; ka.checkOn = "" !== a.value; ka.optSelected = b.selected; a = X.createElement("input");
					a.value = "t"; a.type = "radio"; ka.radioValue = "t" === a.value
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
					}, attrHooks: { type: { set: function (a, b) { if (!ka.radioValue && "radio" === b && l.nodeName(a, "input")) { var d = a.value; a.setAttribute("type", b); d && (a.value = d); return b } } } }, removeAttr: function (a, b) { var d, c = 0, e = b && b.match(ea); if (e && 1 === a.nodeType) for (; d = e[c++];)a.removeAttribute(d) }
				}); var Bb = {
					set: function (a, b, d) {
					!1 === b ? l.removeAttr(a,
						d) : a.setAttribute(d, d); return d
					}
				}; l.each(l.expr.match.bool.source.match(/\w+/g), function (a, b) { var d = cb[b] || l.find.attr; cb[b] = function (a, b, c) { var e = b.toLowerCase(); if (!c) { var f = cb[e]; cb[e] = p; var p = null != d(a, b, c) ? e : null; cb[e] = f } return p } }); var xa = /^(?:input|select|textarea|button)$/i, ub = /^(?:a|area)$/i; l.fn.extend({ prop: function (a, b) { return Ia(this, l.prop, a, b, 1 < arguments.length) }, removeProp: function (a) { return this.each(function () { delete this[l.propFix[a] || a] }) } }); l.extend({
					prop: function (a, b, d) {
						var c,
						e = a.nodeType; if (3 !== e && 8 !== e && 2 !== e) { if (1 !== e || !l.isXMLDoc(a)) { b = l.propFix[b] || b; var f = l.propHooks[b] } return void 0 !== d ? f && "set" in f && void 0 !== (c = f.set(a, d, b)) ? c : a[b] = d : f && "get" in f && null !== (c = f.get(a, b)) ? c : a[b] }
					}, propHooks: { tabIndex: { get: function (a) { var b = l.find.attr(a, "tabindex"); return b ? parseInt(b, 10) : xa.test(a.nodeName) || ub.test(a.nodeName) && a.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" }
				}); ka.optSelected || (l.propHooks.selected = {
					get: function (a) {
					(a = a.parentNode) && a.parentNode && a.parentNode.selectedIndex;
						return null
					}, set: function (a) { if (a = a.parentNode) a.selectedIndex, a.parentNode && a.parentNode.selectedIndex }
				}); l.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function () { l.propFix[this.toLowerCase()] = this }); var nb = /[\t\r\n\f]/g; l.fn.extend({
					addClass: function (a) {
						var b, d, c, e, f, p = 0; if (l.isFunction(a)) return this.each(function (b) { l(this).addClass(a.call(this, b, ja(this))) }); if ("string" === typeof a && a) for (b = a.match(ea) || []; d = this[p++];) {
							var g =
								ja(d); if (c = 1 === d.nodeType && (" " + g + " ").replace(nb, " ")) { for (f = 0; e = b[f++];)0 > c.indexOf(" " + e + " ") && (c += e + " "); c = l.trim(c); g !== c && d.setAttribute("class", c) }
						} return this
					}, removeClass: function (a) {
						var b, d, c, e, f, p = 0; if (l.isFunction(a)) return this.each(function (b) { l(this).removeClass(a.call(this, b, ja(this))) }); if (!arguments.length) return this.attr("class", ""); if ("string" === typeof a && a) for (b = a.match(ea) || []; d = this[p++];) {
							var g = ja(d); if (c = 1 === d.nodeType && (" " + g + " ").replace(nb, " ")) {
								for (f = 0; e = b[f++];)for (; -1 <
									c.indexOf(" " + e + " ");)c = c.replace(" " + e + " ", " "); c = l.trim(c); g !== c && d.setAttribute("class", c)
							}
						} return this
					}, toggleClass: function (a, b) {
						var d = typeof a; return "boolean" === typeof b && "string" === d ? b ? this.addClass(a) : this.removeClass(a) : l.isFunction(a) ? this.each(function (d) { l(this).toggleClass(a.call(this, d, ja(this), b), b) }) : this.each(function () {
							var b, c; if ("string" === d) { var e = 0; var f = l(this); for (c = a.match(ea) || []; b = c[e++];)f.hasClass(b) ? f.removeClass(b) : f.addClass(b) } else if (void 0 === a || "boolean" === d) (b = ja(this)) &&
								M.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || !1 === a ? "" : M.get(this, "__className__") || "")
						})
					}, hasClass: function (a) { var b, d = 0; for (a = " " + a + " "; b = this[d++];)if (1 === b.nodeType && -1 < (" " + ja(b) + " ").replace(nb, " ").indexOf(a)) return !0; return !1 }
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
					function () { l.valHooks[this] = { set: function (a, b) { if (l.isArray(b)) return a.checked = -1 < l.inArray(l(a).val(), b) } }; ka.checkOn || (l.valHooks[this].get = function (a) { return null === a.getAttribute("value") ? "on" : a.value }) }); var Gb = /^(?:focusinfocus|focusoutblur)$/; l.extend(l.event, {
						trigger: function (a, b, d, c) {
							var e, f, p = [d || X], g = ba.call(a, "type") ? a.type : a; var k = ba.call(a, "namespace") ? a.namespace.split(".") : []; var x = e = d = d || X; if (3 !== d.nodeType && 8 !== d.nodeType && !Gb.test(g + l.event.triggered)) {
							-1 < g.indexOf(".") && (k = g.split("."),
								g = k.shift(), k.sort()); var h = 0 > g.indexOf(":") && "on" + g; a = a[l.expando] ? a : new l.Event(g, "object" === typeof a && a); a.isTrigger = c ? 2 : 3; a.namespace = k.join("."); a.rnamespace = a.namespace ? new RegExp("(^|\\.)" + k.join("\\.(?:.*\\.|)") + "(\\.|$)") : null; a.result = void 0; a.target || (a.target = d); b = null == b ? [a] : l.makeArray(b, [a]); k = l.event.special[g] || {}; if (c || !k.trigger || !1 !== k.trigger.apply(d, b)) {
									if (!c && !k.noBubble && !l.isWindow(d)) {
										var u = k.delegateType || g; Gb.test(u + g) || (x = x.parentNode); for (; x; x = x.parentNode)p.push(x),
											e = x; e === (d.ownerDocument || X) && p.push(e.defaultView || e.parentWindow || m)
									} for (e = 0; (x = p[e++]) && !a.isPropagationStopped();)a.type = 1 < e ? u : k.bindType || g, (f = (M.get(x, "events") || {})[a.type] && M.get(x, "handle")) && f.apply(x, b), (f = h && x[h]) && f.apply && ra(x) && (a.result = f.apply(x, b), !1 === a.result && a.preventDefault()); a.type = g; c || a.isDefaultPrevented() || k._default && !1 !== k._default.apply(p.pop(), b) || !ra(d) || !h || !l.isFunction(d[g]) || l.isWindow(d) || ((e = d[h]) && (d[h] = null), l.event.triggered = g, d[g](), l.event.triggered = void 0,
										e && (d[h] = e)); return a.result
								}
							}
						}, simulate: function (a, b, d) { a = l.extend(new l.Event, d, { type: a, isSimulated: !0 }); l.event.trigger(a, null, b) }
					}); l.fn.extend({ trigger: function (a, b) { return this.each(function () { l.event.trigger(a, b, this) }) }, triggerHandler: function (a, b) { var d = this[0]; if (d) return l.event.trigger(a, b, d, !0) } }); l.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
						function (a, b) { l.fn[b] = function (a, d) { return 0 < arguments.length ? this.on(b, null, a, d) : this.trigger(b) } }); l.fn.extend({ hover: function (a, b) { return this.mouseenter(a).mouseleave(b || a) } }); ka.focusin = "onfocusin" in m; ka.focusin || l.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
							var d = function (a) { l.event.simulate(b, a.target, l.event.fix(a)) }; l.event.special[b] = {
								setup: function () { var c = this.ownerDocument || this, e = M.access(c, b); e || c.addEventListener(a, d, !0); M.access(c, b, (e || 0) + 1) }, teardown: function () {
									var c =
										this.ownerDocument || this, e = M.access(c, b) - 1; e ? M.access(c, b, e) : (c.removeEventListener(a, d, !0), M.remove(c, b))
								}
							}
						}); var ob = m.location, Hb = l.now(), Cb = /\?/; l.parseXML = function (a) { if (!a || "string" !== typeof a) return null; try { var b = (new m.DOMParser).parseFromString(a, "text/xml") } catch (dc) { b = void 0 } b && !b.getElementsByTagName("parsererror").length || l.error("Invalid XML: " + a); return b }; var Pb = /\[\]$/, Ib = /\r?\n/g, Tb = /^(?:submit|button|image|reset|file)$/i, Ub = /^(?:input|select|textarea|keygen)/i; l.param = function (a,
							b) { var d, c = [], e = function (a, b) { var d = l.isFunction(b) ? b() : b; c[c.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == d ? "" : d) }; if (l.isArray(a) || a.jquery && !l.isPlainObject(a)) l.each(a, function () { e(this.name, this.value) }); else for (d in a) da(d, a[d], b, e); return c.join("&") }; l.fn.extend({
								serialize: function () { return l.param(this.serializeArray()) }, serializeArray: function () {
									return this.map(function () { var a = l.prop(this, "elements"); return a ? l.makeArray(a) : this }).filter(function () {
										var a = this.type; return this.name &&
											!l(this).is(":disabled") && Ub.test(this.nodeName) && !Tb.test(a) && (this.checked || !jb.test(a))
									}).map(function (a, b) { var d = l(this).val(); return null == d ? null : l.isArray(d) ? l.map(d, function (a) { return { name: b.name, value: a.replace(Ib, "\r\n") } }) : { name: b.name, value: d.replace(Ib, "\r\n") } }).get()
								}
							}); var Vb = /%20/g, Wb = /#.*$/, Xb = /([?&])_=[^&]*/, Yb = /^(.*?):[ \t]*([^\r\n]*)$/mg, Zb = /^(?:GET|HEAD)$/, $b = /^\/\//, Jb = {}, yb = {}, Kb = "*/".concat("*"), Db = X.createElement("a"); Db.href = ob.href; l.extend({
								active: 0, lastModified: {}, etag: {},
								ajaxSettings: {
									url: ob.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ob.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Kb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: {
										"* text": String,
										"text html": !0, "text json": JSON.parse, "text xml": l.parseXML
									}, flatOptions: { url: !0, context: !0 }
								}, ajaxSetup: function (a, b) { return b ? ua(ua(a, l.ajaxSettings), b) : ua(l.ajaxSettings, a) }, ajaxPrefilter: ya(Jb), ajaxTransport: ya(yb), ajax: function (a, b) {
									function d(a, b, d, f) {
										var k = b; if (!r) {
											r = !0; p && m.clearTimeout(p); c = void 0; e = f || ""; I.readyState = 0 < a ? 4 : 0; f = 200 <= a && 300 > a || 304 === a; if (d) {
												var F = x; for (var q = I, v, H, Y, w, ha = F.contents, Ca = F.dataTypes; "*" === Ca[0];)Ca.shift(), void 0 === v && (v = F.mimeType || q.getResponseHeader("Content-Type"));
												if (v) for (H in ha) if (ha[H] && ha[H].test(v)) { Ca.unshift(H); break } if (Ca[0] in d) Y = Ca[0]; else { for (H in d) { if (!Ca[0] || F.converters[H + " " + Ca[0]]) { Y = H; break } w || (w = H) } Y = Y || w } Y ? (Y !== Ca[0] && Ca.unshift(Y), F = d[Y]) : F = void 0
											} a: {
												d = x; v = F; H = I; Y = f; var pa; q = {}; ha = d.dataTypes.slice(); if (ha[1]) for (A in d.converters) q[A.toLowerCase()] = d.converters[A]; for (w = ha.shift(); w;) {
												d.responseFields[w] && (H[d.responseFields[w]] = v); !C && Y && d.dataFilter && (v = d.dataFilter(v, d.dataType)); var C = w; if (w = ha.shift()) if ("*" === w) w = C; else if ("*" !==
													C && C !== w) { var A = q[C + " " + w] || q["* " + w]; if (!A) for (pa in q) if (F = pa.split(" "), F[1] === w && (A = q[C + " " + F[0]] || q["* " + F[0]])) { !0 === A ? A = q[pa] : !0 !== q[pa] && (w = F[0], ha.unshift(F[1])); break } if (!0 !== A) if (A && d["throws"]) v = A(v); else try { v = A(v) } catch (Qb) { F = { state: "parsererror", error: A ? Qb : "No conversion from " + C + " to " + w }; break a } }
												} F = { state: "success", data: v }
											} if (f) if (x.ifModified && ((k = I.getResponseHeader("Last-Modified")) && (l.lastModified[t] = k), (k = I.getResponseHeader("etag")) && (l.etag[t] = k)), 204 === a || "HEAD" === x.type) k =
												"nocontent"; else if (304 === a) k = "notmodified"; else { k = F.state; var y = F.data; var ba = F.error; f = !ba } else if (ba = k, a || !k) k = "error", 0 > a && (a = 0); I.status = a; I.statusText = (b || k) + ""; f ? n.resolveWith(h, [y, k, I]) : n.rejectWith(h, [I, k, ba]); I.statusCode(D); D = void 0; g && u.trigger(f ? "ajaxSuccess" : "ajaxError", [I, x, f ? y : ba]); z.fireWith(h, [I, k]); g && (u.trigger("ajaxComplete", [I, x]), --l.active || l.event.trigger("ajaxStop"))
										}
									} "object" === typeof a && (b = a, a = void 0); b = b || {}; var c, e, f, p, g, k, x = l.ajaxSetup({}, b), h = x.context || x, u = x.context &&
										(h.nodeType || h.jquery) ? l(h) : l.event, n = l.Deferred(), z = l.Callbacks("once memory"), D = x.statusCode || {}, F = {}, q = {}, v = "canceled", I = {
											readyState: 0, getResponseHeader: function (a) { var b; if (r) { if (!f) for (f = {}; b = Yb.exec(e);)f[b[1].toLowerCase()] = b[2]; b = f[a.toLowerCase()] } return null == b ? null : b }, getAllResponseHeaders: function () { return r ? e : null }, setRequestHeader: function (a, b) { null == r && (a = q[a.toLowerCase()] = q[a.toLowerCase()] || a, F[a] = b); return this }, overrideMimeType: function (a) { null == r && (x.mimeType = a); return this },
											statusCode: function (a) { var b; if (a) if (r) I.always(a[I.status]); else for (b in a) D[b] = [D[b], a[b]]; return this }, abort: function (a) { a = a || v; c && c.abort(a); d(0, a); return this }
										}; n.promise(I); x.url = ((a || x.url || ob.href) + "").replace($b, ob.protocol + "//"); x.type = b.method || b.type || x.method || x.type; x.dataTypes = (x.dataType || "*").toLowerCase().match(ea) || [""]; if (null == x.crossDomain) {
											var H = X.createElement("a"); try { H.href = x.url, H.href = H.href, x.crossDomain = Db.protocol + "//" + Db.host !== H.protocol + "//" + H.host } catch (zb) {
											x.crossDomain =
												!0
											}
										} x.data && x.processData && "string" !== typeof x.data && (x.data = l.param(x.data, x.traditional)); ma(Jb, x, b, I); if (r) return I; (g = l.event && x.global) && 0 === l.active++ && l.event.trigger("ajaxStart"); x.type = x.type.toUpperCase(); x.hasContent = !Zb.test(x.type); var t = x.url.replace(Wb, ""); x.hasContent ? x.data && x.processData && 0 === (x.contentType || "").indexOf("application/x-www-form-urlencoded") && (x.data = x.data.replace(Vb, "+")) : (H = x.url.slice(t.length), x.data && (t += (Cb.test(t) ? "&" : "?") + x.data, delete x.data), !1 === x.cache &&
											(t = t.replace(Xb, ""), H = (Cb.test(t) ? "&" : "?") + "_=" + Hb++ + H), x.url = t + H); x.ifModified && (l.lastModified[t] && I.setRequestHeader("If-Modified-Since", l.lastModified[t]), l.etag[t] && I.setRequestHeader("If-None-Match", l.etag[t])); (x.data && x.hasContent && !1 !== x.contentType || b.contentType) && I.setRequestHeader("Content-Type", x.contentType); I.setRequestHeader("Accept", x.dataTypes[0] && x.accepts[x.dataTypes[0]] ? x.accepts[x.dataTypes[0]] + ("*" !== x.dataTypes[0] ? ", " + Kb + "; q=0.01" : "") : x.accepts["*"]); for (k in x.headers) I.setRequestHeader(k,
												x.headers[k]); if (x.beforeSend && (!1 === x.beforeSend.call(h, I, x) || r)) return I.abort(); v = "abort"; z.add(x.complete); I.done(x.success); I.fail(x.error); if (c = ma(yb, x, b, I)) { I.readyState = 1; g && u.trigger("ajaxSend", [I, x]); if (r) return I; x.async && 0 < x.timeout && (p = m.setTimeout(function () { I.abort("timeout") }, x.timeout)); try { var r = !1; c.send(F, d) } catch (zb) { if (r) throw zb; d(-1, zb) } } else d(-1, "No Transport"); return I
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
		function (a) { return !l.expr.pseudos.visible(a) }; l.expr.pseudos.visible = function (a) { return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length) }; l.ajaxSettings.xhr = function () { try { return new m.XMLHttpRequest } catch (A) { } }; var ac = { 0: 200, 1223: 204 }, pb = l.ajaxSettings.xhr(); ka.cors = !!pb && "withCredentials" in pb; ka.ajax = pb = !!pb; l.ajaxTransport(function (a) {
			var b, d; if (ka.cors || pb && !a.crossDomain) return {
				send: function (c, e) {
					var f, p = a.xhr(); p.open(a.type, a.url, a.async, a.username, a.password); if (a.xhrFields) for (f in a.xhrFields) p[f] =
						a.xhrFields[f]; a.mimeType && p.overrideMimeType && p.overrideMimeType(a.mimeType); a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest"); for (f in c) p.setRequestHeader(f, c[f]); b = function (a) {
							return function () {
								b && (b = d = p.onload = p.onerror = p.onabort = p.onreadystatechange = null, "abort" === a ? p.abort() : "error" === a ? "number" !== typeof p.status ? e(0, "error") : e(p.status, p.statusText) : e(ac[p.status] || p.status, p.statusText, "text" !== (p.responseType || "text") || "string" !== typeof p.responseText ? { binary: p.response } :
									{ text: p.responseText }, p.getAllResponseHeaders()))
							}
						}; p.onload = b(); d = p.onerror = b("error"); void 0 !== p.onabort ? p.onabort = d : p.onreadystatechange = function () { 4 === p.readyState && m.setTimeout(function () { b && d() }) }; b = b("abort"); try { p.send(a.hasContent && a.data || null) } catch (Nb) { if (b) throw Nb; }
				}, abort: function () { b && b() }
			}
		}); l.ajaxPrefilter(function (a) { a.crossDomain && (a.contents.script = !1) }); l.ajaxSetup({
			accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ },
			converters: { "text script": function (a) { l.globalEval(a); return a } }
		}); l.ajaxPrefilter("script", function (a) { void 0 === a.cache && (a.cache = !1); a.crossDomain && (a.type = "GET") }); l.ajaxTransport("script", function (a) { if (a.crossDomain) { var b, d; return { send: function (c, e) { b = l("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", d = function (a) { b.remove(); d = null; a && e("error" === a.type ? 404 : 200, a.type) }); X.head.appendChild(b[0]) }, abort: function () { d && d() } } } }); var Lb = [], Eb = /(=)\?(?=&|$)|\?\?/; l.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function () { var a = Lb.pop() || l.expando + "_" + Hb++; this[a] = !0; return a }
		}); l.ajaxPrefilter("json jsonp", function (a, b, d) {
			var c, e = !1 !== a.jsonp && (Eb.test(a.url) ? "url" : "string" === typeof a.data && 0 === (a.contentType || "").indexOf("application/x-www-form-urlencoded") && Eb.test(a.data) && "data"); if (e || "jsonp" === a.dataTypes[0]) {
				var f = a.jsonpCallback = l.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback; e ? a[e] = a[e].replace(Eb, "$1" + f) : !1 !== a.jsonp && (a.url += (Cb.test(a.url) ? "&" : "?") + a.jsonp + "=" +
					f); a.converters["script json"] = function () { c || l.error(f + " was not called"); return c[0] }; a.dataTypes[0] = "json"; var p = m[f]; m[f] = function () { c = arguments }; d.always(function () { void 0 === p ? l(m).removeProp(f) : m[f] = p; a[f] && (a.jsonpCallback = b.jsonpCallback, Lb.push(f)); c && l.isFunction(p) && p(c[0]); c = p = void 0 }); return "script"
			}
		}); ka.createHTMLDocument = function () { var a = X.implementation.createHTMLDocument("").body; a.innerHTML = "<form></form><form></form>"; return 2 === a.childNodes.length }(); l.parseHTML = function (a, b, d) {
			if ("string" !==
				typeof a) return []; "boolean" === typeof b && (d = b, b = !1); if (!b) if (ka.createHTMLDocument) { b = X.implementation.createHTMLDocument(""); var c = b.createElement("base"); c.href = X.location.href; b.head.appendChild(c) } else b = X; c = Qa.exec(a); d = !d && []; if (c) return [b.createElement(c[1])]; c = z([a], b, d); d && d.length && l(d).remove(); return l.merge([], c.childNodes)
		}; l.fn.load = function (a, b, d) {
			var c, e, f = this, p = a.indexOf(" "); if (-1 < p) { var g = l.trim(a.slice(p)); a = a.slice(0, p) } l.isFunction(b) ? (d = b, b = void 0) : b && "object" === typeof b &&
				(c = "POST"); 0 < f.length && l.ajax({ url: a, type: c || "GET", dataType: "html", data: b }).done(function (a) { e = arguments; f.html(g ? l("<div>").append(l.parseHTML(a)).find(g) : a) }).always(d && function (a, b) { f.each(function () { d.apply(this, e || [a.responseText, b, a]) }) }); return this
		}; l.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) { l.fn[b] = function (a) { return this.on(b, a) } }); l.expr.pseudos.animated = function (a) { return l.grep(l.timers, function (b) { return a === b.elem }).length }; l.offset =
			{ setOffset: function (a, b, d) { var c = l.css(a, "position"), e = l(a), f = {}; "static" === c && (a.style.position = "relative"); var p = e.offset(); var g = l.css(a, "top"); var k = l.css(a, "left"); ("absolute" === c || "fixed" === c) && -1 < (g + k).indexOf("auto") ? (k = e.position(), g = k.top, k = k.left) : (g = parseFloat(g) || 0, k = parseFloat(k) || 0); l.isFunction(b) && (b = b.call(a, d, l.extend({}, p))); null != b.top && (f.top = b.top - p.top + g); null != b.left && (f.left = b.left - p.left + k); "using" in b ? b.using.call(a, f) : e.css(f) } }; l.fn.extend({
				offset: function (a) {
					if (arguments.length) return void 0 ===
						a ? this : this.each(function (b) { l.offset.setOffset(this, a, b) }); var b; if (b = this[0]) { if (!b.getClientRects().length) return { top: 0, left: 0 }; var d = b.getBoundingClientRect(); if (d.width || d.height) { var c = b.ownerDocument; b = qa(c); c = c.documentElement; return { top: d.top + b.pageYOffset - c.clientTop, left: d.left + b.pageXOffset - c.clientLeft } } return d }
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
						function (a, c, e) { var f = qa(a); if (void 0 === e) return f ? f[b] : a[c]; f ? f.scrollTo(d ? f.pageXOffset : e, d ? e : f.pageYOffset) : a[c] = e }, a, c, arguments.length)
				}
			}); l.each(["top", "left"], function (a, b) { l.cssHooks[b] = L(ka.pixelPosition, function (a, d) { if (d) return d = B(a, b), ha.test(d) ? l(a).position()[b] + "px" : d }) }); l.each({ Height: "height", Width: "width" }, function (a, b) {
				l.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (d, c) {
				l.fn[c] = function (e, f) {
					var p = arguments.length && (d || "boolean" !== typeof e), g = d || (!0 === e || !0 === f ? "margin" :
						"border"); return Ia(this, function (b, d, e) { return l.isWindow(b) ? 0 === c.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (d = b.documentElement, Math.max(b.body["scroll" + a], d["scroll" + a], b.body["offset" + a], d["offset" + a], d["client" + a])) : void 0 === e ? l.css(b, d, g) : l.style(b, d, e, g) }, b, p ? e : void 0, p)
				}
				})
			}); l.fn.extend({
				bind: function (a, b, d) { return this.on(a, null, b, d) }, unbind: function (a, b) { return this.off(a, null, b) }, delegate: function (a, b, d, c) { return this.on(b, a, d, c) }, undelegate: function (a,
					b, d) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", d) }
			}); l.parseJSON = JSON.parse; "function" === typeof define && define.amd && define("jquery", [], function () { return l }); var bc = m.jQuery, cc = m.$; l.noConflict = function (a) { m.$ === l && (m.$ = cc); a && m.jQuery === l && (m.jQuery = bc); return l }; c || (m.jQuery = m.$ = l); return l
});/*
 VERSION: 1.19.0
 DATE: 2016-07-16
 UPDATES AND DOCS AT: http://greensock.com

 @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 This work is subject to the terms at http://greensock.com/standard-license or for
 Club GreenSock members, the software agreement that was issued with your membership.

 @author: Jack Doyle, jack@greensock.com
*/
!function (m, c) {
	var h = {}, t = m.GreenSockGlobals = m.GreenSockGlobals || m; if (!t.TweenLite) {
		var a, r = function (a) { var b = a.split("."), d = t; for (a = 0; a < b.length; a++)d[b[a]] = d = d[b[a]] || {}; return d }, b = r("com.greensock"), y = function (a) { var b, d = [], c = a.length; for (b = 0; b !== c; d.push(a[b++])); return d }, w = function () { }, e = function () { var a = Object.prototype.toString, b = a.call([]); return function (d) { return null != d && (d instanceof Array || "object" == typeof d && !!d.push && a.call(d) === b) } }(), q = {}, k = function (a, b, d, e) {
		this.sc = q[a] ? q[a].sc :
			[]; q[a] = this; this.gsClass = null; this.func = d; var f = []; this.check = function (p) {
				for (var g, x, u, l, n, z = b.length, D = z; -1 < --z;)(g = q[b[z]] || new k(b[z], [])).gsClass ? (f[z] = g.gsClass, D--) : p && g.sc.push(this); if (0 === D && d) {
					if (x = ("com.greensock." + a).split("."), u = x.pop(), l = r(x.join("."))[u] = this.gsClass = d.apply(d, f), e) if (t[u] = h[u] = l, n = "undefined" != typeof module && module.exports, !n && "function" == typeof define && define.amd) define((m.GreenSockAMDPath ? m.GreenSockAMDPath + "/" : "") + a.split(".").pop(), [], function () { return l }); else if (n) if (a ===
						c) for (z in module.exports = h[c] = l, h) l[z] = h[z]; else h[c] && (h[c][u] = l); for (z = 0; z < this.sc.length; z++)this.sc[z].check()
				}
			}; this.check(!0)
		}, n = m._gsDefine = function (a, b, d, c) { return new k(a, b, d, c) }, v = b._class = function (a, b, d) { return b = b || function () { }, n(a, [], function () { return b }, d), b }; n.globals = t; var f = [0, 0, 1, 1], d = v("easing.Ease", function (a, b, d, c) { this._func = a; this._type = d || 0; this._power = c || 0; this._params = b ? f.concat(b) : f }, !0), u = d.map = {}, z = d.register = function (a, d, c, e) {
			var f; d = d.split(","); for (var p = d.length,
				g = (c || "easeIn,easeOut,easeInOut").split(","); -1 < --p;) { var k = d[p]; c = e ? v("easing." + k, null, !0) : b.easing[k] || {}; for (f = g.length; -1 < --f;) { var x = g[f]; u[k + "." + x] = u[x + k] = c[x] = a.getRatio ? a : a[x] || new a } }
		}; var g = d.prototype; g._calcEnd = !1; g.getRatio = function (a) { if (this._func) return this._params[0] = a, this._func.apply(null, this._params); var b = this._type, d = this._power, c = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a); return 1 === d ? c *= c : 2 === d ? c *= c * c : 3 === d ? c *= c * c * c : 4 === d && (c *= c * c * c * c), 1 === b ? 1 - c : 2 === b ? c : .5 > a ? c / 2 : 1 - c / 2 }; var C = ["Linear",
			"Quad", "Cubic", "Quart", "Quint,Strong"]; for (a = C.length; -1 < --a;)g = C[a] + ",Power" + a, z(new d(null, null, 1, a), g, "easeOut", !0), z(new d(null, null, 2, a), g, "easeIn" + (0 === a ? ",easeNone" : "")), z(new d(null, null, 3, a), g, "easeInOut"); u.linear = b.easing.Linear.easeIn; u.swing = b.easing.Quad.easeInOut; var Q = v("events.EventDispatcher", function (a) { this._listeners = {}; this._eventTarget = a || this }); g = Q.prototype; g.addEventListener = function (a, b, d, c, e) {
				e = e || 0; var f, p = this._listeners[a], g = 0; this !== E || fa || E.wake(); null == p && (this._listeners[a] =
					p = []); for (f = p.length; -1 < --f;)a = p[f], a.c === b && a.s === d ? p.splice(f, 1) : 0 === g && a.pr < e && (g = f + 1); p.splice(g, 0, { c: b, s: d, up: c, pr: e })
			}; g.removeEventListener = function (a, b) { var d, c = this._listeners[a]; if (c) for (d = c.length; -1 < --d;)if (c[d].c === b) return void c.splice(d, 1) }; g.dispatchEvent = function (a) { var b, d, c = this._listeners[a]; if (c) { var e = c.length; 1 < e && (c = c.slice(0)); for (b = this._eventTarget; -1 < --e;)(d = c[e]) && (d.up ? d.c.call(d.s || b, { type: a, target: b }) : d.c.call(d.s || b)) } }; var R = m.requestAnimationFrame, S = m.cancelAnimationFrame,
				O = Date.now || function () { return (new Date).getTime() }, K = O(); C = ["ms", "moz", "webkit", "o"]; for (a = C.length; -1 < --a && !R;)R = m[C[a] + "RequestAnimationFrame"], S = m[C[a] + "CancelAnimationFrame"] || m[C[a] + "CancelRequestAnimationFrame"]; v("Ticker", function (a, b) {
					var d, c, e, f, p, g = this, k = O(), l = !1 !== b && R ? "auto" : !1, x = 500, h = 33, u = function (a) { var b; var l = O() - K; l > x && (k += l - h); K += l; g.time = (K - k) / 1E3; l = g.time - p; (!d || 0 < l || !0 === a) && (g.frame++ , p += l + (l >= f ? .004 : f - l), b = !0); !0 !== a && (e = c(u)); b && g.dispatchEvent("tick") }; Q.call(g); g.time =
						g.frame = 0; g.tick = function () { u(!0) }; g.lagSmoothing = function (a, b) { x = a || 1E10; h = Math.min(b, x, 0) }; g.sleep = function () { null != e && (l && S ? S(e) : clearTimeout(e), c = w, e = null, g === E && (fa = !1)) }; g.wake = function (a) { null !== e ? g.sleep() : a ? k += -K + (K = O()) : 10 < g.frame && (K = O() - x + 5); c = 0 === d ? w : l && R ? R : function (a) { return setTimeout(a, 1E3 * (p - g.time) + 1 | 0) }; g === E && (fa = !0); u(2) }; g.fps = function (a) { return arguments.length ? (d = a, f = 1 / (d || 60), p = this.time + f, void g.wake()) : d }; g.useRAF = function (a) {
							return arguments.length ? (g.sleep(), l = a, void g.fps(d)) :
								l
						}; g.fps(a); setTimeout(function () { "auto" === l && 5 > g.frame && "hidden" !== document.visibilityState && g.useRAF(!1) }, 1500)
				}); g = b.Ticker.prototype = new b.events.EventDispatcher; g.constructor = b.Ticker; var G = v("core.Animation", function (a, b) {
					if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = !0 === b.immediateRender, this.data = b.data, this._reversed = !0 === b.reversed, da) {
						fa || E.wake(); var d = this.vars.useFrames ? ja : da; d.add(this, d._time); this.vars.paused &&
							this.paused(!0)
					}
				}); var E = G.ticker = new b.Ticker; g = G.prototype; g._dirty = g._gc = g._initted = g._paused = !1; g._totalTime = g._time = 0; g._rawPrevTime = -1; g._next = g._last = g._onUpdate = g._timeline = g.timeline = null; g._paused = !1; var P = function () { fa && 2E3 < O() - K && E.wake(); setTimeout(P, 2E3) }; P(); g.play = function (a, b) { return null != a && this.seek(a, b), this.reversed(!1).paused(!1) }; g.pause = function (a, b) { return null != a && this.seek(a, b), this.paused(!0) }; g.resume = function (a, b) { return null != a && this.seek(a, b), this.paused(!1) }; g.seek =
					function (a, b) { return this.totalTime(Number(a), !1 !== b) }; g.restart = function (a, b) { return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, !1 !== b, !0) }; g.reverse = function (a, b) { return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1) }; g.render = function (a, b, d) { }; g.invalidate = function () { return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this }; g.isActive = function () {
						var a, b = this._timeline, d = this._startTime;
						return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime()) >= d && a < d + this.totalDuration() / this._timeScale
					}; g._enabled = function (a, b) { return fa || E.wake(), this._gc = !a, this._active = this.isActive(), !0 !== b && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1 }; g._kill = function (a, b) { return this._enabled(!1, !1) }; g.kill = function (a, b) { return this._kill(a, b), this }; g._uncache = function (a) {
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
						if (fa || E.wake(), !arguments.length) return this._totalTime; if (this._timeline) {
							if (0 > a && !d && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
							this._dirty &&
								this.totalDuration(); var c = this._totalDuration, e = this._timeline; if (a > c && !d && (a = c), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? c - a : a) / this._timeScale, e._dirty || this._uncache(!1), e._timeline) for (; e._timeline;)e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), e = e._timeline
							} this._gc && this._enabled(!0, !1); (this._totalTime !== a || 0 === this._duration) && (J.length && ma(), this.render(a, b, !1), J.length && ma())
						} return this
					}; g.progress = g.totalProgress =
						function (a, b) { var d = this.duration(); return arguments.length ? this.totalTime(d * a, b) : d ? this._time / d : this.ratio }; g.startTime = function (a) { return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime }; g.endTime = function (a) { return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale }; g.timeScale = function (a) {
							if (!arguments.length) return this._timeScale; if (a = a || 1E-10, this._timeline &&
								this._timeline.smoothChildTiming) { var b = this._pauseTime; b = b || 0 === b ? b : this._timeline.totalTime(); this._startTime = b - (b - this._startTime) * this._timeScale / a } return this._timeScale = a, this._uncache(!1)
						}; g.reversed = function (a) { return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed }; g.paused = function (a) {
							if (!arguments.length) return this._paused; var b, d, c = this._timeline;
							return a != this._paused && c && (fa || a || E.wake(), b = c.rawTime(), d = b - this._pauseTime, !a && c.smoothChildTiming && (this._startTime += d, this._uncache(!1)), this._pauseTime = a ? b : null, this._paused = a, this._active = this.isActive(), !a && 0 !== d && this._initted && this.duration() && (b = c.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale, this.render(b, b === this._totalTime, !0))), this._gc && !a && this._enabled(!0, !1), this
						}; C = v("core.SimpleTimeline", function (a) {
							G.call(this, 0, a); this.autoRemoveChildren = this.smoothChildTiming =
								!0
						}); g = C.prototype = new G; g.constructor = C; g.kill()._gc = !1; g._first = g._last = g._recent = null; g._sortChildren = !1; g.add = g.insert = function (a, b, d, c) {
							if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), b = this._last, this._sortChildren) for (d = a._startTime; b && b._startTime > d;)b = b._prev; return b ? (a._next = b._next, b._next = a) : (a._next = this._first,
								this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = b, this._recent = a, this._timeline && this._uncache(!0), this
						}; g._remove = function (a, b) { return a.timeline === this && (b || a._enabled(!1, !0), a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), a._next = a._prev = a.timeline = null, a === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this }; g.render = function (a, b, d) {
							var c = this._first; for (this._totalTime =
								this._time = this._rawPrevTime = a; c;) { var e = c._next; (c._active || a >= c._startTime && !c._paused) && (c._reversed ? c.render((c._dirty ? c.totalDuration() : c._totalDuration) - (a - c._startTime) * c._timeScale, b, d) : c.render((a - c._startTime) * c._timeScale, b, d)); c = e }
						}; g.rawTime = function () { return fa || E.wake(), this._totalTime }; var B = v("TweenLite", function (a, b, d) {
							if (G.call(this, b, d), this.render = B.prototype.render, null == a) throw "Cannot tween a null target."; this.target = a = "string" != typeof a ? a : B.selector(a) || a; var c; var f = a.jquery ||
								a.length && a !== m && a[0] && (a[0] === m || a[0].nodeType && a[0].style && !a.nodeType); d = this.vars.overwrite; if (this._overwrite = d = null == d ? ta[B.defaultOverwrite] : "number" == typeof d ? d >> 0 : ta[d], (f || a instanceof Array || a.push && e(a)) && "number" != typeof a[0]) for (this._targets = c = y(a), this._propLookup = [], this._siblings = [], a = 0; a < c.length; a++)(f = c[a]) ? "string" != typeof f ? f.length && f !== m && f[0] && (f[0] === m || f[0].nodeType && f[0].style && !f.nodeType) ? (c.splice(a--, 1), this._targets = c = c.concat(y(f))) : (this._siblings[a] = ua(f, this,
									!1), 1 === d && 1 < this._siblings[a].length && wa(f, this, null, 1, this._siblings[a])) : (f = c[a--] = B.selector(f), "string" == typeof f && c.splice(a + 1, 1)) : c.splice(a--, 1); else this._propLookup = {}, this._siblings = ua(a, this, !1), 1 === d && 1 < this._siblings.length && wa(a, this, null, 1, this._siblings); (this.vars.immediateRender || 0 === b && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1E-10, this.render(Math.min(0, -this._delay)))
						}, !0), L = function (a) {
							return a && a.length && a !== m && a[0] && (a[0] === m || a[0].nodeType && a[0].style &&
								!a.nodeType)
						}; g = B.prototype = new G; g.constructor = B; g.kill()._gc = !1; g.ratio = 0; g._firstPT = g._targets = g._overwrittenProps = g._startAt = null; g._notifyPluginsOfEnabled = g._lazy = !1; B.version = "1.19.0"; B.defaultEase = g._ease = new d(null, null, 1, 1); B.defaultOverwrite = "auto"; B.ticker = E; B.autoSleep = 120; B.lagSmoothing = function (a, b) { E.lagSmoothing(a, b) }; B.selector = m.$ || m.jQuery || function (a) {
							var b = m.$ || m.jQuery; return b ? (B.selector = b, b(a)) : "undefined" == typeof document ? a : document.querySelectorAll ? document.querySelectorAll(a) :
								document.getElementById("#" === a.charAt(0) ? a.substr(1) : a)
						}; var J = [], T = {}, aa = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, ia = function (a) { for (var b, d = this._firstPT; d;)b = d.blob ? a ? this.join("") : this.start : d.c * a + d.s, d.m ? b = d.m(b, this._target || d.t) : 1E-6 > b && -1E-6 < b && (b = 0), d.f ? d.fp ? d.t[d.p](d.fp, b) : d.t[d.p](b) : d.t[d.p] = b, d = d._next }, U = function (a, b, d, c) {
							var e, f = [a, b], g = 0, p = "", k = 0; f.start = a; d && (d(f), a = f[0], b = f[1]); f.length = 0; a = a.match(aa) || []; d = b.match(aa) || []; c && (c._next = null, c.blob = 1, f._firstPT = f._applyPT =
								c); var l = d.length; for (c = 0; l > c; c++) { var h = d[c]; var x = b.substr(g, b.indexOf(h, g) - g); p += x || !c ? x : ","; g += x.length; k ? k = (k + 1) % 5 : "rgba(" === x.substr(-5) && (k = 1); h === a[c] || a.length <= c ? p += h : (p && (f.push(p), p = ""), e = parseFloat(a[c]), f.push(e), f._firstPT = { _next: f._firstPT, t: f, p: f.length - 1, s: e, c: ("=" === h.charAt(1) ? parseInt(h.charAt(0) + "1", 10) * parseFloat(h.substr(2)) : parseFloat(h) - e) || 0, f: 0, m: k && 4 > k ? Math.round : 0 }); g += h.length } return p += b.substr(g), p && f.push(p), f.setRatio = ia, f
						}, la = function (a, b, d, c, e, f, g, k, h) {
						"function" ==
							typeof c && (c = c(h || 0, a)); var p, u; h = "get" === d ? a[b] : d; var x = typeof a[b], n = "string" == typeof c && "=" === c.charAt(1); f = { t: a, p: b, s: h, f: "function" === x, pg: 0, n: e || b, m: f ? "function" == typeof f ? f : Math.round : 0, pr: 0, c: n ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - h || 0 }; return "number" !== x && ("function" === x && "get" === d && (u = b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3), f.s = h = g ? a[u](g) : a[u]()), "string" == typeof h && (g || isNaN(h)) ? (f.fp = g, p = U(h, c, k || B.defaultStringFilter,
								f), f = { t: p, p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: e || b, pr: 0, m: 0 }) : n || (f.s = parseFloat(h), f.c = parseFloat(c) - f.s || 0)), f.c ? ((f._next = this._firstPT) && (f._next._prev = f), this._firstPT = f, f) : void 0
						}; a = B._internals = { isArray: e, isSelector: L, lazyTweens: J, blobDif: U }; var W = B._plugins = {}, V = a.tweenLookup = {}, Z = 0, ca = a.reservedProps = {
							ease: 1, delay: 1, overwrite: 1, onComplete: 1, onCompleteParams: 1, onCompleteScope: 1, useFrames: 1, runBackwards: 1, startAt: 1, onUpdate: 1, onUpdateParams: 1, onUpdateScope: 1, onStart: 1, onStartParams: 1, onStartScope: 1,
							onReverseComplete: 1, onReverseCompleteParams: 1, onReverseCompleteScope: 1, onRepeat: 1, onRepeatParams: 1, onRepeatScope: 1, easeParams: 1, yoyo: 1, immediateRender: 1, repeat: 1, repeatDelay: 1, data: 1, paused: 1, reversed: 1, autoCSS: 1, lazy: 1, onOverwrite: 1, callbackScope: 1, stringFilter: 1, id: 1
						}, ta = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, "true": 1, "false": 0 }, ja = G._rootFramesTimeline = new C, da = G._rootTimeline = new C, ya = 30, ma = a.lazyRender = function () {
							var a, b = J.length; for (T = {}; -1 < --b;)(a = J[b]) && !1 !== a._lazy &&
								(a.render(a._lazy[0], a._lazy[1], !0), a._lazy = !1); J.length = 0
						}; da._startTime = E.time; ja._startTime = E.frame; da._active = ja._active = !0; setTimeout(ma, 1); G._updateRoot = B.render = function () {
							var a, b; if (J.length && ma(), da.render((E.time - da._startTime) * da._timeScale, !1, !1), ja.render((E.frame - ja._startTime) * ja._timeScale, !1, !1), J.length && ma(), E.frame >= ya) {
								ya = E.frame + (parseInt(B.autoSleep, 10) || 120); for (b in V) { var d = V[b].tweens; for (a = d.length; -1 < --a;)d[a]._gc && d.splice(a, 1); 0 === d.length && delete V[b] } if (b = da._first,
									(!b || b._paused) && B.autoSleep && !ja._first && 1 === E._listeners.tick.length) { for (; b && b._paused;)b = b._next; b || E.sleep() }
							}
						}; E.addEventListener("tick", G._updateRoot); var ua = function (a, b, d) { var c, e, f = a._gsTweenID; if (V[f || (a._gsTweenID = f = "t" + Z++)] || (V[f] = { target: a, tweens: [] }), b && (c = V[f].tweens, c[e = c.length] = b, d)) for (; -1 < --e;)c[e] === b && c.splice(e, 1); return V[f].tweens }, qa = function (a, b, d, c) { var e, f, g = a.vars.onOverwrite; return g && (e = g(a, b, d, c)), g = B.onOverwrite, g && (f = g(a, b, d, c)), !1 !== e && !1 !== f }, wa = function (a, b,
							d, c, e) {
								var f, g, p; if (1 === c || 4 <= c) { d = e.length; for (f = 0; d > f; f++)if ((p = e[f]) !== b) p._gc || p._kill(null, a, b) && (g = !0); else if (5 === c) break; return g } var k, l = b._startTime + 1E-10, h = [], u = 0, x = 0 === b._duration; for (f = e.length; -1 < --f;)(p = e[f]) === b || p._gc || p._paused || (p._timeline !== b._timeline ? (k = k || X(b, 0, x), 0 === X(p, k, x) && (h[u++] = p)) : p._startTime <= l && p._startTime + p.totalDuration() / p._timeScale > l && ((x || !p._initted) && 2E-10 >= l - p._startTime || (h[u++] = p))); for (f = u; -1 < --f;)(p = h[f], 2 === c && p._kill(d, a, b) && (g = !0), 2 !== c || !p._firstPT &&
									p._initted) && (2 === c || qa(p, b)) && p._enabled(!1, !1) && (g = !0); return g
						}, X = function (a, b, d) { for (var c = a._timeline, e = c._timeScale, f = a._startTime; c._timeline;) { if (f += c._startTime, e *= c._timeScale, c._paused) return -100; c = c._timeline } return f /= e, f > b ? f - b : d && f === b || !a._initted && 2E-10 > f - b ? 1E-10 : (f += a.totalDuration() / a._timeScale / e) > b + 1E-10 ? 0 : f - b - 1E-10 }; g._init = function () {
							var a, b, c = this.vars, e = this._overwrittenProps, f = this._duration; var g = !!c.immediateRender; var k = c.ease; if (c.startAt) {
							this._startAt && (this._startAt.render(-1,
								!0), this._startAt.kill()); var h = {}; for (a in c.startAt) h[a] = c.startAt[a]; if (h.overwrite = !1, h.immediateRender = !0, h.lazy = g && !1 !== c.lazy, h.startAt = h.delay = null, this._startAt = B.to(this.target, 0, h), g) if (0 < this._time) this._startAt = null; else if (0 !== f) return
							} else if (c.runBackwards && 0 !== f) if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null; else {
							0 !== this._time && (g = !1); h = {}; for (a in c) ca[a] && "autoCSS" !== a || (h[a] = c[a]); if (h.overwrite = 0, h.data = "isFromStart", h.lazy = g && !1 !== c.lazy,
								h.immediateRender = g, this._startAt = B.to(this.target, 0, h), g) { if (0 === this._time) return } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
							} if (this._ease = k = k ? k instanceof d ? k : "function" == typeof k ? new d(k, c.easeParams) : u[k] || B.defaultEase : B.defaultEase, c.easeParams instanceof Array && k.config && (this._ease = k.config.apply(k, c.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) for (g = this._targets.length,
								a = 0; g > a; a++)this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], e ? e[a] : null, a) && (b = !0); else b = this._initProps(this.target, this._propLookup, this._siblings, e, 0); if (b && B._onPluginEvent("_onInitAllProps", this), e && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), c.runBackwards) for (h = this._firstPT; h;)h.s += h.c, h.c = -h.c, h = h._next; this._onUpdate = c.onUpdate; this._initted = !0
						}; g._initProps = function (a, b, d, c, f) {
							var g, p, k, h; if (null == a) return !1; T[a._gsTweenID] && ma(); if (!this.vars.css &&
								a.style && a !== m && a.nodeType && W.css && !1 !== this.vars.autoCSS) { var l = this.vars; var u = {}; for (h in l) ca[h] || h in a && "transform" !== h && "x" !== h && "y" !== h && "width" !== h && "height" !== h && "className" !== h && "border" !== h || !(!W[h] || W[h] && W[h]._autoCSS) || (u[h] = l[h], delete l[h]); l.css = u } for (g in this.vars) if (l = this.vars[g], ca[g]) l && (l instanceof Array || l.push && e(l)) && -1 !== l.join("").indexOf("{self}") && (this.vars[g] = this._swapSelfInParams(l, this)); else if (W[g] && (k = new W[g])._onInitTween(a, this.vars[g], this, f)) {
								this._firstPT =
									h = { _next: this._firstPT, t: k, p: "setRatio", s: 0, c: 1, f: 1, n: g, pg: 1, pr: k._priority, m: 0 }; for (l = k._overwriteProps.length; -1 < --l;)b[k._overwriteProps[l]] = this._firstPT; (k._priority || k._onInitAllProps) && (p = !0); (k._onDisable || k._onEnable) && (this._notifyPluginsOfEnabled = !0); h._next && (h._next._prev = h)
								} else b[g] = la.call(this, a, g, "get", l, g, 0, null, this.vars.stringFilter, f); return c && this._kill(c, a) ? this._initProps(a, b, d, c, f) : 1 < this._overwrite && this._firstPT && 1 < d.length && wa(a, this, b, this._overwrite, d) ? (this._kill(b,
									a), this._initProps(a, b, d, c, f)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (T[a._gsTweenID] = !0), p)
						}; g.render = function (a, b, d) {
							var c, e, f, g = this._time, p = this._duration; var k = this._rawPrevTime; if (a >= p - 1E-7) this._totalTime = this._time = p, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (c = !0, e = "onComplete", d = d || this._timeline.autoRemoveChildren), 0 === p && (this._initted || !this.vars.lazy || d) && (this._startTime === this._timeline._duration && (a = 0),
								(0 > k || 0 >= a && -1E-7 <= a || 1E-10 === k && "isPause" !== this.data) && k !== a && (d = !0, 1E-10 < k && (e = "onReverseComplete")), this._rawPrevTime = f = !b || a || k === a ? a : 1E-10); else if (1E-7 > a) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== g || 0 === p && 0 < k) && (e = "onReverseComplete", c = this._reversed), 0 > a && (this._active = !1, 0 === p && (this._initted || !this.vars.lazy || d) && (0 <= k && (1E-10 !== k || "isPause" !== this.data) && (d = !0), this._rawPrevTime = f = !b || a || k === a ? a : 1E-10)), this._initted || (d = !0); else if (this._totalTime =
									this._time = a, this._easeType) { var l = a / p, h = this._easeType, u = this._easePower; (1 === h || 3 === h && .5 <= l) && (l = 1 - l); 3 === h && (l *= 2); 1 === u ? l *= l : 2 === u ? l *= l * l : 3 === u ? l *= l * l * l : 4 === u && (l *= l * l * l * l); 1 === h ? this.ratio = 1 - l : 2 === h ? this.ratio = l : .5 > a / p ? this.ratio = l / 2 : this.ratio = 1 - l / 2 } else this.ratio = this._ease.getRatio(a / p); if (this._time !== g || d) {
										if (!this._initted) {
											if (this._init(), !this._initted || this._gc) return; if (!d && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime =
												g, this._rawPrevTime = k, J.push(this), void (this._lazy = [a, b]); this._time && !c ? this.ratio = this._ease.getRatio(this._time / p) : c && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
										} !1 !== this._lazy && (this._lazy = !1); this._active || !this._paused && this._time !== g && 0 <= a && (this._active = !0); 0 !== g || (this._startAt && (0 <= a ? this._startAt.render(a, b, d) : e || (e = "_dummyGS")), !this.vars.onStart || 0 === this._time && 0 !== p || !b && this._callback("onStart")); for (k = this._firstPT; k;)k.f ? k.t[k.p](k.c * this.ratio + k.s) :
											k.t[k.p] = k.c * this.ratio + k.s, k = k._next; this._onUpdate && (0 > a && this._startAt && -1E-4 !== a && this._startAt.render(a, b, d), b || (this._time !== g || c || d) && this._callback("onUpdate")); e && (!this._gc || d) && (0 > a && this._startAt && !this._onUpdate && -1E-4 !== a && this._startAt.render(a, b, d), c && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this._callback(e), 0 === p && 1E-10 === this._rawPrevTime && 1E-10 !== f && (this._rawPrevTime = 0))
									}
						}; g._kill = function (a, b, d) {
							if ("all" === a && (a = null), null ==
								a && (null == b || b === this.target)) return this._lazy = !1, this._enabled(!1, !1); b = "string" != typeof b ? b || this._targets || this.target : B.selector(b) || b; var c, f, g, p, k, h, l = d && this._time && d._startTime === this._startTime && this._timeline === d._timeline; if ((e(b) || L(b)) && "number" != typeof b[0]) for (c = b.length; -1 < --c;)this._kill(a, b[c], d) && (p = !0); else {
									if (this._targets) for (c = this._targets.length; -1 < --c;) {
										if (b === this._targets[c]) {
											var u = this._propLookup[c] || {}; this._overwrittenProps = this._overwrittenProps || []; var n = this._overwrittenProps[c] =
												a ? this._overwrittenProps[c] || {} : "all"; break
										}
									} else { if (b !== this.target) return !1; u = this._propLookup; n = this._overwrittenProps = a ? this._overwrittenProps || {} : "all" } if (u) {
										if (c = a || u, k = a !== n && "all" !== n && a !== u && ("object" != typeof a || !a._tempKill), d && (B.onOverwrite || this.vars.onOverwrite)) { for (f in c) u[f] && (h || (h = []), h.push(f)); if ((h || !a) && !qa(this, d, b, h)) return !1 } for (f in c) (g = u[f]) && (l && (g.f ? g.t[g.p](g.s) : g.t[g.p] = g.s, p = !0), g.pg && g.t._kill(c) && (p = !0), g.pg && 0 !== g.t._overwriteProps.length || (g._prev ? g._prev._next =
											g._next : g === this._firstPT && (this._firstPT = g._next), g._next && (g._next._prev = g._prev), g._next = g._prev = null), delete u[f]), k && (n[f] = 1); !this._firstPT && this._initted && this._enabled(!1, !1)
									}
								} return p
						}; g.invalidate = function () {
							return this._notifyPluginsOfEnabled && B._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], G.prototype.invalidate.call(this), this.vars.immediateRender &&
								(this._time = -1E-10, this.render(Math.min(0, -this._delay))), this
						}; g._enabled = function (a, b) { if (fa || E.wake(), a && this._gc) { var d, c = this._targets; if (c) for (d = c.length; -1 < --d;)this._siblings[d] = ua(c[d], this, !0); else this._siblings = ua(this.target, this, !0) } return G.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? B._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1 }; B.to = function (a, b, d) { return new B(a, b, d) }; B.from = function (a, b, d) {
							return d.runBackwards = !0, d.immediateRender = 0 != d.immediateRender,
								new B(a, b, d)
						}; B.fromTo = function (a, b, d, c) { return c.startAt = d, c.immediateRender = 0 != c.immediateRender && 0 != d.immediateRender, new B(a, b, c) }; B.delayedCall = function (a, b, d, c, e) { return new B(b, 0, { delay: a, onComplete: b, onCompleteParams: d, callbackScope: c, onReverseComplete: b, onReverseCompleteParams: d, immediateRender: !1, lazy: !1, useFrames: e, overwrite: 0 }) }; B.set = function (a, b) { return new B(a, 0, b) }; B.getTweensOf = function (a, b) {
							if (null == a) return []; a = "string" != typeof a ? a : B.selector(a) || a; var d, c; if ((e(a) || L(a)) && "number" !=
								typeof a[0]) { var f = a.length; for (d = []; -1 < --f;)d = d.concat(B.getTweensOf(a[f], b)); for (f = d.length; -1 < --f;) { var g = d[f]; for (c = f; -1 < --c;)g === d[c] && d.splice(f, 1) } } else for (d = ua(a).concat(), f = d.length; -1 < --f;)(d[f]._gc || b && !d[f].isActive()) && d.splice(f, 1); return d
						}; B.killTweensOf = B.killDelayedCallsTo = function (a, b, d) { "object" == typeof b && (d = b, b = !1); b = B.getTweensOf(a, b); for (var c = b.length; -1 < --c;)b[c]._kill(d, a) }; var na = v("plugins.TweenPlugin", function (a, b) {
						this._overwriteProps = (a || "").split(","); this._propName =
							this._overwriteProps[0]; this._priority = b || 0; this._super = na.prototype
						}, !0); if (g = na.prototype, na.version = "1.19.0", na.API = 2, g._firstPT = null, g._addTween = la, g.setRatio = ia, g._kill = function (a) { var b, d = this._overwriteProps, c = this._firstPT; if (null != a[this._propName]) this._overwriteProps = []; else for (b = d.length; -1 < --b;)null != a[d[b]] && d.splice(b, 1); for (; c;)null != a[c.n] && (c._next && (c._next._prev = c._prev), c._prev ? (c._prev._next = c._next, c._prev = null) : this._firstPT === c && (this._firstPT = c._next)), c = c._next; return !1 },
							g._mod = g._roundProps = function (a) { for (var b, d = this._firstPT; d;)(b = a[this._propName] || null != d.n && a[d.n.split(this._propName + "_").join("")]) && "function" == typeof b && (2 === d.f ? d.t._applyPT.m = b : d.m = b), d = d._next }, B._onPluginEvent = function (a, b) { var d, c, e, f, g = b._firstPT; if ("_onInitAllProps" === a) { for (; g;) { var k = g._next; for (c = e; c && c.pr > g.pr;)c = c._next; (g._prev = c ? c._prev : f) ? g._prev._next = g : e = g; (g._next = c) ? c._prev = g : f = g; g = k } g = b._firstPT = e } for (; g;)g.pg && "function" == typeof g.t[a] && g.t[a]() && (d = !0), g = g._next; return d },
							na.activate = function (a) { for (var b = a.length; -1 < --b;)a[b].API === na.API && (W[(new a[b])._propName] = a[b]); return !0 }, n.plugin = function (a) {
								if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition."; var b, d = a.propName, c = a.priority || 0, e = a.overwriteProps, f = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_mod", mod: "_mod", initAll: "_onInitAllProps" }, g = v("plugins." + d.charAt(0).toUpperCase() + d.substr(1) + "Plugin", function () { na.call(this, d, c); this._overwriteProps = e || [] }, !0 === a.global), k = g.prototype =
									new na(d); k.constructor = g; g.API = a.API; for (b in f) "function" == typeof a[b] && (k[f[b]] = a[b]); return g.version = a.version, na.activate([g]), g
							}, C = m._gsQueue) { for (a = 0; a < C.length; a++)C[a](); for (g in q) q[g].func || m.console.log("GSAP encountered missing dependency: " + g) } var fa = !1
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
	_gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (m, c, h) {
		var t = function (a) { var b, c = [], e = a.length; for (b = 0; b !== e; c.push(a[b++])); return c }, a = function (a, b, c) { var d, e = a.cycle; for (d in e) { var f = e[d]; a[d] = "function" == typeof f ? f(c, b[c]) : f[c % f.length] } delete a.cycle }, r = function (a, b, c) {
			h.call(this, a, b, c); this._cycle = 0; this._yoyo = !0 === this.vars.yoyo; this._repeat = this.vars.repeat || 0; this._repeatDelay = this.vars.repeatDelay ||
				0; this._dirty = !0; this.render = r.prototype.render
		}, b = h._internals, y = b.isSelector, w = b.isArray, e = r.prototype = h.to({}, .1, {}), q = []; r.version = "1.19.0"; e.constructor = r; e.kill()._gc = !1; r.killTweensOf = r.killDelayedCallsTo = h.killTweensOf; r.getTweensOf = h.getTweensOf; r.lagSmoothing = h.lagSmoothing; r.ticker = h.ticker; r.render = h.render; e.invalidate = function () { return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), h.prototype.invalidate.call(this) };
		e.updateTo = function (a, b) {
			var d = this.ratio, c = this.vars.immediateRender || a.immediateRender; b && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)); for (e in a) this.vars[e] = a[e]; if (this._initted || c) if (b) this._initted = !1, c && this.render(0, !0, !0); else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && h._onPluginEvent("_onDisable", this), .998 < this._time /
				this._duration) { var e = this._totalTime; this.render(0, !0, !1); this._initted = !1; this.render(e, !0, !1) } else if (this._initted = !1, this._init(), 0 < this._time || c) for (d = 1 / (1 - d), c = this._firstPT; c;)e = c.s + c.c, c.c *= d, c.s = e - c.c, c = c._next; return this
		}; e.render = function (a, d, c) {
		this._initted || 0 === this._duration && this.vars.repeat && this.invalidate(); var e, f, k, h, u, n, m, q = this._dirty ? this.totalDuration() : this._totalDuration, v = this._time, t = this._totalTime, r = this._cycle, w = this._duration, y = this._rawPrevTime; if (a >= q - 1E-7 ? (this._totalTime =
			q, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = w, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (e = !0, f = "onComplete", c = c || this._timeline.autoRemoveChildren), 0 === w && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0), (0 > y || 0 >= a && -1E-7 <= a || 1E-10 === y && "isPause" !== this.data) && y !== a && (c = !0, 1E-10 < y && (f = "onReverseComplete")), this._rawPrevTime = m = !d ||
				a || y === a ? a : 1E-10)) : 1E-7 > a ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== t || 0 === w && 0 < y) && (f = "onReverseComplete", e = this._reversed), 0 > a && (this._active = !1, 0 === w && (this._initted || !this.vars.lazy || c) && (0 <= y && (c = !0), this._rawPrevTime = m = !d || a || y === a ? a : 1E-10)), this._initted || (c = !0)) : (this._totalTime = this._time = a, 0 !== this._repeat && (k = w + this._repeatDelay, this._cycle = this._totalTime / k >> 0, 0 !== this._cycle && this._cycle === this._totalTime / k && a >= t && this._cycle-- ,
					this._time = this._totalTime - this._cycle * k, this._yoyo && 0 !== (1 & this._cycle) && (this._time = w - this._time), this._time > w ? this._time = w : 0 > this._time && (this._time = 0)), this._easeType ? (h = this._time / w, u = this._easeType, n = this._easePower, (1 === u || 3 === u && .5 <= h) && (h = 1 - h), 3 === u && (h *= 2), 1 === n ? h *= h : 2 === n ? h *= h * h : 3 === n ? h *= h * h * h : 4 === n && (h *= h * h * h * h), 1 === u ? this.ratio = 1 - h : 2 === u ? this.ratio = h : .5 > this._time / w ? this.ratio = h / 2 : this.ratio = 1 - h / 2) : this.ratio = this._ease.getRatio(this._time / w)), v === this._time && !c && r === this._cycle) return void (t !==
						this._totalTime && this._onUpdate && (d || this._callback("onUpdate"))); if (!this._initted) { if (this._init(), !this._initted || this._gc) return; if (!c && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = v, this._totalTime = t, this._rawPrevTime = y, this._cycle = r, b.lazyTweens.push(this), void (this._lazy = [a, d]); this._time && !e ? this.ratio = this._ease.getRatio(this._time / w) : e && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) } !1 !== this._lazy && (this._lazy =
							!1); this._active || !this._paused && this._time !== v && 0 <= a && (this._active = !0); 0 !== t || (2 === this._initted && 0 < a && this._init(), this._startAt && (0 <= a ? this._startAt.render(a, d, c) : f || (f = "_dummyGS")), !this.vars.onStart || 0 === this._totalTime && 0 !== w || !d && this._callback("onStart")); for (k = this._firstPT; k;)k.f ? k.t[k.p](k.c * this.ratio + k.s) : k.t[k.p] = k.c * this.ratio + k.s, k = k._next; this._onUpdate && (0 > a && this._startAt && this._startTime && this._startAt.render(a, d, c), d || (this._totalTime !== t || f) && this._callback("onUpdate")); this._cycle !==
								r && (d || this._gc || this.vars.onRepeat && this._callback("onRepeat")); f && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(a, d, c), e && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !d && this.vars[f] && this._callback(f), 0 === w && 1E-10 === this._rawPrevTime && 1E-10 !== m && (this._rawPrevTime = 0))
		}; r.to = function (a, b, c) { return new r(a, b, c) }; r.from = function (a, b, c) { return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new r(a, b, c) }; r.fromTo =
			function (a, b, c, e) { return e.startAt = c, e.immediateRender = 0 != e.immediateRender && 0 != c.immediateRender, new r(a, b, e) }; r.staggerTo = r.allTo = function (b, d, c, e, g, k, n) {
				e = e || 0; var f, u, m = 0, z = [], v = function () { c.onComplete && c.onComplete.apply(c.onCompleteScope || this, arguments); g.apply(n || c.callbackScope || this, k || q) }, C = c.cycle, Q = c.startAt && c.startAt.cycle; w(b) || ("string" == typeof b && (b = h.selector(b) || b), y(b) && (b = t(b))); b = b || []; 0 > e && (b = t(b), b.reverse(), e *= -1); var B = b.length - 1; for (f = 0; B >= f; f++) {
					var L = {}; for (u in c) L[u] =
						c[u]; if (C && (a(L, b, f), null != L.duration && (d = L.duration, delete L.duration)), Q) { Q = L.startAt = {}; for (u in c.startAt) Q[u] = c.startAt[u]; a(L.startAt, b, f) } L.delay = m + (L.delay || 0); f === B && g && (L.onComplete = v); z[f] = new r(b[f], d, L); m += e
				} return z
			}; r.staggerFrom = r.allFrom = function (a, b, c, e, g, k, h) { return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, r.staggerTo(a, b, c, e, g, k, h) }; r.staggerFromTo = r.allFromTo = function (a, b, c, e, g, k, h, n) {
				return e.startAt = c, e.immediateRender = 0 != e.immediateRender && 0 != c.immediateRender,
					r.staggerTo(a, b, e, g, k, h, n)
			}; r.delayedCall = function (a, b, c, e, g) { return new r(b, 0, { delay: a, onComplete: b, onCompleteParams: c, callbackScope: e, onReverseComplete: b, onReverseCompleteParams: c, immediateRender: !1, useFrames: g, overwrite: 0 }) }; r.set = function (a, b) { return new r(a, 0, b) }; r.isTweening = function (a) { return 0 < h.getTweensOf(a, !0).length }; var k = function (a, b) { for (var d = [], c = 0, e = a._first; e;)e instanceof h ? d[c++] = e : (b && (d[c++] = e), d = d.concat(k(e, b)), c = d.length), e = e._next; return d }, n = r.getAllTweens = function (a) {
				return k(m._rootTimeline,
					a).concat(k(m._rootFramesTimeline, a))
			}; r.killAll = function (a, b, e, k) { null == b && (b = !0); null == e && (e = !0); var d, f, h = n(0 != k), u = h.length, m = b && e && k; for (f = 0; u > f; f++)k = h[f], (m || k instanceof c || (d = k.target === k.vars.onComplete) && e || b && !d) && (a ? k.totalTime(k._reversed ? 0 : k.totalDuration()) : k._enabled(!1, !1)) }; r.killChildTweensOf = function (a, d) {
				if (null != a) {
					var c, e = b.tweenLookup; if ("string" == typeof a && (a = h.selector(a) || a), y(a) && (a = t(a)), w(a)) for (c = a.length; -1 < --c;)r.killChildTweensOf(a[c], d); else {
						var f = []; for (k in e) for (c =
							e[k].target.parentNode; c;)c === a && (f = f.concat(e[k].tweens)), c = c.parentNode; var k = f.length; for (c = 0; k > c; c++)d && f[c].totalTime(f[c].totalDuration()), f[c]._enabled(!1, !1)
					}
				}
			}; var v = function (a, b, e, k) { b = !1 !== b; e = !1 !== e; k = !1 !== k; for (var d, f = n(k), h = b && e && k, u = f.length; -1 < --u;)k = f[u], (h || k instanceof c || (d = k.target === k.vars.onComplete) && e || b && !d) && k.paused(a) }; return r.pauseAll = function (a, b, c) { v(!0, a, b, c) }, r.resumeAll = function (a, b, c) { v(!1, a, b, c) }, r.globalTimeScale = function (a) {
				var b = m._rootTimeline, c = h.ticker.time;
				return arguments.length ? (a = a || 1E-10, b._startTime = c - (c - b._startTime) * b._timeScale / a, b = m._rootFramesTimeline, c = h.ticker.frame, b._startTime = c - (c - b._startTime) * b._timeScale / a, b._timeScale = m._rootTimeline._timeScale = a, a) : b._timeScale
			}, e.progress = function (a, b) { return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration() }, e.totalProgress = function (a, b) {
				return arguments.length ? this.totalTime(this.totalDuration() *
					a, b) : this._totalTime / this.totalDuration()
			}, e.time = function (a, b) { return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, b)) : this._time }, e.duration = function (a) { return arguments.length ? m.prototype.duration.call(this, a) : this._duration }, e.totalDuration = function (a) {
				return arguments.length ?
					-1 === this._repeat ? this : this.duration((a - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
			}, e.repeat = function (a) { return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat }, e.repeatDelay = function (a) { return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay }, e.yoyo = function (a) {
				return arguments.length ?
					(this._yoyo = a, this) : this._yoyo
			}, r
	}, !0); _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (m, c, h) {
		var t = function (a) {
			c.call(this, a); this._labels = {}; this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren; this.smoothChildTiming = !0 === this.vars.smoothChildTiming; this._sortChildren = !0; this._onUpdate = this.vars.onUpdate; var b, d = this.vars; for (b in d) a = d[b], y(a) && -1 !== a.join("").indexOf("{self}") && (d[b] = this._swapSelfInParams(a)); y(d.tweens) && this.add(d.tweens,
				0, d.align, d.stagger)
		}, a = h._internals, r = t._internals = {}, b = a.isSelector, y = a.isArray, w = a.lazyTweens, e = a.lazyRender, q = _gsScope._gsDefine.globals, k = function (a) { var b, d = {}; for (b in a) d[b] = a[b]; return d }, n = function (a, b, c) { var d, e = a.cycle; for (d in e) { var f = e[d]; a[d] = "function" == typeof f ? f.call(b[c], c) : f[c % f.length] } delete a.cycle }, v = r.pauseCallback = function () { }, f = function (a) { var b, d = [], c = a.length; for (b = 0; b !== c; d.push(a[b++])); return d }; a = t.prototype = new c; return t.version = "1.19.0", a.constructor = t, a.kill()._gc =
			a._forcingPlayhead = a._hasPause = !1, a.to = function (a, b, c, e) { var d = c.repeat && q.TweenMax || h; return b ? this.add(new d(a, b, c), e) : this.set(a, c, e) }, a.from = function (a, b, c, e) { return this.add((c.repeat && q.TweenMax || h).from(a, b, c), e) }, a.fromTo = function (a, b, c, e, f) { var d = e.repeat && q.TweenMax || h; return b ? this.add(d.fromTo(a, b, c, e), f) : this.set(a, e, f) }, a.staggerTo = function (a, c, e, g, m, q, v, r) {
				r = new t({ onComplete: q, onCompleteParams: v, callbackScope: r, smoothChildTiming: this.smoothChildTiming }); var d = e.cycle; "string" == typeof a &&
					(a = h.selector(a) || a); a = a || []; b(a) && (a = f(a)); g = g || 0; 0 > g && (a = f(a), a.reverse(), g *= -1); for (v = 0; v < a.length; v++)q = k(e), q.startAt && (q.startAt = k(q.startAt), q.startAt.cycle && n(q.startAt, a, v)), d && (n(q, a, v), null != q.duration && (c = q.duration, delete q.duration)), r.to(a[v], c, q, v * g); return this.add(r, m)
			}, a.staggerFrom = function (a, b, c, e, f, k, h, n) { return c.immediateRender = 0 != c.immediateRender, c.runBackwards = !0, this.staggerTo(a, b, c, e, f, k, h, n) }, a.staggerFromTo = function (a, b, c, e, f, k, h, n, m) {
				return e.startAt = c, e.immediateRender =
					0 != e.immediateRender && 0 != c.immediateRender, this.staggerTo(a, b, e, f, k, h, n, m)
			}, a.call = function (a, b, c, e) { return this.add(h.delayedCall(0, a, b, c), e) }, a.set = function (a, b, c) { return c = this._parseTimeOrLabel(c, 0, !0), null == b.immediateRender && (b.immediateRender = c === this._time && !this._paused), this.add(new h(a, 0, b), c) }, t.exportRoot = function (a, b) {
				a = a || {}; null == a.smoothChildTiming && (a.smoothChildTiming = !0); var d, c = new t(a), e = c._timeline; null == b && (b = !0); e._remove(c, !0); c._startTime = 0; c._rawPrevTime = c._time = c._totalTime =
					e._time; for (d = e._first; d;) { var f = d._next; b && d instanceof h && d.target === d.vars.onComplete || c.add(d, d._startTime - d._delay); d = f } return e.add(c, 0), c
			}, a.add = function (a, b, e, f) {
				var d, g; if ("number" != typeof b && (b = this._parseTimeOrLabel(b, 0, !0, a)), !(a instanceof m)) {
					if (a instanceof Array || a && a.push && y(a)) {
						e = e || "normal"; f = f || 0; var k = a.length; for (d = 0; k > d; d++)y(g = a[d]) && (g = new t({ tweens: g })), this.add(g, b), "string" != typeof g && "function" != typeof g && ("sequence" === e ? b = g._startTime + g.totalDuration() / g._timeScale : "start" ===
							e && (g._startTime -= g.delay())), b += f; return this._uncache(!0)
					} if ("string" == typeof a) return this.addLabel(a, b); if ("function" != typeof a) throw "Cannot add " + a + " into the timeline; it is not a tween, timeline, function, or string."; a = h.delayedCall(0, a)
				} if (c.prototype.add.call(this, a, b), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()) for (e = this, a = e.rawTime() > a._startTime; e._timeline;)a && e._timeline.smoothChildTiming ? e.totalTime(e._totalTime, !0) : e._gc && e._enabled(!0,
					!1), e = e._timeline; return this
			}, a.remove = function (a) { if (a instanceof m) { this._remove(a, !1); var b = a._timeline = a.vars.useFrames ? m._rootFramesTimeline : m._rootTimeline; return a._startTime = (a._paused ? a._pauseTime : b._time) - (a._reversed ? a.totalDuration() - a._totalTime : a._totalTime) / a._timeScale, this } if (a instanceof Array || a && a.push && y(a)) { for (b = a.length; -1 < --b;)this.remove(a[b]); return this } return "string" == typeof a ? this.removeLabel(a) : this.kill(null, a) }, a._remove = function (a, b) {
				c.prototype._remove.call(this,
					a, b); var d = this._last; return d ? this._time > d._startTime + d._totalDuration / d._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
			}, a.append = function (a, b) { return this.add(a, this._parseTimeOrLabel(null, b, !0, a)) }, a.insert = a.insertMultiple = function (a, b, c, e) { return this.add(a, b || 0, c, e) }, a.appendMultiple = function (a, b, c, e) { return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, e) }, a.addLabel = function (a, b) {
				return this._labels[a] =
					this._parseTimeOrLabel(b), this
			}, a.addPause = function (a, b, c, e) { c = h.delayedCall(0, v, c, e || this); return c.vars.onComplete = c.vars.onReverseComplete = b, c.data = "isPause", this._hasPause = !0, this.add(c, a) }, a.removeLabel = function (a) { return delete this._labels[a], this }, a.getLabelTime = function (a) { return null != this._labels[a] ? this._labels[a] : -1 }, a._parseTimeOrLabel = function (a, b, c, e) {
				var d; if (e instanceof m && e.timeline === this) this.remove(e); else if (e && (e instanceof Array || e.push && y(e))) for (d = e.length; -1 < --d;)e[d] instanceof
					m && e[d].timeline === this && this.remove(e[d]); if ("string" == typeof b) return this._parseTimeOrLabel(b, c && "number" == typeof a && null == this._labels[b] ? a - this.duration() : 0, c); if (b = b || 0, "string" != typeof a || !isNaN(a) && null == this._labels[a]) null == a && (a = this.duration()); else { if (d = a.indexOf("="), -1 === d) return null == this._labels[a] ? c ? this._labels[a] = this.duration() + b : b : this._labels[a] + b; b = parseInt(a.charAt(d - 1) + "1", 10) * Number(a.substr(d + 1)); a = 1 < d ? this._parseTimeOrLabel(a.substr(0, d - 1), 0, c) : this.duration() } return Number(a) +
						b
			}, a.seek = function (a, b) { return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), !1 !== b) }, a.stop = function () { return this.paused(!0) }, a.gotoAndPlay = function (a, b) { return this.play(a, b) }, a.gotoAndStop = function (a, b) { return this.pause(a, b) }, a.render = function (a, b, c) {
			this._gc && this._enabled(!0, !1); var d, f, k, h, n, m, u, q = this._dirty ? this.totalDuration() : this._totalDuration, v = this._time, t = this._startTime, r = this._timeScale, z = this._paused; if (a >= q - 1E-7) this._totalTime = this._time = q, this._reversed || this._hasPausedChild() ||
				(f = !0, h = "onComplete", n = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= a && -1E-7 <= a || 0 > this._rawPrevTime || 1E-10 === this._rawPrevTime) && this._rawPrevTime !== a && this._first && (n = !0, 1E-10 < this._rawPrevTime && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : 1E-10, a = q + 1E-4; else if (1E-7 > a) if (this._totalTime = this._time = 0, (0 !== v || 0 === this._duration && 1E-10 !== this._rawPrevTime && (0 < this._rawPrevTime || 0 > a && 0 <= this._rawPrevTime)) && (h = "onReverseComplete", f = this._reversed),
					0 > a) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (n = f = !0, h = "onReverseComplete") : 0 <= this._rawPrevTime && this._first && (n = !0), this._rawPrevTime = a; else { if (this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : 1E-10, 0 === a && f) for (d = this._first; d && 0 === d._startTime;)d._duration || (f = !1), d = d._next; a = 0; this._initted || (n = !0) } else {
						if (this._hasPause && !this._forcingPlayhead && !b) {
							if (a >= v) for (d = this._first; d && d._startTime <= a && !m;)d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime &&
								0 === this._rawPrevTime || (m = d), d = d._next; else for (d = this._last; d && d._startTime >= a && !m;)d._duration || "isPause" === d.data && 0 < d._rawPrevTime && (m = d), d = d._prev; m && (this._time = a = m._startTime, this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay))
						} this._totalTime = this._time = this._rawPrevTime = a
			} if (this._time !== v && this._first || c || n || m) {
				if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== v && 0 < a && (this._active = !0), 0 === v && this.vars.onStart && (0 === this._time && this._duration ||
					b || this._callback("onStart")), u = this._time, u >= v) for (d = this._first; d && (k = d._next, u === this._time && (!this._paused || z));)(d._active || d._startTime <= u && !d._paused && !d._gc) && (m === d && this.pause(), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = k; else for (d = this._last; d && (k = d._prev, u === this._time && (!this._paused || z));) {
						if (d._active || d._startTime <= v && !d._paused && !d._gc) {
							if (m === d) {
								for (m = d._prev; m && m.endTime() >
									this._time;)m.render(m._reversed ? m.totalDuration() - (a - m._startTime) * m._timeScale : (a - m._startTime) * m._timeScale, b, c), m = m._prev; m = null; this.pause()
							} d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)
						} d = k
					} this._onUpdate && (b || (w.length && e(), this._callback("onUpdate"))); h && (this._gc || (t === this._startTime || r !== this._timeScale) && (0 === this._time || q >= this.totalDuration()) && (f && (w.length && e(), this._timeline.autoRemoveChildren &&
						this._enabled(!1, !1), this._active = !1), !b && this.vars[h] && this._callback(h)))
			}
			}, a._hasPausedChild = function () { for (var a = this._first; a;) { if (a._paused || a instanceof t && a._hasPausedChild()) return !0; a = a._next } return !1 }, a.getChildren = function (a, b, c, e) { e = e || -9999999999; for (var d = [], f = this._first, g = 0; f;)f._startTime < e || (f instanceof h ? !1 !== b && (d[g++] = f) : (!1 !== c && (d[g++] = f), !1 !== a && (d = d.concat(f.getChildren(!0, b, c)), g = d.length))), f = f._next; return d }, a.getTweensOf = function (a, b) {
				var d, c = this._gc, e = [], f = 0; c && this._enabled(!0,
					!0); var k = h.getTweensOf(a); for (d = k.length; -1 < --d;)(k[d].timeline === this || b && this._contains(k[d])) && (e[f++] = k[d]); return c && this._enabled(!1, !0), e
			}, a.recent = function () { return this._recent }, a._contains = function (a) { for (a = a.timeline; a;) { if (a === this) return !0; a = a.timeline } return !1 }, a.shiftChildren = function (a, b, c) { c = c || 0; for (var d, e = this._first, f = this._labels; e;)e._startTime >= c && (e._startTime += a), e = e._next; if (b) for (d in f) f[d] >= c && (f[d] += a); return this._uncache(!0) }, a._kill = function (a, b) {
				if (!a && !b) return this._enabled(!1,
					!1); for (var d = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), c = d.length, e = !1; -1 < --c;)d[c]._kill(a, b) && (e = !0); return e
			}, a.clear = function (a) { var b = this.getChildren(!1, !0, !0), d = b.length; for (this._time = this._totalTime = 0; -1 < --d;)b[d]._enabled(!1, !1); return !1 !== a && (this._labels = {}), this._uncache(!0) }, a.invalidate = function () { for (var a = this._first; a;)a.invalidate(), a = a._next; return m.prototype.invalidate.call(this) }, a._enabled = function (a, b) {
				if (a === this._gc) for (var d = this._first; d;)d._enabled(a, !0), d = d._next;
				return c.prototype._enabled.call(this, a, b)
			}, a.totalTime = function (a, b, c) { this._forcingPlayhead = !0; var d = m.prototype.totalTime.apply(this, arguments); return this._forcingPlayhead = !1, d }, a.duration = function (a) { return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a), this) : (this._dirty && this.totalDuration(), this._duration) }, a.totalDuration = function (a) {
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
					this._first, c = this._time; b;)b._startTime === c && "isPause" === b.data && (b._rawPrevTime = 0), b = b._next; return m.prototype.paused.apply(this, arguments)
			}, a.usesFrames = function () { for (var a = this._timeline; a._timeline;)a = a._timeline; return a === m._rootFramesTimeline }, a.rawTime = function () { return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale }, t
	}, !0); _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (m, c, h) {
		var t = function (a) {
			m.call(this, a);
			this._repeat = this.vars.repeat || 0; this._repeatDelay = this.vars.repeatDelay || 0; this._cycle = 0; this._yoyo = !0 === this.vars.yoyo; this._dirty = !0
		}, a = c._internals, r = a.lazyTweens, b = a.lazyRender, y = _gsScope._gsDefine.globals, w = new h(null, null, 1, 0); h = t.prototype = new m; return h.constructor = t, h.kill()._gc = !1, t.version = "1.19.0", h.invalidate = function () { return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), m.prototype.invalidate.call(this) },
			h.addCallback = function (a, b, k, h) { return this.add(c.delayedCall(0, a, k, h), b) }, h.removeCallback = function (a, b) { if (a) if (null == b) this._kill(null, a); else for (var c = this.getTweensOf(a, !1), e = c.length, h = this._parseTimeOrLabel(b); -1 < --e;)c[e]._startTime === h && c[e]._enabled(!1, !1); return this }, h.removePause = function (a) { return this.removeCallback(m._internals.pauseCallback, a) }, h.tweenTo = function (a, b) {
				b = b || {}; var e, h, m, f = { ease: w, useFrames: this.usesFrames(), immediateRender: !1 }, d = b.repeat && y.TweenMax || c; for (h in b) f[h] =
					b[h]; return f.time = this._parseTimeOrLabel(a), e = Math.abs(Number(f.time) - this._time) / this._timeScale || .001, m = new d(this, e, f), f.onStart = function () { m.target.paused(!0); m.vars.time !== m.target.time() && e === m.duration() && m.duration(Math.abs(m.vars.time - m.target.time()) / m.target._timeScale); b.onStart && m._callback("onStart") }, m
			}, h.tweenFromTo = function (a, b, c) {
				c = c || {}; a = this._parseTimeOrLabel(a); c.startAt = { onComplete: this.seek, onCompleteParams: [a], callbackScope: this }; c.immediateRender = !1 !== c.immediateRender;
				b = this.tweenTo(b, c); return b.duration(Math.abs(b.vars.time - a) / this._timeScale || .001)
			}, h.render = function (a, c, k) {
			this._gc && this._enabled(!0, !1); var e, h, f, d, m, q, g, t = this._dirty ? this.totalDuration() : this._totalDuration, w = this._duration, y = this._time, S = this._totalTime, O = this._startTime, K = this._timeScale, G = this._rawPrevTime, E = this._paused, P = this._cycle; if (a >= t - 1E-7) this._locked || (this._totalTime = t, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (h = !0, d = "onComplete", m = !!this._timeline.autoRemoveChildren,
				0 === this._duration && (0 >= a && -1E-7 <= a || 0 > G || 1E-10 === G) && G !== a && this._first && (m = !0, 1E-10 < G && (d = "onReverseComplete"))), this._rawPrevTime = this._duration || !c || a || this._rawPrevTime === a ? a : 1E-10, this._yoyo && 0 !== (1 & this._cycle) ? this._time = a = 0 : (this._time = w, a = w + 1E-4); else if (1E-7 > a) if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== y || 0 === w && 1E-10 !== G && (0 < G || 0 > a && 0 <= G) && !this._locked) && (d = "onReverseComplete", h = this._reversed), 0 > a) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ?
					(m = h = !0, d = "onReverseComplete") : 0 <= G && this._first && (m = !0), this._rawPrevTime = a; else { if (this._rawPrevTime = w || !c || a || this._rawPrevTime === a ? a : 1E-10, 0 === a && h) for (e = this._first; e && 0 === e._startTime;)e._duration || (h = !1), e = e._next; a = 0; this._initted || (m = !0) } else if (0 === w && 0 > G && (m = !0), this._time = this._rawPrevTime = a, this._locked || (this._totalTime = a, 0 !== this._repeat && (e = w + this._repeatDelay, this._cycle = this._totalTime / e >> 0, 0 !== this._cycle && this._cycle === this._totalTime / e && a >= S && this._cycle-- , this._time = this._totalTime -
						this._cycle * e, this._yoyo && 0 !== (1 & this._cycle) && (this._time = w - this._time), this._time > w ? (this._time = w, a = w + 1E-4) : 0 > this._time ? this._time = a = 0 : a = this._time)), this._hasPause && !this._forcingPlayhead && !c) {
							if (a = this._time, a >= y) for (e = this._first; e && e._startTime <= a && !q;)e._duration || "isPause" !== e.data || e.ratio || 0 === e._startTime && 0 === this._rawPrevTime || (q = e), e = e._next; else for (e = this._last; e && e._startTime >= a && !q;)e._duration || "isPause" === e.data && 0 < e._rawPrevTime && (q = e), e = e._prev; q && (this._time = a = q._startTime,
								this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay))
			} if (this._cycle !== P && !this._locked) {
				e = this._yoyo && 0 !== (1 & P); var B = e === (this._yoyo && 0 !== (1 & this._cycle)), L = this._totalTime, J = this._cycle, T = this._rawPrevTime, aa = this._time; if ((this._totalTime = P * w, this._cycle < P ? e = !e : this._totalTime += w, this._time = y, this._rawPrevTime = 0 === w ? G - 1E-4 : G, this._cycle = P, this._locked = !0, y = e ? 0 : w, this.render(y, c, 0 === w), c || this._gc || this.vars.onRepeat && this._callback("onRepeat"), y !== this._time) || (B && (y = e ? w + 1E-4 :
					-1E-4, this.render(y, !0, !1)), this._locked = !1, this._paused && !E)) return; this._time = aa; this._totalTime = L; this._cycle = J; this._rawPrevTime = T
			} if (!(this._time !== y && this._first || k || m || q)) return void (S !== this._totalTime && this._onUpdate && (c || this._callback("onUpdate"))); if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== S && 0 < a && (this._active = !0), 0 === S && this.vars.onStart && (0 === this._totalTime && this._totalDuration || c || this._callback("onStart")), g = this._time, g >= y) for (e = this._first; e &&
				(f = e._next, g === this._time && (!this._paused || E));)(e._active || e._startTime <= this._time && !e._paused && !e._gc) && (q === e && this.pause(), e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, c, k) : e.render((a - e._startTime) * e._timeScale, c, k)), e = f; else for (e = this._last; e && (f = e._prev, g === this._time && (!this._paused || E));) {
					if (e._active || e._startTime <= y && !e._paused && !e._gc) {
						if (q === e) {
							for (q = e._prev; q && q.endTime() > this._time;)q.render(q._reversed ? q.totalDuration() - (a - q._startTime) *
								q._timeScale : (a - q._startTime) * q._timeScale, c, k), q = q._prev; q = null; this.pause()
						} e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, c, k) : e.render((a - e._startTime) * e._timeScale, c, k)
					} e = f
				} this._onUpdate && (c || (r.length && b(), this._callback("onUpdate"))); d && (this._locked || this._gc || (O === this._startTime || K !== this._timeScale) && (0 === this._time || t >= this.totalDuration()) && (h && (r.length && b(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !c &&
					this.vars[d] && this._callback(d)))
			}, h.getActive = function (a, b, c) { null == a && (a = !0); null == b && (b = !0); null == c && (c = !1); var e = []; c = this.getChildren(a, b, c); var k = 0, f = c.length; for (a = 0; f > a; a++)b = c[a], b.isActive() && (e[k++] = b); return e }, h.getLabelAfter = function (a) { a || 0 !== a && (a = this._time); var b, c = this.getLabelsArray(), e = c.length; for (b = 0; e > b; b++)if (c[b].time > a) return c[b].name; return null }, h.getLabelBefore = function (a) {
			null == a && (a = this._time); for (var b = this.getLabelsArray(), c = b.length; -1 < --c;)if (b[c].time < a) return b[c].name;
				return null
			}, h.getLabelsArray = function () { var a, b = [], c = 0; for (a in this._labels) b[c++] = { time: this._labels[a], name: a }; return b.sort(function (a, b) { return a.time - b.time }), b }, h.progress = function (a, b) { return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration() }, h.totalProgress = function (a, b) { return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration() }, h.totalDuration =
			function (a) { return arguments.length ? -1 !== this._repeat && a ? this.timeScale(this.totalDuration() / a) : this : (this._dirty && (m.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration) }, h.time = function (a, b) {
				return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) :
					0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, b)) : this._time
			}, h.repeat = function (a) { return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat }, h.repeatDelay = function (a) { return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay }, h.yoyo = function (a) { return arguments.length ? (this._yoyo = a, this) : this._yoyo }, h.currentLabel = function (a) { return arguments.length ? this.seek(a, !0) : this.getLabelBefore(this._time + 1E-8) }, t
	}, !0); (function () {
		var m =
			180 / Math.PI, c = [], h = [], t = [], a = {}, r = _gsScope._gsDefine.globals, b = function (a, b, c, e) { c === e && (c = e - (e - b) / 1E6); a === b && (b = a + (c - a) / 1E6); this.a = a; this.b = b; this.c = c; this.d = e; this.da = e - a; this.ca = c - a; this.ba = b - a }, y = function (a, b, c, e) { var d = { a: a }, f = {}, k = {}, g = { c: e }, h = (a + b) / 2, m = (b + c) / 2; c = (c + e) / 2; b = (h + m) / 2; m = (m + c) / 2; var n = (m - b) / 8; return d.b = h + (a - h) / 4, f.b = b + n, d.c = f.a = (d.b + f.b) / 2, f.c = k.a = (b + m) / 2, k.b = m - n, g.b = c + (e - c) / 4, k.c = g.a = (k.b + g.b) / 2, [d, f, k, g] }, w = function (e, m, q, f, d, u) {
				var k, g, n = {}, v = [], r = u || e[0]; d = "string" == typeof d ?
					"," + d + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,"; null == m && (m = 1); for (g in e[0]) v.push(g); if (1 < e.length) { var w = e[e.length - 1]; var O = !0; for (k = v.length; -1 < --k;)if (g = v[k], .05 < Math.abs(r[g] - w[g])) { O = !1; break } O && (e = e.concat(), u && e.unshift(u), e.push(e[1]), u = e[e.length - 3]) } c.length = h.length = t.length = 0; for (k = v.length; -1 < --k;) {
						g = v[k]; a[g] = -1 !== d.indexOf("," + g + ","); w = g; var K = void 0;
						r = void 0; var G, E = void 0, P = e, B = g, L = a[g]; var J = u; var T = []; if (J) for (P = [J].concat(P), G = P.length; -1 < --G;)"string" == typeof (K = P[G][B]) && "=" === K.charAt(1) && (P[G][B] = J[B] + Number(K.charAt(0) + K.substr(2))); if (E = P.length - 2, 0 > E) r = (T[0] = new b(P[0][B], 0, 0, P[-1 > E ? 0 : 1][B]), T); else { for (G = 0; E > G; G++)J = P[G][B], K = P[G + 1][B], T[G] = new b(J, 0, 0, K), L && (r = P[G + 2][B], c[G] = (c[G] || 0) + (K - J) * (K - J), h[G] = (h[G] || 0) + (r - K) * (r - K)); r = (T[G] = new b(P[G][B], 0, 0, P[G + 1][B]), T) } n[w] = r
					} for (k = c.length; -1 < --k;)c[k] = Math.sqrt(c[k]), h[k] = Math.sqrt(h[k]);
				if (!f) { for (k = v.length; -1 < --k;)if (a[g]) for (e = n[v[k]], w = e.length - 1, d = 0; w > d; d++)u = e[d + 1].da / h[d] + e[d].da / c[d] || 0, t[d] = (t[d] || 0) + u * u; for (k = t.length; -1 < --k;)t[k] = Math.sqrt(t[k]) } k = v.length; for (d = q ? 4 : 1; -1 < --k;) {
					g = v[k]; e = n[g]; G = r = w = u = void 0; B = P = E = void 0; var aa; L = e; T = m; K = q; J = f; var ia = a[g], U = L.length - 1, la = 0, W = L[0].a; for (aa = 0; U > aa; aa++) {
						g = L[la]; var V = g.a; var Z = g.d; var ca = L[la + 1].d; ia ? (r = c[aa], w = h[aa], u = (w + r) * T * .25 / (J ? .5 : t[aa] || .5), B = Z - (Z - V) * (J ? .5 * T : 0 !== r ? u / r : 0), P = Z + (ca - Z) * (J ? .5 * T : 0 !== w ? u / w : 0), E = Z - (B + ((P - B) *
							(3 * r / (r + w) + .5) / 4 || 0))) : (B = Z - (Z - V) * T * .5, P = Z + (ca - Z) * T * .5, E = Z - (B + P) / 2); B += E; P += E; g.c = ca = B; 0 !== aa ? g.b = W : g.b = W = g.a + .6 * (g.c - g.a); g.da = Z - V; g.ca = ca - V; g.ba = W - V; K ? (G = y(V, W, ca, Z), L.splice(la, 1, G[0], G[1], G[2], G[3]), la += 4) : la++; W = P
					} g = L[la]; g.b = W; g.c = W + .4 * (g.d - W); g.da = g.d - g.a; g.ca = g.c - g.a; g.ba = W - g.a; K && (G = y(g.a, W, g.c, g.d), L.splice(la, 1, G[0], G[1], G[2], G[3])); O && (e.splice(0, d), e.splice(e.length - d, d))
				} return n
			}, e = _gsScope._gsDefine.plugin({
				propName: "bezier", priority: -1, version: "1.3.7", API: 2, global: !0, init: function (a,
					c, e) {
					this._target = a; c instanceof Array && (c = { values: c }); this._func = {}; this._mod = {}; this._props = []; this._timeRes = null == c.timeResolution ? 6 : parseInt(c.timeResolution, 10); var f, d, k, h = c.values || [], g = {}; var m = h[0]; this._autoRotate = (f = c.autoRotate || e.vars.orientToBezier) ? f instanceof Array ? f : [["x", "y", "rotation", !0 === f ? 0 : Number(f) || 0]] : null; for (n in m) this._props.push(n); for (m = this._props.length; -1 < --m;) {
						var n = this._props[m]; this._overwriteProps.push(n); f = this._func[n] = "function" == typeof a[n]; g[n] = f ? a[n.indexOf("set") ||
							"function" != typeof a["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(a[n]); k || g[n] !== h[0][n] && (k = g)
					} if ("cubic" !== c.type && "quadratic" !== c.type && "soft" !== c.type) g = w(h, isNaN(c.curviness) ? 1 : c.curviness, !1, "thruBasic" === c.type, c.correlate, k); else {
						m = h; h = (h = c.type) || "soft"; var q, v, t; c = {}; k = "cubic" === h ? 3 : 2; var r = "soft" === h, y = []; if (r && g && (m = [g].concat(m)), null == m || m.length < k + 1) throw "invalid Bezier data"; for (E in m[0]) y.push(E); for (v = y.length; -1 < --v;) {
							var E = y[v]; c[E] = f = []; var P = 0; var B = m.length; for (t =
								0; B > t; t++)h = null == g ? m[t][E] : "string" == typeof (q = m[t][E]) && "=" === q.charAt(1) ? g[E] + Number(q.charAt(0) + q.substr(2)) : Number(q), r && 1 < t && B - 1 > t && (f[P++] = (h + f[P - 2]) / 2), f[P++] = h; B = P - k + 1; for (t = P = 0; B > t; t += k) { h = f[t]; E = f[t + 1]; q = f[t + 2]; var L = 2 === k ? 0 : f[t + 3]; f[P++] = q = 3 === k ? new b(h, E, q, L) : new b(h, (2 * E + h) / 3, (2 * E + q) / 3, q) } f.length = P
						} g = c
					} if (this._beziers = g, this._segCount = this._beziers[n].length, this._timeRes) {
						f = this._beziers; n = this._timeRes; n = n >> 0 || 6; g = []; E = []; m = q = 0; c = n - 1; k = []; h = []; for (d in f) for (B = f[d], P = g, r = n, y = 1 / r,
							L = B.length; -1 < --L;) { var J = B[L]; var T = J.a; t = J.d - T; v = J.c - T; T = J.b - T; var aa = 0; for (J = 1; r >= J; J++) { var ia = y * J; var U = 1 - ia; ia = aa - (aa = (ia * ia * t + 3 * U * (ia * v + U * T)) * ia); U = L * r + J - 1; P[U] = (P[U] || 0) + ia * ia } } f = g.length; for (d = 0; f > d; d++)q += Math.sqrt(g[d]), v = d % n, h[v] = q, v === c && (m += q, v = d / n >> 0, k[v] = h, E[v] = m, q = 0, h = []); this._length = m; this._lengths = E; this._segments = k; this._l1 = this._li = this._s1 = this._si = 0; this._l2 = this._lengths[0]; this._curSeg = this._segments[0]; this._s2 = this._curSeg[0]; this._prec = 1 / this._curSeg.length
					} if (f = this._autoRotate) for (this._initialRotations =
						[], f[0] instanceof Array || (this._autoRotate = f = [f]), m = f.length; -1 < --m;) { for (d = 0; 3 > d; d++)n = f[m][d], this._func[n] = "function" == typeof a[n] ? a[n.indexOf("set") || "function" != typeof a["get" + n.substr(3)] ? n : "get" + n.substr(3)] : !1; n = f[m][2]; this._initialRotations[m] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0; this._overwriteProps.push(n) } return this._startRatio = e.vars.runBackwards ? 1 : 0, !0
				}, set: function (a) {
					var b, c, e; var d = this._segCount; var k = this._func, h = this._target, g = a !== this._startRatio;
					if (this._timeRes) {
						if (b = this._lengths, e = this._curSeg, a *= this._length, c = this._li, a > this._l2 && d - 1 > c) { for (--d; d > c && (this._l2 = b[++c]) <= a;); this._l1 = b[c - 1]; this._li = c; this._curSeg = e = this._segments[c]; this._s2 = e[this._s1 = this._si = 0] } else if (a < this._l1 && 0 < c) { for (; 0 < c && (this._l1 = b[--c]) >= a;); 0 === c && a < this._l1 ? this._l1 = 0 : c++; this._l2 = b[c]; this._li = c; this._curSeg = e = this._segments[c]; this._s1 = e[(this._si = e.length - 1) - 1] || 0; this._s2 = e[this._si] } if (b = c, a -= this._l1, c = this._si, a > this._s2 && c < e.length - 1) {
							for (d = e.length -
								1; d > c && (this._s2 = e[++c]) <= a;); this._s1 = e[c - 1]; this._si = c
						} else if (a < this._s1 && 0 < c) { for (; 0 < c && (this._s1 = e[--c]) >= a;); 0 === c && a < this._s1 ? this._s1 = 0 : c++; this._s2 = e[c]; this._si = c } d = (c + (a - this._s1) / (this._s2 - this._s1)) * this._prec || 0
					} else b = 0 > a ? 0 : 1 <= a ? d - 1 : d * a >> 0, d *= a - 1 / d * b; var q = 1 - d; for (c = this._props.length; -1 < --c;) { a = this._props[c]; e = this._beziers[a][b]; var t = (d * d * e.da + 3 * q * (d * e.ca + q * e.ba)) * d + e.a; this._mod[a] && (t = this._mod[a](t, h)); k[a] ? h[a](t) : h[a] = t } if (this._autoRotate) {
						var r, w, y, K, G = this._autoRotate; for (c =
							G.length; -1 < --c;) { a = G[c][2]; var E = G[c][3] || 0; var P = !0 === G[c][4] ? 1 : m; e = this._beziers[G[c][0]]; q = this._beziers[G[c][1]]; e && q && (e = e[b], q = q[b], r = e.a + (e.b - e.a) * d, y = e.b + (e.c - e.b) * d, r += (y - r) * d, y += (e.c + (e.d - e.c) * d - y) * d, w = q.a + (q.b - q.a) * d, K = q.b + (q.c - q.b) * d, w += (K - w) * d, K += (q.c + (q.d - q.c) * d - K) * d, t = g ? Math.atan2(K - w, y - r) * P + E : this._initialRotations[c], this._mod[a] && (t = this._mod[a](t, h)), k[a] ? h[a](t) : h[a] = t) }
					}
				}
			}), q = e.prototype; e.bezierThrough = w; e.cubicToQuadratic = y; e._autoCSS = !0; e.quadraticToCubic = function (a, c, e) {
				return new b(a,
					(2 * c + a) / 3, (2 * c + e) / 3, e)
			}; e._cssRegister = function () {
				var a = r.CSSPlugin; if (a) {
					a = a._internals; var b = a._parseToProxy, c = a._setPluginRatio, f = a.CSSPropTween; a._registerComplexSpecialProp("bezier", {
						parser: function (a, k, h, g, m, n) {
						k instanceof Array && (k = { values: k }); n = new e; var d, q = k.values, u = q.length - 1, t = [], r = {}; if (0 > u) return m; for (h = 0; u >= h; h++) { var v = b(a, q[h], g, m, n, u !== h); t[h] = v.end } for (d in k) r[d] = k[d]; return r.values = t, m = new f(a, "bezier", 0, 0, v.pt, 2), m.data = v, m.plugin = n, m.setRatio = c, 0 === r.autoRotate && (r.autoRotate =
							!0), !r.autoRotate || r.autoRotate instanceof Array || (h = !0 === r.autoRotate ? 0 : Number(r.autoRotate), r.autoRotate = null != v.end.left ? [["left", "top", "rotation", h, !1]] : null != v.end.x ? [["x", "y", "rotation", h, !1]] : !1), r.autoRotate && (g._transform || g._enableTransforms(!1), v.autoRotate = g._target._gsTransform, v.proxy.rotation = v.autoRotate.rotation || 0, g._overwriteProps.push("rotation")), n._onInitTween(v.proxy, r, g._tween), m
						}
					})
				}
			}; q._mod = function (a) {
				for (var b, c = this._overwriteProps, e = c.length; -1 < --e;)(b = a[c[e]]) && "function" ==
					typeof b && (this._mod[c[e]] = b)
			}; q._kill = function (a) { var b, c, e = this._props; for (b in this._beziers) if (b in a) for (delete this._beziers[b], delete this._func[b], c = e.length; -1 < --c;)e[c] === b && e.splice(c, 1); if (e = this._autoRotate) for (c = e.length; -1 < --c;)a[e[c][2]] && e.splice(c, 1); return this._super._kill.call(this, a) }
	})(); _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (m, c) {
		var h, t, a, r, b = function () { m.call(this, "css"); this._overwriteProps.length = 0; this.setRatio = b.prototype.setRatio },
		y = _gsScope._gsDefine.globals, w = {}, e = b.prototype = new m("css"); e.constructor = b; b.version = "1.19.0"; b.API = 2; b.defaultTransformPerspective = 0; b.defaultSkewType = "compensated"; b.defaultSmoothOrigin = !0; e = "px"; b.suffixMap = { top: e, right: e, bottom: e, left: e, width: e, height: e, fontSize: e, padding: e, margin: e, perspective: e, lineHeight: "" }; var q, k, n, v, f, d, u, z, g = /(?:\-|\.|\b)(\d|\.|e\-)+/g, C = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, Q = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, R = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
			S = /(?:\d|\-|\+|=|#|\.)*/g, O = /opacity *= *([^)]*)/i, K = /opacity:([^;]*)/i, G = /alpha\(opacity *=.+?\)/i, E = /^(rgb|hsl)/, P = /([A-Z])/g, B = /-([a-z])/gi, L = /(^(?:url\("|url\())|(?:("\))$|\)$)/gi, J = function (a, b) { return b.toUpperCase() }, T = /(?:Left|Right|Width)/i, aa = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, ia = /progid:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, U = /,(?=[^\)]*(?:\(|$))/gi, la = /[\s,\(]/i, W = Math.PI / 180, V = 180 / Math.PI, Z = {}, ca = document, ta = function (a) {
				return ca.createElementNS ? ca.createElementNS("http://www.w3.org/1999/xhtml",
					a) : ca.createElement(a)
			}, ja = ta("div"), da = ta("img"), ya = b._internals = { _specialProps: w }, ma = navigator.userAgent, ua = function () {
				var a = ma.indexOf("Android"), b = ta("a"); return n = -1 !== ma.indexOf("Safari") && -1 === ma.indexOf("Chrome") && (-1 === a || 3 < Number(ma.substr(a + 8, 1))), f = n && 6 > Number(ma.substr(ma.indexOf("Version/") + 8, 1)), v = -1 !== ma.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(ma) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(ma)) && (d = parseFloat(RegExp.$1)), b ? (b.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(b.style.opacity)) :
					!1
			}(), qa = function (a) { return O.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1 }, wa = "", X = "", na = function (a, b) { b = b || ja; var c, d = b.style; if (void 0 !== d[a]) return a; a = a.charAt(0).toUpperCase() + a.substr(1); var e = ["O", "Moz", "ms", "Ms", "Webkit"]; for (c = 5; -1 < --c && void 0 === d[e[c] + a];); return 0 <= c ? (X = 3 === c ? "ms" : e[c], wa = "-" + X.toLowerCase() + "-", X + a) : null }, fa = ca.defaultView ? ca.defaultView.getComputedStyle : function () { }, p = b.getStyle = function (a, b, c, d, e) {
				var f;
				return ua || "opacity" !== b ? (!d && a.style[b] ? f = a.style[b] : (c = c || fa(a)) ? f = c[b] || c.getPropertyValue(b) || c.getPropertyValue(b.replace(P, "-$1").toLowerCase()) : a.currentStyle && (f = a.currentStyle[b]), null == e || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : e) : qa(a)
			}, x = ya.convertToPixels = function (a, d, e, f, g) {
				if ("px" === f || !f) return e; if ("auto" === f || !e) return 0; var k, h, l = T.test(d), m = a; var n = ja.style; var q = 0 > e, u = 1 === e; if (q && (e = -e), u && (e *= 100), "%" === f && -1 !== d.indexOf("border")) n = e / 100 * (l ? a.clientWidth : a.clientHeight);
				else {
					if (n.cssText = "border:0 solid red;position:" + p(a, "position") + ";line-height:0;", "%" !== f && m.appendChild && "v" !== f.charAt(0) && "rem" !== f) n[l ? "borderLeftWidth" : "borderTopWidth"] = e + f; else { if (m = a.parentNode || ca.body, k = m._gsCache, h = c.ticker.frame, k && l && k.time === h) return k.width * e / 100; n[l ? "width" : "height"] = e + f } m.appendChild(ja); n = parseFloat(ja[l ? "offsetWidth" : "offsetHeight"]); m.removeChild(ja); l && "%" === f && !1 !== b.cacheWidths && (k = m._gsCache = m._gsCache || {}, k.time = h, k.width = n / e * 100); 0 !== n || g || (n = x(a, d, e, f,
						!0))
				} return u && (n /= 100), q ? -n : n
			}, D = ya.calculateOffset = function (a, b, c) { if ("absolute" !== p(a, "position", c)) return 0; var d = "left" === b ? "Left" : "Top"; c = p(a, "margin" + d, c); return a["offset" + d] - (x(a, b, parseFloat(c), c.replace(S, "")) || 0) }, H = function (a, b) {
				var c, d, e = {}; if (b = b || fa(a, null)) if (c = b.length) for (; -1 < --c;) { var f = b[c]; -1 !== f.indexOf("-transform") && M !== f || (e[f.replace(B, J)] = b.getPropertyValue(f)) } else for (c in b) -1 !== c.indexOf("Transform") && ra !== c || (e[c] = b[c]); else if (b = a.currentStyle || a.style) for (c in b) "string" ==
					typeof c && void 0 === e[c] && (e[c.replace(B, J)] = b[c]); return ua || (e.opacity = qa(a)), d = $a(a, b, !1), e.rotation = d.rotation, e.skewX = d.skewX, e.scaleX = d.scaleX, e.scaleY = d.scaleY, e.x = d.x, e.y = d.y, Oa && (e.z = d.z, e.rotationX = d.rotationX, e.rotationY = d.rotationY, e.scaleZ = d.scaleZ), e.filters && delete e.filters, e
			}, oa = function (a, b, c, d, e) {
				var f, g, k, p = {}, h = a.style; for (g in c) "cssText" !== g && "length" !== g && isNaN(g) && (b[g] !== (f = c[g]) || e && e[g]) && -1 === g.indexOf("Origin") && ("number" == typeof f || "string" == typeof f) && (p[g] = "auto" !==
					f || "left" !== g && "top" !== g ? "" !== f && "auto" !== f && "none" !== f || "string" != typeof b[g] || "" === b[g].replace(R, "") ? f : 0 : D(a, g), void 0 !== h[g] && (k = new Qa(h, g, h[g], k))); if (d) for (g in d) "className" !== g && (p[g] = d[g]); return { difs: p, firstMPT: k }
			}, ba = { width: ["Left", "Right"], height: ["Top", "Bottom"] }, Ja = ["marginLeft", "marginRight", "marginTop", "marginBottom"], sa = function (a, b) {
				if ("contain" === a || "auto" === a || "auto auto" === a) return a + " "; null != a && "" !== a || (a = "0 0"); var c = a.split(" "); var d = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ?
					"100%" : c[0]; var e = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : c[1]; if (3 < c.length && !b) { c = a.split(", ").join(",").split(","); a = []; for (d = 0; d < c.length; d++)a.push(sa(c[d])); return a.join(",") } return null == e ? e = "center" === d ? "50%" : "0" : "center" === e && (e = "50%"), ("center" === d || isNaN(parseFloat(d)) && -1 === (d + "").indexOf("=")) && (d = "50%"), a = d + " " + e + (2 < c.length ? " " + c[2] : ""), b && (b.oxp = -1 !== d.indexOf("%"), b.oyp = -1 !== e.indexOf("%"), b.oxr = "=" === d.charAt(1), b.oyr = "=" === e.charAt(1), b.ox = parseFloat(d.replace(R,
						"")), b.oy = parseFloat(e.replace(R, "")), b.v = a), b || a
			}, ka = function (a, b) { return "function" == typeof a && (a = a(z, u)), "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b) || 0 }, l = function (a, b) { return "function" == typeof a && (a = a(z, u)), null == a ? b : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b : parseFloat(a) || 0 }, Ga = function (a, b, c, d) {
				var e, f, g, k; return "function" == typeof a && (a = a(z, u)), null == a ? g = b : "number" == typeof a ?
					g = a : (e = a.split("_"), k = "=" === a.charAt(1), f = (k ? parseInt(a.charAt(0) + "1", 10) * parseFloat(e[0].substr(2)) : parseFloat(e[0])) * (-1 === a.indexOf("rad") ? 1 : V) - (k ? 0 : b), e.length && (d && (d[c] = b + f), -1 !== a.indexOf("short") && (f %= 360, f !== f % 180 && (f = 0 > f ? f + 360 : f - 360)), -1 !== a.indexOf("_cw") && 0 > f ? f = (f + 3599999999640) % 360 - 360 * (f / 360 | 0) : -1 !== a.indexOf("ccw") && 0 < f && (f = (f - 3599999999640) % 360 - 360 * (f / 360 | 0))), g = b + f), 1E-6 > g && -1E-6 < g && (g = 0), g
			}, Fa = {
				aqua: [0, 255, 255], lime: [0, 255, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0,
					128, 128], blue: [0, 0, 255], navy: [0, 0, 128], white: [255, 255, 255], fuchsia: [255, 0, 255], olive: [128, 128, 0], yellow: [255, 255, 0], orange: [255, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [255, 0, 0], pink: [255, 192, 203], cyan: [0, 255, 255], transparent: [255, 255, 255, 0]
			}, Wa = function (a, b, c) { return a = 0 > a ? a + 1 : 1 < a ? a - 1 : a, 255 * (1 > 6 * a ? b + (c - b) * a * 6 : .5 > a ? c : 2 > 3 * a ? b + (c - b) * (2 / 3 - a) * 6 : b) + .5 | 0 }, ab = b.parseColor = function (a, b) {
				var c, d, e, f, k, p, h; if (a) if ("number" == typeof a) var l = [a >> 16, a >> 8 & 255, 255 & a]; else {
					if ("," === a.charAt(a.length -
						1) && (a = a.substr(0, a.length - 1)), Fa[a]) l = Fa[a]; else if ("#" === a.charAt(0)) 4 === a.length && (c = a.charAt(1), d = a.charAt(2), e = a.charAt(3), a = "#" + c + c + d + d + e + e), a = parseInt(a.substr(1), 16), l = [a >> 16, a >> 8 & 255, 255 & a]; else if ("hsl" === a.substr(0, 3)) if (l = h = a.match(g), b) { if (-1 !== a.indexOf("=")) return a.match(C) } else { var m = Number(l[0]) % 360 / 360; var x = Number(l[1]) / 100; var n = Number(l[2]) / 100; d = .5 >= n ? n * (x + 1) : n + x - n * x; c = 2 * n - d; 3 < l.length && (l[3] = Number(a[3])); l[0] = Wa(m + 1 / 3, c, d); l[1] = Wa(m, c, d); l[2] = Wa(m - 1 / 3, c, d) } else l = a.match(g) ||
							Fa.transparent; l[0] = Number(l[0]); l[1] = Number(l[1]); l[2] = Number(l[2]); 3 < l.length && (l[3] = Number(l[3]))
				} else l = Fa.black; return b && !h && (c = l[0] / 255, d = l[1] / 255, e = l[2] / 255, f = Math.max(c, d, e), k = Math.min(c, d, e), n = (f + k) / 2, f === k ? m = x = 0 : (p = f - k, x = .5 < n ? p / (2 - f - k) : p / (f + k), m = f === c ? (d - e) / p + (e > d ? 6 : 0) : f === d ? (e - c) / p + 2 : (c - d) / p + 4, m *= 60), l[0] = m + .5 | 0, l[1] = 100 * x + .5 | 0, l[2] = 100 * n + .5 | 0), l
			}, La = function (a, b) {
				var c, d = a.match(za) || [], e = 0, f = d.length ? "" : a; for (c = 0; c < d.length; c++) {
					var g = d[c]; var k = a.substr(e, a.indexOf(g, e) - e); e += k.length +
						g.length; g = ab(g, b); 3 === g.length && g.push(1); f += k + (b ? "hsla(" + g[0] + "," + g[1] + "%," + g[2] + "%," + g[3] : "rgba(" + g.join(",")) + ")"
				} return f + a.substr(e)
			}, za = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b"; for (e in Fa) za += "|" + e + "\\b"; za = new RegExp(za + ")", "gi"); b.colorStringFilter = function (a) { var b, c = a[0] + a[1]; za.test(c) && (b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla("), a[0] = La(a[0], b), a[1] = La(a[1], b)); za.lastIndex = 0 }; c.defaultStringFilter || (c.defaultStringFilter = b.colorStringFilter); var Ma =
				function (a, b, c, d) {
					if (null == a) return function (a) { return a }; var e, f = b ? (a.match(za) || [""])[0] : "", k = a.split(f).join("").match(Q) || [], p = a.substr(0, a.indexOf(k[0])), l = ")" === a.charAt(a.length - 1) ? ")" : "", h = -1 !== a.indexOf(" ") ? " " : ",", m = k.length, n = 0 < m ? k[0].replace(g, "") : ""; return m ? e = b ? function (a) {
						var b, g, x; if ("number" == typeof a) a += n; else if (d && U.test(a)) { a = a.replace(U, "|").split("|"); for (x = 0; x < a.length; x++)a[x] = e(a[x]); return a.join(",") } if (b = (a.match(za) || [f])[0], g = a.split(b).join("").match(Q) || [], x = g.length,
							m > x--) for (; ++x < m;)g[x] = c ? g[(x - 1) / 2 | 0] : k[x]; return p + g.join(h) + h + b + l + (-1 !== a.indexOf("inset") ? " inset" : "")
					} : function (a) { var b, f; if ("number" == typeof a) a += n; else if (d && U.test(a)) { a = a.replace(U, "|").split("|"); for (f = 0; f < a.length; f++)a[f] = e(a[f]); return a.join(",") } if (b = a.match(Q) || [], f = b.length, m > f--) for (; ++f < m;)b[f] = c ? b[(f - 1) / 2 | 0] : k[f]; return p + b.join(h) + l } : function (a) { return a }
				}, Xa = function (a) {
					return a = a.split(","), function (b, c, d, e, f, g, k) {
						d = (c + "").split(" "); k = {}; for (c = 0; 4 > c; c++)k[a[c]] = d[c] = d[c] ||
							d[(c - 1) / 2 >> 0]; return e.parse(b, k, f, g)
					}
				}, Qa = (ya._setPluginRatio = function (a) { this.plugin.setRatio(a); var b; var c = this.data; for (var d = c.proxy, e = c.firstMPT; e;) { var f = d[e.v]; e.r ? f = Math.round(f) : 1E-6 > f && -1E-6 < f && (f = 0); e.t[e.p] = f; e = e._next } if (c.autoRotate && (c.autoRotate.rotation = c.mod ? c.mod(d.rotation, this.t) : d.rotation), 1 === a || 0 === a) for (e = c.firstMPT, c = 1 === a ? "e" : "b"; e;) { if (b = e.t, b.type) { if (1 === b.type) { f = b.xs0 + b.s + b.xs1; for (a = 1; a < b.l; a++)f += b["xn" + a] + b["xs" + (a + 1)]; b[c] = f } } else b[c] = b.s + b.xs0; e = e._next } },
					function (a, b, c, d, e) { this.t = a; this.p = b; this.v = c; this.r = e; d && (d._prev = this, this._next = d) }), va = (ya._parseToProxy = function (a, b, c, d, e, f) {
						var g, k, p = d, l = {}, h = {}; var m = c._transform; var x = Z; c._transform = null; Z = b; d = a = c.parse(a, b, d, e); Z = x; for (f && (c._transform = m, p && (p._prev = null, p._prev && (p._prev._next = null))); d && d !== p;) { if (1 >= d.type && (g = d.p, h[g] = d.s + d.c, l[g] = d.s, f || (k = new Qa(d, "s", g, k, d.r), d.c = 0), 1 === d.type)) for (c = d.l; 0 < --c;)m = "xn" + c, g = d.p + "_" + m, h[g] = d.data[m], l[g] = d[m], f || (k = new Qa(d, m, g, k, d.rxp[m])); d = d._next } return {
							proxy: l,
							end: h, firstMPT: k, pt: a
						}
					}, ya.CSSPropTween = function (a, b, c, d, e, f, g, k, p, l, m) { this.t = a; this.p = b; this.s = c; this.c = d; this.n = g || b; a instanceof va || r.push(this.n); this.r = k; this.type = f || 0; p && (this.pr = p, h = !0); this.b = void 0 === l ? c : l; this.e = void 0 === m ? c + d : m; e && (this._next = e, e._prev = this) }), Ya = function (a, b, c, d, e, f) { a = new va(a, b, c, d - c, e, -1, f); return a.b = c, a.e = a.xs0 = d, a }, Na = b.parseComplex = function (a, c, d, e, f, k, p, l, h, m) {
						d = d || k || ""; "function" == typeof e && (e = e(z, u)); p = new va(a, c, 0, 0, p, m ? 2 : 1, null, !1, l, d, e); e += ""; f && za.test(e +
							d) && (e = [d, e], b.colorStringFilter(e), d = e[0], e = e[1]); var x, n, t; a = d.split(", ").join(",").split(" "); c = e.split(", ").join(",").split(" "); l = a.length; var r = !1 !== q; (-1 !== e.indexOf(",") || -1 !== d.indexOf(",")) && (a = a.join(" ").replace(U, ", ").split(" "), c = c.join(" ").replace(U, ", ").split(" "), l = a.length); l !== c.length && (a = (k || "").split(" "), l = a.length); p.plugin = h; p.setRatio = m; for (d = za.lastIndex = 0; l > d; d++)if (x = a[d], h = c[d], t = parseFloat(x), t || 0 === t) p.appendXtra("", t, ka(h, t), h.replace(C, ""), r && -1 !== h.indexOf("px"),
								!0); else if (f && za.test(x)) {
									m = h.indexOf(")") + 1; m = ")" + (m ? h.substr(m) : ""); var v = -1 !== h.indexOf("hsl") && ua; x = ab(x, v); h = ab(h, v); (k = 6 < x.length + h.length) && !ua && 0 === h[3] ? (p["xs" + p.l] += p.l ? " transparent" : "transparent", p.e = p.e.split(c[d]).join("transparent")) : (ua || (k = !1), v ? p.appendXtra(k ? "hsla(" : "hsl(", x[0], ka(h[0], x[0]), ",", !1, !0).appendXtra("", x[1], ka(h[1], x[1]), "%,", !1).appendXtra("", x[2], ka(h[2], x[2]), k ? "%," : "%" + m, !1) : p.appendXtra(k ? "rgba(" : "rgb(", x[0], h[0] - x[0], ",", !0, !0).appendXtra("", x[1], h[1] - x[1],
										",", !0).appendXtra("", x[2], h[2] - x[2], k ? "," : m, !0), k && (x = 4 > x.length ? 1 : x[3], p.appendXtra("", x, (4 > h.length ? 1 : h[3]) - x, m, !1))); za.lastIndex = 0
								} else if (k = x.match(g)) { if (n = h.match(C), !n || n.length !== k.length) return p; for (h = m = 0; h < k.length; h++) { var w = k[h]; v = x.indexOf(w, m); p.appendXtra(x.substr(m, v - m), Number(w), ka(n[h], w), "", r && "px" === x.substr(v + w.length, 2), 0 === h); m = v + w.length } p["xs" + p.l] += x.substr(m) } else p["xs" + p.l] += p.l || p["xs" + p.l] ? " " + h : h; if (-1 !== e.indexOf("=") && p.data) {
									m = p.xs0 + p.data.s; for (d = 1; d < p.l; d++)m +=
										p["xs" + d] + p.data["xn" + d]; p.e = m + p["xs" + d]
								} return p.l || (p.type = -1, p.xs0 = p.e), p.xfirst || p
					}, Aa = 9; e = va.prototype; for (e.l = e.pr = 0; 0 < --Aa;)e["xn" + Aa] = 0, e["xs" + Aa] = ""; e.xs0 = ""; e._next = e._prev = e.xfirst = e.data = e.plugin = e.setRatio = e.rxp = null; e.appendXtra = function (a, b, c, d, e, f) {
						var g = this.l; return this["xs" + g] += f && (g || this["xs" + g]) ? " " + a : a || "", c || 0 === g || this.plugin ? (this.l++ , this.type = this.setRatio ? 2 : 1, this["xs" + this.l] = d || "", 0 < g ? (this.data["xn" + g] = b + c, this.rxp["xn" + g] = e, this["xn" + g] = b, this.plugin || (this.xfirst =
							new va(this, "xn" + g, b, c, this.xfirst || this, 0, this.n, e, this.pr), this.xfirst.xs0 = 0), this) : (this.data = { s: b + c }, this.rxp = {}, this.s = b, this.c = c, this.r = e, this)) : (this["xs" + g] += b + (d || ""), this)
					}; var eb = function (a, b) { b = b || {}; this.p = b.prefix ? na(a) || a : a; w[a] = w[this.p] = this; this.format = b.formatter || Ma(b.defaultValue, b.color, b.collapsible, b.multi); b.parser && (this.parse = b.parser); this.clrs = b.color; this.multi = b.multi; this.keyword = b.keyword; this.dflt = b.defaultValue; this.pr = b.priority || 0 }, ea = ya._registerComplexSpecialProp =
						function (a, b, c) { "object" != typeof b && (b = { parser: c }); var d = a.split(","), e = b.defaultValue; c = c || [e]; for (a = 0; a < d.length; a++)b.prefix = 0 === a && b.prefix, b.defaultValue = c[a] || e, new eb(d[a], b) }, Ra = ya._registerPluginProp = function (a) { if (!w[a]) { var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin"; ea(a, { parser: function (a, c, d, e, f, g, k) { var p = y.com.greensock.plugins[b]; p ? a = (p._cssRegister(), w[d].parse(a, c, d, e, f, g, k)) : (window.console && console.log("Error: " + b + " js file not loaded."), a = f); return a } }) } }; e = eb.prototype;
		e.parseComplex = function (a, b, c, d, e, f) { var g, k, p, h, l, m = this.keyword; if (this.multi && (U.test(c) || U.test(b) ? (k = b.replace(U, "|").split("|"), p = c.replace(U, "|").split("|")) : m && (k = [b], p = [c])), p) { var x = p.length > k.length ? p.length : k.length; for (g = 0; x > g; g++)b = k[g] = k[g] || this.dflt, c = p[g] = p[g] || this.dflt, m && (h = b.indexOf(m), l = c.indexOf(m), h !== l && (-1 === l ? k[g] = k[g].split(m).join("") : -1 === h && (k[g] += " " + m))); b = k.join(", "); c = p.join(", ") } return Na(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f) }; e.parse = function (b, c,
			d, e, f, g, k) { return this.parseComplex(b.style, this.format(p(b, this.p, a, !1, this.dflt)), this.format(c), f, g) }; b.registerSpecialProp = function (a, b, c) { ea(a, { parser: function (a, d, e, f, g, k, p) { g = new va(a, e, 0, 0, g, 2, e, !1, c); return g.plugin = k, g.setRatio = b(a, d, f._tween, e), g }, priority: c }) }; b.useSVGTransformAttr = n || v; var Ea, Ia = "scaleX scaleY scaleZ x y z skewX skewY rotation rotationX rotationY perspective xPercent yPercent".split(" "), ra = na("transform"), M = wa + "transform", Da = na("transformOrigin"), Oa = null !== na("perspective"),
				fb = ya.Transform = function () { this.perspective = parseFloat(b.defaultTransformPerspective) || 0; this.force3D = !1 !== b.defaultForce3D && Oa ? b.defaultForce3D || "auto" : !1 }, qb = window.SVGElement, Za = function (a, b, c) { var d; a = ca.createElementNS("http://www.w3.org/2000/svg", a); var e = /([a-z])([A-Z])/g; for (d in c) a.setAttributeNS(null, d.replace(e, "$1-$2").toLowerCase(), c[d]); return b.appendChild(a), a }, Pa = ca.documentElement, gb = function () {
					var a, b, c, e = d || /Android/i.test(ma) && !window.chrome; return ca.createElementNS && !e && (a =
						Za("svg", Pa), b = Za("rect", a, { width: 100, height: 50, x: 100 }), c = b.getBoundingClientRect().width, b.style[Da] = "50% 50%", b.style[ra] = "scaleX(0.5)", e = c === b.getBoundingClientRect().width && !(v && Oa), Pa.removeChild(a)), e
				}(), hb = function (a, c, d, e, f, g) {
					var k, p, h, l, m, x, n, q, u, t, r, v, w, y = a._gsTransform, I = kb(a, !0); y && (v = y.xOrigin, w = y.yOrigin); (!e || 2 > (k = e.split(" ")).length) && (x = a.getBBox(), c = sa(c).split(" "), k = [(-1 !== c[0].indexOf("%") ? parseFloat(c[0]) / 100 * x.width : parseFloat(c[0])) + x.x, (-1 !== c[1].indexOf("%") ? parseFloat(c[1]) /
						100 * x.height : parseFloat(c[1])) + x.y]); d.xOrigin = c = parseFloat(k[0]); d.yOrigin = l = parseFloat(k[1]); e && I !== jb && (m = I[0], x = I[1], n = I[2], q = I[3], u = I[4], t = I[5], r = m * q - x * n, p = q / r * c + -n / r * l + (n * t - q * u) / r, h = -x / r * c + m / r * l - (m * t - x * u) / r, c = d.xOrigin = k[0] = p, l = d.yOrigin = k[1] = h); y && (g && (d.xOffset = y.xOffset, d.yOffset = y.yOffset, y = d), f || !1 !== f && !1 !== b.defaultSmoothOrigin ? (p = c - v, h = l - w, y.xOffset += p * I[0] + h * I[2] - p, y.yOffset += p * I[1] + h * I[3] - h) : y.xOffset = y.yOffset = 0); g || a.setAttribute("data-svg-origin", k.join(" "))
				}, ib = function (a) {
					var b;
					if (b = qb && a.getBBox && a.getCTM) a: { try { b = a.getBBox(); break a } catch (pa) { } b = void 0 } return !(!b || !(!a.parentNode || a.parentNode.getBBox && a.parentNode.getCTM))
				}, jb = [1, 0, 0, 1, 0, 0], kb = function (a, b) {
					var c, d, e, f, k, h, l = a._gsTransform || new fb, m = a.style; if (ra ? d = p(a, M, null, !0) : a.currentStyle && (d = a.currentStyle.filter.match(aa), d = d && 4 === d.length ? [d[0].substr(4), Number(d[2].substr(4)), Number(d[1].substr(4)), d[3].substr(4), l.x || 0, l.y || 0].join() : ""), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, c && ra && ((h = "none" ===
						fa(a).display) || !a.parentNode) && (h && (f = m.display, m.display = "block"), a.parentNode || (k = 1, Pa.appendChild(a)), d = p(a, M, null, !0), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, f ? m.display = f : h && db(m, "display"), k && Pa.removeChild(a)), (l.svg || a.getBBox && ib(a)) && (c && -1 !== (m[ra] + "").indexOf("matrix") && (d = m[ra], c = 0), e = a.getAttribute("transform"), c && e && (-1 !== e.indexOf("matrix") ? (d = e, c = 0) : -1 !== e.indexOf("translate") && (d = "matrix(1,0,0,1," + e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", c = 0))), c) return jb; e = (d ||
							"").match(g) || []; for (Aa = e.length; -1 < --Aa;)f = Number(e[Aa]), e[Aa] = (k = f - (f |= 0)) ? (1E5 * k + (0 > k ? -.5 : .5) | 0) / 1E5 + f : f; return b && 6 < e.length ? [e[0], e[1], e[4], e[5], e[12], e[13]] : e
				}, $a = ya.getTransform = function (a, d, e, f) {
					if (a._gsTransform && e && !f) return a._gsTransform; var g, k, h, l = e ? a._gsTransform || new fb : new fb, m = 0 > l.scaleX, x = Oa ? parseFloat(p(a, Da, d, !1, "0 0 0").split(" ")[2]) || l.zOrigin || 0 : 0, n = parseFloat(b.defaultTransformPerspective) || 0; if (l.svg = !(!a.getBBox || !ib(a)), l.svg && (hb(a, p(a, Da, d, !1, "50% 50%") + "", l, a.getAttribute("data-svg-origin")),
						Ea = b.useSVGTransformAttr || gb), g = kb(a), g !== jb) {
							if (16 === g.length) {
								var q, u, t, r; n = g[0]; d = g[1]; f = g[2]; var v = g[3], w = g[4], y = g[5], z = g[6], D = g[7], I = g[8], H = g[9], F = g[10], Y = g[12], C = g[13], B = g[14], ba = g[11], pa = Math.atan2(z, F); l.zOrigin && (B = -l.zOrigin, Y = I * B - g[12], C = H * B - g[13], B = F * B + l.zOrigin - g[14]); l.rotationX = pa * V; pa && (r = Math.cos(-pa), h = Math.sin(-pa), q = w * r + I * h, u = y * r + H * h, t = z * r + F * h, I = w * -h + I * r, H = y * -h + H * r, F = z * -h + F * r, ba = D * -h + ba * r, w = q, y = u, z = t); pa = Math.atan2(-f, F); l.rotationY = pa * V; pa && (r = Math.cos(-pa), h = Math.sin(-pa), q =
									n * r - I * h, u = d * r - H * h, t = f * r - F * h, H = d * h + H * r, F = f * h + F * r, ba = v * h + ba * r, n = q, d = u, f = t); pa = Math.atan2(d, n); l.rotation = pa * V; pa && (r = Math.cos(-pa), h = Math.sin(-pa), n = n * r + w * h, u = d * r + y * h, y = d * -h + y * r, z = f * -h + z * r, d = u); l.rotationX && 359.9 < Math.abs(l.rotationX) + Math.abs(l.rotation) && (l.rotationX = l.rotation = 0, l.rotationY = 180 - l.rotationY); l.scaleX = (1E5 * Math.sqrt(n * n + d * d) + .5 | 0) / 1E5; l.scaleY = (1E5 * Math.sqrt(y * y + H * H) + .5 | 0) / 1E5; l.scaleZ = (1E5 * Math.sqrt(z * z + F * F) + .5 | 0) / 1E5; l.rotationX || l.rotationY ? l.skewX = 0 : (l.skewX = w || y ? Math.atan2(w,
										y) * V + l.rotation : l.skewX || 0, 90 < Math.abs(l.skewX) && 270 > Math.abs(l.skewX) && (m ? (l.scaleX *= -1, l.skewX += 0 >= l.rotation ? 180 : -180, l.rotation += 0 >= l.rotation ? 180 : -180) : (l.scaleY *= -1, l.skewX += 0 >= l.skewX ? 180 : -180))); l.perspective = ba ? 1 / (0 > ba ? -ba : ba) : 0; l.x = Y; l.y = C; l.z = B; l.svg && (l.x -= l.xOrigin - (l.xOrigin * n - l.yOrigin * w), l.y -= l.yOrigin - (l.yOrigin * d - l.xOrigin * y))
							} else Oa && !f && g.length && l.x === g[4] && l.y === g[5] && (l.rotationX || l.rotationY) || (q = (r = 6 <= g.length) ? g[0] : 1, u = g[1] || 0, t = g[2] || 0, r = r ? g[3] : 1, l.x = g[4] || 0, l.y = g[5] ||
								0, g = Math.sqrt(q * q + u * u), h = Math.sqrt(r * r + t * t), d = q || u ? Math.atan2(u, q) * V : l.rotation || 0, f = t || r ? Math.atan2(t, r) * V + d : l.skewX || 0, 90 < Math.abs(f) && 270 > Math.abs(f) && (m ? (g *= -1, f += 0 >= d ? 180 : -180, d += 0 >= d ? 180 : -180) : (h *= -1, f += 0 >= f ? 180 : -180)), l.scaleX = g, l.scaleY = h, l.rotation = d, l.skewX = f, Oa && (l.rotationX = l.rotationY = l.z = 0, l.perspective = n, l.scaleZ = 1), l.svg && (l.x -= l.xOrigin - (l.xOrigin * q + l.yOrigin * t), l.y -= l.yOrigin - (l.xOrigin * u + l.yOrigin * r))); l.zOrigin = x; for (k in l) 2E-5 > l[k] && -2E-5 < l[k] && (l[k] = 0)
					} return e && (a._gsTransform =
						l, l.svg && (Ea && a.style[ra] ? c.delayedCall(.001, function () { db(a.style, ra) }) : !Ea && a.getAttribute("transform") && c.delayedCall(.001, function () { a.removeAttribute("transform") }))), l
				}, Ka = function (a) {
					var b = this.data, c = -b.rotation * W, e = c + b.skewX * W, f = (Math.cos(c) * b.scaleX * 1E5 | 0) / 1E5, g = (Math.sin(c) * b.scaleX * 1E5 | 0) / 1E5, l = (Math.sin(e) * -b.scaleY * 1E5 | 0) / 1E5, k = (Math.cos(e) * b.scaleY * 1E5 | 0) / 1E5; e = this.t.style; if (c = this.t.currentStyle) {
						var p = g; g = -l; l = -p; var h = c.filter; e.filter = ""; var m, n; p = this.t.offsetWidth; var q = this.t.offsetHeight,
							u = "absolute" !== c.position, r = "progid:DXImageTransform.Microsoft.Matrix(M11=" + f + ", M12=" + g + ", M21=" + l + ", M22=" + k, t = b.x + p * b.xPercent / 100, v = b.y + q * b.yPercent / 100; if (null != b.ox && (m = (b.oxp ? p * b.ox * .01 : b.ox) - p / 2, n = (b.oyp ? q * b.oy * .01 : b.oy) - q / 2, t += m - (m * f + n * g), v += n - (m * l + n * k)), u ? (m = p / 2, n = q / 2, r += ", Dx=" + (m - (m * f + n * g) + t) + ", Dy=" + (n - (m * l + n * k) + v) + ")") : r += ", sizingMethod='auto expand')", -1 !== h.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.filter = h.replace(ia, r) : e.filter = r + " " + h, (0 === a || 1 === a) && 1 === f && 0 === g && 0 === l &&
								1 === k && (u && -1 === r.indexOf("Dx=0, Dy=0") || O.test(h) && 100 !== parseFloat(RegExp.$1) || -1 === h.indexOf(h.indexOf("Alpha")) && e.removeAttribute("filter")), !u) for (a = 8 > d ? 1 : -1, m = b.ieOffsetX || 0, n = b.ieOffsetY || 0, b.ieOffsetX = Math.round((p - ((0 > f ? -f : f) * p + (0 > g ? -g : g) * q)) / 2 + t), b.ieOffsetY = Math.round((q - ((0 > k ? -k : k) * q + (0 > l ? -l : l) * p)) / 2 + v), Aa = 0; 4 > Aa; Aa++)f = Ja[Aa], g = c[f], p = -1 !== g.indexOf("px") ? parseFloat(g) : x(this.t, f, parseFloat(g), g.replace(S, "")) || 0, g = p !== b[f] ? 2 > Aa ? -b.ieOffsetX : -b.ieOffsetY : 2 > Aa ? m - b.ieOffsetX : n - b.ieOffsetY,
									e[f] = (b[f] = Math.round(p - g * (0 === Aa || 2 === Aa ? 1 : a))) + "px"
					}
				}, vb = ya.set3DTransformRatio = ya.setTransformRatio = function (a) {
					var b, c, d, e, f, g, l, k, p, h, m, x, n = this.data, q = this.t.style, u = n.rotation, r = n.rotationX, t = n.rotationY, w = n.scaleX, y = n.scaleY, z = n.scaleZ, D = n.x, H = n.y, F = n.z, C = n.svg, B = n.perspective; var ba = n.force3D; if (!((1 !== a && 0 !== a || "auto" !== ba || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && ba || F || B || t || r) && 1 === z || Ea && C || !Oa) return void (u || n.skewX || C ? (u *= W, f = n.skewX * W, b = Math.cos(u) *
						w, d = Math.sin(u) * w, c = Math.sin(u - f) * -y, e = Math.cos(u - f) * y, f && "simple" === n.skewType && (m = Math.tan(f - n.skewY * W), m = Math.sqrt(1 + m * m), c *= m, e *= m, n.skewY && (m = Math.tan(n.skewY * W), m = Math.sqrt(1 + m * m), b *= m, d *= m)), C && (D += n.xOrigin - (n.xOrigin * b + n.yOrigin * c) + n.xOffset, H += n.yOrigin - (n.xOrigin * d + n.yOrigin * e) + n.yOffset, Ea && (n.xPercent || n.yPercent) && (h = this.t.getBBox(), D += .01 * n.xPercent * h.width, H += .01 * n.yPercent * h.height), h = 1E-6, h > D && D > -h && (D = 0), h > H && H > -h && (H = 0)), p = (1E5 * b | 0) / 1E5 + "," + (1E5 * d | 0) / 1E5 + "," + (1E5 * c | 0) / 1E5 + "," +
						(1E5 * e | 0) / 1E5 + "," + D + "," + H + ")", C && Ea ? this.t.setAttribute("transform", "matrix(" + p) : q[ra] = (n.xPercent || n.yPercent ? "translate(" + n.xPercent + "%," + n.yPercent + "%) matrix(" : "matrix(") + p) : q[ra] = (n.xPercent || n.yPercent ? "translate(" + n.xPercent + "%," + n.yPercent + "%) matrix(" : "matrix(") + w + ",0,0," + y + "," + D + "," + H + ")"); if (v && (h = 1E-4, h > w && w > -h && (w = z = 2E-5), h > y && y > -h && (y = z = 2E-5), !B || n.z || n.rotationX || n.rotationY || (B = 0)), u || n.skewX) {
							u *= W; var oa = b = Math.cos(u); var sa = d = Math.sin(u); n.skewX && (u -= n.skewX * W, oa = Math.cos(u), sa =
								Math.sin(u), "simple" === n.skewType && (m = Math.tan((n.skewX - n.skewY) * W), m = Math.sqrt(1 + m * m), oa *= m, sa *= m, n.skewY && (m = Math.tan(n.skewY * W), m = Math.sqrt(1 + m * m), b *= m, d *= m))); c = -sa; e = oa
						} else { if (!(t || r || 1 !== z || B || C)) return void (q[ra] = (n.xPercent || n.yPercent ? "translate(" + n.xPercent + "%," + n.yPercent + "%) translate3d(" : "translate3d(") + D + "px," + H + "px," + F + "px)" + (1 !== w || 1 !== y ? " scale(" + w + "," + y + ")" : "")); b = e = 1; c = d = 0 } var E = 1; a = f = ba = g = l = k = 0; var Z = B ? -1 / B : 0; p = n.zOrigin; h = 1E-6; (u = t * W) && (oa = Math.cos(u), sa = Math.sin(u), ba = -sa, l =
							Z * -sa, a = b * sa, f = d * sa, E = oa, Z *= oa, b *= oa, d *= oa); (u = r * W) && (oa = Math.cos(u), sa = Math.sin(u), m = c * oa + a * sa, x = e * oa + f * sa, g = E * sa, k = Z * sa, a = c * -sa + a * oa, f = e * -sa + f * oa, E *= oa, Z *= oa, c = m, e = x); 1 !== z && (a *= z, f *= z, E *= z, Z *= z); 1 !== y && (c *= y, e *= y, g *= y, k *= y); 1 !== w && (b *= w, d *= w, ba *= w, l *= w); (p || C) && (p && (D += a * -p, H += f * -p, F += E * -p + p), C && (D += n.xOrigin - (n.xOrigin * b + n.yOrigin * c) + n.xOffset, H += n.yOrigin - (n.xOrigin * d + n.yOrigin * e) + n.yOffset), h > D && D > -h && (D = "0"), h > H && H > -h && (H = "0"), h > F && F > -h && (F = 0)); p = n.xPercent || n.yPercent ? "translate(" + n.xPercent +
								"%," + n.yPercent + "%) matrix3d(" : "matrix3d("; p = p + ((h > b && b > -h ? "0" : b) + "," + (h > d && d > -h ? "0" : d) + "," + (h > ba && ba > -h ? "0" : ba)) + ("," + (h > l && l > -h ? "0" : l) + "," + (h > c && c > -h ? "0" : c) + "," + (h > e && e > -h ? "0" : e)); r || t || 1 !== z ? (p += "," + (h > g && g > -h ? "0" : g) + "," + (h > k && k > -h ? "0" : k) + "," + (h > a && a > -h ? "0" : a), p += "," + (h > f && f > -h ? "0" : f) + "," + (h > E && E > -h ? "0" : E) + "," + (h > Z && Z > -h ? "0" : Z) + ",") : p += ",0,0,0,0,1,0,"; p += D + "," + H + "," + F + "," + (B ? 1 + -F / B : 1) + ")"; q[ra] = p
				}; e = fb.prototype; e.x = e.y = e.z = e.skewX = e.skewY = e.rotation = e.rotationX = e.rotationY = e.zOrigin = e.xPercent =
					e.yPercent = e.xOffset = e.yOffset = 0; e.scaleX = e.scaleY = e.scaleZ = 1; ea("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
						parser: function (c, d, e, f, g, k, h) {
							if (f._lastParsedTransform === h) return g; f._lastParsedTransform = h; var m; "function" == typeof h[e] && (m = h[e], h[e] = d); var n, x,
								q, r, t; d = c._gsTransform; var w = c.style, v = Ia.length, y = {}, D = $a(c, a, !0, h.parseTransform), H = h.transform && ("function" == typeof h.transform ? h.transform(z, u) : h.transform); if (f._transform = D, H && "string" == typeof H && ra) {
									var I = ja.style; I[ra] = H; I.display = "block"; I.position = "absolute"; ca.body.appendChild(ja); var F = $a(ja, null, !1); D.svg && (q = D.xOrigin, r = D.yOrigin, F.x -= D.xOffset, F.y -= D.yOffset, (h.transformOrigin || h.svgOrigin) && (H = {}, hb(c, sa(h.transformOrigin), H, h.svgOrigin, h.smoothOrigin, !0), q = H.xOrigin, r = H.yOrigin, F.x -=
										H.xOffset - D.xOffset, F.y -= H.yOffset - D.yOffset), (q || r) && (t = kb(ja, !0), F.x -= q - (q * t[0] + r * t[2]), F.y -= r - (q * t[1] + r * t[3]))); ca.body.removeChild(ja); F.perspective || (F.perspective = D.perspective); null != h.xPercent && (F.xPercent = l(h.xPercent, D.xPercent)); null != h.yPercent && (F.yPercent = l(h.yPercent, D.yPercent))
								} else if ("object" == typeof h) {
									if (F = {
										scaleX: l(null != h.scaleX ? h.scaleX : h.scale, D.scaleX), scaleY: l(null != h.scaleY ? h.scaleY : h.scale, D.scaleY), scaleZ: l(h.scaleZ, D.scaleZ), x: l(h.x, D.x), y: l(h.y, D.y), z: l(h.z, D.z), xPercent: l(h.xPercent,
											D.xPercent), yPercent: l(h.yPercent, D.yPercent), perspective: l(h.transformPerspective, D.perspective)
									}, n = h.directionalRotation, null != n) if ("object" == typeof n) for (I in n) h[I] = n[I]; else h.rotation = n; "string" == typeof h.x && -1 !== h.x.indexOf("%") && (F.x = 0, F.xPercent = l(h.x, D.xPercent)); "string" == typeof h.y && -1 !== h.y.indexOf("%") && (F.y = 0, F.yPercent = l(h.y, D.yPercent)); F.rotation = Ga("rotation" in h ? h.rotation : "shortRotation" in h ? h.shortRotation + "_short" : "rotationZ" in h ? h.rotationZ : D.rotation - D.skewY, D.rotation - D.skewY,
										"rotation", y); Oa && (F.rotationX = Ga("rotationX" in h ? h.rotationX : "shortRotationX" in h ? h.shortRotationX + "_short" : D.rotationX || 0, D.rotationX, "rotationX", y), F.rotationY = Ga("rotationY" in h ? h.rotationY : "shortRotationY" in h ? h.shortRotationY + "_short" : D.rotationY || 0, D.rotationY, "rotationY", y)); F.skewX = Ga(h.skewX, D.skewX - D.skewY); (F.skewY = Ga(h.skewY, D.skewY)) && (F.skewX += F.skewY, F.rotation += F.skewY)
								} Oa && null != h.force3D && (D.force3D = h.force3D, x = !0); D.skewType = h.skewType || D.skewType || b.defaultSkewType; for ((n = D.force3D ||
									D.z || D.rotationX || D.rotationY || F.z || F.rotationX || F.rotationY || F.perspective) || null == h.scale || (F.scaleZ = 1); -1 < --v;) { var Y = Ia[v]; H = F[Y] - D[Y]; (1E-6 < H || -1E-6 > H || null != h[Y] || null != Z[Y]) && (x = !0, g = new va(D, Y, D[Y], H, g), Y in y && (g.e = y[Y]), g.xs0 = 0, g.plugin = k, f._overwriteProps.push(g.n)) } return H = h.transformOrigin, D.svg && (H || h.svgOrigin) && (q = D.xOffset, r = D.yOffset, hb(c, sa(H), F, h.svgOrigin, h.smoothOrigin), g = Ya(D, "xOrigin", (d ? D : F).xOrigin, F.xOrigin, g, "transformOrigin"), g = Ya(D, "yOrigin", (d ? D : F).yOrigin, F.yOrigin,
										g, "transformOrigin"), (q !== D.xOffset || r !== D.yOffset) && (g = Ya(D, "xOffset", d ? q : D.xOffset, D.xOffset, g, "transformOrigin"), g = Ya(D, "yOffset", d ? r : D.yOffset, D.yOffset, g, "transformOrigin")), H = Ea ? null : "0px 0px"), (H || Oa && n && D.zOrigin) && (ra ? (x = !0, Y = Da, H = (H || p(c, Y, a, !1, "50% 50%")) + "", g = new va(w, Y, 0, 0, g, -1, "transformOrigin"), g.b = w[Y], g.plugin = k, Oa ? (I = D.zOrigin, H = H.split(" "), D.zOrigin = (2 < H.length && (0 === I || "0px" !== H[2]) ? parseFloat(H[2]) : I) || 0, g.xs0 = g.e = H[0] + " " + (H[1] || "50%") + " 0px", g = new va(D, "zOrigin", 0, 0, g, -1, g.n),
											g.b = I, g.xs0 = g.e = D.zOrigin) : g.xs0 = g.e = H) : sa(H + "", D)), x && (f._transformType = D.svg && Ea || !n && 3 !== this._transformType ? 2 : 3), m && (h[e] = m), g
						}, prefix: !0
					}); ea("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }); ea("borderRadius", {
						defaultValue: "0px", parser: function (b, c, d, e, f, g) {
							c = this.format(c); var h, l, k, m, n, q, u, r, w, v = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], y = b.style; e = parseFloat(b.offsetWidth); g = parseFloat(b.offsetHeight);
							c = c.split(" "); for (h = 0; h < v.length; h++) {
								this.p.indexOf("border") && (v[h] = na(v[h])); var D = k = p(b, v[h], a, !1, "0px"); -1 !== D.indexOf(" ") && (k = D.split(" "), D = k[0], k = k[1]); var z = l = c[h]; var H = parseFloat(D); var F = D.substr((H + "").length); (q = "=" === z.charAt(1)) ? (m = parseInt(z.charAt(0) + "1", 10), z = z.substr(2), m *= parseFloat(z), n = z.substr((m + "").length - (0 > m ? 1 : 0)) || "") : (m = parseFloat(z), n = z.substr((m + "").length)); "" === n && (n = t[d] || F); n !== F && (u = x(b, "borderLeft", H, F), r = x(b, "borderTop", H, F), "%" === n ? (D = u / e * 100 + "%", k = r / g * 100 +
									"%") : "em" === n ? (w = x(b, "borderLeft", 1, "em"), D = u / w + "em", k = r / w + "em") : (D = u + "px", k = r + "px"), q && (z = parseFloat(D) + m + n, l = parseFloat(k) + m + n)); f = Na(y, v[h], D + " " + k, z + " " + l, !1, "0px", f)
							} return f
						}, prefix: !0, formatter: Ma("0px 0px 0px 0px", !1, !0)
					}); ea("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", { defaultValue: "0px", parser: function (b, c, d, e, f, g) { return Na(b.style, d, this.format(p(b, d, a, !1, "0px 0px")), this.format(c), !1, "0px", f) }, prefix: !0, formatter: Ma("0px 0px", !1, !0) }); ea("backgroundPosition",
						{
							defaultValue: "0 0", parser: function (b, c, e, f, g, h) {
								var l, k; e = a || fa(b, null); e = this.format((e ? d ? e.getPropertyValue("background-position-x") + " " + e.getPropertyValue("background-position-y") : e.getPropertyValue("background-position") : b.currentStyle.backgroundPositionX + " " + b.currentStyle.backgroundPositionY) || "0 0"); var m = this.format(c); if (-1 !== e.indexOf("%") != (-1 !== m.indexOf("%")) && 2 > m.split(",").length && (l = p(b, "backgroundImage").replace(L, ""), l && "none" !== l)) {
									c = e.split(" "); f = m.split(" "); da.setAttribute("src",
										l); for (l = 2; -1 < --l;) { e = c[l]; var n = -1 !== e.indexOf("%"); n !== (-1 !== f[l].indexOf("%")) && (k = 0 === l ? b.offsetWidth - da.width : b.offsetHeight - da.height, c[l] = n ? parseFloat(e) / 100 * k + "px" : parseFloat(e) / k * 100 + "%") } e = c.join(" ")
								} return this.parseComplex(b.style, e, m, g, h)
							}, formatter: sa
						}); ea("backgroundSize", { defaultValue: "0 0", formatter: function (a) { return a += "", sa(-1 === a.indexOf(" ") ? a + " " + a : a) } }); ea("perspective", { defaultValue: "0px", prefix: !0 }); ea("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }); ea("transformStyle",
							{ prefix: !0 }); ea("backfaceVisibility", { prefix: !0 }); ea("userSelect", { prefix: !0 }); ea("margin", { parser: Xa("marginTop,marginRight,marginBottom,marginLeft") }); ea("padding", { parser: Xa("paddingTop,paddingRight,paddingBottom,paddingLeft") }); ea("clip", {
								defaultValue: "rect(0px,0px,0px,0px)", parser: function (b, c, e, f, g, h) {
									var l, k, m; return 9 > d ? (k = b.currentStyle, m = 8 > d ? " " : ",", l = "rect(" + k.clipTop + m + k.clipRight + m + k.clipBottom + m + k.clipLeft + ")", c = this.format(c).split(",").join(m)) : (l = this.format(p(b, this.p, a, !1, this.dflt)),
										c = this.format(c)), this.parseComplex(b.style, l, c, g, h)
								}
							}); ea("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }); ea("autoRound,strictUnits", { parser: function (a, b, c, d, e) { return e } }); ea("border", {
								defaultValue: "0px solid #000", parser: function (b, c, d, e, f, g) {
									d = p(b, "borderTopWidth", a, !1, "0px"); c = this.format(c).split(" "); e = c[0].replace(S, ""); return "px" !== e && (d = parseFloat(d) / x(b, "borderTopWidth", 1, e) + e), this.parseComplex(b.style, this.format(d + " " + p(b, "borderTopStyle", a, !1, "solid") + " " + p(b, "borderTopColor",
										a, !1, "#000")), c.join(" "), f, g)
								}, color: !0, formatter: function (a) { var b = a.split(" "); return b[0] + " " + (b[1] || "solid") + " " + (a.match(za) || ["#000"])[0] }
							}); ea("borderWidth", { parser: Xa("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }); ea("float,cssFloat,styleFloat", { parser: function (a, b, c, d, e, f) { a = a.style; d = "cssFloat" in a ? "cssFloat" : "styleFloat"; return new va(a, d, 0, 0, e, -1, c, !1, 0, a[d], b) } }); var lb = function (a) {
								var b, c = this.t, d = c.filter || p(this.data, "filter") || ""; a = this.s + this.c * a | 0; 100 ===
									a && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (c.removeAttribute("filter"), b = !p(this.data, "filter")) : (c.filter = d.replace(G, ""), b = !0)); b || (this.xn1 && (c.filter = d = d || "alpha(opacity=" + a + ")"), -1 === d.indexOf("pacity") ? 0 === a && this.xn1 || (c.filter = d + " alpha(opacity=" + a + ")") : c.filter = d.replace(O, "opacity=" + a))
							}; ea("opacity,alpha,autoAlpha", {
								defaultValue: "1", parser: function (b, c, d, e, f, g) {
									var h = parseFloat(p(b, "opacity", a, !1, "1")), l = b.style, k = "autoAlpha" === d; return "string" ==
										typeof c && "=" === c.charAt(1) && (c = ("-" === c.charAt(0) ? -1 : 1) * parseFloat(c.substr(2)) + h), k && 1 === h && "hidden" === p(b, "visibility", a) && 0 !== c && (h = 0), ua ? f = new va(l, "opacity", h, c - h, f) : (f = new va(l, "opacity", 100 * h, 100 * (c - h), f), f.xn1 = k ? 1 : 0, l.zoom = 1, f.type = 2, f.b = "alpha(opacity=" + f.s + ")", f.e = "alpha(opacity=" + (f.s + f.c) + ")", f.data = b, f.plugin = g, f.setRatio = lb), k && (f = new va(l, "visibility", 0, 0, f, -1, null, !1, 0, 0 !== h ? "inherit" : "hidden", 0 === c ? "hidden" : "inherit"), f.xs0 = "inherit", e._overwriteProps.push(f.n), e._overwriteProps.push(d)),
										f
								}
							}); var db = function (a, b) { b && (a.removeProperty ? (("ms" === b.substr(0, 2) || "webkit" === b.substr(0, 6)) && (b = "-" + b), a.removeProperty(b.replace(P, "-$1").toLowerCase())) : a.removeAttribute(b)) }, wb = function (a) { if (this.t._gsClassPT = this, 1 === a || 0 === a) { this.t.setAttribute("class", 0 === a ? this.b : this.e); for (var b = this.data, c = this.t.style; b;)b.v ? c[b.p] = b.v : db(c, b.p), b = b._next; 1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null) } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e) }; ea("className",
								{
									parser: function (b, c, d, e, f, g, l) {
										var k, p, m, n = b.getAttribute("class") || "", x = b.style.cssText; if (f = e._classNamePT = new va(b, d, 0, 0, f, 2), f.setRatio = wb, f.pr = -11, h = !0, f.b = n, d = H(b, a), p = b._gsClassPT) { var q = {}; for (m = p.data; m;)q[m.p] = 1, m = m._next; p.setRatio(1) } return b._gsClassPT = f, f.e = "=" !== c.charAt(1) ? c : n.replace(new RegExp("(?:\\s|^)" + c.substr(2) + "(?![\\w-])"), "") + ("+" === c.charAt(0) ? " " + c.substr(2) : ""), b.setAttribute("class", f.e), k = oa(b, d, H(b), l, q), b.setAttribute("class", n), f.data = k.firstMPT, b.style.cssText =
											x, f.xfirst = e.parse(b, k.difs, f, g)
									}
								}); var rb = function (a) {
									if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
										var b, c, d = this.t.style, e = w.transform.parse; if ("all" === this.e) { d.cssText = ""; var f = !0 } else for (a = this.e.split(" ").join("").split(","), b = a.length; -1 < --b;) { var g = a[b]; w[g] && (w[g].parse === e ? f = !0 : g = "transformOrigin" === g ? Da : w[g].p); db(d, g) } f && (db(d, ra), c = this.t._gsTransform, c && (c.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")),
											delete this.t._gsTransform))
									}
								}; ea("clearProps", { parser: function (a, b, c, d, e) { return e = new va(a, c, 0, 0, e, 2), e.setRatio = rb, e.e = b, e.pr = -10, e.data = d._tween, h = !0, e } }); e = ["bezier", "throwProps", "physicsProps", "physics2D"]; for (Aa = e.length; Aa--;)Ra(e[Aa]); e = b.prototype; e._firstPT = e._lastParsedTransform = e._transform = null; e._onInitTween = function (c, d, e, g) {
									if (!c.nodeType) return !1; this._target = u = c; this._tween = e; this._vars = d; z = g; q = d.autoRound; h = !1; t = d.suffixMap || b.suffixMap; a = fa(c, ""); r = this._overwriteProps; var l,
										m, x, v, y; g = c.style; if (k && "" === g.zIndex && (l = p(c, "zIndex", a), ("auto" === l || "" === l) && this._addLazySet(g, "zIndex", 0)), "string" == typeof d && (v = g.cssText, l = H(c, a), g.cssText = v + ";" + d, l = oa(c, l, H(c)).difs, !ua && K.test(d) && (l.opacity = parseFloat(RegExp.$1)), d = l, g.cssText = v), d.className ? this._firstPT = m = w.className.parse(c, d.className, "className", this, null, null, d) : this._firstPT = m = this.parse(c, d, null), this._transformType) {
											d = 3 === this._transformType; ra ? n && (k = !0, "" === g.zIndex && (x = p(c, "zIndex", a), ("auto" === x || "" === x) &&
												this._addLazySet(g, "zIndex", 0)), f && this._addLazySet(g, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (d ? "visible" : "hidden"))) : g.zoom = 1; for (x = m; x && x._next;)x = x._next; d = new va(c, "transform", 0, 0, null, 2); this._linkCSSP(d, null, x); d.setRatio = ra ? vb : Ka; d.data = this._transform || $a(c, a, !0); d.tween = e; d.pr = -1; r.pop()
										} if (h) { for (; m;) { c = m._next; for (x = v; x && x.pr > m.pr;)x = x._next; (m._prev = x ? x._prev : y) ? m._prev._next = m : v = m; (m._next = x) ? x._prev = m : y = m; m = c } this._firstPT = v } return !0
								}; e.parse = function (b, c, d,
									e) {
										var f, g, h, l, k, m = b.style; for (f in c) {
											var n = c[f]; "function" == typeof n && (n = n(z, u)); if (g = w[f]) d = g.parse(b, n, f, this, d, e, c); else {
												g = p(b, f, a) + ""; var r = "string" == typeof n; if ("color" === f || "fill" === f || "stroke" === f || -1 !== f.indexOf("Color") || r && E.test(n)) r || (n = ab(n), n = (3 < n.length ? "rgba(" : "rgb(") + n.join(",") + ")"), d = Na(m, f, g, n, !0, "transparent", d, 0, e); else if (r && la.test(n)) d = Na(m, f, g, n, !0, null, d, 0, e); else {
													var v = (h = parseFloat(g)) || 0 === h ? g.substr((h + "").length) : ""; if ("" === g || "auto" === g) if ("width" === f || "height" ===
														f) { h = b; var y = f; v = a; if ("svg" === (h.nodeName + "").toLowerCase()) h = (v || fa(h))[y] || 0; else if (h.getBBox && ib(h)) h = h.getBBox()[y] || 0; else { var H = parseFloat("width" === y ? h.offsetWidth : h.offsetHeight); y = ba[y]; var C = y.length; for (v = v || fa(h, null); -1 < --C;)H -= parseFloat(p(h, "padding" + y[C], v, !0)) || 0, H -= parseFloat(p(h, "border" + y[C] + "Width", v, !0)) || 0; h = H } v = "px" } else "left" === f || "top" === f ? (h = D(b, f, a), v = "px") : (h = "opacity" !== f ? 0 : 1, v = ""); (H = r && "=" === n.charAt(1)) ? (l = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), l *= parseFloat(n),
															k = n.replace(S, "")) : (l = parseFloat(n), k = r ? n.replace(S, "") : ""); "" === k && (k = f in t ? t[f] : v); n = l || 0 === l ? (H ? l + h : l) + k : c[f]; v !== k && "" !== k && (l || 0 === l) && h && (h = x(b, f, h, v), "%" === k ? (h /= x(b, f, 100, "%") / 100, !0 !== c.strictUnits && (g = h + "%")) : "em" === k || "rem" === k || "vw" === k || "vh" === k ? h /= x(b, f, 1, k) : "px" !== k && (l = x(b, f, l, k), k = "px"), H && (l || 0 === l) && (n = l + h + k)); H && (l += h); !h && 0 !== h || !l && 0 !== l ? void 0 !== m[f] && (n || "NaN" != n + "" && null != n) ? (d = new va(m, f, l || h || 0, 0, d, -1, f, !1, 0, g, n), d.xs0 = "none" !== n || "display" !== f && -1 === f.indexOf("Style") ?
																n : g) : window.console && console.log("invalid " + f + " tween value: " + c[f]) : (d = new va(m, f, h, l - h, d, 0, f, !1 !== q && ("px" === k || "zIndex" === f), 0, g, n), d.xs0 = k)
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
									this._firstPT = new va(a, b, 0, 0, this._firstPT, 2); a.e = c; a.setRatio = xb; a.data = this
								}; e._linkCSSP = function (a, b, c, d) { return a && (b && (b._prev = a), a._next && (a._next._prev = a._prev), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next, d = !0), c ? c._next = a : d || null !== this._firstPT || (this._firstPT = a), a._next = b, a._prev = c), a }; e._mod = function (a) { for (var b = this._firstPT; b;)"function" == typeof a[b.p] && a[b.p] === Math.round && (b.r = 1), b = b._next }; e._kill = function (a) {
									var b, c, d, e = a; if (a.autoAlpha || a.alpha) {
										e = {};
										for (c in a) e[c] = a[c]; e.opacity = 1; e.autoAlpha && (e.visibility = 1)
									} a.className && (b = this._classNamePT) && (d = b.xfirst, d && d._prev ? this._linkCSSP(d._prev, b._next, d._prev._prev) : d === this._firstPT && (this._firstPT = b._next), b._next && this._linkCSSP(b._next, b._next._next, d._prev), this._classNamePT = null); for (b = this._firstPT; b;)b.plugin && b.plugin !== c && b.plugin._kill && (b.plugin._kill(a), c = b.plugin), b = b._next; return m.prototype._kill.call(this, e)
								}; var mb = function (a, b, c) {
									var d; if (a.slice) for (d = a.length; -1 < --d;)mb(a[d],
										b, c); else for (a = a.childNodes, d = a.length; -1 < --d;) { var e = a[d]; var f = e.type; e.style && (b.push(H(e)), c && c.push(e)); 1 !== f && 9 !== f && 11 !== f || !e.childNodes.length || mb(e, b, c) }
								}; return b.cascadeTo = function (a, b, d) {
									var e, f; var g = c.to(a, b, d); var h = [g], l = [], k = [], p = [], m = c._internals.reservedProps; a = g._targets || g.target; mb(a, l, p); g.render(b, !0, !0); mb(a, k); g.render(0, !0, !0); g._enabled(!0); for (a = p.length; -1 < --a;)if (e = oa(p[a], l[a], k[a]), e.firstMPT) {
										e = e.difs; for (f in d) m[f] && (e[f] = d[f]); g = {}; for (f in e) g[f] = l[a][f]; h.push(c.fromTo(p[a],
											b, g, e))
									} return h
								}, m.activate([b]), b
	}, !0); (function () {
		var m = _gsScope._gsDefine.plugin({ propName: "roundProps", version: "1.6.0", priority: -1, API: 2, init: function (c, h, m) { return this._tween = m, !0 } }).prototype; m._onInitAllProps = function () {
			for (var c, h, m, a = this._tween, r = a.vars.roundProps.join ? a.vars.roundProps : a.vars.roundProps.split(","), b = r.length, y = {}, w = a._propLookup.roundProps; -1 < --b;)y[r[b]] = Math.round; for (b = r.length; -1 < --b;)for (c = r[b], h = a._firstPT; h;) {
				m = h._next; if (h.pg) h.t._mod(y); else if (h.n === c) if (2 ===
					h.f && h.t) for (h = h.t._firstPT; h;)h.f || h.blob || (h.m = Math.round), h = h._next; else this._add(h.t, c, h.s, h.c), m && (m._prev = h._prev), h._prev ? h._prev._next = m : a._firstPT === h && (a._firstPT = m), h._next = h._prev = null, a._propLookup[c] = w; h = m
			} return !1
		}; m._add = function (c, h, m, a) { this._addTween(c, h, m, m + a, h, Math.round); this._overwriteProps.push(h) }
	})(); (function () {
		_gsScope._gsDefine.plugin({
			propName: "attr", API: 2, version: "0.6.0", init: function (m, c, h, t) {
				var a; if ("function" != typeof m.setAttribute) return !1; for (a in c) h = c[a], "function" ==
					typeof h && (h = h(t, m)), this._addTween(m, "setAttribute", m.getAttribute(a) + "", h + "", a, !1, a), this._overwriteProps.push(a); return !0
			}
		})
	})(); _gsScope._gsDefine.plugin({
		propName: "directionalRotation", version: "0.3.0", API: 2, init: function (m, c, h, t) {
		"object" != typeof c && (c = { rotation: c }); this.finals = {}; var a, r, b, y, w, e; h = !0 === c.useRadians ? 2 * Math.PI : 360; for (a in c) "useRadians" !== a && (y = c[a], "function" == typeof y && (y = y(t, m)), e = (y + "").split("_"), r = e[0], b = parseFloat("function" != typeof m[a] ? m[a] : m[a.indexOf("set") || "function" !=
			typeof m["get" + a.substr(3)] ? a : "get" + a.substr(3)]()), y = this.finals[a] = "string" == typeof r && "=" === r.charAt(1) ? b + parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2)) : Number(r) || 0, w = y - b, e.length && (r = e.join("_"), -1 !== r.indexOf("short") && (w %= h, w !== w % (h / 2) && (w = 0 > w ? w + h : w - h)), -1 !== r.indexOf("_cw") && 0 > w ? w = (w + 9999999999 * h) % h - (w / h | 0) * h : -1 !== r.indexOf("ccw") && 0 < w && (w = (w - 9999999999 * h) % h - (w / h | 0) * h)), (1E-6 < w || -1E-6 > w) && (this._addTween(m, a, b, b + w, a), this._overwriteProps.push(a))); return !0
		}, set: function (m) {
			if (1 !== m) this._super.setRatio.call(this,
				m); else for (m = this._firstPT; m;)m.f ? m.t[m.p](this.finals[m.p]) : m.t[m.p] = this.finals[m.p], m = m._next
		}
	})._autoCSS = !0; _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (m) {
		var c, h, t, a = _gsScope.GreenSockGlobals || _gsScope, r = 2 * Math.PI, b = Math.PI / 2, y = a.com.greensock._class, w = function (a, b) { var c = y("easing." + a, function () { }, !0), d = c.prototype = new m; return d.constructor = c, d.getRatio = b, c }, e = m.register || function () { }, q = function (a, b, c, f, h) {
			b = y("easing." + a, { easeOut: new b, easeIn: new c, easeInOut: new f }, !0); return e(b,
				a), b
		}, k = function (a, b, c) { this.t = a; this.v = b; c && (this.next = c, c.prev = this, this.c = c.v - b, this.gap = c.t - a) }, n = function (a, b) { var c = y("easing." + a, function (a) { this._p1 = a || 0 === a ? a : 1.70158; this._p2 = 1.525 * this._p1 }, !0), d = c.prototype = new m; return d.constructor = c, d.getRatio = b, d.config = function (a) { return new c(a) }, c }; n = q("Back", n("BackOut", function (a) { return --a * a * ((this._p1 + 1) * a + this._p1) + 1 }), n("BackIn", function (a) { return a * a * ((this._p1 + 1) * a - this._p1) }), n("BackInOut", function (a) {
			return 1 > (a *= 2) ? .5 * a * a * ((this._p2 +
				1) * a - this._p2) : .5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2)
		})); var v = y("easing.SlowMo", function (a, b, c) { null == a ? a = .7 : 1 < a && (a = 1); this._p = 1 !== a ? b || 0 === b ? b : .7 : 0; this._p1 = (1 - a) / 2; this._p2 = a; this._p3 = this._p1 + this._p2; this._calcEnd = !0 === c }, !0), f = v.prototype = new m; return f.constructor = v, f.getRatio = function (a) {
			var b = a + (.5 - a) * this._p; return a < this._p1 ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ?
				1 : b
		}, v.ease = new v(.7, .7), f.config = v.config = function (a, b, c) { return new v(a, b, c) }, c = y("easing.SteppedEase", function (a) { a = a || 1; this._p1 = 1 / a; this._p2 = a + 1 }, !0), f = c.prototype = new m, f.constructor = c, f.getRatio = function (a) { return 0 > a ? a = 0 : 1 <= a && (a = .999999999), (this._p2 * a >> 0) * this._p1 }, f.config = c.config = function (a) { return new c(a) }, h = y("easing.RoughEase", function (a) {
			a = a || {}; for (var b, c, d, e, f = a.taper || "none", h = [], n = 0, q = e = 0 | (a.points || 20), r = !1 !== a.randomize, t = !0 === a.clamp, v = a.template instanceof m ? a.template :
				null, w = "number" == typeof a.strength ? .4 * a.strength : .4; -1 < --q;)a = r ? Math.random() : 1 / e * q, b = v ? v.getRatio(a) : a, "none" === f ? c = w : "out" === f ? (d = 1 - a, c = d * d * w) : "in" === f ? c = a * a * w : .5 > a ? (d = 2 * a, c = d * d * .5 * w) : (d = 2 * (1 - a), c = d * d * .5 * w), r ? b += Math.random() * c - .5 * c : q % 2 ? b += .5 * c : b -= .5 * c, t && (1 < b ? b = 1 : 0 > b && (b = 0)), h[n++] = { x: a, y: b }; h.sort(function (a, b) { return a.x - b.x }); c = new k(1, 1, null); for (q = e; -1 < --q;)e = h[q], c = new k(e.x, e.y, c); this._prev = new k(0, 0, 0 !== c.t ? c : c.next)
		}, !0), f = h.prototype = new m, f.constructor = h, f.getRatio = function (a) {
			var b =
				this._prev; if (a > b.t) { for (; b.next && a >= b.t;)b = b.next; b = b.prev } else for (; b.prev && a <= b.t;)b = b.prev; return this._prev = b, b.v + (a - b.t) / b.gap * b.c
		}, f.config = function (a) { return new h(a) }, h.ease = new h, q("Bounce", w("BounceOut", function (a) { return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375 }), w("BounceIn", function (a) {
			return (a = 1 - a) < 1 / 2.75 ? 1 - 7.5625 * a * a : 2 / 2.75 > a ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a +
				.9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375)
		}), w("BounceInOut", function (a) { var b = .5 > a; return a = b ? 1 - 2 * a : 2 * a - 1, a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375, b ? .5 * (1 - a) : .5 * a + .5 })), q("Circ", w("CircOut", function (a) { return Math.sqrt(1 - --a * a) }), w("CircIn", function (a) { return -(Math.sqrt(1 - a * a) - 1) }), w("CircInOut", function (a) { return 1 > (a *= 2) ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1) })), t = function (a, b, c) {
			var d = y("easing." +
				a, function (a, b) { this._p1 = 1 <= a ? a : 1; this._p2 = (b || c) / (1 > a ? a : 1); this._p3 = this._p2 / r * (Math.asin(1 / this._p1) || 0); this._p2 = r / this._p2 }, !0); a = d.prototype = new m; return a.constructor = d, a.getRatio = b, a.config = function (a, b) { return new d(a, b) }, d
		}, q("Elastic", t("ElasticOut", function (a) { return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * this._p2) + 1 }, .3), t("ElasticIn", function (a) { return -(this._p1 * Math.pow(2, 10 * --a) * Math.sin((a - this._p3) * this._p2)) }, .3), t("ElasticInOut", function (a) {
			return 1 > (a *= 2) ? -.5 * this._p1 *
				Math.pow(2, 10 * --a) * Math.sin((a - this._p3) * this._p2) : this._p1 * Math.pow(2, -10 * --a) * Math.sin((a - this._p3) * this._p2) * .5 + 1
		}, .45)), q("Expo", w("ExpoOut", function (a) { return 1 - Math.pow(2, -10 * a) }), w("ExpoIn", function (a) { return Math.pow(2, 10 * (a - 1)) - .001 }), w("ExpoInOut", function (a) { return 1 > (a *= 2) ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (2 - Math.pow(2, -10 * (a - 1))) })), q("Sine", w("SineOut", function (a) { return Math.sin(a * b) }), w("SineIn", function (a) { return -Math.cos(a * b) + 1 }), w("SineInOut", function (a) {
			return -.5 * (Math.cos(Math.PI * a) -
				1)
		})), y("easing.EaseLookup", { find: function (a) { return m.map[a] } }, !0), e(a.SlowMo, "SlowMo", "ease,"), e(h, "RoughEase", "ease,"), e(c, "SteppedEase", "ease,"), n
	}, !0)
}); _gsScope._gsDefine && _gsScope._gsQueue.pop()();
(function (m, c) {
	var h = {}, t = m.GreenSockGlobals = m.GreenSockGlobals || m; if (!t.TweenLite) {
		var a, r = function (a) { var b = a.split("."), c = t; for (a = 0; a < b.length; a++)c[b[a]] = c = c[b[a]] || {}; return c }, b = r("com.greensock"), y = function (a) { var b, c = [], d = a.length; for (b = 0; b !== d; c.push(a[b++])); return c }, w = function () { }, e = function () { var a = Object.prototype.toString, b = a.call([]); return function (c) { return null != c && (c instanceof Array || "object" == typeof c && !!c.push && a.call(c) === b) } }(), q = {}, k = function (a, b, d, e) {
		this.sc = q[a] ? q[a].sc :
			[]; q[a] = this; this.gsClass = null; this.func = d; var f = []; this.check = function (g) {
				for (var p, n, x, l, u, v = b.length, w = v; -1 < --v;)(p = q[b[v]] || new k(b[v], [])).gsClass ? (f[v] = p.gsClass, w--) : g && p.sc.push(this); if (0 === w && d) {
					if (n = ("com.greensock." + a).split("."), x = n.pop(), l = r(n.join("."))[x] = this.gsClass = d.apply(d, f), e) if (t[x] = h[x] = l, u = "undefined" != typeof module && module.exports, !u && "function" == typeof define && define.amd) define((m.GreenSockAMDPath ? m.GreenSockAMDPath + "/" : "") + a.split(".").pop(), [], function () { return l }); else if (u) if (a ===
						c) for (v in module.exports = h[c] = l, h) l[v] = h[v]; else h[c] && (h[c][x] = l); for (v = 0; v < this.sc.length; v++)this.sc[v].check()
				}
			}; this.check(!0)
		}, n = m._gsDefine = function (a, b, c, d) { return new k(a, b, c, d) }, v = b._class = function (a, b, c) { return b = b || function () { }, n(a, [], function () { return b }, c), b }; n.globals = t; var f = [0, 0, 1, 1], d = v("easing.Ease", function (a, b, c, d) { this._func = a; this._type = c || 0; this._power = d || 0; this._params = b ? f.concat(b) : f }, !0), u = d.map = {}, z = d.register = function (a, c, d, e) {
			var f; c = c.split(","); for (var g = c.length,
				h = (d || "easeIn,easeOut,easeInOut").split(","); -1 < --g;) { var k = c[g]; d = e ? v("easing." + k, null, !0) : b.easing[k] || {}; for (f = h.length; -1 < --f;) { var p = h[f]; u[k + "." + p] = u[p + k] = d[p] = a.getRatio ? a : a[p] || new a } }
		}; var g = d.prototype; g._calcEnd = !1; g.getRatio = function (a) { if (this._func) return this._params[0] = a, this._func.apply(null, this._params); var b = this._type, c = this._power, d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a); return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2 }; var C = ["Linear",
			"Quad", "Cubic", "Quart", "Quint,Strong"]; for (a = C.length; -1 < --a;)g = C[a] + ",Power" + a, z(new d(null, null, 1, a), g, "easeOut", !0), z(new d(null, null, 2, a), g, "easeIn" + (0 === a ? ",easeNone" : "")), z(new d(null, null, 3, a), g, "easeInOut"); u.linear = b.easing.Linear.easeIn; u.swing = b.easing.Quad.easeInOut; var Q = v("events.EventDispatcher", function (a) { this._listeners = {}; this._eventTarget = a || this }); g = Q.prototype; g.addEventListener = function (a, b, c, d, e) {
				e = e || 0; var f, g = this._listeners[a], h = 0; this !== E || fa || E.wake(); null == g && (this._listeners[a] =
					g = []); for (f = g.length; -1 < --f;)a = g[f], a.c === b && a.s === c ? g.splice(f, 1) : 0 === h && a.pr < e && (h = f + 1); g.splice(h, 0, { c: b, s: c, up: d, pr: e })
			}; g.removeEventListener = function (a, b) { var c, d = this._listeners[a]; if (d) for (c = d.length; -1 < --c;)if (d[c].c === b) return void d.splice(c, 1) }; g.dispatchEvent = function (a) { var b, c, d = this._listeners[a]; if (d) { var e = d.length; 1 < e && (d = d.slice(0)); for (b = this._eventTarget; -1 < --e;)(c = d[e]) && (c.up ? c.c.call(c.s || b, { type: a, target: b }) : c.c.call(c.s || b)) } }; var R = m.requestAnimationFrame, S = m.cancelAnimationFrame,
				O = Date.now || function () { return (new Date).getTime() }, K = O(); C = ["ms", "moz", "webkit", "o"]; for (a = C.length; -1 < --a && !R;)R = m[C[a] + "RequestAnimationFrame"], S = m[C[a] + "CancelAnimationFrame"] || m[C[a] + "CancelRequestAnimationFrame"]; v("Ticker", function (a, b) {
					var c, d, e, f, g, h = this, k = O(), l = !1 !== b && R ? "auto" : !1, p = 500, m = 33, n = function (a) { var b; var l = O() - K; l > p && (k += l - m); K += l; h.time = (K - k) / 1E3; l = h.time - g; (!c || 0 < l || !0 === a) && (h.frame++ , g += l + (l >= f ? .004 : f - l), b = !0); !0 !== a && (e = d(n)); b && h.dispatchEvent("tick") }; Q.call(h); h.time =
						h.frame = 0; h.tick = function () { n(!0) }; h.lagSmoothing = function (a, b) { p = a || 1E10; m = Math.min(b, p, 0) }; h.sleep = function () { null != e && (l && S ? S(e) : clearTimeout(e), d = w, e = null, h === E && (fa = !1)) }; h.wake = function (a) { null !== e ? h.sleep() : a ? k += -K + (K = O()) : 10 < h.frame && (K = O() - p + 5); d = 0 === c ? w : l && R ? R : function (a) { return setTimeout(a, 1E3 * (g - h.time) + 1 | 0) }; h === E && (fa = !0); n(2) }; h.fps = function (a) { return arguments.length ? (c = a, f = 1 / (c || 60), g = this.time + f, void h.wake()) : c }; h.useRAF = function (a) {
							return arguments.length ? (h.sleep(), l = a, void h.fps(c)) :
								l
						}; h.fps(a); setTimeout(function () { "auto" === l && 5 > h.frame && "hidden" !== document.visibilityState && h.useRAF(!1) }, 1500)
				}); g = b.Ticker.prototype = new b.events.EventDispatcher; g.constructor = b.Ticker; var G = v("core.Animation", function (a, b) {
					if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = !0 === b.immediateRender, this.data = b.data, this._reversed = !0 === b.reversed, da) {
						fa || E.wake(); var c = this.vars.useFrames ? ja : da; c.add(this, c._time); this.vars.paused &&
							this.paused(!0)
					}
				}); var E = G.ticker = new b.Ticker; g = G.prototype; g._dirty = g._gc = g._initted = g._paused = !1; g._totalTime = g._time = 0; g._rawPrevTime = -1; g._next = g._last = g._onUpdate = g._timeline = g.timeline = null; g._paused = !1; var P = function () { fa && 2E3 < O() - K && E.wake(); setTimeout(P, 2E3) }; P(); g.play = function (a, b) { return null != a && this.seek(a, b), this.reversed(!1).paused(!1) }; g.pause = function (a, b) { return null != a && this.seek(a, b), this.paused(!0) }; g.resume = function (a, b) { return null != a && this.seek(a, b), this.paused(!1) }; g.seek =
					function (a, b) { return this.totalTime(Number(a), !1 !== b) }; g.restart = function (a, b) { return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, !1 !== b, !0) }; g.reverse = function (a, b) { return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1) }; g.render = function (a, b, c) { }; g.invalidate = function () { return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this }; g.isActive = function () {
						var a, b = this._timeline, c = this._startTime;
						return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime()) >= c && a < c + this.totalDuration() / this._timeScale
					}; g._enabled = function (a, b) { return fa || E.wake(), this._gc = !a, this._active = this.isActive(), !0 !== b && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1 }; g._kill = function (a, b) { return this._enabled(!1, !1) }; g.kill = function (a, b) { return this._kill(a, b), this }; g._uncache = function (a) {
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
						if (fa || E.wake(), !arguments.length) return this._totalTime; if (this._timeline) {
							if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
							this._dirty &&
								this.totalDuration(); var d = this._totalDuration, e = this._timeline; if (a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale, e._dirty || this._uncache(!1), e._timeline) for (; e._timeline;)e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), e = e._timeline
							} this._gc && this._enabled(!0, !1); (this._totalTime !== a || 0 === this._duration) && (J.length && ma(), this.render(a, b, !1), J.length && ma())
						} return this
					}; g.progress = g.totalProgress =
						function (a, b) { var c = this.duration(); return arguments.length ? this.totalTime(c * a, b) : c ? this._time / c : this.ratio }; g.startTime = function (a) { return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime }; g.endTime = function (a) { return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale }; g.timeScale = function (a) {
							if (!arguments.length) return this._timeScale; if (a = a || 1E-10, this._timeline &&
								this._timeline.smoothChildTiming) { var b = this._pauseTime; b = b || 0 === b ? b : this._timeline.totalTime(); this._startTime = b - (b - this._startTime) * this._timeScale / a } return this._timeScale = a, this._uncache(!1)
						}; g.reversed = function (a) { return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed }; g.paused = function (a) {
							if (!arguments.length) return this._paused; var b, c, d = this._timeline;
							return a != this._paused && d && (fa || a || E.wake(), b = d.rawTime(), c = b - this._pauseTime, !a && d.smoothChildTiming && (this._startTime += c, this._uncache(!1)), this._pauseTime = a ? b : null, this._paused = a, this._active = this.isActive(), !a && 0 !== c && this._initted && this.duration() && (b = d.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale, this.render(b, b === this._totalTime, !0))), this._gc && !a && this._enabled(!0, !1), this
						}; C = v("core.SimpleTimeline", function (a) {
							G.call(this, 0, a); this.autoRemoveChildren = this.smoothChildTiming =
								!0
						}); g = C.prototype = new G; g.constructor = C; g.kill()._gc = !1; g._first = g._last = g._recent = null; g._sortChildren = !1; g.add = g.insert = function (a, b, c, d) {
							if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), b = this._last, this._sortChildren) for (c = a._startTime; b && b._startTime > c;)b = b._prev; return b ? (a._next = b._next, b._next = a) : (a._next = this._first,
								this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = b, this._recent = a, this._timeline && this._uncache(!0), this
						}; g._remove = function (a, b) { return a.timeline === this && (b || a._enabled(!1, !0), a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), a._next = a._prev = a.timeline = null, a === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this }; g.render = function (a, b, c) {
							var d = this._first; for (this._totalTime =
								this._time = this._rawPrevTime = a; d;) { var e = d._next; (d._active || a >= d._startTime && !d._paused) && (d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)); d = e }
						}; g.rawTime = function () { return fa || E.wake(), this._totalTime }; var B = v("TweenLite", function (a, b, c) {
							if (G.call(this, b, c), this.render = B.prototype.render, null == a) throw "Cannot tween a null target."; this.target = a = "string" != typeof a ? a : B.selector(a) || a; var d; var f = a.jquery ||
								a.length && a !== m && a[0] && (a[0] === m || a[0].nodeType && a[0].style && !a.nodeType); c = this.vars.overwrite; if (this._overwrite = c = null == c ? ta[B.defaultOverwrite] : "number" == typeof c ? c >> 0 : ta[c], (f || a instanceof Array || a.push && e(a)) && "number" != typeof a[0]) for (this._targets = d = y(a), this._propLookup = [], this._siblings = [], a = 0; a < d.length; a++)(f = d[a]) ? "string" != typeof f ? f.length && f !== m && f[0] && (f[0] === m || f[0].nodeType && f[0].style && !f.nodeType) ? (d.splice(a--, 1), this._targets = d = d.concat(y(f))) : (this._siblings[a] = ua(f, this,
									!1), 1 === c && 1 < this._siblings[a].length && wa(f, this, null, 1, this._siblings[a])) : (f = d[a--] = B.selector(f), "string" == typeof f && d.splice(a + 1, 1)) : d.splice(a--, 1); else this._propLookup = {}, this._siblings = ua(a, this, !1), 1 === c && 1 < this._siblings.length && wa(a, this, null, 1, this._siblings); (this.vars.immediateRender || 0 === b && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1E-10, this.render(Math.min(0, -this._delay)))
						}, !0), L = function (a) {
							return a && a.length && a !== m && a[0] && (a[0] === m || a[0].nodeType && a[0].style &&
								!a.nodeType)
						}; g = B.prototype = new G; g.constructor = B; g.kill()._gc = !1; g.ratio = 0; g._firstPT = g._targets = g._overwrittenProps = g._startAt = null; g._notifyPluginsOfEnabled = g._lazy = !1; B.version = "1.19.0"; B.defaultEase = g._ease = new d(null, null, 1, 1); B.defaultOverwrite = "auto"; B.ticker = E; B.autoSleep = 120; B.lagSmoothing = function (a, b) { E.lagSmoothing(a, b) }; B.selector = m.$ || m.jQuery || function (a) {
							var b = m.$ || m.jQuery; return b ? (B.selector = b, b(a)) : "undefined" == typeof document ? a : document.querySelectorAll ? document.querySelectorAll(a) :
								document.getElementById("#" === a.charAt(0) ? a.substr(1) : a)
						}; var J = [], T = {}, aa = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, ia = function (a) { for (var b, c = this._firstPT; c;)b = c.blob ? a ? this.join("") : this.start : c.c * a + c.s, c.m ? b = c.m(b, this._target || c.t) : 1E-6 > b && -1E-6 < b && (b = 0), c.f ? c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b) : c.t[c.p] = b, c = c._next }, U = function (a, b, c, d) {
							var e, f = [a, b], g = 0, h = "", k = 0; f.start = a; c && (c(f), a = f[0], b = f[1]); f.length = 0; a = a.match(aa) || []; c = b.match(aa) || []; d && (d._next = null, d.blob = 1, f._firstPT = f._applyPT =
								d); var l = c.length; for (d = 0; l > d; d++) { var m = c[d]; var p = b.substr(g, b.indexOf(m, g) - g); h += p || !d ? p : ","; g += p.length; k ? k = (k + 1) % 5 : "rgba(" === p.substr(-5) && (k = 1); m === a[d] || a.length <= d ? h += m : (h && (f.push(h), h = ""), e = parseFloat(a[d]), f.push(e), f._firstPT = { _next: f._firstPT, t: f, p: f.length - 1, s: e, c: ("=" === m.charAt(1) ? parseInt(m.charAt(0) + "1", 10) * parseFloat(m.substr(2)) : parseFloat(m) - e) || 0, f: 0, m: k && 4 > k ? Math.round : 0 }); g += m.length } return h += b.substr(g), h && f.push(h), f.setRatio = ia, f
						}, la = function (a, b, c, d, e, f, g, h, k) {
						"function" ==
							typeof d && (d = d(k || 0, a)); var l, m; k = "get" === c ? a[b] : c; var p = typeof a[b], n = "string" == typeof d && "=" === d.charAt(1); f = { t: a, p: b, s: k, f: "function" === p, pg: 0, n: e || b, m: f ? "function" == typeof f ? f : Math.round : 0, pr: 0, c: n ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2)) : parseFloat(d) - k || 0 }; return "number" !== p && ("function" === p && "get" === c && (m = b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3), f.s = k = g ? a[m](g) : a[m]()), "string" == typeof k && (g || isNaN(k)) ? (f.fp = g, l = U(k, d, h || B.defaultStringFilter,
								f), f = { t: l, p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: e || b, pr: 0, m: 0 }) : n || (f.s = parseFloat(k), f.c = parseFloat(d) - f.s || 0)), f.c ? ((f._next = this._firstPT) && (f._next._prev = f), this._firstPT = f, f) : void 0
						}; a = B._internals = { isArray: e, isSelector: L, lazyTweens: J, blobDif: U }; var W = B._plugins = {}, V = a.tweenLookup = {}, Z = 0, ca = a.reservedProps = {
							ease: 1, delay: 1, overwrite: 1, onComplete: 1, onCompleteParams: 1, onCompleteScope: 1, useFrames: 1, runBackwards: 1, startAt: 1, onUpdate: 1, onUpdateParams: 1, onUpdateScope: 1, onStart: 1, onStartParams: 1, onStartScope: 1,
							onReverseComplete: 1, onReverseCompleteParams: 1, onReverseCompleteScope: 1, onRepeat: 1, onRepeatParams: 1, onRepeatScope: 1, easeParams: 1, yoyo: 1, immediateRender: 1, repeat: 1, repeatDelay: 1, data: 1, paused: 1, reversed: 1, autoCSS: 1, lazy: 1, onOverwrite: 1, callbackScope: 1, stringFilter: 1, id: 1
						}, ta = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, "true": 1, "false": 0 }, ja = G._rootFramesTimeline = new C, da = G._rootTimeline = new C, ya = 30, ma = a.lazyRender = function () {
							var a, b = J.length; for (T = {}; -1 < --b;)(a = J[b]) && !1 !== a._lazy &&
								(a.render(a._lazy[0], a._lazy[1], !0), a._lazy = !1); J.length = 0
						}; da._startTime = E.time; ja._startTime = E.frame; da._active = ja._active = !0; setTimeout(ma, 1); G._updateRoot = B.render = function () {
							var a, b; if (J.length && ma(), da.render((E.time - da._startTime) * da._timeScale, !1, !1), ja.render((E.frame - ja._startTime) * ja._timeScale, !1, !1), J.length && ma(), E.frame >= ya) {
								ya = E.frame + (parseInt(B.autoSleep, 10) || 120); for (b in V) { var c = V[b].tweens; for (a = c.length; -1 < --a;)c[a]._gc && c.splice(a, 1); 0 === c.length && delete V[b] } if (b = da._first,
									(!b || b._paused) && B.autoSleep && !ja._first && 1 === E._listeners.tick.length) { for (; b && b._paused;)b = b._next; b || E.sleep() }
							}
						}; E.addEventListener("tick", G._updateRoot); var ua = function (a, b, c) { var d, e, f = a._gsTweenID; if (V[f || (a._gsTweenID = f = "t" + Z++)] || (V[f] = { target: a, tweens: [] }), b && (d = V[f].tweens, d[e = d.length] = b, c)) for (; -1 < --e;)d[e] === b && d.splice(e, 1); return V[f].tweens }, qa = function (a, b, c, d) { var e, f, g = a.vars.onOverwrite; return g && (e = g(a, b, c, d)), g = B.onOverwrite, g && (f = g(a, b, c, d)), !1 !== e && !1 !== f }, wa = function (a, b,
							c, d, e) {
								var f, g, h; if (1 === d || 4 <= d) { c = e.length; for (f = 0; c > f; f++)if ((h = e[f]) !== b) h._gc || h._kill(null, a, b) && (g = !0); else if (5 === d) break; return g } var k, l = b._startTime + 1E-10, m = [], n = 0, p = 0 === b._duration; for (f = e.length; -1 < --f;)(h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (k = k || X(b, 0, p), 0 === X(h, k, p) && (m[n++] = h)) : h._startTime <= l && h._startTime + h.totalDuration() / h._timeScale > l && ((p || !h._initted) && 2E-10 >= l - h._startTime || (m[n++] = h))); for (f = n; -1 < --f;)(h = m[f], 2 === d && h._kill(c, a, b) && (g = !0), 2 !== d || !h._firstPT &&
									h._initted) && (2 === d || qa(h, b)) && h._enabled(!1, !1) && (g = !0); return g
						}, X = function (a, b, c) { for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline;) { if (f += d._startTime, e *= d._timeScale, d._paused) return -100; d = d._timeline } return f /= e, f > b ? f - b : c && f === b || !a._initted && 2E-10 > f - b ? 1E-10 : (f += a.totalDuration() / a._timeScale / e) > b + 1E-10 ? 0 : f - b - 1E-10 }; g._init = function () {
							var a, b, c = this.vars, e = this._overwrittenProps, f = this._duration; var g = !!c.immediateRender; var h = c.ease; if (c.startAt) {
							this._startAt && (this._startAt.render(-1,
								!0), this._startAt.kill()); var k = {}; for (a in c.startAt) k[a] = c.startAt[a]; if (k.overwrite = !1, k.immediateRender = !0, k.lazy = g && !1 !== c.lazy, k.startAt = k.delay = null, this._startAt = B.to(this.target, 0, k), g) if (0 < this._time) this._startAt = null; else if (0 !== f) return
							} else if (c.runBackwards && 0 !== f) if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null; else {
							0 !== this._time && (g = !1); k = {}; for (a in c) ca[a] && "autoCSS" !== a || (k[a] = c[a]); if (k.overwrite = 0, k.data = "isFromStart", k.lazy = g && !1 !== c.lazy,
								k.immediateRender = g, this._startAt = B.to(this.target, 0, k), g) { if (0 === this._time) return } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
							} if (this._ease = h = h ? h instanceof d ? h : "function" == typeof h ? new d(h, c.easeParams) : u[h] || B.defaultEase : B.defaultEase, c.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, c.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) for (g = this._targets.length,
								a = 0; g > a; a++)this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], e ? e[a] : null, a) && (b = !0); else b = this._initProps(this.target, this._propLookup, this._siblings, e, 0); if (b && B._onPluginEvent("_onInitAllProps", this), e && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), c.runBackwards) for (k = this._firstPT; k;)k.s += k.c, k.c = -k.c, k = k._next; this._onUpdate = c.onUpdate; this._initted = !0
						}; g._initProps = function (a, b, c, d, f) {
							var g, h, k, n; if (null == a) return !1; T[a._gsTweenID] && ma(); if (!this.vars.css &&
								a.style && a !== m && a.nodeType && W.css && !1 !== this.vars.autoCSS) { var l = this.vars; var p = {}; for (n in l) ca[n] || n in a && "transform" !== n && "x" !== n && "y" !== n && "width" !== n && "height" !== n && "className" !== n && "border" !== n || !(!W[n] || W[n] && W[n]._autoCSS) || (p[n] = l[n], delete l[n]); l.css = p } for (g in this.vars) if (l = this.vars[g], ca[g]) l && (l instanceof Array || l.push && e(l)) && -1 !== l.join("").indexOf("{self}") && (this.vars[g] = this._swapSelfInParams(l, this)); else if (W[g] && (k = new W[g])._onInitTween(a, this.vars[g], this, f)) {
								this._firstPT =
									n = { _next: this._firstPT, t: k, p: "setRatio", s: 0, c: 1, f: 1, n: g, pg: 1, pr: k._priority, m: 0 }; for (l = k._overwriteProps.length; -1 < --l;)b[k._overwriteProps[l]] = this._firstPT; (k._priority || k._onInitAllProps) && (h = !0); (k._onDisable || k._onEnable) && (this._notifyPluginsOfEnabled = !0); n._next && (n._next._prev = n)
								} else b[g] = la.call(this, a, g, "get", l, g, 0, null, this.vars.stringFilter, f); return d && this._kill(d, a) ? this._initProps(a, b, c, d, f) : 1 < this._overwrite && this._firstPT && 1 < c.length && wa(a, this, b, this._overwrite, c) ? (this._kill(b,
									a), this._initProps(a, b, c, d, f)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (T[a._gsTweenID] = !0), h)
						}; g.render = function (a, b, c) {
							var d, e, f, g = this._time, h = this._duration; var k = this._rawPrevTime; if (a >= h - 1E-7) this._totalTime = this._time = h, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (d = !0, e = "onComplete", c = c || this._timeline.autoRemoveChildren), 0 === h && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0),
								(0 > k || 0 >= a && -1E-7 <= a || 1E-10 === k && "isPause" !== this.data) && k !== a && (c = !0, 1E-10 < k && (e = "onReverseComplete")), this._rawPrevTime = f = !b || a || k === a ? a : 1E-10); else if (1E-7 > a) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== g || 0 === h && 0 < k) && (e = "onReverseComplete", d = this._reversed), 0 > a && (this._active = !1, 0 === h && (this._initted || !this.vars.lazy || c) && (0 <= k && (1E-10 !== k || "isPause" !== this.data) && (c = !0), this._rawPrevTime = f = !b || a || k === a ? a : 1E-10)), this._initted || (c = !0); else if (this._totalTime =
									this._time = a, this._easeType) { var l = a / h, m = this._easeType, n = this._easePower; (1 === m || 3 === m && .5 <= l) && (l = 1 - l); 3 === m && (l *= 2); 1 === n ? l *= l : 2 === n ? l *= l * l : 3 === n ? l *= l * l * l : 4 === n && (l *= l * l * l * l); 1 === m ? this.ratio = 1 - l : 2 === m ? this.ratio = l : .5 > a / h ? this.ratio = l / 2 : this.ratio = 1 - l / 2 } else this.ratio = this._ease.getRatio(a / h); if (this._time !== g || c) {
										if (!this._initted) {
											if (this._init(), !this._initted || this._gc) return; if (!c && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime =
												g, this._rawPrevTime = k, J.push(this), void (this._lazy = [a, b]); this._time && !d ? this.ratio = this._ease.getRatio(this._time / h) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
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
										if (d = a || n, k = a !== p && "all" !== p && a !== n && ("object" != typeof a || !a._tempKill), c && (B.onOverwrite || this.vars.onOverwrite)) { for (f in d) n[f] && (m || (m = []), m.push(f)); if ((m || !a) && !qa(this, c, b, m)) return !1 } for (f in d) (g = n[f]) && (l && (g.f ? g.t[g.p](g.s) : g.t[g.p] = g.s, h = !0), g.pg && g.t._kill(d) && (h = !0), g.pg && 0 !== g.t._overwriteProps.length || (g._prev ? g._prev._next =
											g._next : g === this._firstPT && (this._firstPT = g._next), g._next && (g._next._prev = g._prev), g._next = g._prev = null), delete n[f]), k && (p[f] = 1); !this._firstPT && this._initted && this._enabled(!1, !1)
									}
								} return h
						}; g.invalidate = function () {
							return this._notifyPluginsOfEnabled && B._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], G.prototype.invalidate.call(this), this.vars.immediateRender &&
								(this._time = -1E-10, this.render(Math.min(0, -this._delay))), this
						}; g._enabled = function (a, b) { if (fa || E.wake(), a && this._gc) { var c, d = this._targets; if (d) for (c = d.length; -1 < --c;)this._siblings[c] = ua(d[c], this, !0); else this._siblings = ua(this.target, this, !0) } return G.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? B._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1 }; B.to = function (a, b, c) { return new B(a, b, c) }; B.from = function (a, b, c) {
							return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender,
								new B(a, b, c)
						}; B.fromTo = function (a, b, c, d) { return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new B(a, b, d) }; B.delayedCall = function (a, b, c, d, e) { return new B(b, 0, { delay: a, onComplete: b, onCompleteParams: c, callbackScope: d, onReverseComplete: b, onReverseCompleteParams: c, immediateRender: !1, lazy: !1, useFrames: e, overwrite: 0 }) }; B.set = function (a, b) { return new B(a, 0, b) }; B.getTweensOf = function (a, b) {
							if (null == a) return []; a = "string" != typeof a ? a : B.selector(a) || a; var c, d; if ((e(a) || L(a)) && "number" !=
								typeof a[0]) { var f = a.length; for (c = []; -1 < --f;)c = c.concat(B.getTweensOf(a[f], b)); for (f = c.length; -1 < --f;) { var g = c[f]; for (d = f; -1 < --d;)g === c[d] && c.splice(f, 1) } } else for (c = ua(a).concat(), f = c.length; -1 < --f;)(c[f]._gc || b && !c[f].isActive()) && c.splice(f, 1); return c
						}; B.killTweensOf = B.killDelayedCallsTo = function (a, b, c) { "object" == typeof b && (c = b, b = !1); b = B.getTweensOf(a, b); for (var d = b.length; -1 < --d;)b[d]._kill(c, a) }; var na = v("plugins.TweenPlugin", function (a, b) {
						this._overwriteProps = (a || "").split(","); this._propName =
							this._overwriteProps[0]; this._priority = b || 0; this._super = na.prototype
						}, !0); if (g = na.prototype, na.version = "1.19.0", na.API = 2, g._firstPT = null, g._addTween = la, g.setRatio = ia, g._kill = function (a) { var b, c = this._overwriteProps, d = this._firstPT; if (null != a[this._propName]) this._overwriteProps = []; else for (b = c.length; -1 < --b;)null != a[c[b]] && c.splice(b, 1); for (; d;)null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, d._prev = null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next; return !1 },
							g._mod = g._roundProps = function (a) { for (var b, c = this._firstPT; c;)(b = a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")]) && "function" == typeof b && (2 === c.f ? c.t._applyPT.m = b : c.m = b), c = c._next }, B._onPluginEvent = function (a, b) { var c, d, e, f, g = b._firstPT; if ("_onInitAllProps" === a) { for (; g;) { var h = g._next; for (d = e; d && d.pr > g.pr;)d = d._next; (g._prev = d ? d._prev : f) ? g._prev._next = g : e = g; (g._next = d) ? d._prev = g : f = g; g = h } g = b._firstPT = e } for (; g;)g.pg && "function" == typeof g.t[a] && g.t[a]() && (c = !0), g = g._next; return c },
							na.activate = function (a) { for (var b = a.length; -1 < --b;)a[b].API === na.API && (W[(new a[b])._propName] = a[b]); return !0 }, n.plugin = function (a) {
								if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition."; var b, c = a.propName, d = a.priority || 0, e = a.overwriteProps, f = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_mod", mod: "_mod", initAll: "_onInitAllProps" }, g = v("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function () { na.call(this, c, d); this._overwriteProps = e || [] }, !0 === a.global), h = g.prototype =
									new na(c); h.constructor = g; g.API = a.API; for (b in f) "function" == typeof a[b] && (h[f[b]] = a[b]); return g.version = a.version, na.activate([g]), g
							}, C = m._gsQueue) { for (a = 0; a < C.length; a++)C[a](); for (g in q) q[g].func || m.console.log("GSAP encountered missing dependency: " + g) } var fa = !1
	}
})("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"); var _Group = function () { this._tweens = {}; this._tweensAddedDuringUpdate = {} };
_Group.prototype = {
	getAll: function () { return Object.keys(this._tweens).map(function (m) { return this._tweens[m] }.bind(this)) }, removeAll: function () { this._tweens = {} }, add: function (m) { this._tweens[m.getId()] = m; this._tweensAddedDuringUpdate[m.getId()] = m }, remove: function (m) { delete this._tweens[m.getId()]; delete this._tweensAddedDuringUpdate[m.getId()] }, update: function (m, c) {
		var h = Object.keys(this._tweens); if (0 === h.length) return !1; for (m = void 0 !== m ? m : TWEEN.now(); 0 < h.length;) {
		this._tweensAddedDuringUpdate = {}; for (var t =
			0; t < h.length; t++) { var a = this._tweens[h[t]]; a && !1 === a.update(m) && (a._isPlaying = !1, c || delete this._tweens[h[t]]) } h = Object.keys(this._tweensAddedDuringUpdate)
		} return !0
	}
}; var TWEEN = new _Group; TWEEN.Group = _Group; TWEEN._nextId = 0; TWEEN.nextId = function () { return TWEEN._nextId++ };
"undefined" == typeof window && "undefined" != typeof process ? TWEEN.now = function () { var m = process.hrtime(); return 1E3 * m[0] + m[1] / 1E6 } : "undefined" != typeof window && void 0 !== window.performance && void 0 !== window.performance.now ? TWEEN.now = window.performance.now.bind(window.performance) : void 0 !== Date.now ? TWEEN.now = Date.now : TWEEN.now = function () { return (new Date).getTime() };
TWEEN.Tween = function (m, c) {
this._object = m; this._valuesStart = {}; this._valuesEnd = {}; this._valuesStartRepeat = {}; this._duration = 1E3; this._repeat = 0; this._repeatDelayTime = void 0; this._reversed = this._isPlaying = this._yoyo = !1; this._delayTime = 0; this._startTime = null; this._easingFunction = TWEEN.Easing.Linear.None; this._interpolationFunction = TWEEN.Interpolation.Linear; this._chainedTweens = []; this._onStartCallback = null; this._onStartCallbackFired = !1; this._onStopCallback = this._onCompleteCallback = this._onUpdateCallback =
	null; this._group = c || TWEEN; this._id = TWEEN.nextId()
};
TWEEN.Tween.prototype = {
	getId: function () { return this._id }, isPlaying: function () { return this._isPlaying }, to: function (m, c) { return this._valuesEnd = m, void 0 !== c && (this._duration = c), this }, start: function (m) {
		this._group.add(this); this._isPlaying = !0; this._onStartCallbackFired = !1; this._startTime = void 0 !== m ? "string" == typeof m ? TWEEN.now() + parseFloat(m) : m : TWEEN.now(); this._startTime += this._delayTime; for (var c in this._valuesEnd) {
			if (this._valuesEnd[c] instanceof Array) {
				if (0 === this._valuesEnd[c].length) continue; this._valuesEnd[c] =
					[this._object[c]].concat(this._valuesEnd[c])
			} void 0 !== this._object[c] && (this._valuesStart[c] = this._object[c], 0 == this._valuesStart[c] instanceof Array && (this._valuesStart[c] *= 1), this._valuesStartRepeat[c] = this._valuesStart[c] || 0)
		} return this
	}, stop: function () { return this._isPlaying ? (this._group.remove(this), this._isPlaying = !1, null !== this._onStopCallback && this._onStopCallback(this._object), this.stopChainedTweens(), this) : this }, end: function () { return this.update(this._startTime + this._duration), this }, stopChainedTweens: function () {
		for (var m =
			0, c = this._chainedTweens.length; m < c; m++)this._chainedTweens[m].stop()
	}, group: function (m) { return this._group = m, this }, delay: function (m) { return this._delayTime = m, this }, repeat: function (m) { return this._repeat = m, this }, repeatDelay: function (m) { return this._repeatDelayTime = m, this }, yoyo: function (m) { return this._yoyo = m, this }, easing: function (m) { return this._easingFunction = m, this }, interpolation: function (m) { return this._interpolationFunction = m, this }, chain: function () { return this._chainedTweens = arguments, this }, onStart: function (m) {
		return this._onStartCallback =
			m, this
	}, onUpdate: function (m) { return this._onUpdateCallback = m, this }, onComplete: function (m) { return this._onCompleteCallback = m, this }, onStop: function (m) { return this._onStopCallback = m, this }, update: function (m) {
		var c; if (m < this._startTime) return !0; !1 === this._onStartCallbackFired && (null !== this._onStartCallback && this._onStartCallback(this._object), this._onStartCallbackFired = !0); var h = (m - this._startTime) / this._duration; h = 0 === this._duration || 1 < h ? 1 : h; var t = this._easingFunction(h); for (c in this._valuesEnd) if (void 0 !==
			this._valuesStart[c]) { var a = this._valuesStart[c] || 0, r = this._valuesEnd[c]; r instanceof Array ? this._object[c] = this._interpolationFunction(r, t) : ("string" == typeof r && (r = "+" === r.charAt(0) || "-" === r.charAt(0) ? a + parseFloat(r) : parseFloat(r)), "number" == typeof r && (this._object[c] = a + (r - a) * t)) } if (null !== this._onUpdateCallback && this._onUpdateCallback(this._object), 1 === h) {
				if (0 < this._repeat) {
				isFinite(this._repeat) && this._repeat--; for (c in this._valuesStartRepeat) {
					if ("string" == typeof this._valuesEnd[c] && (this._valuesStartRepeat[c] +=
						parseFloat(this._valuesEnd[c])), this._yoyo) h = this._valuesStartRepeat[c], this._valuesStartRepeat[c] = this._valuesEnd[c], this._valuesEnd[c] = h; this._valuesStart[c] = this._valuesStartRepeat[c]
				} return this._yoyo && (this._reversed = !this._reversed), void 0 !== this._repeatDelayTime ? this._startTime = m + this._repeatDelayTime : this._startTime = m + this._delayTime, !0
				} null !== this._onCompleteCallback && this._onCompleteCallback(this._object); m = 0; for (c = this._chainedTweens.length; m < c; m++)this._chainedTweens[m].start(this._startTime +
					this._duration); return !1
			} return !0
	}
};
TWEEN.Easing = {
	Linear: { None: function (m) { return m } }, Quadratic: { In: function (m) { return m * m }, Out: function (m) { return m * (2 - m) }, InOut: function (m) { return 1 > (m *= 2) ? .5 * m * m : -.5 * (--m * (m - 2) - 1) } }, Cubic: { In: function (m) { return m * m * m }, Out: function (m) { return --m * m * m + 1 }, InOut: function (m) { return 1 > (m *= 2) ? .5 * m * m * m : .5 * ((m -= 2) * m * m + 2) } }, Quartic: { In: function (m) { return m * m * m * m }, Out: function (m) { return 1 - --m * m * m * m }, InOut: function (m) { return 1 > (m *= 2) ? .5 * m * m * m * m : -.5 * ((m -= 2) * m * m * m - 2) } }, Quintic: {
		In: function (m) { return m * m * m * m * m }, Out: function (m) {
			return --m *
				m * m * m * m + 1
		}, InOut: function (m) { return 1 > (m *= 2) ? .5 * m * m * m * m * m : .5 * ((m -= 2) * m * m * m * m + 2) }
	}, Sinusoidal: { In: function (m) { return 1 - Math.cos(m * Math.PI / 2) }, Out: function (m) { return Math.sin(m * Math.PI / 2) }, InOut: function (m) { return .5 * (1 - Math.cos(Math.PI * m)) } }, Exponential: { In: function (m) { return 0 === m ? 0 : Math.pow(1024, m - 1) }, Out: function (m) { return 1 === m ? 1 : 1 - Math.pow(2, -10 * m) }, InOut: function (m) { return 0 === m ? 0 : 1 === m ? 1 : 1 > (m *= 2) ? .5 * Math.pow(1024, m - 1) : .5 * (2 - Math.pow(2, -10 * (m - 1))) } }, Circular: {
		In: function (m) {
			return 1 - Math.sqrt(1 -
				m * m)
		}, Out: function (m) { return Math.sqrt(1 - --m * m) }, InOut: function (m) { return 1 > (m *= 2) ? -.5 * (Math.sqrt(1 - m * m) - 1) : .5 * (Math.sqrt(1 - (m -= 2) * m) + 1) }
	}, Elastic: { In: function (m) { return 0 === m ? 0 : 1 === m ? 1 : -Math.pow(2, 10 * (m - 1)) * Math.sin(5 * (m - 1.1) * Math.PI) }, Out: function (m) { return 0 === m ? 0 : 1 === m ? 1 : Math.pow(2, -10 * m) * Math.sin(5 * (m - .1) * Math.PI) + 1 }, InOut: function (m) { return 0 === m ? 0 : 1 === m ? 1 : 1 > (m *= 2) ? -.5 * Math.pow(2, 10 * (m - 1)) * Math.sin(5 * (m - 1.1) * Math.PI) : .5 * Math.pow(2, -10 * (m - 1)) * Math.sin(5 * (m - 1.1) * Math.PI) + 1 } }, Back: {
		In: function (m) {
			return m *
				m * (2.70158 * m - 1.70158)
		}, Out: function (m) { return --m * m * (2.70158 * m + 1.70158) + 1 }, InOut: function (m) { return 1 > (m *= 2) ? m * m * (3.5949095 * m - 2.5949095) * .5 : .5 * ((m -= 2) * m * (3.5949095 * m + 2.5949095) + 2) }
	}, Bounce: { In: function (m) { return 1 - TWEEN.Easing.Bounce.Out(1 - m) }, Out: function (m) { return m < 1 / 2.75 ? 7.5625 * m * m : m < 2 / 2.75 ? 7.5625 * (m -= 1.5 / 2.75) * m + .75 : m < 2.5 / 2.75 ? 7.5625 * (m -= 2.25 / 2.75) * m + .9375 : 7.5625 * (m -= 2.625 / 2.75) * m + .984375 }, InOut: function (m) { return .5 > m ? .5 * TWEEN.Easing.Bounce.In(2 * m) : .5 * TWEEN.Easing.Bounce.Out(2 * m - 1) + .5 } }
};
TWEEN.Interpolation = {
	Linear: function (m, c) { var h = m.length - 1, t = h * c, a = Math.floor(t), r = TWEEN.Interpolation.Utils.Linear; return 0 > c ? r(m[0], m[1], t) : 1 < c ? r(m[h], m[h - 1], h - t) : r(m[a], m[a + 1 > h ? h : a + 1], t - a) }, Bezier: function (m, c) { for (var h = 0, t = m.length - 1, a = Math.pow, r = TWEEN.Interpolation.Utils.Bernstein, b = 0; b <= t; b++)h += a(1 - c, t - b) * a(c, b) * m[b] * r(t, b); return h }, CatmullRom: function (m, c) {
		var h = m.length - 1, t = h * c, a = Math.floor(t), r = TWEEN.Interpolation.Utils.CatmullRom; return m[0] === m[h] ? (0 > c && (a = Math.floor(t = h * (1 + c))), r(m[(a -
			1 + h) % h], m[a], m[(a + 1) % h], m[(a + 2) % h], t - a)) : 0 > c ? m[0] - (r(m[0], m[0], m[1], m[1], -t) - m[0]) : 1 < c ? m[h] - (r(m[h], m[h], m[h - 1], m[h - 1], t - h) - m[h]) : r(m[a ? a - 1 : 0], m[a], m[h < a + 1 ? h : a + 1], m[h < a + 2 ? h : a + 2], t - a)
	}, Utils: {
		Linear: function (m, c, h) { return (c - m) * h + m }, Bernstein: function (m, c) { var h = TWEEN.Interpolation.Utils.Factorial; return h(m) / h(c) / h(m - c) }, Factorial: function () { var m = [1]; return function (c) { var h = 1; if (m[c]) return m[c]; for (var t = c; 1 < t; t--)h *= t; return m[c] = h, h } }(), CatmullRom: function (m, c, h, t, a) {
			m = .5 * (h - m); t = .5 * (t - c); var r =
				a * a; return (2 * c - 2 * h + m + t) * a * r + (-3 * c + 3 * h - 2 * m - t) * r + m * a + c
		}
	}
}; (function (m) { "function" == typeof define && define.amd ? define([], function () { return TWEEN }) : "undefined" != typeof module && "object" == typeof exports ? module.exports = TWEEN : void 0 !== m && (m.TWEEN = TWEEN) })(this); Detector = {
	canvas: !!window.CanvasRenderingContext2D, webgl: function () { try { return !!window.WebGLRenderingContext && !!document.createElement("canvas").getContext("experimental-webgl") } catch (m) { return !1 } }(), workers: !!window.Worker, fileapi: window.File && window.FileReader && window.FileList && window.Blob, getWebGLErrorMessage: function () {
		var m = document.createElement("div"); m.id = "webgl-error-message"; m.style.fontFamily = "monospace"; m.style.fontSize = "13px"; m.style.fontWeight = "normal"; m.style.textAlign = "center"; m.style.background =
			"#fff"; m.style.color = "#000"; m.style.padding = "1.5em"; m.style.width = "400px"; m.style.margin = "5em auto 0"; this.webgl || (m.innerHTML = window.WebGLRenderingContext ? 'Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br />\nFind out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.' : 'Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>\nFind out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.');
		return m
	}, addGetWebGLMessage: function (m) { m = m || {}; var c = void 0 !== m.parent ? m.parent : document.body; m = void 0 !== m.id ? m.id : "oldie"; var h = Detector.getWebGLErrorMessage(); h.id = m; c.appendChild(h) }
};
THREE.OrbitControls = function (m, c) {
	function h() { return Math.pow(.95, f.zoomSpeed) } function t(a) { f.object.isPerspectiveCamera ? O /= a : f.object.isOrthographicCamera ? (f.object.zoom = Math.max(f.minZoom, Math.min(f.maxZoom, f.object.zoom * a)), f.object.updateProjectionMatrix(), G = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), f.enableZoom = !1) } function a(a) {
		f.object.isPerspectiveCamera ? O *= a : f.object.isOrthographicCamera ? (f.object.zoom = Math.max(f.minZoom, Math.min(f.maxZoom,
			f.object.zoom / a)), f.object.updateProjectionMatrix(), G = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), f.enableZoom = !1)
	} function r(a) {
		if (!1 !== f.enabled) {
			a.preventDefault(); switch (a.button) {
				case f.mouseButtons.ORBIT: if (!1 === f.enableRotate) return; E.set(a.clientX, a.clientY); C = g.ROTATE; break; case f.mouseButtons.ZOOM: if (!1 === f.enableZoom) return; aa.set(a.clientX, a.clientY); C = g.DOLLY; break; case f.mouseButtons.PAN: if (!1 === f.enablePan) return; L.set(a.clientX,
					a.clientY); C = g.PAN
			}C !== g.NONE && (document.addEventListener("mousemove", b, !1), document.addEventListener("mouseup", y, !1), f.dispatchEvent(u))
		}
	} function b(b) {
		if (!1 !== f.enabled) switch (b.preventDefault(), C) {
			case g.ROTATE: if (!1 === f.enableRotate) break; P.set(b.clientX, b.clientY); B.subVectors(P, E).multiplyScalar(f.rotateSpeed); b = f.domElement === document ? f.domElement.body : f.domElement; S.theta -= 2 * Math.PI * B.x / b.clientHeight; S.phi -= 2 * Math.PI * B.y / b.clientHeight; E.copy(P); f.update(); break; case g.DOLLY: if (!1 === f.enableZoom) break;
				ia.set(b.clientX, b.clientY); U.subVectors(ia, aa); 0 < U.y ? t(h()) : 0 > U.y && a(h()); aa.copy(ia); f.update(); break; case g.PAN: !1 !== f.enablePan && (J.set(b.clientX, b.clientY), T.subVectors(J, L).multiplyScalar(f.panSpeed), V(T.x, T.y), L.copy(J), f.update())
		}
	} function y(a) { !1 !== f.enabled && (document.removeEventListener("mousemove", b, !1), document.removeEventListener("mouseup", y, !1), f.dispatchEvent(z), C = g.NONE) } function w(b) {
	!1 === f.enabled || !1 === f.enableZoom || C !== g.NONE && C !== g.ROTATE || (b.preventDefault(), b.stopPropagation(),
		f.dispatchEvent(u), 0 > b.deltaY ? a(h()) : 0 < b.deltaY && t(h()), f.update(), f.dispatchEvent(z))
	} function e(a) { if (!1 !== f.enabled && !1 !== f.enableKeys && !1 !== f.enablePan) switch (a.keyCode) { case f.keys.UP: V(0, f.keyPanSpeed); f.update(); break; case f.keys.BOTTOM: V(0, -f.keyPanSpeed); f.update(); break; case f.keys.LEFT: V(f.keyPanSpeed, 0); f.update(); break; case f.keys.RIGHT: V(-f.keyPanSpeed, 0), f.update() } } function q(a) {
		if (!1 !== f.enabled) {
			a.preventDefault(); switch (a.touches.length) {
				case 1: if (!1 === f.enableRotate) return; E.set(a.touches[0].pageX,
					a.touches[0].pageY); C = g.TOUCH_ROTATE; break; case 2: if (!1 === f.enableZoom && !1 === f.enablePan) return; if (f.enableZoom) { var b = a.touches[0].pageX - a.touches[1].pageX, c = a.touches[0].pageY - a.touches[1].pageY; aa.set(0, Math.sqrt(b * b + c * c)) } f.enablePan && L.set(.5 * (a.touches[0].pageX + a.touches[1].pageX), .5 * (a.touches[0].pageY + a.touches[1].pageY)); C = g.TOUCH_DOLLY_PAN; break; default: C = g.NONE
			}C !== g.NONE && f.dispatchEvent(u)
		}
	} function k(a) {
		if (!1 !== f.enabled) switch (a.preventDefault(), a.stopPropagation(), a.touches.length) {
			case 1: if (!1 ===
				f.enableRotate) break; if (C !== g.TOUCH_ROTATE) break; P.set(a.touches[0].pageX, a.touches[0].pageY); B.subVectors(P, E).multiplyScalar(f.rotateSpeed); a = f.domElement === document ? f.domElement.body : f.domElement; S.theta -= 2 * Math.PI * B.x / a.clientHeight; S.phi -= 2 * Math.PI * B.y / a.clientHeight; E.copy(P); f.update(); break; case 2: if (!1 === f.enableZoom && !1 === f.enablePan) break; if (C !== g.TOUCH_DOLLY_PAN) break; if (f.enableZoom) {
					var b = a.touches[0].pageX - a.touches[1].pageX, c = a.touches[0].pageY - a.touches[1].pageY; ia.set(0, Math.sqrt(b *
						b + c * c)); U.set(0, Math.pow(ia.y / aa.y, f.zoomSpeed)); t(U.y); aa.copy(ia)
				} f.enablePan && (J.set(.5 * (a.touches[0].pageX + a.touches[1].pageX), .5 * (a.touches[0].pageY + a.touches[1].pageY)), T.subVectors(J, L).multiplyScalar(f.panSpeed), V(T.x, T.y), L.copy(J)); f.update(); break; default: C = g.NONE
		}
	} function n(a) { !1 !== f.enabled && (f.dispatchEvent(z), C = g.NONE) } function v(a) { !1 !== f.enabled && a.preventDefault() } this.object = m; this.domElement = void 0 !== c ? c : document; this.enabled = !0; this.target = new THREE.Vector3; this.minDistance =
		0; this.maxDistance = Infinity; this.minZoom = 0; this.maxZoom = Infinity; this.minPolarAngle = 0; this.maxPolarAngle = Math.PI; this.minAzimuthAngle = -Infinity; this.maxAzimuthAngle = Infinity; this.enableDamping = !1; this.dampingFactor = .25; this.enableZoom = !0; this.zoomSpeed = 1; this.enableRotate = !0; this.rotateSpeed = 1; this.enablePan = !0; this.panSpeed = 1; this.screenSpacePanning = !1; this.keyPanSpeed = 7; this.autoRotate = !1; this.autoRotateSpeed = 2; this.enableKeys = !0; this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 }; this.mouseButtons = {
			ORBIT: THREE.MOUSE.LEFT,
			ZOOM: THREE.MOUSE.MIDDLE, PAN: THREE.MOUSE.RIGHT
		}; this.target0 = this.target.clone(); this.position0 = this.object.position.clone(); this.zoom0 = this.object.zoom; this.getPolarAngle = function () { return R.phi }; this.getAzimuthalAngle = function () { return R.theta }; this.saveState = function () { f.target0.copy(f.target); f.position0.copy(f.object.position); f.zoom0 = f.object.zoom }; this.reset = function () {
			f.target.copy(f.target0); f.object.position.copy(f.position0); f.object.zoom = f.zoom0; f.object.updateProjectionMatrix(); f.dispatchEvent(d);
			f.update(); C = g.NONE
		}; this.update = function () {
			var a = new THREE.Vector3, b = (new THREE.Quaternion).setFromUnitVectors(m.up, new THREE.Vector3(0, 1, 0)), c = b.clone().inverse(), e = new THREE.Vector3, h = new THREE.Quaternion; return function () {
				var k = f.object.position; a.copy(k).sub(f.target); a.applyQuaternion(b); R.setFromVector3(a); f.autoRotate && C === g.NONE && (S.theta -= 2 * Math.PI / 60 / 60 * f.autoRotateSpeed); R.theta += S.theta; R.phi += S.phi; R.theta = Math.max(f.minAzimuthAngle, Math.min(f.maxAzimuthAngle, R.theta)); R.phi = Math.max(f.minPolarAngle,
					Math.min(f.maxPolarAngle, R.phi)); R.makeSafe(); R.radius *= O; R.radius = Math.max(f.minDistance, Math.min(f.maxDistance, R.radius)); f.target.add(K); a.setFromSpherical(R); a.applyQuaternion(c); k.copy(f.target).add(a); f.object.lookAt(f.target); !0 === f.enableDamping ? (S.theta *= 1 - f.dampingFactor, S.phi *= 1 - f.dampingFactor, K.multiplyScalar(1 - f.dampingFactor)) : (S.set(0, 0, 0), K.set(0, 0, 0)); O = 1; return G || e.distanceToSquared(f.object.position) > Q || 8 * (1 - h.dot(f.object.quaternion)) > Q ? (f.dispatchEvent(d), e.copy(f.object.position),
						h.copy(f.object.quaternion), G = !1, !0) : !1
			}
		}(); this.dispose = function () {
			f.domElement.removeEventListener("contextmenu", v, !1); f.domElement.removeEventListener("mousedown", r, !1); f.domElement.removeEventListener("wheel", w, !1); f.domElement.removeEventListener("touchstart", q, !1); f.domElement.removeEventListener("touchend", n, !1); f.domElement.removeEventListener("touchmove", k, !1); document.removeEventListener("mousemove", b, !1); document.removeEventListener("mouseup", y, !1); window.removeEventListener("keydown",
				e, !1)
		}; var f = this, d = { type: "change" }, u = { type: "start" }, z = { type: "end" }, g = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_DOLLY_PAN: 4 }, C = g.NONE, Q = 1E-6, R = new THREE.Spherical, S = new THREE.Spherical, O = 1, K = new THREE.Vector3, G = !1, E = new THREE.Vector2, P = new THREE.Vector2, B = new THREE.Vector2, L = new THREE.Vector2, J = new THREE.Vector2, T = new THREE.Vector2, aa = new THREE.Vector2, ia = new THREE.Vector2, U = new THREE.Vector2, la = function () {
			var a = new THREE.Vector3; return function (b, c) {
				a.setFromMatrixColumn(c, 0); a.multiplyScalar(-b);
				K.add(a)
			}
		}(), W = function () { var a = new THREE.Vector3; return function (b, c) { !0 === f.screenSpacePanning ? a.setFromMatrixColumn(c, 1) : (a.setFromMatrixColumn(c, 0), a.crossVectors(f.object.up, a)); a.multiplyScalar(b); K.add(a) } }(), V = function () {
			var a = new THREE.Vector3; return function (b, c) {
				var d = f.domElement === document ? f.domElement.body : f.domElement; if (f.object.isPerspectiveCamera) {
					a.copy(f.object.position).sub(f.target); var e = a.length(); e *= Math.tan(f.object.fov / 2 * Math.PI / 180); la(2 * b * e / d.clientHeight, f.object.matrix);
					W(2 * c * e / d.clientHeight, f.object.matrix)
				} else f.object.isOrthographicCamera ? (la(b * (f.object.right - f.object.left) / f.object.zoom / d.clientWidth, f.object.matrix), W(c * (f.object.top - f.object.bottom) / f.object.zoom / d.clientHeight, f.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), f.enablePan = !1)
			}
		}(); f.domElement.addEventListener("contextmenu", v, !1); f.domElement.addEventListener("mousedown", r, !1); f.domElement.addEventListener("wheel", w, !1); f.domElement.addEventListener("touchstart",
			q, !1); f.domElement.addEventListener("touchend", n, !1); f.domElement.addEventListener("touchmove", k, !1); window.addEventListener("keydown", e, !1); this.update()
}; THREE.OrbitControls.prototype = Object.create(THREE.EventDispatcher.prototype); THREE.OrbitControls.prototype.constructor = THREE.OrbitControls;
Object.defineProperties(THREE.OrbitControls.prototype, {
	center: { get: function () { console.warn("THREE.OrbitControls: .center has been renamed to .target"); return this.target } }, noZoom: { get: function () { console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."); return !this.enableZoom }, set: function (m) { console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."); this.enableZoom = !m } }, noRotate: {
		get: function () {
			console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.");
			return !this.enableRotate
		}, set: function (m) { console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."); this.enableRotate = !m }
	}, noPan: { get: function () { console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."); return !this.enablePan }, set: function (m) { console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."); this.enablePan = !m } }, noKeys: {
		get: function () {
			console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.");
			return !this.enableKeys
		}, set: function (m) { console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."); this.enableKeys = !m }
	}, staticMoving: { get: function () { console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."); return !this.enableDamping }, set: function (m) { console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."); this.enableDamping = !m } }, dynamicDampingFactor: {
		get: function () {
			console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.");
			return this.dampingFactor
		}, set: function (m) { console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."); this.dampingFactor = m }
	}
});
$(".button--bubble").each(function () {
	var m = $(this).parent().find(".circle.top-left"), c = $(this).parent().find(".circle.bottom-right"), h = new TimelineLite, t = new TimelineLite, a = new TimelineLite({ paused: !0 }); h.to(m, 1.2, { x: -25, y: -25, scaleY: 2, ease: SlowMo.ease.config(.1, .7, !1) }); h.to(m.eq(0), .1, { scale: .2, x: "+=6", y: "-=2" }); h.to(m.eq(1), .1, { scaleX: 1, scaleY: .8, x: "-=10", y: "-=7" }, "-=0.1"); h.to(m.eq(2), .1, { scale: .2, x: "-=15", y: "+=6" }, "-=0.1"); h.to(m.eq(0), 1, { scale: 0, x: "-=5", y: "-=15", opacity: 0 }); h.to(m.eq(1), 1, {
		scaleX: .4,
		scaleY: .4, x: "-=10", y: "-=10", opacity: 0
	}, "-=1"); h.to(m.eq(2), 1, { scale: 0, x: "-=15", y: "+=5", opacity: 0 }, "-=1"); var r = new TimelineLite, b = new TimelineLite; r.set(m, { x: 0, y: 0, rotation: -45 }); r.add(h); t.set(c, { x: 0, y: 0 }); t.to(c, 1.1, { x: 30, y: 30, ease: SlowMo.ease.config(.1, .7, !1) }); t.to(c.eq(0), .1, { scale: .2, x: "-=6", y: "+=3" }); t.to(c.eq(1), .1, { scale: .8, x: "+=7", y: "+=3" }, "-=0.1"); t.to(c.eq(2), .1, { scale: .2, x: "+=15", y: "-=6" }, "-=0.2"); t.to(c.eq(0), 1, { scale: 0, x: "+=5", y: "+=15", opacity: 0 }); t.to(c.eq(1), 1, {
		scale: .4, x: "+=7", y: "+=7",
		opacity: 0
	}, "-=1"); t.to(c.eq(2), 1, { scale: 0, x: "+=15", y: "-=5", opacity: 0 }, "-=1"); b.set(c, { x: 0, y: 0, rotation: 45 }); b.add(t); a.add(r); a.to($(this).parent().find(".button.effect-button"), .8, { scaleY: 1.1 }, .1); a.add(b, .2); a.to($(this).parent().find(".button.effect-button"), 1.8, { scale: 1, ease: Elastic.easeOut.config(1.2, .4) }, 1.2); a.timeScale(2.6); $(this).on("click", function () {
		a.restart(); setTimeout(function () { var a = document.getElementById("myAudio"); a.volume = 1; a.play() }, 50); setTimeout(function () { start() }, 300); setTimeout(function () {
			$(".init").animate({ opacity: 0 },
				300)
		}, 800); setTimeout(function () { $(".init").remove() }, 1100); $("#bars").animate({ opacity: 1 }, 3200)
	})
}); function fire() { document.getElementById("click").play(); $(".init").animate({ bottom: "-=20px", opacity: 0 }, 300); setTimeout(function () { $(".init").remove() }, 300); $("#bars").animate({ opacity: 1 }, 3200) }
var world, dt = 1 / 60, song, constraintDown = !1, camera, scene, renderer, gplane = !1, clickMarker = !1, geometry, material, mesh, controls, time = Date.now(), jointBody, constrainedBody, mouseConstraint, N = 3, container, projector, camFactor = 20, frustumSize = 30, aspect = window.innerWidth / window.innerHeight, meshes = [], bodies = [], jump = !1, sfx, mediaSourceNode, analyser, audio; window.onload = function () { TweenMax.staggerFrom(".init", 2, { opacity: 0, y: 20, ease: Power2.easeInOut }, .1) };
function start() {
	document.getElementById("myAudio").src = ""; setTimeout(function () {
		setTimeout(function () { $(".menu").css("opacity", "1"); $("p").addClass("trans"); TweenMax.staggerFrom(".menu li", 1, { opacity: 0, y: 20, ease: Power2.easeInOut }, .1); TweenMax.staggerFrom(".menu #form", 2.5, { opacity: 0, y: 20, ease: Power2.easeInOut }, .1) }, 1E3); var m = window.AudioContext || window.webkitAudioContext || !1; m ? (sfx = new m, audio = document.getElementById("myAudio"), document.getElementById("myAudio").src = "./sound/song1.mp3", mediaSourceNode =
			sfx.createMediaElementSource(audio), analyser = sfx.createAnalyser(), analyser.fftSize = 1024, timeDomainData = new Uint8Array(analyser.frequencyBinCount), mediaSourceNode.connect(analyser), analyser.connect(sfx.destination)) : alert("Sorry, but the Web Audio API is not supported by your browser. Please, consider upgrading to the latest version or downloading Google Chrome or Mozilla Firefox"); setTimeout(function () {
			audio.volume = 0; audio.play(); var c = setInterval(function () { audio.volume += .01; .99 < audio.volume && clearInterval(c) },
				60)
			}, 1E3); initCannon(); init(); animate(); detectBeats()
	}, 1200)
}
function init() {
Detector.webgl || Detector.addGetWebGLMessage(); container = document.createElement("div"); container.setAttribute("id", "container"); document.body.appendChild(container); scene = new THREE.Scene; var m = window.innerWidth / window.innerHeight; camera = new THREE.OrthographicCamera(frustumSize * m / -2, frustumSize * m / 2, frustumSize / 2, frustumSize / -2, 1, 2E3); camera.position.set(55, 43, -38); scene.add(camera); m = new THREE.AmbientLight(16109986, .6); scene.add(m); m = new THREE.DirectionalLight(16777215, 1); m.position.set(20,
	30, 20); m.castShadow = !0; m.shadow.mapSize.width = 1024; m.shadow.mapSize.height = 1024; m.shadow.camera.left = -20; m.shadow.camera.right = 20; m.shadow.camera.top = 20; m.shadow.camera.bottom = -20; m.shadow.camera.far = 60; m.shadow.camera.near = 20; scene.add(m); geometry = new THREE.PlaneGeometry(500, 500, 1, 1); material = new THREE.MeshLambertMaterial({ color: 11673893 }); mesh = new THREE.Mesh(geometry, material); mesh.quaternion.setFromAxisAngle(new THREE.Vector3(1, 0, 0), -Math.PI / 2); mesh.receiveShadow = !0; scene.add(mesh); m = new THREE.BoxGeometry(3,
		3, 3, 10, 10); for (var c = new THREE.MeshLambertMaterial({ color: 16748339 }), h = 1, t = 0; 3 > t; t++)for (var a = 0; a < N; a++)cubeMesh = new THREE.Mesh(m, c), cubeMesh.castShadow = !0, cubeMesh.name = h, cubeMesh.position.set(9 * t - 20, 9 * a - 20, 0), meshes.push(cubeMesh), scene.add(cubeMesh), h += 1; renderer = new THREE.WebGLRenderer({ antialias: !0 }); renderer.setSize(window.innerWidth, window.innerHeight); container.appendChild(renderer.domElement); renderer.shadowMap.enabled = !0; renderer.shadowMap.type = THREE.PCFSoftShadowMap; controls = new THREE.OrbitControls(camera,
			renderer.domElement); controls.enableZoom = !1; controls.enableRotate = !1; controls.enablePan = !1; window.addEventListener("resize", onWindowResize, !1); document.body.style.backgroundColor = "#ea202d"
} function map(m, c, h, t, a) { return (m - c) * (a - t) / (h - c) + t } var count = 0;
function ondown(m) { m = new THREE.Vector3(Math.random() - .2, Math.random() - .2, Math.random() - .2); constraintDown = !0; addMouseConstraint(m.x, m.y, m.z, bodies[count]); moveJointToPoint(0, 4, 0); count += 1; 9 === count && (count = 0); if (50 > timeDomainData[0]) for (m = 0; m < bodies.length; m++)bodies[m].position.y = 1E-5 * Math.random() }
function setScreenPerpCenter(m, c) { if (!gplane) { var h = new THREE.PlaneGeometry(300, 300); (gplane = new THREE.Mesh(h, material)).visible = !1; scene.add(gplane) } gplane.position.copy(m); gplane.quaternion.copy(c.quaternion) } function onup(m) { constraintDown = !1; removeJointConstraint() } var lastx, lasty, last;
function onWindowResize() { var m = window.innerWidth / window.innerHeight; camera.left = -frustumSize * m / 2; camera.right = frustumSize * m / 2; camera.top = frustumSize / 2; camera.bottom = -frustumSize / 2; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth, window.innerHeight) } function animate() { requestAnimationFrame(animate); updatePhysics(); render() }
function detectBeats() { analyser.getByteTimeDomainData(timeDomainData); 110 > timeDomainData[0] && (jump = !0, ondown(), setTimeout(onup, 200), setTimeout(function () { jump = !1; detectBeats() }, 200)); 0 == jump && requestAnimationFrame(detectBeats) } function updatePhysics() { world.step(dt); for (var m = 0; m !== meshes.length; m++)meshes[m].position.copy(bodies[m].position), meshes[m].quaternion.copy(bodies[m].quaternion) } function render() { renderer.render(scene, camera); TWEEN.update() }
function initCannon() {
	world = new CANNON.World; world.quatNormalizeSkip = 0; world.quatNormalizeFast = !1; world.gravity.set(0, -65, 0); world.broadphase = new CANNON.NaiveBroadphase; boxShape = new CANNON.Box(new CANNON.Vec3(1, 1, 1)); for (var m = 0; 3 > m; m++)for (var c = 0; c < N; c++)boxBody = new CANNON.Body({ mass: 8 }), boxBody.addShape(boxShape), boxBody.position.set(9 * c - 9, 3, 9 * m - 9), world.addBody(boxBody), bodies.push(boxBody); m = new CANNON.Plane; c = new CANNON.Body({ mass: 0 }); c.addShape(m); c.quaternion.setFromAxisAngle(new CANNON.Vec3(1,
		0, 0), -Math.PI / 2); world.addBody(c); m = new CANNON.Sphere(.1); jointBody = new CANNON.Body({ mass: 0 }); jointBody.addShape(m); jointBody.collisionFilterGroup = 0; jointBody.collisionFilterMask = 0; world.addBody(jointBody)
}
function addMouseConstraint(m, c, h, t) { constrainedBody = t; t = (new CANNON.Vec3(m, c, h)).vsub(constrainedBody.position); pivot = constrainedBody.quaternion.inverse().vmult(t); jointBody.position.set(m, c, h); mouseConstraint = new CANNON.PointToPointConstraint(constrainedBody, pivot, jointBody, new CANNON.Vec3(0, 0, 0)); world.addConstraint(mouseConstraint) } function moveJointToPoint(m, c, h) { jointBody.position.set(m, c, h); mouseConstraint.update() }
function removeJointConstraint() { world.removeConstraint(mouseConstraint); mouseConstraint = !1 } function Tween(m, c) { this.backgroundCol = m; this.cubeCol = c; m = new THREE.Color(this.backgroundCol); c = new THREE.Color(this.cubeCol); TweenLite.to(mesh.material.color, 1, { r: m.r, g: m.g, b: m.b }); for (var h = 0; h < bodies.length; h++)TweenLite.to(meshes[h].material.color, .6, { r: c.r, g: c.g, b: c.b }) }
function backToOrigin() {
	setTimeout(function () {
		for (var m = 0; m < bodies.length; m++)(new TWEEN.Tween(bodies[m].quaternion)).to({ x: bodies[0].quaternion.x, y: bodies[0].quaternion.y, z: bodies[0].quaternion.z }, 300).easing(TWEEN.Easing.Quintic.InOut).start(); for (m = 0; 3 > m; m++)(new TWEEN.Tween(bodies[m].position)).to({ x: 9 * m - 9, y: .99999, z: -9 }, 600).easing(TWEEN.Easing.Quintic.InOut).start(); for (m = 3; 6 > m; m++)(new TWEEN.Tween(bodies[m].position)).to({ x: 9 * m - 36, y: .99999, z: 0 }, 600).easing(TWEEN.Easing.Quintic.InOut).start();
		for (m = 6; 9 > m; m++)(new TWEEN.Tween(bodies[m].position)).to({ x: 9 * m - 63, y: .99999, z: 9 }, 600).easing(TWEEN.Easing.Quintic.InOut).start()
	}, 200)
} function changeSong(m, c) { audio = document.getElementById("myAudio"); audio.src = "sound/" + m + ".mp3"; audio.volume = 0; audio.play(); audio.volume = 0; var h = setInterval(function () { audio.volume += .01; .9 < audio.volume && clearInterval(h) }, 60); console.log(c); document.body.style.backgroundColor = c } var lastActive = "song1"; $("#song1").css("border-left", "3px white solid");
$("#song1").css("padding-left", "20px"); $("#song1").css("font-weight", "700"); $("#song1").css("opacity", "0.85"); $("#list1").css("opacity", "0.85");
$("#song1").click(function () {
	var m = this.id; this.id !== lastActive && ($("#" + lastActive).css("border", "none"), $("#" + lastActive).css("padding-left", "0"), $("#" + lastActive).css("opacity", "0.6"), $("#" + lastActive).css("font-weight", "500")); $("#song1").css("border-left", "3px white solid"); $("#song1").css("padding-left", "20px"); $("#song1").css("font-weight", "700"); $("#song1").css("opacity", "0.85"); $("#list1").css("opacity", "0.85"); $("#bars").animate({ opacity: 0, bottom: "-20" }, 500, function () {
		setTimeout(function () {
			$("#bars").animate({
				opacity: 1,
				bottom: "20"
			}, 500)
		}, 400)
	}); lastActive = this.id; Tween("#b22125", "#ff8f33"); document.getElementById("myAudio").pause(); setTimeout(function () { backToOrigin(); changeSong(m, "#ea202d") }, 200)
});
$("#song2").click(function () {
	var m = this.id; this.id !== lastActive && ($("#" + lastActive).css("border", "none"), $("#" + lastActive).css("padding-left", "0"), $("#" + lastActive).css("opacity", "0.6"), $("#" + lastActive).css("font-weight", "500")); $("#song2").css("border-left", "3px white solid"); $("#song2").css("padding-left", "20px"); $("#song2").css("font-weight", "700"); $("#song2").css("opacity", "0.85"); $("#list2").css("opacity", "0.85"); $("#bars").animate({ opacity: 0, bottom: "-20" }, 500, function () {
		setTimeout(function () {
			$("#bars").animate({
				opacity: 1,
				bottom: "20"
			}, 500)
		}, 400)
	}); lastActive = this.id; Tween("#233198", "#fb6c3a"); document.getElementById("myAudio").pause(); setTimeout(function () { backToOrigin(); changeSong(m, "#3036a5") }, 200)
});
$("#song3").click(function () {
	var m = this.id; this.id !== lastActive && ($("#" + lastActive).css("border", "none"), $("#" + lastActive).css("padding-left", "0"), $("#" + lastActive).css("opacity", "0.6"), $("#" + lastActive).css("font-weight", "500")); $("#song3").css("border-left", "3px white solid"); $("#song3").css("padding-left", "20px"); $("#song3").css("font-weight", "700"); $("#song3").css("opacity", "0.85"); $("#list3").css("opacity", "0.85"); $("#bars").animate({ opacity: 0, bottom: "-20" }, 500, function () {
		setTimeout(function () {
			$("#bars").animate({
				opacity: 1,
				bottom: "20"
			}, 500)
		}, 400)
	}); lastActive = this.id; Tween("#007d40", "#4896ff"); document.getElementById("myAudio").pause(); setTimeout(function () { backToOrigin(); changeSong(m, "#009a4d") }, 200)
});
$("#song4").click(function () {
	var m = this.id; this.id !== lastActive && ($("#" + lastActive).css("border", "none"), $("#" + lastActive).css("padding-left", "0"), $("#" + lastActive).css("opacity", "0.6"), $("#" + lastActive).css("font-weight", "500")); $("#song4").css("border-left", "3px white solid"); $("#song4").css("padding-left", "20px"); $("#song4").css("font-weight", "700"); $("#song4").css("opacity", "0.85"); $("#list4").css("opacity", "0.85"); $("#bars").animate({ opacity: 0, bottom: "-20" }, 500, function () {
		setTimeout(function () {
			$("#bars").animate({
				opacity: 1,
				bottom: "20"
			}, 500)
		}, 400)
	}); lastActive = this.id; Tween("#e77415", "#39a668"); document.getElementById("myAudio").pause(); setTimeout(function () { backToOrigin(); changeSong(m, "#ff8d2d") }, 200)
});
$("#song5").click(function () {
	var m = this.id; this.id !== lastActive && ($("#" + lastActive).css("border", "none"), $("#" + lastActive).css("padding-left", "0"), $("#" + lastActive).css("opacity", "0.6"), $("#" + lastActive).css("font-weight", "500")); $("#song5").css("border-left", "3px white solid"); $("#song5").css("padding-left", "20px"); $("#song5").css("font-weight", "700"); $("#song5").css("opacity", "0.85"); $("#list5").css("opacity", "0.85"); $("#bars").animate({ opacity: 0, bottom: "-20" }, 500, function () {
		setTimeout(function () {
			$("#bars").animate({
				opacity: 1,
				bottom: "20"
			}, 500)
		}, 400)
	}); lastActive = this.id; Tween("#007871", "#f3a52f"); document.getElementById("myAudio").pause(); setTimeout(function () { backToOrigin(); changeSong(m, "#00937e") }, 200)
}); $("input").focus(function () { $(this).attr("placeholder", "") }); $("input").blur(function () { this.value = ""; $(this).attr("placeholder", "Search") }); document.onmousedown = function () { $("input").is(":focus") && $("input").blur() };
var SpotifyWebApi = function () {
	var m = null, c = function (a, c, m) { var b = {}, q = null; "object" === typeof c ? (b = c, q = m) : "function" === typeof c && (q = c); t(a.params, b); return h(a, q) }, h = function (b, c) {
		var h = function (e, h) {
			var k = new XMLHttpRequest, n = b.type || "GET"; "GET" === n ? k.open(n, a(b.url, b.params), !0) : k.open(n, a(b.url)); m && k.setRequestHeader("Authorization", "Bearer " + m); k.onreadystatechange = function () {
				if (4 === k.readyState) {
					var a = null; try { a = k.responseText ? JSON.parse(k.responseText) : "" } catch (f) { } 200 === k.status || 201 === k.status ?
						(e && e(a), c && c(null, a)) : (h && h(k), c && c(k, null))
				}
			}; "GET" === n ? k.send(null) : k.send(JSON.stringify(b.postData))
		}; return c ? (h(), null) : new window.Promise(h)
	}, t = function () { var a = Array.prototype.slice.call(arguments), c = a[0]; a = a.slice(1); c = c || {}; for (var h = 0; h < a.length; h++)for (var e in a[h]) c[e] = a[h][e]; return c }, a = function (a, c) { var b = "", e; for (e in c) if (c.hasOwnProperty(e)) { var h = c[e]; b += encodeURIComponent(e) + "=" + encodeURIComponent(h) + "&" } 0 < b.length && (b = b.substring(0, b.length - 1), a = a + "?" + b); return a }, r = function () { };
	r.prototype = { constructor: SpotifyWebApi }; r.prototype.setAccessToken = function (a) { m = a }; r.prototype.searchTracks = function (a, h, m) { return c({ url: "https://api.spotify.com/v1/search/", params: { q: a, type: "track" } }, h, m) }; r.prototype.getAudioFeaturesForTrack = function (a, h) { return c({ url: "https://api.spotify.com/v1/audio-features/" + a }, {}, h) }; r.prototype.getToken = function (a) { return c({ url: "https://spotify-web-api-token.herokuapp.com/token" }, {}, a) }; return r
}(); "use strict";
var col1 = ["#b22125", "#ff8f33", "#ea202d"], col2 = ["#233198", "#fb6c3a", "#3036a5"], col3 = ["#007d40", "#4896ff", "#009a4d"], col4 = ["#e77415", "#39a668", "#ff8d2d"], col5 = ["#007871", "#f3a52f", "#00937e"], colors = [col1, col2, col3, col4, col5], currentIndex, spotifyApi = new SpotifyWebApi; spotifyApi.getToken().then(function (m) { spotifyApi.setAccessToken(m.token) }); var queryInput = document.querySelector("#query"), audioTag = document.querySelector("#myAudio");
$("#form").submit(function (m) {
	m.preventDefault(); spotifyApi.searchTracks(queryInput.value.trim(), { limit: 1 }).then(function (c) {
		var h = c.tracks.items[0]; if (void 0 !== h) if (audioTag.crossOrigin = "anonymous", c = audioTag.src = h.preview_url, null !== c) {
			backToOrigin(); console.log(h); h = Math.floor(5 * Math.random()); h == currentIndex && (h += 1, 4 < h ? h = 3 : 0 > h && (h = 2)); Tween(colors[h][0], colors[h][1]); currentIndex = h; $("#" + lastActive).css("border", "none"); $("#" + lastActive).css("padding-left", "0"); $("#" + lastActive).css("opacity",
				"0.6"); $("#" + lastActive).css("font-weight", "300"); audioTag.play(); audioTag.volume = 0; var m = setInterval(function () { audioTag.volume += .01; .9 < audioTag.volume && clearInterval(m) }, 35), a = new XMLHttpRequest; a.open("GET", c, !0); a.responseType = "arraybuffer"; a.send(); $(".spotifyInfo").animate({ opacity: 1 }, 500); $("#bars").animate({ opacity: 0, bottom: "-20" }, 500, function () { setTimeout(function () { $("#bars").animate({ opacity: 1, bottom: "20" }, 500) }, 400) }); document.body.style.backgroundColor = colors[h][2]
		} else $("#errorMessage").animate({
			opacity: 1,
			top: "+=30"
		}, 500, function () { setTimeout(function () { $("#errorMessage").animate({ opacity: 0, top: "-=30" }, 500) }, 1500) }); else $("#errorMessage").animate({ opacity: 1, top: "+=30" }, 500, function () { setTimeout(function () { $("#errorMessage").animate({ opacity: 0, top: "-=30" }, 500) }, 1100) })
	})
}); console.log = function () { };