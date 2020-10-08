from rest_framework import routers
from .api import RoutineViewSet

router = routers.DefaultRouter()
router.register('api/routines', RoutineViewSet, 'routines')

urlpatterns = router.urls