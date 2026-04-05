from lru_cache import LRUCache


def test_lru_basico():
    cache = LRUCache(2)
    cache.put(1, 1)
    cache.put(2, 2)

    assert cache.get(1) == 1

    cache.put(3, 3)  # expulsa clave 2
    assert cache.get(2) == -1

    cache.put(4, 4)  # expulsa clave 1
    assert cache.get(1) == -1
    assert cache.get(3) == 3
    assert cache.get(4) == 4


def test_actualizacion_mueve_al_frente():
    cache = LRUCache(2)
    cache.put("a", 1)
    cache.put("b", 2)
    cache.put("a", 10)

    cache.put("c", 3)  # debe expulsar b
    assert cache.get("b") == -1
    assert cache.get("a") == 10
    assert cache.get("c") == 3
