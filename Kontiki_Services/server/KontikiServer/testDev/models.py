from django.db import models

class EntretienDev(models.Model):
    # Technical Skills
    technical_skills_languages = models.JSONField()
    technical_skills_frameworks = models.JSONField()
    technical_skills_selected_language_level = models.CharField(max_length=255)
    
    # Information Personnel
    nom_prenom = models.CharField(max_length=100)
    age = models.IntegerField()
    situation_matrimoniale = models.CharField(max_length=150)
    adresse = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    telephone = models.CharField(max_length=15)
    
    # Savoir Formation
    poste_envisage = models.CharField(max_length=100)
    formation_renseignements = models.TextField(max_length=255)
    dernier_travail = models.CharField(max_length=100)
    satisfaction_carriere = models.CharField(max_length=150)
    
    # Ponctualité
    retard_dernier = models.CharField(max_length=150)
    definition_retard = models.CharField(max_length=150)
    
    # Tenacité
    difficulte_professionnelle = models.CharField(max_length=550)
    activites_difficiles = models.CharField(max_length=250)
    critique_travail = models.CharField(max_length=255)
    conflit_interets = models.CharField(max_length=200)
    
    # Intégration
    type_personnes_preferees = models.CharField(max_length=150)
    reaction_remarque_negative = models.CharField(max_length=150)
    depasse_par_situation = models.CharField(max_length=150)
    
    # Sens du Service
    reaction_collegue_probleme = models.CharField(max_length=150)
    tache_non_attribuee = models.CharField(max_length=150)
    esprit_initiative = models.CharField(max_length=150)
    
    # Autonomie
    travail_seul = models.CharField(max_length=250)
    demande_travail_non_prevus = models.CharField(max_length=150)
    
    # Organisation
    organisation_journee = models.CharField(max_length=250)
    
    # Satisfaction
    satisfactions_postes = models.CharField(max_length=50)
    poste_ideal = models.CharField(max_length=100)
    choix_entreprises = models.CharField(max_length=255)
    bien_traite = models.CharField(max_length=255)
    travail_soir_weekend = models.CharField(max_length=255)
    competence_apportee = models.CharField(max_length=255)
    
    # Test Technique Python
    execution_python = models.CharField(max_length=555)
    specificateurs_acces = models.CharField(max_length=555)
    copie_superficielle_profonde = models.CharField(max_length=555)
    utilisation_decorateurs = models.CharField(max_length=555)
    gestion_exceptions = models.CharField(max_length=555)
    capture_exception = models.CharField(max_length=555)
    threading_vs_multiprocessing = models.CharField(max_length=555)
    
    # Test Technique JavaScript
    local_state_vs_global_state = models.CharField(max_length=555)
    userlist_component = models.CharField(max_length=555)
    app_component = models.CharField(max_length=555)
    userform_component = models.CharField(max_length=555)
    
    # Test Technique Fullstack
    route_serveur = models.CharField(max_length=555)
    optimisation_requetes_bdd = models.CharField(max_length=555)
    deploiement_fullstack = models.CharField(max_length=555)
    
    # Date de création et de mise à jour
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.nom_prenom