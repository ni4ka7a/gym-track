from rest_framework import routers
from .api import WorkoutViewSet

router = routers.DefaultRouter()
router.register('api/workouts', WorkoutViewSet, 'workouts')

urlpatterns = router.urls
