class Nodo:
    def __init__(self, clave=None, valor=None):
        self.clave = clave
        self.valor = valor
        self.prev = None
        self.next = None


class LRUCache:
    def __init__(self, capacidad: int):
        if capacidad <= 0:
            raise ValueError("La capacidad debe ser mayor que 0.")
        self.capacidad = capacidad
        self.mapa = {}  # clave -> nodo

        # Nodos centinela para simplificar inserciones/eliminaciones
        self.head = Nodo()  # Más recientemente usado irá justo después de head
        self.tail = Nodo()  # Menos recientemente usado irá justo antes de tail
        self.head.next = self.tail
        self.tail.prev = self.head

    # --- Métodos internos de lista doble ---
    def _agregar_al_frente(self, nodo: Nodo):
        nodo.prev = self.head
        nodo.next = self.head.next
        self.head.next.prev = nodo
        self.head.next = nodo

    def _quitar_nodo(self, nodo: Nodo):
        anterior = nodo.prev
        siguiente = nodo.next
        anterior.next = siguiente
        siguiente.prev = anterior

    def _mover_al_frente(self, nodo: Nodo):
        self._quitar_nodo(nodo)
        self._agregar_al_frente(nodo)

    def _quitar_lru(self) -> Nodo:
        # LRU = nodo antes de tail
        lru = self.tail.prev
        self._quitar_nodo(lru)
        return lru

    # --- API pública ---
    def get(self, clave):
        if clave not in self.mapa:
            return -1  # O None, según prefieras
        nodo = self.mapa[clave]
        self._mover_al_frente(nodo)
        return nodo.valor

    def put(self, clave, valor):
        if clave in self.mapa:
            # Actualiza valor y marca como más reciente
            nodo = self.mapa[clave]
            nodo.valor = valor
            self._mover_al_frente(nodo)
            return

        # Inserta nueva clave
        nuevo = Nodo(clave, valor)
        self.mapa[clave] = nuevo
        self._agregar_al_frente(nuevo)

        # Si excede capacidad, expulsar LRU
        if len(self.mapa) > self.capacidad:
            lru = self._quitar_lru()
            del self.mapa[lru.clave]
